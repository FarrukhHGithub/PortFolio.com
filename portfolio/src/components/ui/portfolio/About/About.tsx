import React from "react";
import { Server, Cloud, Cpu } from "lucide-react";
import { Container, SectionHeader, Card } from "@/components/ui/shared";
import { aboutBio as defaultBio } from "@/data/portfolio";
import styles from "@/components/UIstyle/portfolio/about.module.css";

const highlights = [
  {
    icon: Server,
    title: "Backend Core Strength",
    text: "Building robust TypeScript backends, Express APIs, JWT security, and scalable MongoDB/PostgreSQL schemas.",
  },
  {
    icon: Cloud,
    title: "Production Infrastructure",
    text: "Deploying production apps on Hostinger VPS and AWS EC2 with Nginx reverse proxy, PM2 clustering, and SSL.",
  },
  {
    icon: Cpu,
    title: "Performance & DX",
    text: "High Core Web Vitals, server components, and responsive Next.js interfaces designed for real users.",
  },
];

interface AboutProps {
  bio?: string[];
}

export function About({ bio = defaultBio }: AboutProps) {
  return (
    <section className={styles.section} id="about">
      <Container>
        <SectionHeader
          label="Professional Summary"
          title="Engineered for reliability & scale."
          description="Bridging modern front-end design with resilient backend systems and production deployments."
        />

        <div className={styles.grid}>
          <div className={styles.bio}>
            {bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.cardsCol}>
            {highlights.map((item) => (
              <Card key={item.title} className={styles.highlightCard}>
                <div className={styles.iconWrap}>
                  <item.icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
