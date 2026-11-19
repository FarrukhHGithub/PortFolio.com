import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container, Button, Card } from "@/components/ui/shared";
import { Navbar, Footer } from "@/components/ui/portfolio";
import { siteConfig } from "@/data/portfolio";

export default function NotFound() {
  return (
    <main>
      <Navbar initials={siteConfig.initials} />
      <div
        style={{
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "7rem 1.5rem 4rem",
        }}
      >
        <Container>
          <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            <Card style={{ padding: "clamp(2rem, 5vw, 3rem)" }}>
              <span
                style={{
                  fontSize: "3.5rem",
                  fontWeight: 800,
                  color: "var(--color-brand)",
                  lineHeight: 1,
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                404
              </span>
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  marginBottom: "0.75rem",
                }}
              >
                Page Not Found
              </h1>
              <p
                style={{
                  color: "var(--color-ink-muted)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  marginBottom: "2rem",
                }}
              >
                The page or credential record you are looking for does not exist or has been moved.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <Button variant="primary" size="md" href="/">
                  <ArrowLeft size={15} />
                  <span>Return Home</span>
                </Button>
                <Button variant="outline" size="md" href="/projects">
                  <span>Explore Projects</span>
                </Button>
              </div>
            </Card>
          </div>
        </Container>
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

