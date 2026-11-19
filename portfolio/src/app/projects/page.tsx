import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { siteConfig, projects } from "@/data/portfolio";
import {
  Container,
  SectionHeader,
  Card,
  Button,
  Badge,
} from "@/components/ui/shared";
import { Navbar, Footer } from "@/components/ui/portfolio";
import styles from "@/components/UIstyle/portfolio/projects.module.css";

export const metadata = {
  title: "All Projects",
  description: "Complete list of production applications, APIs, and client systems.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Navbar initials={siteConfig.initials} />
      <section className={styles.section} style={{ paddingTop: "7rem" }}>
        <Container>
          <div style={{ marginBottom: "1.5rem" }}>
            <Link
              href="/"
              className={styles.link}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
            >
              <ArrowLeft size={15} />
              <span>Back to home</span>
            </Link>
          </div>

          <SectionHeader
            label="Work Portfolio"
            title="All Production Projects."
            description="Complete archive of full-stack platforms, client websites, and backend REST APIs."
          />

          <div className={styles.grid}>
            {projects.map((project) => (
              <Card key={project.id} className={styles.card} hoverable>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <Badge variant="brand">{project.category}</Badge>
                  {project.featured && <Badge variant="success">Featured</Badge>}
                </div>

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
                    <span>View project breakdown</span>
                    <ArrowRight size={13} />
                  </Link>

                  <div className={styles.externalLinks}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        aria-label={`Live site for ${project.title}`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className={styles.allProjectsWrapper}>
            <Button variant="primary" size="md" href="/#contact">
              Discuss a project
            </Button>
          </div>
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
