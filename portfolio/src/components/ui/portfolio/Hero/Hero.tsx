"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail } from "lucide-react";
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
          <motion.div {...fadeMotion}>
            <Badge variant="success" hasDot>
              Available for new projects
            </Badge>
          </motion.div>

          <motion.h1
            className={styles.headline}
            {...fadeMotion}
            transition={{ duration: 0.35, delay: 0.08 }}
          >
            Hi, I&apos;m <span className={styles.headlineAccent}>{name}</span> — {title}.
          </motion.h1>

          <motion.p
            className={styles.subheadline}
            {...fadeMotion}
            transition={{ duration: 0.35, delay: 0.16 }}
          >
            {summary}
          </motion.p>

          <motion.div
            className={styles.actions}
            {...fadeMotion}
            transition={{ duration: 0.35, delay: 0.24 }}
          >
            <Button variant="primary" size="lg" href="/projects">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download CV</span>
              <FileDown size={16} />
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              <span>Contact Me</span>
              <Mail size={16} />
            </Button>
          </motion.div>

          <motion.dl
            className={styles.facts}
            {...fadeMotion}
            transition={{ duration: 0.35, delay: 0.32 }}
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
