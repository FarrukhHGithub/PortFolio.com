"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/shared";
import styles from "@/components/UIstyle/portfolio/navbar.module.css";

export interface NavbarProps {
  initials?: string;
}

export function Navbar({ initials }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <Container>
        <div className={styles.inner}>
          <nav className={styles.nav} aria-label="Main Navigation">
            {isHome ? (
              <a
                href="#projects"
                className={styles.link}
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                Projects
              </a>
            ) : (
              <Link
                href="/#projects"
                className={styles.link}
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                Projects
              </Link>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
}
