import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const isAdminPage = (p: string) => p.startsWith("/admin") && p !== "/admin/login";
const isAdminApi = (p: string) => p.startsWith("/api/admin");

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // CSRF defence: state-changing API calls must come from our own origin
  if (pathname.startsWith("/api") && !["GET", "HEAD", "OPTIONS"].includes(req.method)) {
    const origin = req.headers.get("origin");
    if (!origin || new URL(origin).host !== req.nextUrl.host)
      return NextResponse.json({ error: "Bad origin" }, { status: 403 });
  }

  if (isAdminPage(pathname) || isAdminApi(pathname)) {
    const token = req.cookies.get("admin_session")?.value;
    let ok = false;
    try {
      if (token) { await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET)); ok = true; }
    } catch {}
    if (!ok) {
      return isAdminApi(pathname)
        ? NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        : NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }
  return NextResponse.next();
}
export const config = { matcher: ["/admin/:path*", "/api/:path*"] };
