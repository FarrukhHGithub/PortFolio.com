"use client";

import { motion } from "framer-motion";
import { skills, type SkillCategory } from "@/data/portfolio";

const categories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "DevOps & Cloud",
  "Tools",
];

const categoryColors: Record<SkillCategory, string> = {
  Frontend: "#3b82f6",
  Backend: "#22c55e",
  Database: "#f59e0b",
  "DevOps & Cloud": "#a78bfa",
  Tools: "#f472b6",
};

export default function Skills() {
  const grouped = categories.reduce<Record<SkillCategory, typeof skills>>(
    (acc, cat) => {
      acc[cat] = skills.filter((s) => s.category === cat);
      return acc;
    },
    {} as Record<SkillCategory, typeof skills>
  );

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Skills</p>
        <h2
          className="text-4xl sm:text-5xl font-black mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          What I work with
        </h2>
        <p className="text-base mb-12 max-w-xl" style={{ color: "var(--color-ink-muted)" }}>
          A curated set of technologies I use daily to build and ship production
          applications.
        </p>
      </motion.div>

      <div className="space-y-12">
        {categories.map((cat, catIndex) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: catIndex * 0.08 }}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: categoryColors[cat] }}
              />
              <h3
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: categoryColors[cat] }}
              >
                {cat}
              </h3>
            </div>

            {/* Skill cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {grouped[cat].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass rounded-xl p-4 text-center cursor-default transition-shadow duration-200 hover:shadow-lg"
                  style={{
                    borderColor: `color-mix(in srgb, ${categoryColors[cat]} 20%, var(--color-border))`,
                  }}
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <div
                    className="text-xs font-medium leading-tight"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
