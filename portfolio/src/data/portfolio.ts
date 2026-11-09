// ============================================================
// PORTFOLIO DATA — Edit everything here. This is the only file
// you need to touch to update your portfolio content.
// ============================================================

export const siteConfig = {
  name: "Farrukh Hussain",
  initials: "FH",
  title: "Full-Stack Developer",
  tagline: "I build fast web products and deploy them at scale.",
  description:
    "Full-stack developer specialising in MERN stack and Next.js. 2+ years shipping production apps on Hostinger VPS and AWS.",
  location: "Pakistan 🇵🇰",
  availableForWork: true,
  email: "bussinessguy5909@gmail.com",
  phone: "+92 349 8115909",
  phoneRaw: "03498115909",
  whatsapp: "https://wa.me/923498115909",
  whatsappNumber: "+92 349 8115909",
  github: "https://github.com/FarrukhHGithub",
  linkedin: "https://linkedin.com/in/farrukh-hussain",
  twitter: "https://twitter.com/farrukh_dev",
  cvUrl: "/cv.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

// ── Skills ────────────────────────────────────────────────────
export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps & Cloud"
  | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
}

export const skills: Skill[] = [
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Next.js", category: "Frontend", icon: "▲" },
  { name: "TypeScript", category: "Frontend", icon: "TS" },
  { name: "Tailwind CSS", category: "Frontend", icon: "🎨" },
  { name: "Framer Motion", category: "Frontend", icon: "✦" },
  { name: "HTML / CSS", category: "Frontend", icon: "🌐" },
  { name: "Node.js", category: "Backend", icon: "🟩" },
  { name: "Express.js", category: "Backend", icon: "🚂" },
  { name: "REST APIs", category: "Backend", icon: "🔌" },
  { name: "JWT / Auth", category: "Backend", icon: "🔐" },
  { name: "Zod", category: "Backend", icon: "✅" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "Prisma ORM", category: "Database", icon: "◆" },
  { name: "Redis", category: "Database", icon: "♦" },
  { name: "AWS EC2", category: "DevOps & Cloud", icon: "☁️" },
  { name: "AWS S3", category: "DevOps & Cloud", icon: "🗄️" },
  { name: "CloudFront", category: "DevOps & Cloud", icon: "🌍" },
  { name: "Route 53", category: "DevOps & Cloud", icon: "📡" },
  { name: "Nginx", category: "DevOps & Cloud", icon: "🔀" },
  { name: "PM2", category: "DevOps & Cloud", icon: "⚙️" },
  { name: "Certbot / SSL", category: "DevOps & Cloud", icon: "🔒" },
  { name: "Git / GitHub", category: "Tools", icon: "🐙" },
  { name: "Docker", category: "Tools", icon: "🐳" },
  { name: "Postman", category: "Tools", icon: "📮" },
  { name: "Figma", category: "Tools", icon: "🖌️" },
  { name: "AI Coding & Agents", category: "Tools", icon: "🤖" },
  { name: "Hostinger VPS", category: "DevOps & Cloud", icon: "🖥️" },
  { name: "Linux / Bash", category: "DevOps & Cloud", icon: "🐧" },
];

