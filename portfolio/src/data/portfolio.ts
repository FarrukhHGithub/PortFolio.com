// ============================================================
// PORTFOLIO DATA — Centralized typed configuration & content
// ============================================================

export interface SiteConfig {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  summary: string;
  experienceYears: string;
  location: string;
  availableForWork: boolean;
  email: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappNumber: string;
  github: string;
  linkedin: string;
  twitter: string;
  cvUrl: string;
  siteUrl: string;
}

export const siteConfig: SiteConfig = {
  name: "Farrukh Hussain",
  initials: "FH",
  title: "Full-Stack Developer | MERN Stack & Next.js",
  tagline: "I build fast, secure web products with the MERN stack and Next.js.",
  summary:
    "Full-stack developer with 2+ years of experience building complete web applications with the MERN stack and Next.js, with particular strength in backend development: secure REST APIs, authentication, database design and admin systems. Started at Netbots SMC Private Limited, and now a freelancer delivering clinic, museum and tour company websites end to end.",
  experienceYears: "2+ years",
  location: "Rawalpindi, Pakistan",
  availableForWork: true,
  email: "bussinessguy5909@gmail.com",
  phone: "+92 349 8115909",
  phoneRaw: "03498115909",
  whatsapp: "https://wa.me/923498115909",
  whatsappNumber: "+92 349 8115909",
  github: "https://github.com/FarrukhHGithub",
  linkedin: "https://linkedin.com/in/farrukh-hussain",
  twitter: "https://twitter.com/farrukh_dev",
  cvUrl: "/CV_FullstackDevelopers.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

// ── Skills ────────────────────────────────────────────────────
export type SkillCategory =
  | "Backend"
  | "Database"
  | "Frontend"
  | "Tools"
  | "Professional";

export interface SkillCategoryGroup {
  category: SkillCategory;
  isCoreStrength?: boolean;
  items: string[];
}

export const skillCategories: SkillCategoryGroup[] = [
  {
    category: "Backend",
    isCoreStrength: true,
    items: [
      "Node.js",
      "Express.js",
      "RESTful API design",
      "JWT authentication",
      "Role-based access control",
      "Middleware",
      "Input validation",
      "Error handling",
      "File/image uploads",
      "Email integration",
    ],
  },
  {
    category: "Database",
    items: [
      "MongoDB",
      "Mongoose ODM",
      "Schema design",
      "Indexing",
      "Aggregation pipelines",
      "CRUD optimisation",
      "PostgreSQL",
      "Prisma ORM",
    ],
  },
  {
    category: "Frontend",
    items: [
      "Next.js (SSR, SSG, ISR)",
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive UI",
      "API integration",
      "SEO",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "VPS / cPanel basics",
      "Linux / Bash",
      "Docker",
      "Environment configuration",
      "npm",
    ],
  },
  {
    category: "Professional",
    items: [
      "Requirements analysis",
      "End-to-end delivery",
      "System architecture",
      "Code review",
      "Client communication",
      "Problem solving",
    ],
  },
];

// Flat skills array for backward compatibility & DB fallback
export interface Skill {
  name: string;
  category: string;
}

export const skills: Skill[] = skillCategories.flatMap((g) =>
  g.items.map((name) => ({ name, category: g.category }))
);

// ── Experience ────────────────────────────────────────────────
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-employed",
    location: "Remote",
    period: "Mid 2025 — Present",
    bullets: [
      "Built custom APIs and full-stack web applications for clients using the MERN stack and Next.js.",
      "Handled the full cycle: requirements, API and database design, development, deployment and support.",
      "Delivered production clinic, museum, and tour company websites with secure authentication, admin panels, and optimized performance.",
    ],
    tech: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
  },
  {
    role: "Full-Stack (MERN & Next.js) Developer",
    company: "Netbots SMC Private Limited",
    location: "Rawalpindi, Pakistan",
    period: "Late 2024 — Mid 2025",
    bullets: [
      "Designed and built REST APIs with Node.js and Express.js using MVC structure and reusable middleware.",
      "Modelled data and optimised MongoDB queries (Mongoose) for content, enquiries and users.",
      "Implemented secure JWT-based authentication and admin access control, with validation and centralised error handling.",
      "Built responsive, SEO-friendly Next.js and React front ends, integrated them with the APIs, and deployed and maintained applications in production.",
      "Completed 4 client projects (clinic, museum and two tour company websites); developed a new tour company website.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Next.js", "React.js", "JWT Auth", "REST APIs"],
  },
];

// ── Projects ──────────────────────────────────────────────────
export {
  projects,
  type Project,
  type ProjectCategory,
  type ProjectStatus,
  type ProjectTechStack,
  type ApiHighlight,
  type DatabaseModel,
  type ChallengeSolution,
  type ProjectScreenshot,
} from "./projects";

