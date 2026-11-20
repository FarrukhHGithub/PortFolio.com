import React from "react";
import { Container, SectionHeader } from "@/components/ui/shared";
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

        <div className={styles.timeline}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.dot} aria-hidden="true" />
              <div className={styles.period}>{item.period}</div>
              <div className={styles.roleHeader}>
                <span>{item.degree}</span>
                <span className={styles.institution}>— {item.institution}</span>
              </div>
              <ul className={styles.bullets}>
                <li>
                  <strong>Focus:</strong> Software Architecture, Algorithms, Database Management, and Web Technologies.
                </li>
                <li>
                  <strong>Core Coursework:</strong> Data Structures &amp; Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, Operating Systems, Web Application Development.
                </li>
              </ul>
              <div className={styles.techList}>
                <span className={styles.techBadge}>Computer Science</span>
                <span className={styles.techBadge}>Software Engineering</span>
                <span className={styles.techBadge}>Data Structures</span>
                <span className={styles.techBadge}>Algorithms</span>
                <span className={styles.techBadge}>Database Systems</span>
              </div>
            </div>
          ))}

          <div className={styles.item}>
            <div className={styles.dot} aria-hidden="true" />
            <div className={styles.period}>Proficiency</div>
            <div className={styles.roleHeader}>
              <span>Languages &amp; Professional Communication</span>
            </div>
            <ul className={styles.bullets}>
              {languagesList.map((lang) => (
                <li key={lang.name}>
                  <strong>{lang.name}:</strong> {lang.level} {lang.name === "English" ? "(Technical documentation, code reviews, system design, and client communication)" : "(Fluent / Native proficiency)"}
                </li>
              ))}
            </ul>
            <div className={styles.techList}>
              {languagesList.map((lang) => (
                <span key={lang.name} className={styles.techBadge}>
                  {lang.name} ({lang.level})
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
