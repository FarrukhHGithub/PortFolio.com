"use client";

import React, { useEffect } from "react";
import { Container, Button, Card } from "@/components/ui/shared";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem 3rem",
      }}
    >
      <Container>
        <div style={{ maxWidth: "520px", margin: "0 auto", textAlign: "center" }}>
          <Card style={{ padding: "clamp(2rem, 5vw, 3rem)" }}>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--color-ink)",
                marginBottom: "0.75rem",
              }}
            >
              Something went wrong
            </h1>
            <p
              style={{
                color: "var(--color-ink-muted)",
                fontSize: "0.9375rem",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              An unexpected error occurred while loading this page.
            </p>
            <Button variant="primary" size="md" onClick={() => reset()}>
              Try again
            </Button>
          </Card>
        </div>
      </Container>
    </div>
  );
}

