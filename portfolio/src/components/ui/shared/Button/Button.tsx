import React from "react";
import styles from "@/components/UIstyle/shared/button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  target,
  rel,
  disabled,
  ...props
}: ButtonProps) {
  const combinedClasses = [
    styles.button,
    styles[variant],
    size !== "md" ? styles[size] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
