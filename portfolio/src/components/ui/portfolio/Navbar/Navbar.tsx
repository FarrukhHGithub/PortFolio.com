"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container, ThemeToggle, Button } from "@/components/ui/shared";
import styles from "@/components/UIstyle/portfolio/navbar.module.css";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({ initials = "FH" }: { initials?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Container>
        <div className={styles.inner}>
          <a href="#hero" className={styles.brand} aria-label="Home">
            <span>{initials}</span>
          </a>

          <nav className={styles.nav} aria-label="Main Navigation">
            {navLinks.map(({ href, label }) =>
              href.startsWith("/") ? (
                <Link key={href} href={href} className={styles.link}>
                  {label}
                </Link>
              ) : (
                <a key={href} href={href} className={styles.link}>
                  {label}
                </a>
              )
            )}
          </nav>

          <div className={styles.actions}>
            <ThemeToggle />
            <div className={styles.navCta}>
              <Button variant="primary" size="sm" href="#contact">
                Let&apos;s talk
              </Button>
            </div>
            <button
              type="button"
              className={styles.mobileMenuBtn}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      {menuOpen && (
        <div className={styles.mobileDrawer}>
          {navLinks.map(({ href, label }) =>
            href.startsWith("/") ? (
              <Link
                key={href}
                href={href}
                className={styles.link}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ) : (
              <a
                key={href}
                href={href}
                className={styles.link}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}
