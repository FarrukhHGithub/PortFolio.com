import React from "react";
import { siteConfig, certificates } from "@/data/portfolio";
import { Container, Breadcrumb } from "@/components/ui/shared";
import { Navbar, Footer, Certificates } from "@/components/ui/portfolio";
import styles from "@/components/UIstyle/portfolio/certificates.module.css";

export const metadata = {
  title: "Certificates & Qualifications | Farrukh Hussain",
  description:
    "Verified technical certifications and professional qualifications across Full-Stack development, Node.js REST APIs, AWS Cloud, Linux VPS administration, and AI-assisted software engineering.",
};

export default function CertificatesPage() {
  return (
    <main>
      <Navbar initials={siteConfig.initials} />
      <div style={{ paddingTop: "6.5rem" }}>
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Certificates & Qualifications" },
            ]}
          />
        </Container>
        <Certificates certificates={certificates} />
      </div>
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

