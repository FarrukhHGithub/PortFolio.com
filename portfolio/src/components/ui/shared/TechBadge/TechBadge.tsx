import React from "react";

export interface TechBadgeProps {
  name: string;
  size?: "sm" | "md";
  className?: string;
}

export function TechBadge({ name, size = "sm", className = "" }: TechBadgeProps) {
  const isSm = size === "sm";
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontSize: isSm ? "0.75rem" : "0.8125rem",
        fontWeight: 500,
        padding: isSm ? "0.25rem 0.55rem" : "0.35rem 0.75rem",
        borderRadius: "var(--radius-sm)",
        backgroundColor: "var(--color-surface-hover)",
        border: "1px solid var(--color-border)",
        color: "var(--color-ink)",
        lineHeight: 1.2,
        whiteSpace: "nowrap",
      }}
    >
      {name}
    </span>
  );
}
