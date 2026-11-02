"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import styles from "@/components/UIstyle/shared/theme-toggle.module.css";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      className={`${styles.toggle} ${className}`.trim()}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun size={17} strokeWidth={2} />
      ) : (
        <Moon size={17} strokeWidth={2} />
      )}
    </button>
  );
}
