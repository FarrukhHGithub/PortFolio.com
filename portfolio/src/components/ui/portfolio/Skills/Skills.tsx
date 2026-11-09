import React from "react";
import { Layout, Server, Database, Cloud, Wrench, LucideIcon } from "lucide-react";
import { Container, SectionHeader, Card } from "@/components/ui/shared";
import styles from "@/components/UIstyle/portfolio/skills.module.css";

export interface SkillItem {
  name: string;
  category: string;
}

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  "DevOps & Cloud": Cloud,
  Tools: Wrench,
};

const defaultSkillGroups: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML / CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT / Auth", "Zod"],
  Database: ["MongoDB", "PostgreSQL", "Prisma ORM", "Redis"],
  "DevOps & Cloud": ["AWS EC2", "AWS S3", "CloudFront", "Route 53", "Nginx", "PM2", "Certbot SSL"],
  Tools: ["Git / GitHub", "Docker", "Postman", "Figma"],
};

export function Skills({ skills = [] }: { skills?: SkillItem[] }) {
  const groups = skills.length
    ? skills.reduce<Record<string, string[]>>((acc, s) => {
        (acc[s.category] ??= []).push(s.name);
        return acc;
      }, {})
    : defaultSkillGroups;

  return (
    <section className={styles.section} id="skills">
      <Container>
        <SectionHeader
          label="Skills &amp; Technologies"
          title="Battle-tested technical stack."
          description="Curated tools and technologies I use to build scalable, production-ready software."
        />

        <div className={styles.grid}>
          {Object.entries(groups).map(([category, items]) => {
            const Icon = categoryIcons[category] || Layout;
            return (
              <Card key={category} className={styles.categoryCard} hoverable>
                <div className={styles.categoryHeader}>
                  <Icon size={18} className={styles.categoryIcon} strokeWidth={2} />
                  <h3 className={styles.categoryTitle}>{category}</h3>
                </div>
                <div className={styles.tags}>
                  {items.map((item) => (
                    <span key={item} className={styles.skillBadge}>
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
