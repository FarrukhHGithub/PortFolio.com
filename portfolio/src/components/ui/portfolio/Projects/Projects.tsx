import React from "react";
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
}

export function Projects({
  projects = defaultProjects.filter((p) => p.status === "completed").slice(0, 3),
  title = "Selected production projects.",
  description = "Production healthcare, museum, and tour company platforms built end to end.",
  showAllLink = true,
}: ProjectsProps) {
  return (
    <section className={styles.section} id="projects">
      <Container>
        <SectionHeader
          label="Key Projects"
          title={title}
          description={description}
        />

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
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
