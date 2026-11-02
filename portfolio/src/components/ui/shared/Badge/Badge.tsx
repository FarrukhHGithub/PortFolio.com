import React from "react";
import styles from "@/components/UIstyle/shared/badge.module.css";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "brand" | "success";
  hasDot?: boolean;
  children: React.ReactNode;
}

export function Badge({
  children,
  variant = "default",
  hasDot = false,
  className = "",
  ...props
}: BadgeProps) {
  const combinedClasses = [
    styles.badge,
    variant !== "default" ? styles[variant] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={combinedClasses} {...props}>
      {hasDot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
