import React from "react";
import { Container, SectionHeader } from "@/components/ui/shared";
import styles from "@/components/UIstyle/portfolio/experience.module.css";

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  text?: string;
  bullets?: string[];
}

const defaultExperiences: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "Current Company / Client Contracts",
    period: "2024 — Present",
    text: "Own end-to-end features: Next.js App Router interfaces, Node/Express APIs, PostgreSQL and MongoDB data layers, and automated AWS deployments.",
    bullets: [
      "Architected Next.js SaaS platforms with server components and edge middleware.",
      "Maintained zero-downtime VPS & AWS EC2 deployments with Nginx and PM2.",
    ],
  },
  {
    role: "Web Developer",
    company: "Freelance & Software House",
    period: "2022 — 2024",
    text: "Delivered responsive web apps and high-converting client portals with strict performance requirements.",
    bullets: [
      "Built custom REST APIs with secure JWT authentication and Stripe payments.",
      "Improved Core Web Vitals to achieve 95+ Lighthouse scores across client apps.",
    ],
  },
];

export function Experience({ items = defaultExperiences }: { items?: ExperienceItem[] }) {
  return (
    <section className={styles.section} id="experience">
      <Container>
        <SectionHeader
          label="Career History"
          title="Professional experience."
          description="A timeline of engineering roles, client engagements, and production systems delivered."
        />

        <div className={styles.timeline}>
          {items.map((item) => (
            <div key={`${item.role}-${item.company}`} className={styles.item}>
              <div className={styles.period}>{item.period}</div>
              <div className={styles.content}>
                <div className={styles.roleHeader}>
                  {item.role} <span className={styles.company}>· {item.company}</span>
                </div>
                {item.text && <p className={styles.description}>{item.text}</p>}
                {item.bullets && item.bullets.length > 0 && (
                  <ul className={styles.bullets}>
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
