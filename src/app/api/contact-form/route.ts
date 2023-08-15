import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const ContactFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
})

export async function POST(request: Request) {
  const { name, email, message } = ContactFormSchema.parse(request.body)

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Algo deu errado.' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  })

  const messageFromUser = {
    from: email,
    to: process.env.EMAIL,
    subject: `Nome: ${name} || Email de contato: ${email}`,
    text: message,
  }

  try {
    await transporter.sendMail(messageFromUser)
    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      message: 'Ocorreu um erro ao enviar a mensagem.',
    })
  }
}
