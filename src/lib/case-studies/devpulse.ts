import type { CaseStudyData } from "@/components/case-study/types";

export const devpulse: CaseStudyData = {
  title: "DevPulse AI",
  tagline: "Developer wellness, powered by context.",
  summary:
    "A context-aware developer wellness platform that combines telemetry-driven logic, rule-based retrieval, and Gemini AI to generate personalized wellness protocols based on individual workload patterns and user state.",

  role: "Product architecture and full-stack engineering. I designed the application architecture, implemented telemetry-driven processing, developed the rule-based retrieval workflow, integrated Gemini AI, and established automated testing and CI/CD pipelines.",

  platforms: ["Web", "Next.js", "Gemini AI", "PostgreSQL"],


  repoUrl: "https://github.com/sammythedeveloper/hassistance",

  problem: {
    body: [
      "Software developers often work through demanding schedules, extended coding sessions, and changing workloads. However, generic wellness recommendations rarely account for the context behind an individual's working conditions.",
      "A conventional chatbot can generate general wellness advice, but without structured contextual information, its recommendations may not reflect the user's actual workload patterns or current state.",
      "The challenge was to build a system that could combine developer telemetry, predefined contextual rules, and generative AI to produce more relevant and personalized wellness guidance.",
    ],
  },

  solution: {
    intro:
      "Wellness recommendations should understand the developer's context.",
    body: "DevPulse AI combines structured user inputs, telemetry-driven processing, and rule-based retrieval with Gemini AI. Instead of sending an isolated question to an LLM, the application builds a contextual prompt using relevant information collected and processed by the system.",
    features: [
      "Contextual developer wellness assessments",
      "Telemetry-driven workload categorization",
      "Rule-based retrieval of relevant wellness guidance",
      "Gemini-powered personalized responses",
      "Persistent conversation history",
    ],
  },

  systems: [
    {
      number: "01",
      title: "Developer telemetry",
      description:
        "The application collects contextual information about the developer's working conditions, including coding duration, workload patterns, self-reported stress indicators, and current user state.",
      features: [
        "Coding duration",
        "Workload patterns",
        "Self-reported stress indicators",
        "User state assessment",
      ],
    },
    {
      number: "02",
      title: "Contextual processing and retrieval",
      description:
        "Collected telemetry is evaluated against predefined rules to categorize relevant metrics and retrieve corresponding wellness guidance. This deterministic layer provides structured context before the information reaches the language model.",
      features: [
        "Telemetry categorization",
        "Predefined rule evaluation",
        "Contextual retrieval",
        "Structured prompt preparation",
      ],
    },
    {
      number: "03",
      title: "AI-powered wellness protocols",
      description:
        "The application combines the user's original question with processed telemetry and retrieved guidance to construct a contextual prompt. Gemini uses this information to generate a personalized wellness response.",
      features: [
        "Gemini AI integration",
        "Context-aware prompt engineering",
        "Personalized wellness responses",
        "Session-based conversation history",
      ],
    },
  ],

  differentiators: [
    {
      title: "Context before generation",
      icon: "Brain",
      body: "The application processes developer telemetry before invoking the LLM, giving the model structured information rather than relying exclusively on a general user question.",
    },
    {
      title: "Deterministic retrieval layer",
      icon: "Layers",
      body: "Predefined rules categorize telemetry and identify relevant wellness guidance before prompt construction, separating application logic from probabilistic AI generation.",
    },
    {
      title: "Context-aware AI interactions",
      icon: "Sparkles",
      body: "Gemini receives the user's question alongside relevant contextual information, helping generate responses that are more aligned with individual circumstances.",
    },
    {
      title: "Unified full-stack architecture",
      icon: "Code",
      body: "Next.js Server Actions connect client interactions with server-side operations, keeping application logic within a unified full-stack architecture.",
    },
  ],

  architecture: [
    {
      label: "Application interface",
      sublabel: "Next.js · React · TypeScript",
      icon: "React",
    },
    {
      label: "Server-side operations",
      sublabel: "Next.js Server Actions",
      icon: "TypeScript",
    },
    {
      label: "Contextual processing",
      sublabel: "Telemetry · Rule-based retrieval",
      icon: "Layers",
    },
    {
      label: "AI integration",
      sublabel: "Gemini · Context-aware prompts",
      icon: "Star",
    },
    {
      label: "Data persistence",
      sublabel: "Prisma · PostgreSQL",
      icon: "DynamoDB",
    },
  ],

  stack: [
    { name: "Next.js", sublabel: "Full-stack framework", icon: "React" },
    { name: "TypeScript", icon: "TypeScript" },
    { name: "React", icon: "React" },
    { name: "Prisma", sublabel: "ORM · Schema migrations", icon: "Layers" },
    { name: "PostgreSQL", icon: "DynamoDB" },
    { name: "Google Gemini", sublabel: "LLM integration", icon: "Star" },
    { name: "Docker", sublabel: "Local database environment", icon: "AWS" },
    { name: "Tailwind CSS", icon: "React" },
    { name: "Radix UI", sublabel: "Accessible UI primitives", icon: "React" },
    { name: "shadcn/ui", sublabel: "Component patterns", icon: "React" },
    { name: "Jest", sublabel: "Unit testing", icon: "Jest" },
    {
      name: "GitHub Actions",
      sublabel: "CI/CD automation",
      icon: "GitHubActions",
    },
  ],

  highlights: [
    "Designed a unified full-stack architecture using Next.js and Server Actions instead of introducing unnecessary separate API layers.",
    "Implemented structured telemetry processing using coding duration, workload patterns, and self-reported user indicators.",
    "Developed a predefined rule-based retrieval layer to categorize contextual metrics and identify relevant wellness guidance.",
    "Integrated Google's Gemini model using context-aware prompt construction.",
    "Implemented conversation persistence using Prisma and PostgreSQL, with session-based conversation isolation.",
    "Built a composable frontend architecture using Radix UI primitives, shadcn/ui patterns, and Tailwind CSS.",
    "Containerized the local PostgreSQL development environment using Docker.",
    "Established a GitHub Actions CI pipeline to install dependencies, generate the Prisma client, execute Jest tests, and build the Next.js application.",
  ],

  delivery: [
    {
      title: "Full-stack application architecture",
      description:
        "Organized frontend interactions and server-side operations within a unified Next.js application using Server Actions to reduce unnecessary API-layer complexity.",
    },
    {
      title: "Telemetry-driven processing",
      description:
        "Implemented a contextual processing workflow that evaluates developer inputs against predefined rules before preparing information for AI generation.",
    },
    {
      title: "Gemini AI integration",
      description:
        "Integrated Gemini through structured prompts containing the original user question, relevant telemetry, contextual categories, and retrieved wellness guidance.",
    },
    {
      title: "Database and environment management",
      description:
        "Used Prisma and PostgreSQL for persistent application data, with Docker supporting the local database environment and Aiven providing managed PostgreSQL infrastructure.",
    },
    {
      title: "Automated testing",
      description:
        "Integrated Jest into the development workflow to execute unit tests and help validate application logic.",
    },
    {
      title: "Continuous integration",
      description:
        "Configured GitHub Actions to install dependencies, generate Prisma Client, run automated tests, and build the Next.js application on pushes and pull requests.",
    },
  ],

  result: {
    status: "AI-powered application",
    body: "DevPulse AI brings together a full-stack application architecture, telemetry-driven processing, deterministic contextual retrieval, and Gemini integration. The project demonstrates how application-level engineering can provide structure and context around generative AI rather than relying on the language model alone.",
    metric: {
      value: "5",
      label: "core architectural layers",
    },
  },

  takeaway:
    "DevPulse AI represents an applied AI engineering project focused on building the system around the model. By combining structured telemetry, rule-based retrieval, context-aware prompting, and a unified full-stack architecture, I explored how traditional software engineering principles can support more relevant and controlled AI-powered experiences.",
};
