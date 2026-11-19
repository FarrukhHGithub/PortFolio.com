"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/shared";
import styles from "@/components/UIstyle/portfolio/navbar.module.css";

export function Navbar({ initials = "FH" }: { initials?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const projectsHref = isHome ? "#projects" : "/projects";

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label="Home">
            <span>{initials}</span>
          </Link>

          <nav className={styles.nav} aria-label="Main Navigation">
            {isHome ? (
              <a href="#projects" className={styles.link}>
                Projects
              </a>
            ) : (
              <Link href="/projects" className={styles.link}>
                Projects
              </Link>
            )}
          </nav>

          <div className={styles.actions}>
            <Link
              href="/projects"
              className={styles.link}
              style={{ fontWeight: 600, color: "var(--color-brand)" }}
            >
              All Projects &rarr;
            </Link>
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
          {isHome ? (
            <a
              href="#projects"
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          ) : (
            <Link
              href="/projects"
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          )}
          <Link
            href="/projects"
            className={styles.link}
            onClick={() => setMenuOpen(false)}
            style={{ color: "var(--color-brand)", fontWeight: 600 }}
          >
            All Projects Archive
          </Link>
        </div>
      )}
    </header>
  );
}
