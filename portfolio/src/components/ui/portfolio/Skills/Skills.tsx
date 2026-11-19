import React from "react";
import {
  Layout,
  Server,
  Database,
  Wrench,
  Briefcase,
  LucideIcon,
} from "lucide-react";
import { Container, SectionHeader, Card, Badge } from "@/components/ui/shared";
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

        <div className={styles.grid}>
          {groups.map((group) => {
            const Icon = categoryIcons[group.category] || Layout;
            return (
              <Card key={group.category} className={styles.categoryCard} hoverable>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryLeft}>
                    <Icon size={18} className={styles.categoryIcon} strokeWidth={2} />
                    <h3 className={styles.categoryTitle}>{group.category}</h3>
                  </div>
                  {group.isCoreStrength && (
                    <Badge variant="brand" className={styles.coreBadge}>
                      Core Strength
                    </Badge>
                  )}
                </div>
                <div className={styles.tags}>
                  {group.items.map((item) => (
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
