import type { CaseStudyData } from "@/components/case-study/types";
import { cenlume } from "@/lib/case-studies/cenlume";

export const QUADRANTS = [
  { title: "Discover", subtitle: "Where work gets lost or repeated" },
  { title: "Experiment", subtitle: "Small tests before big builds" },
  { title: "Design", subtitle: "The simplest version that solves it" },
  { title: "Ship", subtitle: "Tested and deployed, then watched" },
] as const;

export type Quadrant = (typeof QUADRANTS)[number]["title"];

const YELLOW = "#F9DF6D";
const CORAL = "#F4A28C";
const MINT = "#A7E8C9";
const BLUE = "#A9C4F5";

// Every sticky note on the homepage wall. Add a href to make a note clickable.
export type WallNote = {
  quadrant: Quadrant;
  text: string;
  tag: string;
  href?: string; // any path, e.g. "/articles/muse" or "/case-studies/cenlume"
  color: string;
  rotate: number;
};

export const WALL_NOTES: WallNote[] = [
  {
    quadrant: "Discover",
    text: "I let an AI agent post for me, and approved every word",
    tag: "Article",
    href: "/articles/muse",
    color: CORAL,
    rotate: -2,
  },
  {
    quadrant: "Discover",
    text: "Requests lost in email threads",
    tag: "TeamOp",
    color: MINT,
    rotate: 1.5,
  },
  {
    quadrant: "Discover",
    text: "Wellness tips that ignore workload",
    tag: "Devpulse",
    color: BLUE,
    rotate: 1,
  },
  {
    quadrant: "Discover",
    text: "Approvals with no audit trail",
    tag: "TeamOp",
    color: YELLOW,
    rotate: -1.5,
  },
];

export type CaseStudyEntry = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image?: string;
  data: CaseStudyData;
};

export const caseStudies: CaseStudyEntry[] = [
  {
    slug: "cenlume",
    title: cenlume.title,
    category: "Mobile",
    summary: cenlume.summary,
    image: "/Projects/Cenlume.jpeg",
    data: cenlume,
  },
  // To add a case study: create data/case-studies/<slug>.ts, import it here,
  // and add an entry. To put a note on the wall, add it to WALL_NOTES.
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}