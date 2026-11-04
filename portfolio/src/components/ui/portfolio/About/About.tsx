import React from "react";
import { Server, Cloud, Cpu, ShieldCheck } from "lucide-react";
import { Container, SectionHeader, Card } from "@/components/ui/shared";
import styles from "@/components/UIstyle/portfolio/about.module.css";

const highlights = [
  {
    icon: Server,
    title: "Full-Stack Ownership",
    text: "Building robust TypeScript backends, Express APIs, and scalable Next.js interfaces with clean architecture.",
  },
  {
    icon: Cloud,
    title: "Production Infrastructure",
    text: "Configuring VPS hosts, AWS EC2, S3, CloudFront, Nginx reverse proxies, and automated SSL renewals.",
  },
  {
    icon: Cpu,
    title: "Performance & DX",
    text: "Zero-bloat engineering focused on fast Core Web Vitals, server components, and responsive experiences.",
  },
];

export function About({ name = "Farrukh H" }: { name?: string }) {
  return (
    <section className={styles.section} id="about">
      <Container>
        <SectionHeader
          label="About"
          title="Engineered for reliability & scale."
          description="Bridging modern front-end design with resilient backend and cloud infrastructure."
        />

        <div className={styles.grid}>
          <div className={styles.bio}>
            <p>
              I am a <strong>Full-Stack Developer</strong> specializing in the MERN stack and Next.js. Over the last 2+ years, I have architected and deployed production-grade applications that solve real-world problems.
            </p>
            <p>
              Rather than stopping at local development, I own the entire lifecycle: from database schemas and authentication to reverse proxies, containerization, and AWS cloud hosting.
            </p>
            <p>
              My design approach centers on simplicity, clarity, and performance. Every interface is built to load instantly, feel responsive, and respect accessibility standards.
            </p>
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