// ── Projects ──────────────────────────────────────────────────
export type ProjectCategory = "MERN" | "Next.js" | "Full-Stack";

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  role: string;
  result?: string;
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "E-Commerce Platform",
    summary: "Full-featured online store with real-time inventory and Stripe payments.",
    description:
      "Production-ready e-commerce platform with product catalog, cart, Stripe Checkout, order management, and an admin dashboard. Deployed on AWS EC2 behind CloudFront with automated SSL renewal.",
    category: "MERN",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "AWS EC2"],
    imageUrl: "/projects/ecommerce.png",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/FarrukhHGithub",
    featured: true,
    role: "Solo Developer",
    result: "Processed 1 200+ orders in the first month.",
  },
  {
    id: "p2",
    title: "SaaS Analytics Dashboard",
    summary: "Real-time analytics with multi-tenant support and role-based access.",
    description:
      "Multi-tenant SaaS dashboard built with Next.js App Router, Prisma, and PostgreSQL. Features JWT auth, RBAC, and live chart updates via Server-Sent Events.",
    category: "Next.js",
    stack: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Chart.js"],
    imageUrl: "/projects/dashboard.png",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/FarrukhHGithub",
    featured: true,
    role: "Lead Developer",
    result: "Cut client reporting time by 70 %.",
  },
  {
    id: "p3",
    title: "Real-Estate Listing Portal",
    summary: "Property search with filters — server-side rendered for SEO.",
    description:
      "Next.js 14 portal with server components, ISR, advanced filters, Google Maps integration, and an admin CMS. Hosted on Hostinger VPS with Nginx + PM2.",
    category: "Next.js",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Google Maps"],
    imageUrl: "/projects/realestate.png",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/FarrukhHGithub",
    featured: true,
    role: "Solo Developer",
    result: "Lighthouse score 97 / 100.",
  },
  {
    id: "p4",
    title: "Task Management API",
    summary: "RESTful API with WebSocket notifications, queues, and Swagger docs.",
    description:
      "Node.js / Express API for a task manager. Features JWT auth, BullMQ job queues, Socket.io events, Redis caching, and Swagger / OpenAPI docs.",
    category: "MERN",
    stack: ["Node.js", "Express", "MongoDB", "Redis", "Socket.io", "BullMQ"],
    imageUrl: "/projects/api.png",
    repoUrl: "https://github.com/FarrukhHGithub",
    featured: false,
    role: "Backend Developer",
    result: "Handles 500 req/s at p99 < 50 ms.",
  },
  {
    id: "p5",
    title: "Learning Management System",
    summary: "Course platform with video streaming, quizzes, and progress tracking.",
    description:
      "Full-stack LMS with course builder, S3 video upload + CloudFront streaming, quiz engine, progress tracking, and Stripe subscriptions.",
    category: "Full-Stack",
    stack: ["React", "Node.js", "MongoDB", "AWS S3", "CloudFront", "Stripe"],
    imageUrl: "/projects/lms.png",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/FarrukhHGithub",
    featured: false,
    role: "Full-Stack Developer",
    result: "200 + enrolled students at launch.",
  },
  {
    id: "p6",
    title: "Invoice & Billing SaaS",
    summary: "Generate, send, and track invoices with PDF export and reminders.",
    description:
      "Invoice SaaS with PDF generation via Puppeteer, automated email reminders (Nodemailer), multi-currency support, and a clean revenue dashboard.",
    category: "Full-Stack",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Puppeteer", "Nodemailer"],
    imageUrl: "/projects/invoice.png",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/FarrukhHGithub",
    featured: false,
    role: "Solo Developer",
    result: "Used by 3 small businesses.",
  },
  {
    id: "p7",
    title: "Social Media Scheduler",
    summary: "Schedule posts to multiple platforms from one dashboard.",
    description:
      "MERN app integrating with Twitter, LinkedIn, and Facebook APIs to schedule and auto-publish posts. Background jobs via BullMQ with cron-style scheduling.",
    category: "MERN",
    stack: ["React", "Node.js", "MongoDB", "BullMQ", "Twitter API"],
    imageUrl: "/projects/scheduler.png",
    repoUrl: "https://github.com/FarrukhHGithub",
    featured: false,
    role: "Solo Developer",
  },
  {
    id: "p8",
    title: "Headless CMS Blog",
    summary: "MDX-powered blog with full-text search, tags, and RSS feed.",
    description:
      "Next.js 14 blog using MDX for content, full-text search with Fuse.js, tag filtering, dark mode, RSS feed, sitemap. Lighthouse 100/100.",
    category: "Next.js",
    stack: ["Next.js", "MDX", "TypeScript", "Tailwind CSS", "Fuse.js"],
    imageUrl: "/projects/blog.png",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/FarrukhHGithub",
    featured: false,
    role: "Solo Developer",
    result: "Lighthouse 100 / 100.",
  },
];

