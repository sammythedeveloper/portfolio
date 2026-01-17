import type { CSSProperties, ElementType } from "react";
import {
  Bell,
  Database,
  Layers,
  Network,
  ShieldCheck,
  Star,
  Workflow,
  Zap,
} from "lucide-react";
import {
  SiAndroid,
  SiClerk,
  SiExpo,
  SiGithubactions,
  SiReact,
  SiTypescript,
  SiJest,
} from "react-icons/si";
import type { IconName } from "./types";

type IconProps = { size?: number; className?: string; style?: CSSProperties };

// The official AWS logo, served from public/icons/AWS.svg
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
  Bell,
  Star,
  Layers,
  Shield: ShieldCheck,
  Jest: SiJest,
};

// Brand colors, matching the tiles in your image
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
  
};
