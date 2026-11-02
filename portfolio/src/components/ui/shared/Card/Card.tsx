import React from "react";
import styles from "@/components/UIstyle/shared/card.module.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  interactive?: boolean;
  children: React.ReactNode;
}

export function Card({
  children,
  hoverable = true,
  interactive = false,
  className = "",
  ...props
}: CardProps) {
  const combinedClasses = [
    styles.card,
    hoverable ? styles.hoverable : "",
    interactive ? styles.interactive : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}