// ── Experience ────────────────────────────────────────────────
export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Your Current Company",
    period: "Jan 2024 — Present",
    location: "Remote",
    bullets: [
      "Architected and shipped a Next.js 14 SaaS dashboard used by 30+ clients.",
      "Migrated a legacy monolith to microservices on AWS EC2, cutting infra cost by 35%.",
      "Set up CI/CD with GitHub Actions, Nginx reverse proxy, PM2 clustering, and Certbot SSL.",
      "Mentored two junior devs; led code review and architecture discussions.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Nginx"],
  },
  {
    role: "Web Developer",
    company: "Previous Company / Freelance",
    period: "Jun 2022 — Dec 2023",
    location: "Hybrid",
    bullets: [
      "Delivered 6 client projects (MERN stack) on schedule and within budget.",
      "Built REST APIs consumed by mobile apps — 99.9% uptime over 12 months.",
      "Deployed all projects on Hostinger VPS with Nginx, PM2, and auto-renewing SSL.",
      "Integrated Stripe, PayPal, and SMS gateways for payment flows.",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Hostinger VPS"],
  },
];

// ── Services ──────────────────────────────────────────────────
export interface Service {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

export const services: Service[] = [
  {
    icon: "🖥️",
    title: "Web Application Development",
    description: "End-to-end web apps from idea to production.",
    bullets: [
      "MERN stack & Next.js 14 (App Router)",
      "REST & GraphQL APIs",
      "Real-time features (WebSockets, SSE)",
      "Admin dashboards & CMS",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud & VPS Deployment",
    description: "I get your app live, secure, and fast.",
    bullets: [
      "AWS (EC2, S3, CloudFront, Route 53)",
      "Hostinger VPS — Nginx + PM2 + SSL",
      "Domain setup & DNS management",
      "Zero-downtime deployments",
    ],
  },
  {
    icon: "⚡",
    title: "Performance Optimisation",
    description: "Make existing apps faster and cheaper to run.",
    bullets: [
      "Core Web Vitals & Lighthouse audit",
      "Database query optimisation",
      "CDN & caching strategies",
      "Bundle size reduction",
    ],
  },
  {
    icon: "🔧",
    title: "API Development & Integration",
    description: "Clean, documented, production-grade APIs.",
    bullets: [
      "RESTful API design (OpenAPI / Swagger)",
      "Third-party integrations (Stripe, Twilio, etc.)",
      "Authentication (JWT, OAuth 2.0)",
      "Rate limiting & security hardening",
    ],
  },
];

// ── Testimonials ──────────────────────────────────────────────
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Alex Johnson",
    role: "Product Manager",
    company: "TechStartup Inc.",
    text: "Farrukh delivered the dashboard two weeks ahead of schedule. The code quality was exceptional and deployment was smooth. Highly recommended.",
  },
  {
    name: "Sarah Williams",
    role: "Founder",
    company: "GrowthHQ",
    text: "Finally a developer who handles both the code AND the server. No DevOps handoff needed — he just ships it. Will absolutely work with again.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "DataFlow Labs",
    text: "Farrukh turned a slow legacy app into a snappy Next.js product in 6 weeks. The Lighthouse score went from 44 to 97.",
  },
];

// ── Stats ─────────────────────────────────────────────────────
export const stats = [
  { value: "2+", label: "Years building" },
  { value: "8+", label: "Projects shipped" },
  { value: "99.9%", label: "Avg uptime" },
  { value: "AWS", label: "EC2 · S3 · CF · R53" },
];

// ── Tech stack marquee items ───────────────────────────────────
export const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "Prisma", "Redis", "AWS EC2",
  "AWS S3", "CloudFront", "Hostinger VPS", "Nginx", "PM2", "Docker",
  "Tailwind CSS", "AI Coding", "Framer Motion", "Zod", "JWT", "Stripe",
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
  issuerIcon?: string;
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
    issuerIcon: "🌐",
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
    issuerIcon: "🟩",
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
    issuerIcon: "🐧",
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
    issuerIcon: "☁️",
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
    issuerIcon: "🤖",
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
    issuerIcon: "🍃",
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
    issuerIcon: "⚛️",
    category: "Full-Stack",
    issueDate: "2023",
    credentialId: "IBM-FS-55018",
    verificationUrl: "https://www.credly.com/org/ibm",
    description:
      "End-to-end full-stack software lifecycle: client rendering, REST APIs, database schemas, Docker containerization, and continuous deployment pipelines.",
    skills: ["Next.js", "React", "Node.js", "Docker", "CI/CD Actions"],
  },
];
