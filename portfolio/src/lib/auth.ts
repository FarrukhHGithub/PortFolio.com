import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export const COOKIE = "admin_session";
const secret = () => {
  const s = process.env.JWT_SECRET;
  if (!s || s.length < 32) throw new Error("JWT_SECRET must be 32+ chars");
  return new TextEncoder().encode(s);
};

export async function createSession(userId: string, role: string) {
  const token = await new SignJWT({ role }).setProtectedHeader({ alg: "HS256" })
    .setSubject(userId).setIssuedAt().setExpirationTime("8h").sign(secret());
  cookies().set(COOKIE, token, {
    httpOnly: true, secure: process.env.NODE_ENV === "production",
    sameSite: "strict", path: "/", maxAge: 60 * 60 * 8,
  });
}

export async function verifyToken(token?: string) {
  if (!token) return null;
  try { return (await jwtVerify(token, secret())).payload; } catch { return null; }
}

export async function getSession() { return verifyToken(cookies().get(COOKIE)?.value); }
export function clearSession() { cookies().delete(COOKIE); }
