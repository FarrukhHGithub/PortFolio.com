"use client";

import React from "react";
import { ProjectCategory } from "@/data/projects";

export interface ProjectFilterProps {
  categories: ("All" | ProjectCategory)[];
  activeCategory: "All" | ProjectCategory;
  onSelectCategory: (cat: "All" | ProjectCategory) => void;
  counts: Record<string, number>;
}

export function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
}: ProjectFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginBottom: "2rem",
      }}
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const count = counts[category] ?? 0;

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => onSelectCategory(category)}
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              padding: "0.4rem 0.875rem",
              borderRadius: "9999px",
              cursor: "pointer",
              transition: "all 0.15s ease",
              backgroundColor: isActive ? "var(--color-brand)" : "var(--color-surface)",
              color: isActive ? "#ffffff" : "var(--color-ink-muted)",
              border: isActive
                ? "1px solid var(--color-brand)"
                : "1px solid var(--color-border)",
            }}
          >
            {category} ({count})
          </button>
        );
      })}
    </div>
  );
}
