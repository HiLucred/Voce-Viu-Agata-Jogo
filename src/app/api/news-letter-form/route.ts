import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const NewsLetterFormSchema = z.object({
  name: z.string(),
  email: z.string(),
});

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { name, email } = NewsLetterFormSchema.parse(req.body);

  if (!name || !email) {
    NextResponse.json({ message: "Algo deu errado."})
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const messageFromUser = {
    from: email,
    to: process.env.EMAIL,
    subject: `Nome: ${name} || Email de contato: ${email}`,
    text: name,
  };

  try {
    await transporter.sendMail(messageFromUser);
    NextResponse.json({ message: "e-mail cadastrado!"})
  } catch (error) {
    console.error(error);
    NextResponse.json({ message: "Ocorreu um erro."})
  }
}
