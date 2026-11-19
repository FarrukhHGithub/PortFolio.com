import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Award,
  ShieldCheck,
  Calendar,
  Building2,
  FileCheck2,
} from "lucide-react";
import { certificates, siteConfig } from "@/data/portfolio";
import {
  Container,
  Card,
  Badge,
  Button,
  TechBadge,
  Breadcrumb,
} from "@/components/ui/shared";
import { Navbar, Footer } from "@/components/ui/portfolio";
import styles from "@/components/UIstyle/portfolio/certificates.module.css";

interface CertificateDetailsPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return certificates.map((cert) => ({
    id: cert.id,
  }));
}

export function generateMetadata({ params }: CertificateDetailsPageProps) {
  const cert = certificates.find((c) => c.id === params.id);
  if (!cert) return { title: "Certificate Not Found | Farrukh Hussain" };

  return {
    title: `${cert.title} | Credentials | Farrukh Hussain`,
    description: cert.description,
  };
}

export default function CertificateDetailsPage({
  params,
}: CertificateDetailsPageProps) {
  const currentIndex = certificates.findIndex((c) => c.id === params.id);
  if (currentIndex === -1) notFound();

  const cert = certificates[currentIndex];
  const prevCert =
    currentIndex > 0
      ? certificates[currentIndex - 1]
      : certificates[certificates.length - 1];
  const nextCert =
    currentIndex < certificates.length - 1
      ? certificates[currentIndex + 1]
      : certificates[0];

  return (
    <main>
      <Navbar initials={siteConfig.initials} />
      <article className={styles.section} style={{ paddingTop: "7rem" }}>
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Certificates & Qualifications", href: "/certificates" },
              { label: cert.title },
            ]}
          />

          <header style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.625rem",
                marginBottom: "1rem",
              }}
            >
              <Badge variant="brand">{cert.category}</Badge>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--color-success)",
                  padding: "0.2rem 0.55rem",
                  borderRadius: "9999px",
                  backgroundColor: "color-mix(in srgb, var(--color-success) 12%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--color-success) 30%, transparent)",
                }}
              >
                <CheckCircle2 size={13} />
                <span>Verified Credential</span>
              </span>

              <span
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-ink-subtle)",
                  fontWeight: 500,
                  marginLeft: "auto",
                }}
              >
                Issued: {cert.issueDate}
              </span>
            </div>

            <h1
              className={styles.title}
              style={{
                fontSize: "clamp(1.85rem, 4.2vw, 2.5rem)",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              {cert.title}
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                flexWrap: "wrap",
                color: "var(--color-ink-muted)",
                fontSize: "0.875rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Building2 size={15} style={{ color: "var(--color-brand)" }} />
                <span>Issuer: <strong style={{ color: "var(--color-ink)" }}>{cert.issuer}</strong></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Calendar size={15} style={{ color: "var(--color-brand)" }} />
                <span>Year: <strong style={{ color: "var(--color-ink)" }}>{cert.issueDate}</strong></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <FileCheck2 size={15} style={{ color: "var(--color-brand)" }} />
                <span>ID: <code style={{ color: "var(--color-ink)" }}>{cert.credentialId}</code></span>
              </div>
            </div>
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Overview / Scope */}
            <section aria-labelledby="section-cert-overview">
              <Card>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
                  <Award size={18} style={{ color: "var(--color-brand)" }} />
                  <h2 id="section-cert-overview" style={{ fontSize: "1.125rem", fontWeight: 700, margin: 0 }}>
                    Certification Overview &amp; Curriculum Scope
                  </h2>
                </div>
                <p style={{ color: "var(--color-ink-muted)", lineHeight: 1.7, margin: 0, fontSize: "0.9375rem" }}>
                  {cert.description}
                </p>
              </Card>
            </section>

            {/* Skills & Technologies Covered */}
            <section aria-labelledby="section-cert-skills">
              <Card>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
                  <ShieldCheck size={18} style={{ color: "var(--color-brand)" }} />
                  <h2 id="section-cert-skills" style={{ fontSize: "1.125rem", fontWeight: 700, margin: 0 }}>
                    Validated Technical Skills &amp; Competencies
                  </h2>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {cert.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} size="md" />
                  ))}
                </div>
              </Card>
            </section>

            {/* Verification Section */}
            <section aria-labelledby="section-cert-verify">
              <Card>
                <h2 id="section-cert-verify" style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  Official Credential Verification
                </h2>
                <p style={{ color: "var(--color-ink-muted)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  This qualification was issued by <strong style={{ color: "var(--color-ink)" }}>{cert.issuer}</strong> upon successful completion of comprehensive evaluation and practical examinations. You can verify the authenticity of this credential directly on the issuing authority&apos;s verification registry.
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--color-surface-hover)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-ink-subtle)", textTransform: "uppercase", letterSpacing: "0.04em", display: "block" }}>
                      Credential License / Certificate ID
                    </span>
                    <span style={{ fontFamily: "monospace", fontSize: "0.9375rem", fontWeight: 700, color: "var(--color-ink)" }}>
                      {cert.credentialId}
                    </span>
                  </div>

                  {cert.verificationUrl ? (
                    <Button variant="primary" size="md" href={cert.verificationUrl} target="_blank">
                      <span>Verify on {cert.issuer.split(" ")[0]}</span>
                      <ExternalLink size={14} />
                    </Button>
                  ) : (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.8125rem",
                        color: "var(--color-success)",
                        fontWeight: 600,
                      }}
                    >
                      <CheckCircle2 size={16} />
                      <span>Verified Active Credential</span>
                    </span>
                  )}
                </div>
              </Card>
            </section>

            {/* Previous / Next Navigation */}
            <nav
              aria-label="Certificate pagination"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--color-border)",
                marginTop: "1rem",
              }}
            >
              <Link
                href={`/certificates/${prevCert.id}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  padding: "1rem 1.25rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.75rem",
                    color: "var(--color-ink-subtle)",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  <ArrowLeft size={13} />
                  <span>Previous Certificate</span>
                </span>
                <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-ink)" }}>
                  {prevCert.title}
                </span>
              </Link>

              <Link
                href={`/certificates/${nextCert.id}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "0.25rem",
                  padding: "1rem 1.25rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                  textAlign: "right",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.75rem",
                    color: "var(--color-ink-subtle)",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  <span>Next Certificate</span>
                  <ArrowRight size={13} />
                </span>
                <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-ink)" }}>
                  {nextCert.title}
                </span>
              </Link>
            </nav>
          </div>
        </Container>
      </article>
      <Footer
        name={siteConfig.name}
        github={siteConfig.github}
        linkedin={siteConfig.linkedin}
        twitter={siteConfig.twitter}
        whatsapp={siteConfig.whatsapp}
      />
    </main>
  );
}
