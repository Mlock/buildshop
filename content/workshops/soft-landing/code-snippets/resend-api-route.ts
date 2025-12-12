// src/app/api/subscribe/route.ts
// Newsletter subscription API route using Resend

import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { email } = await request.json()

  // Validate email
  if (!email || !email.includes('@')) {
    return NextResponse.json(
      { error: 'Valid email required' },
      { status: 400 }
    )
  }

  // Add to Resend audience
  const { error } = await resend.contacts.create({
    email,
    audienceId: process.env.RESEND_AUDIENCE_ID || '',
  })

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    )
  }

  return NextResponse.json({ success: true })
}
