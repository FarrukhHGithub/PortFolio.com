import React from "react";
import { Container, SectionHeader } from "@/components/ui/shared";
import styles from "@/components/UIstyle/portfolio/about.module.css";

const summaryHighlights = [
  {
    label: "Backend Core Strength",
    text: "Building robust TypeScript backends, Express APIs, JWT security, and scalable MongoDB/PostgreSQL schemas.",
  },
  {
    label: "Production Infrastructure",
    text: "Deploying production apps on Hostinger VPS and AWS EC2 with Nginx reverse proxy, PM2 clustering, and SSL.",
  },
  {
    label: "Performance & DX",
    text: "High Core Web Vitals, server components, and responsive Next.js interfaces designed for real users.",
  },
  {
    label: "Engineering Philosophy",
    text: "Clean MVC / modular architecture, robust input validation, centralized error handling, and fast, accessible interfaces designed for real-world reliability.",
  },
];

const summaryCoreTech = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "Next.js",
  "React.js",
  "TypeScript",
  "REST APIs",
  "JWT Auth",
  "Hostinger VPS",
  "AWS",
];

export function About() {
  return (
    <section className={styles.section} id="about">
      <Container>
        <SectionHeader
          label="Professional Summary"
          title="Engineered for reliability & scale."
          description="Bridging modern front-end design with resilient backend systems and production deployments."
        />

        <div className={styles.timeline}>
          <div className={styles.item}>
            <div className={styles.dot} aria-hidden="true" />
            <div className={styles.roleHeader}>
              <span>Full-Stack Developer</span>
              <span className={styles.roleAccent}>
                — MERN Stack &amp; Next.js
              </span>
            </div>
            <p className={styles.summaryText}>
              Full-stack developer with 2+ years of experience building complete web applications with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js, with particular strength in backend development: secure REST APIs, authentication, database design and admin systems. Currently delivering production healthcare, museum and tour websites end to end, from API and database to responsive, SEO-friendly interfaces.
            </p>
            <ul className={styles.bullets}>
              {summaryHighlights.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.text}
                </li>
              ))}
            </ul>
            <div className={styles.techList}>
              {summaryCoreTech.map((t) => (
                <span key={t} className={styles.techBadge}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
