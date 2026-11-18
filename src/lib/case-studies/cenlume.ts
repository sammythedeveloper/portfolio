import type { CaseStudyData } from "@/components/case-study/types";

export const cenlume: CaseStudyData = {
  title: "Cenlume",
  tagline: "Three financial systems. One app.",
  summary:
    "A mobile financial management app that brings personal expense management, shared expense splitting, and bill reminders together in one experience, powered by a serverless AWS backend.",

  role: "Product design and full-stack engineering. I defined the product scope, built the React Native application and serverless backend, implemented automated end-to-end testing, and established the Android release workflow.",

  platforms: ["Android", "React Native", "AWS Serverless", "Clerk"],

  heroImages: [
    {
      src: "/cenlume/signup.png",
      alt: "Cenlume account creation screen",
    },
    {
      src: "/cenlume/dashboard.png",
      alt: "Cenlume expense management dashboard",
    },
    {
      src: "/cenlume/reminder.png",
      alt: "Cenlume payment reminders screen",
    },
  ],

  repoUrl: "https://play.google.com/store/apps/details?id=com.justsam2026.cenlume",

  problem: {
    body: [
      "Personal financial responsibilities are spread across different parts of life: personal spending, shared costs, and recurring bills. Managing them across disconnected tools makes it harder to maintain a clear picture of what is owed and what is due.",
      "People may track their own expenses in one place, coordinate shared costs somewhere else, and rely on separate reminders for upcoming payments.",
    ],
  },

  solution: {
    intro: "Three financial systems, designed to work together.",
    body: "Rather than building another app focused on one financial activity, Cenlume combines personal expense management, shared expense splitting, and bill reminders in a single mobile experience.",
    features: [
      "Track and organize expenses",
      "Manage expense categories",
      "Split shared expenses",
      "Manage bills and reminders",
    ],
  },

  systems: [
    {
      number: "01",
      title: "Expense management",
      description:
        "A dedicated space to record expenses, organize transactions, and understand personal spending without relying on scattered notes or spreadsheets.",
      features: ["Expense tracking", "Categories", "Spending overview"],
    },
    {
      number: "02",
      title: "Shared expense splitting",
      description:
        "Shared costs should not turn into complicated conversations. Cenlume brings expense splitting into the same application, helping people coordinate shared financial responsibilities.",
      features: ["Shared expenses", "Cost allocation", "Split management"],
    },
    {
      number: "03",
      title: "Bills and reminders",
      description:
        "Payment responsibilities are easier to manage when they are visible. Cenlume brings bill management and reminders into the same experience.",
      features: ["Bill management", "Payment reminders", "Expense follow-ups"],
    },
  ],

  differentiators: [
    {
      title: "Three systems in one experience",
      icon: "Layers",
      body: "Personal spending, shared expenses, and payment reminders come together in one application instead of requiring separate tools.",
    },
    {
      title: "Designed around everyday financial responsibilities",
      icon: "Star",
      body: "The product addresses different aspects of managing money, from individual transactions to shared costs and upcoming payments.",
    },
    {
      title: "Connected financial workflows",
      icon: "Bell",
      body: "Expense management, shared financial responsibilities, and reminders are available within the same mobile experience.",
    },
    {
      title: "Serverless AWS infrastructure",
      icon: "Shield",
      body: "The backend uses managed AWS services to handle API requests, application logic, and persistent data storage without maintaining traditional application servers.",
    },
  ],

  architecture: [
    {
      label: "Mobile application",
      sublabel: "React Native · Expo",
      icon: "Android",
    },
    {
      label: "Authentication",
      sublabel: "Clerk",
      icon: "Clerk",
    },
    {
      label: "API layer",
      sublabel: "Amazon API Gateway",
      icon: "APIGateway",
    },
    {
      label: "Serverless backend",
      sublabel: "AWS Lambda · Node.js 24",
      icon: "Lambda",
    },
    {
      label: "Data persistence",
      sublabel: "Amazon DynamoDB",
      icon: "DynamoDB",
    },
  ],

  stack: [
    { name: "React Native", sublabel: "Expo", icon: "React" },
    { name: "TypeScript", icon: "TypeScript" },
    { name: "Expo Router", icon: "React" },
    { name: "Clerk", icon: "Clerk" },
    { name: "AWS", sublabel: "API Gateway · Lambda", icon: "AWS" },
    { name: "DynamoDB", icon: "DynamoDB" },
    {
      name: "Maestro",
      sublabel: "Automated E2E testing",
      icon: "Maestro",
    },
    {
      name: "Jest",
      sublabel: "jest-expo · React Native Testing Library",
      icon: "Jest",
    },
    {
      name: "GitHub Actions",
      sublabel: "CI/CD , Expo EAS  ",
      icon: "GitHubActions",
    },
  ],

  highlights: [
    "Built the mobile application with React Native, Expo, and TypeScript, using Expo Router for navigation.",
    "Implemented authentication with Clerk.",
    "Developed a serverless backend using Amazon API Gateway, AWS Lambda, Node.js 24, and DynamoDB.",
    "Implemented automated end-to-end UI testing with Maestro to automate navigation and interactions across the application.",
    "Established an automated Android build and Google Play submission workflow using GitHub Actions and Expo EAS.",
    "Validated the application on a physical Samsung Galaxy S23 and Google Pixel 8 android devices",
    "Distributed the application through Google Play closed testing.",
  ],

  delivery: [
    {
      title: "Automated end-to-end testing",
      description:
        "Used Maestro to automate UI interactions and navigation through the application, helping validate user journeys beyond individual screens.",
    },
    {
      title: "Physical-device testing",
      description:
        "Tested the Android application on a physical Samsung Galaxy S23 and Google Pixel 8 with there lates android system software to evaluate the actual device experience rather than relying exclusively on emulators.",
    },
    {
      title: "Google Play closed testing",
      description:
        "Distributed Cenlume through the Google Play closed testing track with 12 testers participating in the testing process.",
    },
    {
      title: "CI/CD automation",
      description:
        "Configured GitHub Actions and Expo EAS to automate Android builds and the Google Play submission workflow.",
    },
    {
      title: "Crash logging and diagnostics",
      description:
        "Implemented application logging to capture crash-related information and runtime errors, making it easier to investigate issues and troubleshoot unexpected application behavior.",
    },
    {
      title: "Application analytics",
      description:
        "Implemented analytics to understand application usage and user interactions, providing visibility into how users engage with Cenlume and helping inform future product improvements.",
    },
  ],

  result: {
    status: "In Google Play closed testing",
    body: "Cenlume progressed from development into Google Play closed testing, supported by automated Maestro end-to-end testing, physical-device validation, and an automated Android release workflow.",
    metric: {
      value: "12",
      label: "closed-testing participants",
    },
  },

  takeaway:
    "Cenlume represents an end-to-end product engineering effort: defining a three-system financial management product, building its mobile application and serverless backend, implementing automated E2E testing, and establishing an Android release workflow.",
};
