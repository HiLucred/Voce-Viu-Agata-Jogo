import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const NewsLetterFormSchema = z.object({
  name: z.string(),
  email: z.string(),
})

export async function POST(request: Request) {
  const { name, email } = NewsLetterFormSchema.parse(request.body)

  if (!name || !email) {
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
    text: name,
  }

  try {
    await transporter.sendMail(messageFromUser)
    return NextResponse.json({ message: 'e-mail cadastrado!' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Ocorreu um erro.' })
  }
}
