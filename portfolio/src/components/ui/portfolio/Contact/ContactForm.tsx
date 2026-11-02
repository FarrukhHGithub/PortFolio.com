"use client";

import React, { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/UI/shared";
import { sendContactMessage } from "@/services/contactService";
import styles from "@/components/UIstyle/portfolio/contact-form.module.css";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", body: "", website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      nextErrors.name = "Name must be at least 2 characters.";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.body.trim() || formData.body.trim().length < 10) {
      nextErrors.body = "Project details must be at least 10 characters.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting" || !validate()) return;

    setStatus("submitting");
    setErrorMessage("");
    try {
      await sendContactMessage(formData);
      setStatus("success");
      setFormData({ name: "", email: "", body: "", website: "" });
      setErrors({});
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        className={styles.honeypot}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className={styles.field}>
        <label htmlFor="contact-name" className={styles.label}>Name *</label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={styles.input}
          placeholder="Jane Doe"
          disabled={status === "submitting"}
        />
        {errors.name && <span className={styles.fieldError}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email" className={styles.label}>Email *</label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={styles.input}
          placeholder="jane@example.com"
          disabled={status === "submitting"}
        />
        {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-details" className={styles.label}>Project Details *</label>
        <textarea
          id="contact-details"
          rows={4}
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          className={styles.textarea}
          placeholder="Briefly describe your requirements, timeline, and goals..."
          disabled={status === "submitting"}
        />
        {errors.body && <span className={styles.fieldError}>{errors.body}</span>}
      </div>

      <Button type="submit" variant="primary" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            <span>Sending message...</span>
          </>
        ) : (
          <>
            <span>Send message</span>
            <Send size={15} />
          </>
        )}
      </Button>

      {status === "success" && (
        <div className={`${styles.statusMessage} ${styles.success}`} role="status">
          <CheckCircle2 size={16} style={{ display: "inline", marginRight: "6px" }} />
          Thank you! Message received. I typically respond within 24 hours.
        </div>
      )}

      {status === "error" && (
        <div className={`${styles.statusMessage} ${styles.error}`} role="alert">
          {errorMessage || "An error occurred while sending. Please try again."}
        </div>
      )}
    </form>
  );
}
