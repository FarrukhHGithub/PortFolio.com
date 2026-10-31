import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { createSession } from "@/lib/auth";
import { loginSchema } from "@/lib/validate";
import { rateLimit, clientIp } from "@/lib/ratelimit";

const DUMMY = "$2a$12$C6UzMDM.H6dfI/f/IKcEeO5Yk3pGg8e1c0yCw9kYfXq0M1y3vQmGa";

export async function POST(req: Request) {
  const ip = clientIp(req);
  if (!rateLimit(`login:${ip}`, 5, 15 * 60_000))
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });

  const parsed = loginSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const user = await db.user.findUnique({ where: { email: parsed.data.email.toLowerCase() } });
  const ok = await bcrypt.compare(parsed.data.password, user?.passwordHash ?? DUMMY); // constant-ish time
  if (!user || !ok) return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });

  await createSession(user.id, user.role);
  await db.auditLog.create({ data: { userId: user.id, action: "LOGIN", entity: "User", entityId: user.id, ip } });
  return NextResponse.json({ ok: true });
}
