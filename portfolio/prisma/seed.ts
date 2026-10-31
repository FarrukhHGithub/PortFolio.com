import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const db = new PrismaClient();
async function main() {
  const email = process.env.ADMIN_EMAIL!, pw = process.env.ADMIN_PASSWORD!;
  if (!email || pw.length < 12) throw new Error("Set ADMIN_EMAIL and a 12+ char ADMIN_PASSWORD");
  await db.user.upsert({ where: { email }, update: {}, create: { email, passwordHash: await bcrypt.hash(pw, 12) } });
  const skills = [
    ["Next.js","Frontend"],["React","Frontend"],["TypeScript","Frontend"],
    ["Node.js","Backend"],["PostgreSQL","Backend"],["Prisma","Backend"],
    ["EC2","AWS"],["S3","AWS"],["RDS","AWS"],["Lambda","AWS"],["CloudFront","AWS"],["IAM","AWS"],["Route 53","AWS"],["SES","AWS"],
    ["Nginx","DevOps"],["Docker","DevOps"],["PM2","DevOps"],["GitHub Actions","DevOps"],
  ];
  for (const [i,[name,category]] of skills.entries())
    await db.skill.upsert({ where: { name }, update: {}, create: { name, category, level: 4, sortOrder: i } });
  console.log("Seeded.");
}
main().finally(() => db.$disconnect());
