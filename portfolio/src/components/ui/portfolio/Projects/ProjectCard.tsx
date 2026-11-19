import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, Badge, TechBadge } from "@/components/ui/shared";
import { Project } from "@/data/projects";
import styles from "@/components/UIstyle/portfolio/projects.module.css";

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const topTech = [
    ...project.techStack.backend.slice(0, 2),
    ...project.techStack.frontend.slice(0, 2),
  ].slice(0, 4);

  return (
    <Card className={styles.card} hoverable>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
          marginBottom: "0.75rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: "0.375rem", alignItems: "center" }}>
          <Badge variant="brand">{project.category}</Badge>
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--color-ink-subtle)",
              fontWeight: 500,
            }}
          >
            {project.client}
          </span>
        </div>

        {project.status === "completed" ? (
          <Badge variant="success">Completed</Badge>
        ) : (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.6875rem",
              fontWeight: 600,
              padding: "0.2rem 0.5rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(234, 179, 8, 0.15)",
              color: "#eab308",
              border: "1px solid rgba(234, 179, 8, 0.3)",
            }}
          >
            In Progress
          </span>
        )}
      </div>

      <h3 className={styles.title}>
        <Link href={`/projects/${project.slug}`} className={styles.titleLink}>
          {project.title}
        </Link>
      </h3>

      <p className={styles.summary}>{project.shortDescription}</p>

      <div className={styles.stackList}>
        {topTech.map((tech) => (
          <TechBadge key={tech} name={tech} size="sm" />
        ))}
      </div>

      <div className={styles.footer}>
        <Link href={`/projects/${project.slug}`} className={styles.detailsLink}>
          <span>View Details</span>
          <ArrowRight size={14} />
        </Link>

        <div className={styles.externalLinks}>
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
