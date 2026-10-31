"use client";

import { motion } from "framer-motion";
import { siteConfig, stats, techStack } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-brand) 15%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, #a78bfa 10%, transparent), transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {siteConfig.availableForWork && (
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 border"
              style={{
                background:
                  "color-mix(in srgb, #22c55e 10%, transparent)",
                borderColor: "color-mix(in srgb, #22c55e 25%, transparent)",
                color: "#22c55e",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "#22c55e" }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: "#22c55e" }}
                />
              </span>
              Available for new projects
            </div>
          )}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6"
          style={{ color: "var(--color-ink)", maxWidth: "14ch" }}
        >
          I build fast{" "}
          <span className="gradient-text">web products</span>
          <br />
          and ship them at scale.
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed"
          style={{ color: "var(--color-ink-muted)" }}
        >
          Full-stack developer with 2+ years of experience building MERN and
          Next.js applications — from design to production. I handle the code
          <em> and</em> the server.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a
            id="hero-projects-cta"
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 glow"
            style={{ background: "var(--color-brand)" }}
          >
            View Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            id="hero-cv-cta"
            href={siteConfig.cvUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 border"
            style={{
              color: "var(--color-ink)",
              borderColor: "var(--color-border-light)",
              background: "var(--color-surface)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download CV
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 max-w-2xl"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="text-3xl font-black mb-1"
                style={{ color: "var(--color-ink)" }}
              >
                {s.value}
              </div>
              <div className="text-xs font-medium" style={{ color: "var(--color-ink-subtle)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tech stack marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 w-full overflow-hidden border-y py-4"
        style={{
          borderColor: "var(--color-border)",
          background: "color-mix(in srgb, var(--color-surface) 50%, transparent)",
        }}
        aria-label="Technologies I work with"
      >
        {/* Fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, var(--color-bg), transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, var(--color-bg), transparent)",
          }}
        />

        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-5 text-sm font-medium whitespace-nowrap"
              style={{ color: "var(--color-ink-muted)" }}
            >
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: "var(--color-brand)" }}
              />
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
