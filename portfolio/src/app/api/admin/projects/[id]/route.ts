import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSession } from "@/lib/auth";
import { projectSchema } from "@/lib/validate";

type Ctx = { params: { id: string } };

export async function PUT(req: Request, { params }: Ctx) {
  const s = await getSession();
  const parsed = projectSchema.partial().safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  const p = await db.project.update({ where: { id: params.id }, data: parsed.data }).catch(() => null);
  if (!p) return NextResponse.json({ error: "Not found" }, { status: 404 });
  await db.auditLog.create({ data: { userId: s?.sub, action: "UPDATE", entity: "Project", entityId: p.id } });
  return NextResponse.json(p);
}

export async function DELETE(_: Request, { params }: Ctx) {
  const s = await getSession();
  await db.project.delete({ where: { id: params.id } }).catch(() => null);
  await db.auditLog.create({ data: { userId: s?.sub, action: "DELETE", entity: "Project", entityId: params.id } });
  return NextResponse.json({ ok: true });
}
