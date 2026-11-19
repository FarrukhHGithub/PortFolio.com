"use client";

import React, { useState } from "react";
import { Project, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
import styles from "@/components/UIstyle/portfolio/projects.module.css";

const CATEGORIES: ("All" | ProjectCategory)[] = ["All", "Tour", "Healthcare", "Museum"];

export interface ProjectsCatalogProps {
  initialProjects: Project[];
}

export function ProjectsCatalog({ initialProjects }: ProjectsCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

  const counts: Record<string, number> = {
    All: initialProjects.length,
    Tour: initialProjects.filter((p) => p.category === "Tour").length,
    Healthcare: initialProjects.filter((p) => p.category === "Healthcare").length,
    Museum: initialProjects.filter((p) => p.category === "Museum").length,
  };

  const filtered =
    activeCategory === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category === activeCategory);

  return (
    <div>
      <ProjectFilter
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        counts={counts}
      />

      <div className={styles.grid}>
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
