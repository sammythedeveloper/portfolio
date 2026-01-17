export type IconName =
  | "Android"
  | "React"
  | "Expo"
  | "TypeScript"
  | "AWS"
  | "Lambda"
  | "APIGateway"
  | "DynamoDB"
  | "GitHubActions"
  | "Clerk"
  | "Maestro"
  | "Jest"
  | "Bell"
  | "Star"
  | "Layers"
  | "Shield";

export type CaseStudyData = {
  title: string;
  tagline: string;
  summary: string;
  role: string;
  platforms: string[];
  heroImages?: { src: string; alt: string }[];
  liveUrl?: string;
  repoUrl?: string;
  problem: { body: string[] };
  solution: { intro: string; body: string; features: string[] };
  systems?: {
    number: string;
    title: string;
    description: string;
    features: string[];
  }[];
  differentiators: { title: string; icon: IconName; body: string }[];
  architecture: { label: string; sublabel: string; icon: IconName }[];
  stack: { name: string; sublabel?: string; icon: IconName }[];
  highlights: string[];
  delivery?: { title: string; description: string }[];
  result: {
    status: string;
    body: string;
    metric?: { value: string; label: string };
  };
  takeaway: string;
};
