"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container, SectionHeader, Card, Button } from "@/components/ui/shared";
import { Certificate, certificates as defaultCertificates } from "@/data/portfolio";
import styles from "@/components/UIstyle/portfolio/certificates.module.css";

interface CertificatesProps {
  certificates?: Certificate[];
  variant?: "timeline" | "cards";
  showAllLink?: boolean;
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
  variant = "timeline",
  showAllLink = true,
}: CertificatesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? certificates
    : certificates.filter((c) => c.category === activeCategory);

  return (
    <section className={styles.section} id="certificates">
      <Container>
        <SectionHeader
          label="Certifications &amp; Qualifications"
          title="Verified technical certifications."
          description="Specialized credentials spanning modern front-end, high-performance backends, VPS server operations, AWS cloud architecture, and AI-assisted engineering."
        />

        {variant === "cards" ? (
          <>
            <div className={styles.filterBar} role="tablist" aria-label="Certificate category filters">
              {CATEGORIES.map((cat) => {
                const hasCerts = cat === "All" || certificates.some((c) => c.category === cat);
                if (!hasCerts) return null;

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
                    {cat}
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

                  <h3 className={styles.title}>
                    <Link href={`/certificates/${cert.id}`} className={styles.titleLink}>
                      {cert.title}
                    </Link>
                  </h3>

                  <p className={styles.description}>{cert.description}</p>

                  <div className={styles.skillList}>
                    {cert.skills.map((skill) => (
                      <span key={skill} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <Link href={`/certificates/${cert.id}`} className={styles.verifyLink}>
                      <span>View Credential Details</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <div className={styles.timeline}>
            {certificates.slice(0, 4).map((cert) => (
              <div key={cert.id} className={styles.item}>
                <div className={styles.dot} aria-hidden="true" />
                <div className={styles.period}>{cert.issueDate} • {cert.category}</div>
                <div className={styles.roleHeader}>
                  <Link href={`/certificates/${cert.id}`} className={styles.titleLink}>
                    {cert.title}
                  </Link>
                  <span className={styles.company}>
                    — {cert.issuer}
                  </span>
                  <CheckCircle2 size={15} style={{ color: "var(--color-brand)", display: "inline-block", verticalAlign: "middle" }} aria-label="Verified" />
                </div>
                <p className={styles.certDesc}>{cert.description}</p>
                <div className={styles.techList}>
                  {cert.skills.map((skill) => (
                    <span key={skill} className={styles.techBadge}>
                      {skill}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: "0.25rem" }}>
                  <Link href={`/certificates/${cert.id}`} className={styles.detailsLink}>
                    <span>View Credential Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {showAllLink && (
          <div className={styles.allCertsWrapper}>
            <Button variant="outline" size="md" href="/certificates">
              <span>See all certificates in catalog</span>
              <ArrowRight size={15} />
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
