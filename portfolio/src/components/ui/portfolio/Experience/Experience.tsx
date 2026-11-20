import React from "react";
import { Container, SectionHeader } from "@/components/ui/shared";
import {
  experience as defaultExperience,
  Experience as ExperienceType,
} from "@/data/portfolio";
import styles from "@/components/UIstyle/portfolio/experience.module.css";

interface ExperienceProps {
  items?: ExperienceType[];
}

export function Experience({ items = defaultExperience }: ExperienceProps) {
  return (
    <section className={styles.section} id="experience">
      <Container>
        <SectionHeader
          label="Professional Experience"
          title="Professional Experience."
          description="Production systems engineered across healthcare, museum, and tour platforms."
        />

        <div className={styles.timeline}>
          {items.map((item) => (
            <div key={`${item.role}-${item.company}`} className={styles.item}>
              <div className={styles.dot} aria-hidden="true" />
              <div className={styles.period}>{item.period}</div>
              <div className={styles.roleHeader}>
                <span>{item.role}</span>
                <span className={styles.company}>
                  — {item.company} ({item.location})
                </span>
              </div>
              <ul className={styles.bullets}>
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              {item.tech && item.tech.length > 0 && (
                <div className={styles.techList}>
                  {item.tech.map((t) => (
                    <span key={t} className={styles.techBadge}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
