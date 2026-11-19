import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Globe, Code } from "lucide-react";
import { siteConfig, projects } from "@/data/portfolio";
import { Container, Card, Badge, Button } from "@/components/ui/shared";
import { Navbar, Footer } from "@/components/ui/portfolio";
import styles from "@/components/UIstyle/portfolio/projects.module.css";

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
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main>
      <Navbar initials={siteConfig.initials} />
      <section className={styles.section} style={{ paddingTop: "7rem" }}>
        <Container>
          <div style={{ marginBottom: "2rem" }}>
            <Link
              href="/projects"
              className={styles.link}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
            >
              <ArrowLeft size={16} />
              <span>Back to all projects</span>
            </Link>
          </div>

          <Card style={{ padding: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
              <Badge variant="brand">{project.category}</Badge>
              {project.featured && <Badge variant="success">Featured Case</Badge>}
            </div>

            <h1 className={styles.title} style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)" }}>
              {project.title}
            </h1>

            <p className={styles.summary} style={{ fontSize: "1.0625rem", margin: "1rem 0" }}>
              {project.description}
            </p>

            {project.result && (
              <div
                style={{
                  padding: "0.875rem 1rem",
                  margin: "1.25rem 0",
                  backgroundColor: "var(--color-surface-hover)",
                  borderRadius: "var(--radius-sm)",
                  borderLeft: "3px solid var(--color-brand)",
                  fontSize: "0.875rem",
                }}
              >
                <strong>Outcome:</strong> {project.result}
              </div>
            )}

            <div style={{ margin: "1.5rem 0" }}>
              <h4 style={{ fontSize: "0.875rem", color: "var(--color-ink-muted)", marginBottom: "0.625rem" }}>
                Technologies Used:
              </h4>
              <div className={styles.stackList}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.stackTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
              {project.liveUrl && (
                <Button variant="primary" size="md" href={project.liveUrl} target="_blank">
                  <Globe size={15} />
                  <span>Visit Live Website</span>
                  <ExternalLink size={13} />
                </Button>
              )}
              {project.repoUrl && (
                <Button variant="secondary" size="md" href={project.repoUrl} target="_blank">
                  <Code size={15} />
                  <span>View Repository</span>
                </Button>
              )}
            </div>
          </Card>
        </Container>
      </section>
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

