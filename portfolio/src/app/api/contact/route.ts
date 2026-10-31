import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactSchema } from "@/lib/validate";
import { rateLimit, clientIp } from "@/lib/ratelimit";

export async function POST(req: Request) {
  const ip = clientIp(req);
  if (!rateLimit(`contact:${ip}`, 3, 60 * 60_000))
    return NextResponse.json({ error: "Too many messages. Try again later." }, { status: 429 });
  const parsed = contactSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Please check your details." }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ ok: true }); // bot: pretend success
  const { name, email, body } = parsed.data;
  await db.message.create({ data: { name, email, body, ip } });
  return NextResponse.json({ ok: true });
}
