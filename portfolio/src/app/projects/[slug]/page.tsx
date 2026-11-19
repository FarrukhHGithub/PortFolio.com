import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe,
  CheckCircle2,
  ShieldCheck,
  Server,
  Database,
  Layout,
  Wrench,
  Layers,
  Code2,
  FileCode2,
  AlertCircle,
  HelpCircle,
  Terminal,
} from "lucide-react";
import { projects, Project } from "@/data/projects";
import { siteConfig } from "@/data/portfolio";
import {
  Container,
  Card,
  Badge,
  Button,
  TechBadge,
  Breadcrumb,
} from "@/components/ui/shared";
import { Navbar, Footer } from "@/components/ui/portfolio";
import styles from "@/components/UIstyle/portfolio/projects.module.css";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

interface ProjectDetailsPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectDetailsPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found | Farrukh Hussain" };

  return {
    title: `${project.title} | Projects | Farrukh Hussain`,
    description: project.shortDescription,
  };
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  if (currentIndex === -1) notFound();

  const project = projects[currentIndex];
  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";
  const hasGithubUrl = project.githubUrl && project.githubUrl !== "#";

  return (
    <main>
      <Navbar initials={siteConfig.initials} />
      <article className={styles.section} style={{ paddingTop: "7rem" }}>
        <Container>
          {/* 1. Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: project.title },
            ]}
          />

          {/* 2. Title with category and status badges */}
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
              <Badge variant="brand">{project.category}</Badge>

              {project.status === "completed" ? (
                <Badge variant="success">Completed</Badge>
              ) : (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(234, 179, 8, 0.15)",
                    color: "#eab308",
                    border: "1px solid rgba(234, 179, 8, 0.3)",
                  }}
                >
                  In Progress
                </span>
              )}

              <span
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-ink-subtle)",
                  fontWeight: 500,
                  marginLeft: "auto",
                }}
              >
                Client: {project.client} {project.duration !== "TODO" && `• ${project.duration}`}
              </span>
            </div>

            <h1
              className={styles.title}
              style={{
                fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              {project.title}
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                color: "var(--color-ink-muted)",
                lineHeight: 1.6,
                maxWidth: "760px",
              }}
            >
              {project.shortDescription}
            </p>
          </header>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {/* 3. Overview */}
            <section aria-labelledby="section-overview">
              <Card>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
                  <Layers size={18} style={{ color: "var(--color-brand)" }} />
                  <h2 id="section-overview" style={{ fontSize: "1.125rem", fontWeight: 700, margin: 0 }}>
                    Overview
                  </h2>
                </div>
                <p style={{ color: "var(--color-ink-muted)", lineHeight: 1.7, margin: 0 }}>
                  {project.overview}
                </p>
              </Card>
            </section>

            {/* 4. The Problem */}
            <section aria-labelledby="section-problem">
              <Card>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
                  <AlertCircle size={18} style={{ color: "#f59e0b" }} />
                  <h2 id="section-problem" style={{ fontSize: "1.125rem", fontWeight: 700, margin: 0 }}>
                    The Problem
                  </h2>
                </div>
                <p style={{ color: "var(--color-ink-muted)", lineHeight: 1.7, margin: 0 }}>
                  {project.problem}
                </p>
              </Card>
            </section>

            {/* 5. My Role */}
            <section aria-labelledby="section-role">
              <Card>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--color-success)" }} />
                  <h2 id="section-role" style={{ fontSize: "1.125rem", fontWeight: 700, margin: 0 }}>
                    My Role
                  </h2>
                </div>
                <p style={{ color: "var(--color-ink-muted)", lineHeight: 1.7, margin: 0 }}>
                  {project.myRole}
                </p>
              </Card>
            </section>

            {/* 6. Key Features */}
            <section aria-labelledby="section-features">
              <Card>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
                  <Code2 size={18} style={{ color: "var(--color-brand)" }} />
                  <h2 id="section-features" style={{ fontSize: "1.125rem", fontWeight: 700, margin: 0 }}>
                    Key Features
                  </h2>
                </div>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.625rem",
                    color: "var(--color-ink-muted)",
                    lineHeight: 1.6,
                    fontSize: "0.9375rem",
                  }}
                >
                  {project.features.map((feature, idx) => (
                    <li key={idx}>
                      <span style={{ color: "var(--color-ink)" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            {/* 7. Tech Stack (Grouped) */}
            <section aria-labelledby="section-techstack">
              <Card>
                <h2 id="section-techstack" style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                  Technology Stack
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.5rem" }}>
                      <Server size={15} style={{ color: "var(--color-brand)" }} />
                      <strong style={{ fontSize: "0.875rem", color: "var(--color-ink)" }}>Backend</strong>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                      {project.techStack.backend.map((tech) => (
                        <TechBadge key={tech} name={tech} size="sm" />
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.5rem" }}>
                      <Database size={15} style={{ color: "var(--color-brand)" }} />
                      <strong style={{ fontSize: "0.875rem", color: "var(--color-ink)" }}>Database</strong>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                      {project.techStack.database.map((tech) => (
                        <TechBadge key={tech} name={tech} size="sm" />
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.5rem" }}>
                      <Layout size={15} style={{ color: "var(--color-brand)" }} />
                      <strong style={{ fontSize: "0.875rem", color: "var(--color-ink)" }}>Frontend</strong>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                      {project.techStack.frontend.map((tech) => (
                        <TechBadge key={tech} name={tech} size="sm" />
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.5rem" }}>
                      <Wrench size={15} style={{ color: "var(--color-brand)" }} />
                      <strong style={{ fontSize: "0.875rem", color: "var(--color-ink)" }}>Tools</strong>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                      {project.techStack.tools.map((tech) => (
                        <TechBadge key={tech} name={tech} size="sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* 8. Architecture */}
            <section aria-labelledby="section-architecture">
              <Card>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
                  <Layers size={18} style={{ color: "var(--color-brand)" }} />
                  <h2 id="section-architecture" style={{ fontSize: "1.125rem", fontWeight: 700, margin: 0 }}>
                    System Architecture
                  </h2>
                </div>
                <p style={{ color: "var(--color-ink-muted)", lineHeight: 1.7, margin: 0 }}>
                  {project.architecture}
                </p>
              </Card>
            </section>

            {/* 9. API Highlights */}
            <section aria-labelledby="section-api">
              <Card>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
                  <Terminal size={18} style={{ color: "var(--color-brand)" }} />
                  <h2 id="section-api" style={{ fontSize: "1.125rem", fontWeight: 700, margin: 0 }}>
                    API Highlights
                  </h2>
                </div>

                <div style={{ overflowX: "auto" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: "0.875rem",
                      textAlign: "left",
                    }}
                  >
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                        <th style={{ padding: "0.625rem 0.75rem", color: "var(--color-ink-muted)", fontWeight: 600, width: "90px" }}>Method</th>
                        <th style={{ padding: "0.625rem 0.75rem", color: "var(--color-ink-muted)", fontWeight: 600 }}>Route</th>
                        <th style={{ padding: "0.625rem 0.75rem", color: "var(--color-ink-muted)", fontWeight: 600 }}>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.apiHighlights.map((api, idx) => {
                        const isGet = api.method === "GET";
                        const isPost = api.method === "POST";
                        const isDelete = api.method === "DELETE";

                        const methodColor = isGet
                          ? "#3b82f6"
                          : isPost
                          ? "#10b981"
                          : isDelete
                          ? "#ef4444"
                          : "#f59e0b";

                        return (
                          <tr
                            key={idx}
                            style={{
                              borderBottom:
                                idx === project.apiHighlights.length - 1
                                  ? "none"
                                  : "1px solid var(--color-border)",
                            }}
                          >
                            <td style={{ padding: "0.75rem" }}>
                              <span
                                style={{
                                  display: "inline-block",
                                  fontSize: "0.6875rem",
                                  fontWeight: 700,
                                  padding: "0.15rem 0.45rem",
                                  borderRadius: "var(--radius-sm)",
                                  backgroundColor: `color-mix(in srgb, ${methodColor} 15%, transparent)`,
                                  color: methodColor,
                                  border: `1px solid color-mix(in srgb, ${methodColor} 30%, transparent)`,
                                }}
                              >
                                {api.method}
                              </span>
                            </td>
                            <td style={{ padding: "0.75rem", fontFamily: "monospace", color: "var(--color-ink)" }}>
                              {api.route}
                            </td>
                            <td style={{ padding: "0.75rem", color: "var(--color-ink-muted)" }}>
                              {api.purpose}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Card>
            </section>

            {/* 10. Database Models */}
            <section aria-labelledby="section-database">
              <Card>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
                  <Database size={18} style={{ color: "var(--color-brand)" }} />
                  <h2 id="section-database" style={{ fontSize: "1.125rem", fontWeight: 700, margin: 0 }}>
                    Database Models (MongoDB / Mongoose)
                  </h2>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {project.databaseModels.map((model) => (
                    <div
                      key={model.name}
                      style={{
                        padding: "1rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--color-surface-hover)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginBottom: "0.625rem",
                        }}
                      >
                        <FileCode2 size={16} style={{ color: "var(--color-brand)" }} />
                        <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--color-ink)", margin: 0 }}>
                          {model.name}
                        </h3>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                        {model.keyFields.map((field) => (
                          <span
                            key={field}
                            style={{
                              fontFamily: "monospace",
                              fontSize: "0.6875rem",
                              padding: "0.15rem 0.4rem",
                              borderRadius: "var(--radius-sm)",
                              backgroundColor: "var(--color-surface)",
                              border: "1px solid var(--color-border)",
                              color: "var(--color-ink-muted)",
                            }}
                          >
                            {field}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            {/* 11. Security */}
            <section aria-labelledby="section-security">
              <Card>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
                  <ShieldCheck size={18} style={{ color: "var(--color-success)" }} />
                  <h2 id="section-security" style={{ fontSize: "1.125rem", fontWeight: 700, margin: 0 }}>
                    Security &amp; Hardening Measures
                  </h2>
                </div>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.625rem",
                    color: "var(--color-ink-muted)",
                    lineHeight: 1.6,
                    fontSize: "0.9375rem",
                  }}
                >
                  {project.security.map((sec, idx) => (
                    <li key={idx}>
                      <span style={{ color: "var(--color-ink)" }}>{sec}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            {/* 12. Challenges & Solutions */}
            <section aria-labelledby="section-challenges">
              <Card>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem" }}>
                  <HelpCircle size={18} style={{ color: "var(--color-brand)" }} />
                  <h2 id="section-challenges" style={{ fontSize: "1.125rem", fontWeight: 700, margin: 0 }}>
                    Challenges &amp; Solutions
                  </h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {project.challenges.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "1rem 1.25rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--color-surface-hover)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <div style={{ marginBottom: "0.5rem" }}>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            color: "#ef4444",
                            display: "block",
                            marginBottom: "0.25rem",
                          }}
                        >
                          Challenge
                        </span>
                        <p style={{ color: "var(--color-ink)", fontSize: "0.9375rem", margin: 0, fontWeight: 500 }}>
                          {item.challenge}
                        </p>
                      </div>

                      <div style={{ paddingTop: "0.5rem", borderTop: "1px dashed var(--color-border)" }}>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            color: "var(--color-success)",
                            display: "block",
                            marginBottom: "0.25rem",
                          }}
                        >
                          Solution
                        </span>
                        <p style={{ color: "var(--color-ink-muted)", fontSize: "0.875rem", margin: 0, lineHeight: 1.6 }}>
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            {/* 13. Deployment */}
            <section aria-labelledby="section-deployment">
              <Card>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
                  <Server size={18} style={{ color: "var(--color-brand)" }} />
                  <h2 id="section-deployment" style={{ fontSize: "1.125rem", fontWeight: 700, margin: 0 }}>
                    Deployment &amp; Infrastructure
                  </h2>
                </div>
                <p style={{ color: "var(--color-ink-muted)", lineHeight: 1.7, margin: 0 }}>
                  {project.deployment}
                </p>
              </Card>
            </section>

            {/* 14. Screenshots */}
            <section aria-labelledby="section-screenshots">
              <Card>
                <h2 id="section-screenshots" style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "1rem" }}>
                  Screenshots &amp; Interface Preview
                </h2>

                {project.screenshots && project.screenshots.length > 0 ? (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                      gap: "1rem",
                    }}
                  >
                    {project.screenshots.map((shot, idx) => (
                      <div
                        key={idx}
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "220px",
                          borderRadius: "var(--radius-sm)",
                          overflow: "hidden",
                          border: "1px solid var(--color-border)",
                        }}
                      >
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    style={{
                      padding: "2rem 1.5rem",
                      textAlign: "center",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--color-surface-hover)",
                      border: "1px dashed var(--color-border)",
                      color: "var(--color-ink-muted)",
                      fontSize: "0.875rem",
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      Screenshots placeholder (TODO: pending client media clearance and visual asset upload).
                    </p>
                  </div>
                )}
              </Card>
            </section>

            {/* 15. Live Demo / GitHub buttons (hidden if "#") */}
            {(hasLiveUrl || hasGithubUrl) && (
              <section aria-labelledby="section-links">
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  {hasLiveUrl && (
                    <Button variant="primary" size="md" href={project.liveUrl} target="_blank">
                      <Globe size={16} />
                      <span>Live Website</span>
                      <ExternalLink size={14} />
                    </Button>
                  )}
                  {hasGithubUrl && (
                    <Button variant="secondary" size="md" href={project.githubUrl} target="_blank">
                      <GithubIcon size={16} />
                      <span>Source Code</span>
                    </Button>
                  )}
                </div>
              </section>
            )}

            {/* 16. Previous / Next Project navigation */}
            <nav
              aria-label="Project pagination"
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
                href={`/projects/${prevProject.slug}`}
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
                  <span>Previous Project</span>
                </span>
                <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-ink)" }}>
                  {prevProject.title}
                </span>
              </Link>

              <Link
                href={`/projects/${nextProject.slug}`}
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
                  <span>Next Project</span>
                  <ArrowRight size={13} />
                </span>
                <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-ink)" }}>
                  {nextProject.title}
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
