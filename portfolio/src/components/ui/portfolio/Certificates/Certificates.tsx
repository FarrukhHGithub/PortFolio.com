"use client";

import React, { useState } from "react";
import { CheckCircle2, ExternalLink, Award } from "lucide-react";
import { Container, SectionHeader, Card } from "@/components/ui/shared";
import { Certificate, certificates as defaultCertificates } from "@/data/portfolio";
import styles from "@/components/UIstyle/portfolio/certificates.module.css";

interface CertificatesProps {
  certificates?: Certificate[];
}

const CATEGORIES = [
  "All",
  "Frontend",
  "Backend",
  "VPS",
  "AWS",
  "AI Coding",
  "Database",
  "Full-Stack",
] as const;

export function Certificates({
  certificates = defaultCertificates,
}: CertificatesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? certificates
    : certificates.filter((c) => c.category === activeCategory);

  return (
    <section className={styles.section} id="certificates">
      <Container>
        <SectionHeader
          label="Certifications &amp; Credentials"
          title="Verified technical certifications."
          description="Specialized credentials spanning modern front-end, high-performance backends, VPS server operations, AWS cloud architecture, and AI-assisted engineering."
        />

        <div className={styles.filterBar} role="tablist" aria-label="Certificate category filters">
          {CATEGORIES.map((cat) => {
            const count = cat === "All"
              ? certificates.length
              : certificates.filter((c) => c.category === cat).length;

            if (count === 0 && cat !== "All") return null;

            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`${styles.filterBtn} ${
                  activeCategory === cat ? styles.filterBtnActive : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        <div className={styles.grid}>
          {filtered.map((cert) => (
            <Card key={cert.id} className={styles.card} hoverable>
              <div className={styles.cardTop}>
                <span className={styles.categoryBadge}>{cert.category}</span>
                <span className={styles.date}>{cert.issueDate}</span>
              </div>

              <div className={styles.issuerRow}>
                <span>{cert.issuer}</span>
                <CheckCircle2 size={14} className={styles.verifiedIcon} aria-label="Verified" />
              </div>

              <h3 className={styles.title}>{cert.title}</h3>

              <p className={styles.description}>{cert.description}</p>

              <div className={styles.skillsWrap}>
                {cert.skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className={styles.cardBottom}>
                <span className={styles.credentialId} title="Credential Verification ID">
                  ID: {cert.credentialId}
                </span>
                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.verifyLink}
                    aria-label={`Verify credential for ${cert.title}`}
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className={styles.verifyLink}>
                    <Award size={12} /> Verified
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className={styles.banner}>
          <p className={styles.bannerText}>
            Continuous learning in <span className={styles.bannerHighlight}>Cloud Infrastructure, Next.js Full-Stack, &amp; AI-Driven Engineering</span>.
          </p>
          <a href="#contact" className={styles.verifyLink}>
            <span>Request verification documents</span> &rarr;
          </a>
        </div>
      </Container>
    </section>
  );
}

