import React from "react";
import { GraduationCap, Languages } from "lucide-react";
import { Container, SectionHeader, Card, Badge } from "@/components/ui/shared";
import {
  education as defaultEducation,
  Education as EducationType,
} from "@/data/portfolio";
import styles from "@/components/UIstyle/portfolio/education.module.css";

interface EducationProps {
  educationData?: EducationType;
}

export function Education({ educationData = defaultEducation }: EducationProps) {
  return (
    <section className={styles.section} id="education">
      <Container>
        <SectionHeader
          label="Education &amp; Languages"
          title="Academic background &amp; communication."
          description="Formal foundation in computer science and multilingual communication."
        />

        <div className={styles.grid}>
          <Card className={styles.card} hoverable>
            <div className={styles.topRow}>
              <div className={styles.cardHeader}>
                <GraduationCap size={20} className={styles.headerIcon} />
                <h3 className={styles.degreeTitle}>{educationData.degree}</h3>
              </div>
              <Badge variant="brand">{educationData.status}</Badge>
            </div>
            <div className={styles.institution}>{educationData.institution}</div>
            <p className={styles.details}>
              Focus on software engineering, data structures, algorithms, database systems, and object-oriented software design.
            </p>
          </Card>

          <Card className={styles.languagesCard} hoverable>
            <div className={styles.cardHeader}>
              <Languages size={18} className={styles.headerIcon} />
              <h3 className={styles.degreeTitle}>Languages</h3>
            </div>
            <div className={styles.languageList}>
              {educationData.languages.map((lang) => (
                <div key={lang.name} className={styles.langItem}>
                  <span className={styles.langName}>{lang.name}</span>
                  <span className={styles.langProficiency}>
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

