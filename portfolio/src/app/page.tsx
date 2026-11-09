import { db } from "@/lib/db";
import {
  siteConfig,
  projects as fallbackProjects,
  skills as fallbackSkills,
  certificates as fallbackCertificates,
} from "@/data/portfolio";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Certificates,
  Projects,
  Experience,
  Contact,
  Footer,
} from "@/components/ui/portfolio";

export const revalidate = 300;

export default async function Home() {
  let projectsList = fallbackProjects.map((p) => ({
    id: p.id,
    title: p.title,
    summary: p.summary,
    stack: p.stack,
    liveUrl: p.liveUrl ?? null,
    repoUrl: p.repoUrl ?? null,
  }));

  let skillsList: { name: string; category: string }[] = fallbackSkills.map((s) => ({
    name: s.name,
    category: s.category,
  }));

  try {
    const dbProjects = await db.project.findMany({
      where: { published: true },
      orderBy: { sortOrder: "asc" },
    });
    if (dbProjects.length > 0) {
      projectsList = dbProjects.map((p) => ({
        id: p.id,
        title: p.title,
        summary: p.summary,
        stack: p.stack,
        liveUrl: p.liveUrl,
        repoUrl: p.repoUrl,
      }));
    }

    const dbSkills = await db.skill.findMany({
      orderBy: { sortOrder: "asc" },
    });
    if (dbSkills.length > 0) {
      skillsList = dbSkills.map((s) => ({
        name: s.name,
        category: s.category,
      }));
    }
  } catch {
    // Graceful fallback to static portfolio data if DB is uninitialized
  }

  return (
    <main>
      <Navbar initials={siteConfig.initials} />
      <Hero
        name={siteConfig.name}
        tagline={siteConfig.tagline}
        description={siteConfig.description}
      />
      <About name={siteConfig.name} />
      <Skills skills={skillsList} />
      <Certificates certificates={fallbackCertificates} />
      <Projects projects={projectsList} />
      <Experience />
      <Contact
        email={siteConfig.email}
        location={siteConfig.location}
        phone={siteConfig.phone}
        whatsapp={siteConfig.whatsapp}
      />
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
