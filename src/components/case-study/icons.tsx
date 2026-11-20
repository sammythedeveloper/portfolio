import type { CSSProperties, ElementType } from "react";
import {
  Bell,
  Brain,
  Code,
  Database,
  Layers,
  Network,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
  Zap,
} from "lucide-react";

import {
  SiAndroid,
  SiClerk,
  SiDocker,
  SiExpo,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import type { IconName } from "./types";

type IconProps = {
  size?: number;
  className?: string;
  style?: CSSProperties;
};

// Official AWS logo
function AwsLogo({ size = 24, className, style }: IconProps) {
  return (
    <img
      src="/icons/AWS.svg"
      alt=""
      width={size}
      height={size}
      className={className}
      style={style}
    />
  );
}

export const iconMap: Record<IconName, ElementType> = {
  Android: SiAndroid,
  React: SiReact,
  Expo: SiExpo,
  TypeScript: SiTypescript,
  AWS: AwsLogo,
  Lambda: Zap,
  APIGateway: Network,
  DynamoDB: Database,
  GitHubActions: SiGithubactions,
  Clerk: SiClerk,
  Maestro: Workflow,
  Jest: SiJest,

  // Existing Cenlume icons
  Bell,
  Star,
  Layers,
  Shield: ShieldCheck,

  // DevPulse conceptual icons
  Brain,
  Sparkles,
  Code,

  // DevPulse technology icons
  NextJS: SiNextdotjs,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  TailwindCSS: SiTailwindcss,
  Prisma: SiPrisma,
  Gemini: Sparkles,
  RadixUI: SiRadixui,
  ShadcnUI: SiShadcnui,
  GitHub: SiGithub,
  JavaScript: SiJavascript,
};

export const brandColors: Partial<Record<IconName, string>> = {
  Android: "#3DDC84",
  React: "#61DAFB",
  Expo: "#FFFFFF",
  TypeScript: "#3178C6",
  AWS: "#FF9900",
  Lambda: "#FF9900",
  APIGateway: "#A166FF",
  DynamoDB: "#4053D6",
  GitHubActions: "#2088FF",
  Clerk: "#6C47FF",
  NextJS: "#FFFFFF",
  PostgreSQL: "#4169E1",
  Docker: "#2496ED",
  TailwindCSS: "#06B6D4",
  Prisma: "#5A67D8",
  RadixUI: "#FFFFFF",
  ShadcnUI: "#FFFFFF",
  GitHub: "#FFFFFF",
  JavaScript: "#F7DF1E",
};
