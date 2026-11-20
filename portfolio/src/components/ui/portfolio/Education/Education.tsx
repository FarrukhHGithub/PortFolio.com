import React from "react";
import { GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { Container, SectionHeader, Card } from "@/components/ui/shared";
import {
  education as defaultEducation,
  languages as defaultLanguages,
  Education as EducationType,
  Language as LanguageType,
} from "@/data/portfolio";
import styles from "@/components/UIstyle/portfolio/education.module.css";

interface EducationProps {
  items?: EducationType[];
  languagesList?: LanguageType[];
}

export function Education({
  items = defaultEducation,
  languagesList = defaultLanguages,
}: EducationProps) {
  return (
    <section className={styles.section} id="education">
      <Container>
        <SectionHeader
          label="Education & Languages"
          title="Academic background & communication."
          description="Formal computer science education and professional communication proficiency."
        />

        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.subHeader}>
              <GraduationCap size={20} className={styles.subIcon} />
              <h3 className={styles.subTitle}>Education</h3>
            </div>
            {items.map((item, idx) => (
              <Card key={idx} className={styles.eduCard} hoverable>
                <div className={styles.cardHeader}>
                  <span className={styles.degree}>{item.degree}</span>
                  <span className={styles.statusBadge}>{item.period}</span>
                </div>
                <div className={styles.institution}>{item.institution}</div>
                {item.details && <p className={styles.eduDetail}>{item.details}</p>}
              </Card>
            ))}
          </div>

          <div className={styles.column}>
            <div className={styles.subHeader}>
              <LanguagesIcon size={20} className={styles.subIcon} />
              <h3 className={styles.subTitle}>Languages</h3>
            </div>
            <Card className={styles.langCard} hoverable>
              <div className={styles.langList}>
                {languagesList.map((lang, idx) => (
                  <div key={idx} className={styles.langItem}>
                    <div className={styles.langNameRow}>
                      <span className={styles.langName}>{lang.name}</span>
                      <span className={styles.langLevel}>{lang.level}</span>
                    </div>
                    <div className={styles.langBar}>
                      <div
                        className={styles.langProgress}
                        style={{ width: lang.name === "Urdu" ? "100%" : "90%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

