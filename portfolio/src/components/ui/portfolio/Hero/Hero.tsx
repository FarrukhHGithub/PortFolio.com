"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Container, Button, Badge } from "@/components/UI/shared";
import styles from "@/components/UIstyle/portfolio/hero.module.css";

interface HeroProps {
  name: string;
  tagline: string;
  description: string;
}

const fadeMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: "easeOut" },
};

export function Hero({ name, tagline, description }: HeroProps) {
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
            I build fast <span className={styles.headlineAccent}>Next.js</span> products and scale them in production.
          </motion.h1>

          <motion.p
            className={styles.subheadline}
            {...fadeMotion}
            transition={{ duration: 0.35, delay: 0.16 }}
          >
            {description}
          </motion.p>

          <motion.div
            className={styles.actions}
            {...fadeMotion}
            transition={{ duration: 0.35, delay: 0.24 }}
          >
            <Button variant="primary" size="lg" href="#contact">
              Start a project <ArrowRight size={16} />
            </Button>
            <Button variant="secondary" size="lg" href="#projects">
              View selected work
            </Button>
          </motion.div>

          <motion.dl
            className={styles.facts}
            {...fadeMotion}
            transition={{ duration: 0.35, delay: 0.32 }}
          >
            <div className={styles.factItem}>
              <dt>2+</dt>
              <dd>Years building web apps</dd>
            </div>
            <div className={styles.factItem}>
              <dt>8+</dt>
              <dd>Production projects shipped</dd>
            </div>
            <div className={styles.factItem}>
              <dt>AWS &amp; VPS</dt>
              <dd>Cloud infra &amp; deployments</dd>
            </div>
          </motion.dl>
        </div>
      </Container>
    </section>
  );
}
