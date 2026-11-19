import { db } from "@/lib/db";
import {
  siteConfig,
  projects as fallbackProjects,
  skillCategories,
  experience,
  education,
  certificates as fallbackCertificates,
} from "@/data/portfolio";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Education,
  Certificates,
  Contact,
  Footer,
} from "@/components/ui/portfolio";

export const revalidate = 300;

export default async function Home() {
  let featuredProjects = fallbackProjects.filter((p) => p.featured).slice(0, 3);

  try {
    const dbProjects = await db.project.findMany({
      where: { published: true, featured: true },
      orderBy: { sortOrder: "asc" },
      take: 3,
    });
    if (dbProjects.length > 0) {
      featuredProjects = dbProjects.map((p) => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        summary: p.summary,
        description: p.summary,
        category: "Full-Stack" as const,
        stack: p.stack,
        featured: p.featured,
        role: "Full-Stack Developer",
        liveUrl: p.liveUrl ?? undefined,
        repoUrl: p.repoUrl ?? undefined,
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
        title={siteConfig.title}
        summary={siteConfig.summary}
        cvUrl={siteConfig.cvUrl}
      />
      <About />
      <Experience items={experience} />
      <Skills groups={skillCategories} />
      <Projects projects={featuredProjects} showAllLink={true} />
      <Education educationData={education} />
      <Certificates certificates={fallbackCertificates} />
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
