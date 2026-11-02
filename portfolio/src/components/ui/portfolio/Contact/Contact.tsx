import React from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import { Container, Card } from "@/components/UI/shared";
import { ContactForm } from "./ContactForm";
import styles from "@/components/UIstyle/portfolio/contact.module.css";

interface ContactProps {
  email?: string;
  location?: string;
}

export function Contact({
  email = "farrukh@example.com",
  location = "Pakistan",
}: ContactProps) {
  return (
    <section className={styles.section} id="contact">
      <Container>
        <div className={styles.grid}>
          <div className={styles.info}>
            <h2 className={styles.infoTitle}>
              Let&apos;s build something exceptional together.
            </h2>
            <p className={styles.infoText}>
              Have an upcoming product launch, legacy migration, or cloud infrastructure task? Send me an inquiry and I will get back to you with timelines and strategy.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <Mail size={18} className={styles.detailIcon} />
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div className={styles.detailItem}>
                <MapPin size={18} className={styles.detailIcon} />
                <span>{location}</span>
              </div>
              <div className={styles.detailItem}>
                <Clock size={18} className={styles.detailIcon} />
                <span>Typical response time: &lt; 24 business hours</span>
              </div>
            </div>
          </div>

          <Card className={styles.formCard} hoverable={false}>
            <ContactForm />
          </Card>
        </div>
      </Container>
    </section>
  );
}
