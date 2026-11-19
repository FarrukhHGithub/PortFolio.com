import React from "react";
import { siteConfig, projects } from "@/data/portfolio";
import {
  Container,
  SectionHeader,
  Button,
  Breadcrumb,
} from "@/components/ui/shared";
import { Navbar, Footer, ProjectsCatalog } from "@/components/ui/portfolio";
import styles from "@/components/UIstyle/portfolio/projects.module.css";

export const metadata = {
  title: "All Projects | Farrukh Hussain",
  description:
    "Production full-stack web applications, REST APIs, and database systems built with Node.js, Express, MongoDB, and Next.js.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Navbar initials={siteConfig.initials} />
      <section className={styles.section} style={{ paddingTop: "7rem" }}>
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Projects" },
            ]}
          />

          <SectionHeader
            label="Work Archive"
            title="All Production Projects."
            description="Complete archive of full-stack platforms, client systems, and REST APIs engineered with Node.js, Express, MongoDB, and Next.js."
          />

          <ProjectsCatalog initialProjects={projects} />

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
