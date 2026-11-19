import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container, SectionHeader, Card, Button } from "@/components/ui/shared";
import { Project, projects as defaultProjects } from "@/data/portfolio";
import styles from "@/components/UIstyle/portfolio/projects.module.css";

interface ProjectsProps {
  projects?: Project[];
  title?: string;
  description?: string;
  showAllLink?: boolean;
}

export function Projects({
  projects = defaultProjects.filter((p) => p.featured).slice(0, 3),
  title = "Selected production projects.",
  description = "Production healthcare, museum, and tour company platforms built end to end.",
  showAllLink = true,
}: ProjectsProps) {
  return (
    <section className={styles.section} id="projects">
      <Container>
        <SectionHeader
          label="Featured Work"
          title={title}
          description={description}
        />

        <div className={styles.grid}>
          {projects.map((project) => (
            <Card key={project.id} className={styles.card} hoverable>
              <h3 className={styles.title}>
                <Link
                  href={`/projects/${project.slug}`}
                  className={styles.titleLink}
                >
                  {project.title}
                </Link>
              </h3>

              <p className={styles.summary}>{project.summary}</p>

              <div className={styles.stackList}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.stackTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.footer}>
                <Link
                  href={`/projects/${project.slug}`}
                  className={styles.detailsLink}
                >
                  <span>Case details</span>
                  <ArrowRight size={13} />
                </Link>

                <div className={styles.externalLinks}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label={`Visit live site for ${project.title}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {showAllLink && (
          <div className={styles.allProjectsWrapper}>
            <Button variant="outline" size="md" href="/projects">
              <span>See all projects</span>
              <ArrowRight size={15} />
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
