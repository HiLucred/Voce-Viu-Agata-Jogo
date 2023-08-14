import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const req = await fetch('https://api.github.com/users/hilucred')
  const res = await req.json()
  
  return NextResponse.json({ message: res })
}