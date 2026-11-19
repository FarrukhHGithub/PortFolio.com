// ============================================================
// PROJECTS DATA — Strictly based on CV facts
// Node.js, Express, MongoDB, Next.js Full-Stack Systems
// ============================================================

export type ProjectCategory = "Tour" | "Healthcare" | "Museum";
export type ProjectStatus = "completed" | "in-progress";

export interface ProjectTechStack {
  backend: string[];
  database: string[];
  frontend: string[];
  tools: string[];
}

export interface ApiHighlight {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  route: string;
  purpose: string;
}

export interface DatabaseModel {
  name: string;
  keyFields: string[];
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  client: string;
  status: ProjectStatus;
  duration: string;
  shortDescription: string;
  overview: string;
  problem: string;
  myRole: string;
  features: string[];
  techStack: ProjectTechStack;
  architecture: string;
  apiHighlights: ApiHighlight[];
  databaseModels: DatabaseModel[];
  security: string[];
  challenges: ChallengeSolution[];
  deployment: string;
  results: string[];
  screenshots: ProjectScreenshot[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    slug: "tour-company-website",
    title: "Tour Company Website",
    category: "Tour",
    client: "Netbots SMC Pvt. Ltd.",
    status: "completed",
    duration: "TODO",
    shortDescription:
      "Full-stack tour platform featuring tour packages, itineraries, booking/enquiry management, and an administrative dashboard.",
    overview:
      "A full-stack tour and travel platform built at Netbots SMC Pvt. Ltd. to streamline customer tour exploration and booking inquiries while giving administrators complete control over tour packages, itineraries, and booking requests through a secure dashboard.",
    problem:
      "Managing multi-day tour packages, customizable itinerary schedules, and customer inquiries manually via static channels created overhead for staff and lacked real-time visibility into booking requests.",
    myRole:
      "Full-Stack (MERN & Next.js) Developer — designed and built REST APIs with Node.js and Express using MVC structure, modeled MongoDB schemas with Mongoose, implemented secure JWT-based authentication and admin access control, and built the responsive, SEO-friendly Next.js front end.",
    features: [
      "Dynamic tour package catalog with pricing, duration, and difficulty ratings",
      "Detailed day-wise itinerary displays with interactive highlights",
      "Customer booking and inquiry management system",
      "Protected administrative dashboard for package and inquiry management",
      "Centralized error handling and schema validation across all endpoints",
    ],
    techStack: {
      backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MVC Pattern"],
      database: ["MongoDB", "Mongoose ODM", "Query Optimization"],
      frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      tools: ["Git", "GitHub", "Postman", "Linux / Bash"],
    },
    architecture:
      "Three-tier MVC architecture: Express REST API service with modular controllers and middleware, Mongoose data layer on MongoDB, and an SEO-optimized Next.js client utilizing server-side rendering for package pages.",
    apiHighlights: [
      {
        method: "GET",
        route: "/api/tours",
        purpose: "Fetch all active tour packages with filtering by duration and category",
      },
      {
        method: "GET",
        route: "/api/tours/:id",
        purpose: "Retrieve full package details including day-by-day itineraries",
      },
      {
        method: "POST",
        route: "/api/enquiries",
        purpose: "Submit customer booking inquiries with input sanitization",
      },
      {
        method: "POST",
        route: "/api/admin/login",
        purpose: "Authenticate admin users and issue signed JWT tokens",
      },
      {
        method: "GET",
        route: "/api/admin/enquiries",
        purpose: "Protected endpoint to review and manage all booking requests",
      },
      {
        method: "POST",
        route: "/api/admin/tours",
        purpose: "Create or update tour packages and itineraries with role validation",
      },
    ],
    databaseModels: [
      {
        name: "TourPackage",
        keyFields: ["title", "slug", "durationDays", "price", "description", "itineraryDays", "isActive"],
      },
      {
        name: "Enquiry",
        keyFields: ["customerName", "email", "phone", "tourId", "preferredDate", "passengersCount", "status", "message"],
      },
      {
        name: "AdminUser",
        keyFields: ["name", "email", "passwordHash", "role", "createdAt"],
      },
    ],
    security: [
      "JSON Web Token (JWT) authentication for administrative routes",
      "Role-based access control middleware restricting package mutations to authorized staff",
      "Bcrypt password hashing with salt rounds for admin credentials",
      "Request body sanitization and validation middleware to prevent injection attacks",
      "Centralized error handling middleware preventing stack trace leakage in production",
    ],
    challenges: [
      {
        challenge: "Structuring nested, variable-length daily itinerary data while keeping queries performant.",
        solution: "Designed modular subdocument schemas in Mongoose for daily itinerary schedules, enabling atomic reads of complete tour details without multi-collection joins.",
      },
      {
        challenge: "Ensuring public tour pages achieve high SEO visibility while preserving real-time inquiry submission.",
        solution: "Leveraged Next.js server-side rendering for public tour routes for optimal search engine indexing, coupled with optimized client-side form submissions.",
      },
    ],
    deployment: "Deployed and maintained in production Linux environment with PM2 process manager and Nginx reverse proxy.",
    results: [
      "Successfully delivered and deployed to production, replacing manual offline workflows with an automated booking and inquiry pipeline.",
      "Engineered responsive, SEO-friendly front end that loads fast across mobile and desktop devices.",
      "Streamlined administrative workflows for updating tour packages and tracking customer inquiries.",
    ],
    screenshots: [],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "clinic-healthcare-website",
    title: "Clinic / Healthcare Website",
    category: "Healthcare",
    client: "Freelance",
    status: "completed",
    duration: "TODO",
    shortDescription:
      "Backend API and Next.js front end for services, doctor profiles, appointment/enquiry requests, admin management, and automated email notifications.",
    overview:
      "A complete clinic and healthcare web application delivering patient-facing medical services exploration, doctor profiles, and appointment/enquiry requests, paired with a secure administrative portal and automated email notifications for newly received inquiries.",
    problem:
      "Patients faced difficulties navigating clinical specialties and scheduling inquiries online, while clinic staff had to manually monitor inquiries without instant notifications.",
    myRole:
      "Freelance Full-Stack Developer — built the backend API for services, doctor profiles, and appointment requests, implemented secure admin authentication, validated submissions, integrated automated email notifications for new inquiries, and developed the responsive Next.js front end.",
    features: [
      "Detailed medical services catalog organized by clinical department",
      "Specialist doctor profiles showcasing qualifications, specialties, and schedules",
      "Validated appointment and inquiry submission forms",
      "Automated email notification dispatch upon new inquiry submission",
      "Protected administrative portal for managing staff, services, and incoming requests",
    ],
    techStack: {
      backend: ["Node.js", "Express.js", "REST APIs", "Nodemailer", "JWT Auth"],
      database: ["MongoDB", "Mongoose ODM", "Query Optimization"],
      frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      tools: ["Git", "GitHub", "Postman", "Linux / Bash"],
    },
    architecture:
      "Modular REST API architecture in Node.js and Express with dedicated service layers for notification dispatching and inquiry handling, integrated with a Next.js front end.",
    apiHighlights: [
      {
        method: "GET",
        route: "/api/doctors",
        purpose: "Fetch all active doctor profiles grouped by medical department",
      },
      {
        method: "GET",
        route: "/api/services",
        purpose: "Retrieve clinical services catalog with detailed descriptions",
      },
      {
        method: "POST",
        route: "/api/appointments",
        purpose: "Submit appointment/inquiry requests, trigger validation, and fire email alerts",
      },
      {
        method: "POST",
        route: "/api/admin/auth/login",
        purpose: "Authenticate clinic administrators via secure credentials",
      },
      {
        method: "GET",
        route: "/api/admin/appointments",
        purpose: "Fetch and filter patient inquiries and appointment requests",
      },
      {
        method: "PATCH",
        route: "/api/admin/appointments/:id/status",
        purpose: "Update appointment review status (pending, confirmed, contacted)",
      },
    ],
    databaseModels: [
      {
        name: "Doctor",
        keyFields: ["name", "qualification", "specialization", "department", "availabilityDays", "bio", "isActive"],
      },
      {
        name: "Service",
        keyFields: ["title", "department", "description", "features", "isActive"],
      },
      {
        name: "AppointmentInquiry",
        keyFields: ["patientName", "email", "phone", "doctorId", "serviceId", "preferredDate", "notes", "status"],
      },
      {
        name: "User",
        keyFields: ["email", "passwordHash", "role", "lastLogin"],
      },
    ],
    security: [
      "JWT-based authentication with expiration handling for administrator accounts",
      "Strict input validation on email addresses, phone numbers, and appointment dates",
      "Environment variable protection for email server credentials and database connection strings",
      "CORS policy restriction allowing only authorized domain interactions",
    ],
    challenges: [
      {
        challenge: "Preventing silent inquiry drop-offs and ensuring immediate notification to clinic staff.",
        solution: "Integrated Nodemailer with transactional templates to automatically trigger email notifications to the clinic administrator whenever a patient submits a request.",
      },
      {
        challenge: "Ensuring sensitive patient inquiry inputs are thoroughly sanitized without degrading form usability.",
        solution: "Implemented schema-level validation middleware with comprehensive error mapping returned directly to form inputs.",
      },
    ],
    deployment: "Configured and deployed on production server with environment variable isolation and process monitoring.",
    results: [
      "Automated appointment and enquiry workflow, sending instant alerts to clinic staff.",
      "Provided clean online presentation of medical services and doctor credentials.",
      "Enabled centralized tracking and status management for all patient inquiries.",
    ],
    screenshots: [],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "museum-website",
    title: "Museum Website",
    category: "Museum",
    client: "Freelance",
    status: "completed",
    duration: "TODO",
    shortDescription:
      "Content-managed backend and Next.js front end for exhibits, galleries, and events, with image uploads, pagination, and a protected admin panel.",
    overview:
      "A content-managed museum web platform engineered to catalog historical artifacts, present visual galleries, and publish upcoming events and workshops, supported by an intuitive, protected admin panel with image upload support.",
    problem:
      "The museum lacked a digital catalog to showcase collections and upcoming cultural events, and staff required a simple, secure way to upload images and publish exhibits without touching code.",
    myRole:
      "Freelance Full-Stack Developer — developed the content-managed backend API for exhibits, galleries, and events, implemented multipart image uploads, paginated browsing endpoints, and built the protected administration panel and responsive Next.js front end.",
    features: [
      "Curated exhibits catalog with historical context, era tags, and descriptions",
      "Visual image galleries with responsive grids and high-fidelity views",
      "Event calendar and schedule for upcoming exhibitions and workshops",
      "Multipart file/image upload pipeline with file validation",
      "Server-side pagination and category filtering for heavy collection catalogs",
      "Protected admin panel for creating, editing, and publishing exhibits",
    ],
    techStack: {
      backend: ["Node.js", "Express.js", "Multer", "JWT Auth", "REST APIs"],
      database: ["MongoDB", "Mongoose ODM", "Pagination"],
      frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      tools: ["Git", "GitHub", "Postman", "Linux / Bash"],
    },
    architecture:
      "REST API backend built with Express and Mongoose featuring Multer disk storage middleware for media handling, coupled with a Next.js front end utilizing server-side pagination.",
    apiHighlights: [
      {
        method: "GET",
        route: "/api/exhibits",
        purpose: "Retrieve paginated exhibits with filtering by historical era or category",
      },
      {
        method: "GET",
        route: "/api/galleries",
        purpose: "Fetch image gallery collections with associated metadata",
      },
      {
        method: "GET",
        route: "/api/events",
        purpose: "List upcoming museum exhibitions, talks, and workshop schedules",
      },
      {
        method: "POST",
        route: "/api/admin/exhibits",
        purpose: "Protected endpoint with Multer middleware for creating exhibits and uploading photos",
      },
      {
        method: "PUT",
        route: "/api/admin/exhibits/:id",
        purpose: "Update exhibit details, gallery images, or publication status",
      },
      {
        method: "DELETE",
        route: "/api/admin/exhibits/:id",
        purpose: "Remove an exhibit and its associated asset references",
      },
    ],
    databaseModels: [
      {
        name: "Exhibit",
        keyFields: ["title", "slug", "era", "category", "description", "images", "displayOrder", "isPublished"],
      },
      {
        name: "GalleryItem",
        keyFields: ["caption", "imageUrl", "thumbnailUrl", "exhibitId", "tags"],
      },
      {
        name: "Event",
        keyFields: ["title", "eventDate", "time", "location", "description", "registrationUrl", "isUpcoming"],
      },
      {
        name: "AdminUser",
        keyFields: ["email", "passwordHash", "role", "createdAt"],
      },
    ],
    security: [
      "JWT authentication protecting all administrative content management routes",
      "File upload validation restricting MIME types to safe image formats (JPEG, PNG, WebP) and enforcing size limits",
      "Strict sanitization on rich-text exhibit content to prevent XSS",
      "Rate limiting on public read endpoints to protect asset throughput",
    ],
    challenges: [
      {
        challenge: "Handling image uploads securely while ensuring fast loading for image-heavy exhibit galleries.",
        solution: "Implemented Multer file filtering with size validation on the backend and leveraged Next.js image optimization on the client to render responsive thumbnails and full-size assets efficiently.",
      },
      {
        challenge: "Displaying large numbers of artifacts without degrading API response times or client memory.",
        solution: "Built server-side pagination with limit/skip cursor parameters in MongoDB queries, returning structured pagination metadata.",
      },
    ],
    deployment: "Deployed to production Linux environment with persistent media directories and Nginx static caching.",
    results: [
      "Delivered a fully content-managed platform enabling staff to publish new exhibits and gallery updates independently.",
      "Implemented server-side pagination ensuring rapid catalog load times across collections.",
      "Maintained secure file upload boundaries and protected administrative panel.",
    ],
    screenshots: [],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "tour-company-website-2",
    title: "Tour Company Website 2",
    category: "Tour",
    client: "Freelance",
    status: "in-progress",
    duration: "TODO",
    shortDescription:
      "Backend and Next.js front end for a new tour platform with packages, itineraries, bookings, and an admin dashboard.",
    overview:
      "Currently in active development, this platform expands upon modern travel architecture with modular tour package customization, detailed itinerary timelines, customer booking inquiry flows, and a next-generation administrative dashboard.",
    problem:
      "Client required a modernized web presence tailored for international tourists, offering customizable itineraries, fast mobile inquiry submission, and streamlined back-office booking coordination.",
    myRole:
      "Freelance Full-Stack Developer — architecting and developing the Node.js / Express REST API backend and Next.js front end, modeling MongoDB collections, and engineering administrative dashboard controls for packages and bookings.",
    features: [
      "Modular tour package builder with dynamic pricing tiers and seasonal schedules",
      "Customizable day-by-day itinerary timelines with location tags",
      "Interactive customer booking inquiry workflows with date and group sizing validation",
      "Next-generation administrative dashboard for real-time booking and catalog management",
      "Comprehensive API error handling and input sanitization layer",
    ],
    techStack: {
      backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Validation"],
      database: ["MongoDB", "Mongoose ODM"],
      frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      tools: ["Git", "GitHub", "Postman", "Linux / Bash"],
    },
    architecture:
      "Modular MVC architecture pairing an Express.js REST API with Mongoose ORM/ODM and a high-performance Next.js front end utilizing React Server Components and optimized data fetching.",
    apiHighlights: [
      {
        method: "GET",
        route: "/api/v2/packages",
        purpose: "List all active tour packages with filter parameters",
      },
      {
        method: "GET",
        route: "/api/v2/packages/:slug",
        purpose: "Retrieve detailed itinerary, pricing tiers, and availability",
      },
      {
        method: "POST",
        route: "/api/v2/bookings/inquire",
        purpose: "Process customer booking inquiries with payload sanitization",
      },
      {
        method: "POST",
        route: "/api/v2/admin/auth/token",
        purpose: "Issue administrative authentication credentials",
      },
      {
        method: "GET",
        route: "/api/v2/admin/bookings",
        purpose: "Retrieve and update customer reservation statuses",
      },
    ],
    databaseModels: [
      {
        name: "Package",
        keyFields: ["name", "slug", "duration", "pricingTiers", "itinerary", "status", "maxParticipants"],
      },
      {
        name: "BookingInquiry",
        keyFields: ["leadPassenger", "contactEmail", "contactPhone", "packageId", "targetDate", "groupSize", "state"],
      },
      {
        name: "AdminStaff",
        keyFields: ["username", "email", "hashedPassword", "permissions"],
      },
    ],
    security: [
      "Role-based authorization middleware verifying granular administrative privileges",
      "Payload sanitization avoiding NoSQL query injection vulnerabilities",
      "Standardized JWT token lifecycle with secure HTTP-only cookies",
      "CORS and rate-limiting controls across public inquiry endpoints",
    ],
    challenges: [
      {
        challenge: "Supporting flexible itinerary timelines that adapt to seasonal package variants.",
        solution: "Architected a polymorphic timeline schema in Mongoose allowing dynamic stops, activities, and seasonal adjustments per package.",
      },
      {
        challenge: "Maintaining consistent response latency across mobile networks for international tourists.",
        solution: "Optimized REST response payloads to trim redundant data and implemented server component streaming in Next.js.",
      },
    ],
    deployment: "Staging deployment pipeline on Linux VPS with PM2 process manager and automatic SSL renewal.",
    results: [
      "Backend architecture and core REST API endpoints established and tested.",
      "Front-end package browsing and responsive itinerary components implemented.",
      "In active development towards production release.",
    ],
    screenshots: [],
    liveUrl: "#",
    githubUrl: "#",
  },
];

