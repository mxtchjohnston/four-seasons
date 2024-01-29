import { NextResponse } from 'next/server';
import composeEmail from './composeEmail';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_API_URL = process.env.RESEND_API_URL ?? '';
const EMAIL_TO = process.env.EMAIL_TO ?? '';
const EMAIL_FROM = process.env.EMAIL_FROM ?? '';

export async function POST(request: Request) {
  const data = await request.json();
  const res = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: EMAIL_FROM,
      to: [EMAIL_TO],
      subject: `New Quote Request from ${data.name}`,
      html: composeEmail(data)
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return NextResponse.json(data);
  }
}
