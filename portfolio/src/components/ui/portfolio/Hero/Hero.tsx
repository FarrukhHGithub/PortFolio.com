"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail, MapPin, Phone } from "lucide-react";
import { Container, Button, Badge } from "@/components/ui/shared";
import { heroStats } from "@/data/portfolio";
import styles from "@/components/UIstyle/portfolio/hero.module.css";

interface HeroProps {
  name: string;
  title: string;
  summary: string;
  cvUrl?: string;
  stats?: { value: string; label: string }[];
}

const fadeMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: "easeOut" as const },
};

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function Hero({
  name,
  title,
  summary,
  cvUrl = "/CV_FullstackDevelopers.pdf",
  stats = heroStats,
}: HeroProps) {
  return (
    <section className={styles.hero} id="hero">
      <Container>
        <div className={styles.content}>
          <motion.div {...fadeMotion} className={styles.topBadgeRow}>
            <Badge variant="success" hasDot>
              Available for new projects
            </Badge>
          </motion.div>

          <motion.h1
            className={styles.headline}
            {...fadeMotion}
            transition={{ duration: 0.35, delay: 0.08 }}
          >
            {name}
          </motion.h1>

          <motion.div
            className={styles.roleTitle}
            {...fadeMotion}
            transition={{ duration: 0.35, delay: 0.12 }}
          >
            {title}
          </motion.div>

          <motion.div
            className={styles.contactBar}
            {...fadeMotion}
            transition={{ duration: 0.35, delay: 0.16 }}
            aria-label="Direct contact and professional links"
          >
            <span className={styles.contactItem}>
              <MapPin size={15} />
              <span>Skardu, Pakistan</span>
            </span>
            <span className={styles.separator}>•</span>
            <a href="tel:+923498115909" className={styles.contactLink}>
              <Phone size={15} />
              <span>+92 349 8115909</span>
            </a>
            <span className={styles.separator}>•</span>
            <a href="mailto:bussinessguy5909@gmail.com" className={styles.contactLink}>
              <Mail size={15} />
              <span>bussinessguy5909@gmail.com</span>
            </a>
            <span className={styles.separator}>•</span>
            <a
              href="https://linkedin.com/in/farrukh-hussain"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <LinkedinIcon size={15} />
              <span>LinkedIn</span>
            </a>
            <span className={styles.separator}>•</span>
            <a
              href="https://github.com/FarrukhHGithub"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>
            <span className={styles.separator}>•</span>
            <a
              href="https://wa.me/923498115909"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <WhatsAppIcon size={15} />
              <span>WhatsApp</span>
            </a>
          </motion.div>

          <motion.p
            className={styles.subheadline}
            {...fadeMotion}
            transition={{ duration: 0.35, delay: 0.2 }}
          >
            {summary}
          </motion.p>

          <motion.div
            className={styles.actions}
            {...fadeMotion}
            transition={{ duration: 0.35, delay: 0.24 }}
          >
            <Button
              variant="primary"
              size="lg"
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download CV</span>
              <FileDown size={16} />
            </Button>
            <Button variant="secondary" size="lg" href="/projects">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              <span>Contact Me</span>
              <Mail size={16} />
            </Button>
          </motion.div>

          <motion.dl
            className={styles.facts}
            {...fadeMotion}
            transition={{ duration: 0.35, delay: 0.28 }}
          >
            {stats.map((fact) => (
              <div key={fact.label} className={styles.factItem}>
                <dt>{fact.value}</dt>
                <dd>{fact.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </Container>
    </section>
  );
}
