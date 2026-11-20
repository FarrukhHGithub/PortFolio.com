import {
  siteConfig,
  projects,
  skillCategories,
  experience,
  education,
  languages,
  certificates as fallbackCertificates,
} from "@/data/portfolio";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Certificates,
  Education,
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
      <Skills groups={skillCategories} />
      <Experience items={experience} />
      <Projects projects={featuredProjects} showAllLink={true} />
      <Certificates certificates={fallbackCertificates} />
      <Education items={education} languagesList={languages} />
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
