import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
const font = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Your Name | Full-stack Next.js & AWS Developer",
  description: "Full-stack developer with 2+ years of experience and 8+ shipped projects on Next.js, Node.js and AWS.",
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={font.className}>{children}</body></html>;
}
