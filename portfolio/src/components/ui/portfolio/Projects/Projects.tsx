import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeader, Button } from "@/components/ui/shared";
import { Project, projects as defaultProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "@/components/UIstyle/portfolio/projects.module.css";

interface ProjectsProps {
  projects?: Project[];
  title?: string;
  description?: string;
  showAllLink?: boolean;
  variant?: "timeline" | "cards";
}

export function Projects({
  projects = defaultProjects.filter((p) => p.status === "completed").slice(0, 3),
  title = "Selected production projects.",
  description = "Production healthcare, museum, and tour company platforms delivered end to end.",
  showAllLink = true,
  variant = "timeline",
}: ProjectsProps) {
  return (
    <section className={styles.section} id="projects">
      <Container>
        <SectionHeader
          label="Key Projects"
          title={title}
          description={description}
        />

        {variant === "cards" ? (
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className={styles.timeline}>
            {projects.map((project) => (
              <div key={project.slug} className={styles.item}>
                <div className={styles.dot} aria-hidden="true" />
                <div className={styles.period}>
                  {project.status === "completed" ? "Completed" : "In Progress"} • {project.category}
                </div>
                <div className={styles.roleHeader}>
                  <Link href={`/projects/${project.slug}`} className={styles.titleLink}>
                    {project.title}
                  </Link>
                  <span className={styles.company}>
                    — {project.client}
                  </span>
                </div>
                <p className={styles.projectDesc}>{project.shortDescription}</p>
                <ul className={styles.bullets}>
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.techList}>
                  {[
                    ...project.techStack.backend.slice(0, 2),
                    ...project.techStack.database.slice(0, 1),
                    ...project.techStack.frontend.slice(0, 2),
                  ].map((t) => (
                    <span key={t} className={styles.techBadge}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: "0.25rem" }}>
                  <Link href={`/projects/${project.slug}`} className={styles.detailsLink}>
                    <span>View Project Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {showAllLink && (
          <div className={styles.allProjectsWrapper}>
            <Button variant="outline" size="md" href="/projects">
              <span>See all projects in catalog</span>
              <ArrowRight size={15} />
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
