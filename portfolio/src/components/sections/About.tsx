"use client";

import { motion } from "framer-motion";
import { siteConfig, stats } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left: text */}
        <div>
          <motion.p className="section-label" custom={0} variants={fadeUp}>
            About Me
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-black mb-6"
            style={{ color: "var(--color-ink)" }}
          >
            Developer. Deployer.
            <br />
            <span className="gradient-text">Problem solver.</span>
          </motion.h2>
          <motion.div
            custom={2}
            variants={fadeUp}
            className="space-y-4 text-base leading-relaxed"
            style={{ color: "var(--color-ink-muted)" }}
          >
            <p>
              I'm {siteConfig.name}, a full-stack developer based in{" "}
              {siteConfig.location}. I've spent the last 2+ years building
              production web applications — not just writing code, but also
              taking full ownership of deployment, performance, and uptime.
            </p>
            <p>
              My work spans MERN stack and Next.js 14, with deployments on both
              Hostinger VPS (Nginx, PM2, Certbot) and AWS (EC2, S3, CloudFront,
              Route 53). I care about the full lifecycle, not just the PR merge.
            </p>
            <p>
              I'm currently open to full-time roles and freelance projects where
              I can own features end to end and actually move the needle.
            </p>
          </motion.div>

          {/* Location + contact quick links */}
          <motion.div
            custom={3}
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={`mailto:${siteConfig.email}`}
              id="about-email-link"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border hover:-translate-y-0.5"
              style={{
                borderColor: "var(--color-border-light)",
                color: "var(--color-ink-muted)",
                background: "var(--color-surface)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.github}
              id="about-github-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border hover:-translate-y-0.5"
              style={{
                borderColor: "var(--color-border-light)",
                color: "var(--color-ink-muted)",
                background: "var(--color-surface)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              id="about-linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border hover:-translate-y-0.5"
              style={{
                borderColor: "var(--color-border-light)",
                color: "var(--color-ink-muted)",
                background: "var(--color-surface)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right: stats grid */}
        <motion.div
          custom={4}
          variants={fadeUp}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
              style={{
                background: i === 0 ? "color-mix(in srgb, var(--color-brand) 8%, var(--color-surface))" : "var(--color-surface)",
              }}
            >
              <div
                className="text-4xl font-black mb-2"
                style={{ color: i === 0 ? "var(--color-brand)" : "var(--color-ink)" }}
              >
                {s.value}
              </div>
              <div className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
                {s.label}
              </div>
            </div>
          ))}

          {/* Location card */}
          <div
            className="glass rounded-2xl p-6 col-span-2 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300"
            style={{ background: "var(--color-surface)" }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: "var(--color-surface-2)" }}
            >
              📍
            </div>
            <div>
              <div className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                {siteConfig.location}
              </div>
              <div className="text-xs" style={{ color: "var(--color-ink-subtle)" }}>
                Open to remote worldwide
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