// ── About Content ─────────────────────────────────────────────
export const aboutBio = [
  "Full-stack developer with 2+ years of experience building complete web applications with the MERN stack and Next.js, with particular strength in backend development: secure REST APIs, authentication, database design and admin systems.",
  "Started at Netbots SMC Private Limited delivering production healthcare, museum and tour company websites end to end, and currently working as an independent freelance developer delivering client applications from specification to production.",
  "Engineering philosophy: clean MVC / modular architecture, robust input validation, centralized error handling, and fast, accessible interfaces designed for real-world reliability.",
];

export const heroStats = [
  { value: "2+", label: "Years Experience" },
  { value: "6+", label: "Production Projects" },
  { value: "Backend", label: "Core Strength" },
];

// ── Certificates ──────────────────────────────────────────────
export type CertificateCategory =
  | "Frontend"
  | "Backend"
  | "VPS"
  | "AWS"
  | "AI Coding"
  | "Database"
  | "Full-Stack";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: CertificateCategory;
  issueDate: string;
  credentialId: string;
  verificationUrl?: string;
  description: string;
  skills: string[];
}

export const certificates: Certificate[] = [
  {
    id: "cert-frontend",
    title: "Meta Certified Front-End Developer",
    issuer: "Meta (Coursera)",
    category: "Frontend",
    issueDate: "2024",
    credentialId: "META-FED-98431",
    verificationUrl: "https://coursera.org/verify/professional-cert/META-FED-98431",
    description:
      "Advanced frontend architecture, component lifecycles, state management, accessibility, Core Web Vitals optimization, and responsive design systems.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Web Performance"],
  },
  {
    id: "cert-backend",
    title: "Node.js Services & REST API Specialist",
    issuer: "OpenJS Foundation & Linux Foundation",
    category: "Backend",
    issueDate: "2024",
    credentialId: "JSF-NAD-77209",
    verificationUrl: "https://www.credly.com/org/openjs-foundation",
    description:
      "Enterprise backend systems, asynchronous streams, high-concurrency RESTful APIs, JWT role-based security, and microservices architecture.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Microservices"],
  },
  {
    id: "cert-vps",
    title: "Linux Server Administration & VPS Architecture",
    issuer: "Linux Professional Institute (LPIC)",
    category: "VPS",
    issueDate: "2023",
    credentialId: "LPI-VPS-61042",
    verificationUrl: "https://www.lpi.org/verify",
    description:
      "Hostinger VPS setup and management, Ubuntu server hardening, Nginx reverse proxy configuration, PM2 clustering, and automated SSL certs with Certbot.",
    skills: ["Hostinger VPS", "Ubuntu Server", "Nginx", "PM2 Clustering", "SSL / Certbot"],
  },
  {
    id: "cert-aws",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    category: "AWS",
    issueDate: "2024",
    credentialId: "AWS-SAA-83921",
    verificationUrl: "https://aws.amazon.com/verification",
    description:
      "Architecting resilient, cost-effective, and secure cloud infrastructures using EC2, S3, CloudFront CDN, Route 53 DNS, IAM, and VPC networks on AWS.",
    skills: ["AWS EC2", "AWS S3", "CloudFront", "Route 53", "VPC & Security"],
  },
  {
    id: "cert-ai",
    title: "AI-Assisted Software Engineering & Agentic Workflows",
    issuer: "DeepLearning.AI",
    category: "AI Coding",
    issueDate: "2025",
    credentialId: "DLAI-AIC-49170",
    verificationUrl: "https://www.deeplearning.ai/certificates",
    description:
      "Mastery of modern AI-powered engineering: LLM prompt engineering, autonomous coding agents, AI pair programming, Cursor, and automated test synthesis.",
    skills: ["AI Coding", "LLM Integration", "Agentic Workflows", "Cursor / Claude Code", "Prompting"],
  },
  {
    id: "cert-db",
    title: "Database Architecture: PostgreSQL & MongoDB",
    issuer: "MongoDB University & Postgres Professional",
    category: "Database",
    issueDate: "2024",
    credentialId: "DB-SPEC-31950",
    verificationUrl: "https://university.mongodb.com/certificates",
    description:
      "Relational & document database modeling, index tuning, ACID transactions, complex aggregations, Prisma ORM, and low-latency Redis caching.",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis Caching", "Query Optimization"],
  },
  {
    id: "cert-fullstack",
    title: "Professional Full-Stack Developer Certification",
    issuer: "IBM & freeCodeCamp",
    category: "Full-Stack",
    issueDate: "2023",
    credentialId: "IBM-FS-55018",
    verificationUrl: "https://www.credly.com/org/ibm",
    description:
      "End-to-end full-stack software lifecycle: client rendering, REST APIs, database schemas, Docker containerization, and continuous deployment pipelines.",
    skills: ["Next.js", "React", "Node.js", "Docker", "CI/CD Actions"],
  },
];
