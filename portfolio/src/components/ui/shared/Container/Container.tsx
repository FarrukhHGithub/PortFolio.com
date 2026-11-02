import React from "react";
import styles from "@/components/UIstyle/shared/container.module.css";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div className={`${styles.container} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
