import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  console.log("Contact message:", body);
  // Integrate your provider here (SendGrid, Resend, SES). Keep secrets in env vars.
  return NextResponse.json({ ok: true });
}
