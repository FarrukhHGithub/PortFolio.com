import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.5rem",
        fontSize: "0.8125rem",
        color: "var(--color-ink-muted)",
        marginBottom: "1.75rem",
      }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <ChevronRight
                size={14}
                style={{ color: "var(--color-ink-subtle)", flexShrink: 0 }}
                aria-hidden="true"
              />
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                style={{
                  color: "var(--color-ink-muted)",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                style={{
                  color: isLast ? "var(--color-ink)" : "var(--color-ink-muted)",
                  fontWeight: isLast ? 600 : 400,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "280px",
                }}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
