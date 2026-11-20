import React from "react";
import {
  Layout,
  Server,
  Database,
  Wrench,
  Briefcase,
  LucideIcon,
} from "lucide-react";
import { Container, SectionHeader } from "@/components/ui/shared";
import {
  skillCategories as defaultCategories,
  SkillCategoryGroup,
} from "@/data/portfolio";
import styles from "@/components/UIstyle/portfolio/skills.module.css";

const categoryIcons: Record<string, LucideIcon> = {
  Backend: Server,
  Database: Database,
  Frontend: Layout,
  Tools: Wrench,
  Professional: Briefcase,
};

interface SkillsProps {
  groups?: SkillCategoryGroup[];
}

export function Skills({ groups = defaultCategories }: SkillsProps) {
  return (
    <section className={styles.section} id="skills">
      <Container>
        <SectionHeader
          label="Technical Skills"
          title="Battle-tested technical stack."
          description="Curated tools and technologies I use to build scalable, production-ready software."
        />

        <div className={styles.timeline}>
          {groups.map((group) => {
            const Icon = categoryIcons[group.category] || Layout;
            return (
              <div key={group.category} className={styles.item}>
                <div className={styles.dot} aria-hidden="true" />
                <div className={styles.headerRow}>
                  <div className={styles.categoryTitle}>
                    <Icon size={17} className={styles.categoryIcon} strokeWidth={2} />
                    <span>{group.category}</span>
                  </div>
                </div>
                <div className={styles.techList}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.techBadge}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
