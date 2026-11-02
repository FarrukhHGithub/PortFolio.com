import React from "react";
import { ExternalLink } from "lucide-react";
import { Container, SectionHeader, Card } from "@/components/UI/shared";
import styles from "@/components/UIstyle/portfolio/projects.module.css";

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  liveUrl?: string | null;
  repoUrl?: string | null;
}

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function Projects({ projects = [] }: { projects?: ProjectItem[] }) {
  return (
    <section className={styles.section} id="projects">
      <Container>
        <SectionHeader
          label="Featured Work"
          title="Selected production projects."
          description="A showcase of full-stack web applications, e-commerce platforms, and real-time systems."
        />

        <div className={styles.grid}>
          {projects.map((project) => (
            <Card key={project.id} className={styles.card} hoverable>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.summary}>{project.summary}</p>

              <div className={styles.stackList}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.stackTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.footer}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <span>Visit site</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <GithubIcon size={14} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
