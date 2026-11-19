import {
  siteConfig,
  projects,
  skillCategories,
  experience,
  certificates as fallbackCertificates,
} from "@/data/portfolio";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Certificates,
  Contact,
  Footer,
} from "@/components/ui/portfolio";

export const revalidate = 300;

export default async function Home() {
  const featuredProjects = projects.filter((p) => p.status === "completed").slice(0, 3);

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
