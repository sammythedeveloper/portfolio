export type ProjectDetail = {
  label: string;
  value: string;
};

export type FeaturedProject = {
  title: string;
  meta?: string; // small line above the title, e.g. "Evangadi Network · 2024"
  role: string;
  problem?: string;
  solution?: string;
  result?: string;
  details?: ProjectDetail[]; // any extra labeled fields, shown after Role
  image?: string;
  techStack?: string[];
  live?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Cenlume",
    role: "Full-Stack Mobile Developer",
    problem:
      "Managing personal expenses, shared costs, and recurring bills across separate tools makes it difficult to keep financial responsibilities organized.",
    solution:
      "Built a mobile application that combines expense management, shared expense splitting, and bill reminders in one experience.",
    result:
      "Delivered an Android application with three integrated financial systems, AWS serverless infrastructure, and Google Play closed testing with 12 testers.",
    image: "/case-studies/Projects/Cenlume.jpeg",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Clerk",
      "AWS API Gateway",
      "AWS Lambda",
      "DynamoDB",
      "Maestro",
      "GitHub Actions",
      "EAS",
    ],
    live: "https://play.google.com/store/apps/details?id=com.justsam2026.cenlume",
  },
  {
    title: "TeamOp",
    role: "Full-Stack Developer",
    problem:
      "Employee requests and approval processes often get scattered across emails, chats, and spreadsheets, making them difficult to manage and track.",
    solution:
      "Built a multi-tenant SaaS platform that centralizes employee requests, approval workflows, and organization management in one workspace.",
    result:
      "Delivered a full-stack platform with role-based access, request lifecycle management, secure invitations, audit tracking, and subscription-based feature controls.",
    image: "/case-studies/Projects/TeamOp.png",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Azure Web service",
      "Azure Function",
      "Clerk",
    ],
    live: "https://teamopfn21002.z22.web.core.windows.net/",
  },
  {
    title: "Devpulse",
    role: "Full-Stack Developer",
    problem:
      "Generic developer wellness advice often ignores individual workloads, coding habits, and stress levels, making recommendations less relevant.",
    solution:
      "Built an AI-powered assistant that processes developer telemetry through rule-based retrieval and Gemini to generate personalized, context-aware recommendations.",
    result:
      "Delivered a full-stack AI application with four or more telemetry signals, session-isolated conversations, and automated CI/CD with testing and production-build validation.",
    image: "/case-studies/Projects/Devpulse.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "AWS Amplify",
      "Docker",
      "Gemini",
      "GitHub Actions",
      "Jest",
    ],
    live: "https://main.d32a0gc1jhgn6.amplifyapp.com/",
  },
  {
    title: "Evangadi Tech E-Learning Platform",
    meta: "Evangadi Network · 2024",
    role: "Full-Stack Developer",
    details: [
      {
        label: "Contribution",
        value:
          "Integrated REST API endpoints with backend services and databases, built 10+ reusable React components, and added custom React hooks to manage data fetching and application state.",
      },
    ],
    image: "/case-studies/Projects/evangadi.png",
    solution:
      "Created 20+ Cypress end-to-end test suites covering checkout and user interaction workflows.",
    result:
      "Improved API integration and made the platform more interactive for users.",
    live: "https://evangadi.com/",
  },
];
