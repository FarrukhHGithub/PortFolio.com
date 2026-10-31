import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSession } from "@/lib/auth";
import { projectSchema } from "@/lib/validate";

export async function GET() {
  return NextResponse.json(await db.project.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }] }));
}

export async function POST(req: Request) {
  const s = await getSession();
  const parsed = projectSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  try {
    const p = await db.project.create({ data: parsed.data });
    await db.auditLog.create({ data: { userId: s?.sub, action: "CREATE", entity: "Project", entityId: p.id } });
    return NextResponse.json(p, { status: 201 });
  } catch { return NextResponse.json({ error: "Slug already exists" }, { status: 409 }); }
}
