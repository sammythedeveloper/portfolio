// components/case-study/CaseStudy.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Code2,
  ExternalLink,
  Layers,
  Lightbulb,
  Rocket,
  Sparkles,
  Star,
  Trophy,
  Wrench,
  Zap,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

export type ArchitectureNode = {
  label: string;
  sublabel: string;
  icon: LucideIcon;
};

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
  differentiators: { title: string; icon: LucideIcon; body: string }[];
  architecture: ArchitectureNode[];
  stack: { name: string; sublabel?: string; icon: LucideIcon }[];
  highlights: string[];
  result: {
    status: string;
    body: string;
    metric?: { value: string; label: string };
  };
  takeaway: string;
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" },
} as const;

const ACCENT = "text-violet-600";
const ACCENT_BG = "bg-violet-600/10";

function LightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      {...fadeUp}
      className={`rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm md:p-7 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function DarkCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      {...fadeUp}
      className={`rounded-2xl bg-[#14142b] p-6 text-white shadow-lg md:p-7 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({
  icon: Icon,
  title,
  dark = false,
}: {
  icon: LucideIcon;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
          dark ? "bg-violet-500/20 text-violet-300" : `${ACCENT_BG} ${ACCENT}`
        }`}
      >
        <Icon size={18} />
      </span>
      <h3
        className={`text-lg font-semibold tracking-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h3>
    </div>
  );
}

export default function CaseStudy({ data }: { data: CaseStudyData }) {
  return (
    <article className="min-h-screen bg-[#0b0b1a] text-slate-900">
      {/* HERO (dark, with purple glow) */}
      <section className="relative overflow-hidden bg-[#0b0b1a] pb-40 pt-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_20%,rgba(124,58,237,0.35),transparent_70%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <motion.div {...fadeUp} className="space-y-5">
            <div className="flex items-center gap-3">
              <Sparkles className="text-violet-400" size={36} />
              <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
                {data.title}
              </h2>
            </div>
            <p className="text-2xl text-slate-200">{data.tagline}</p>
            <p className="max-w-md text-slate-400">{data.summary}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {data.platforms.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-200"
                >
                  {p}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {data.liveUrl && (
                <a
                  href={data.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
                >
                  View live <ExternalLink size={14} />
                </a>
              )}
              {data.repoUrl && (
                <a
                  href={data.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Source code <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Phone screenshots */}
          {data.heroImages && (
            <motion.div
              {...fadeUp}
              className="relative flex justify-center md:justify-end"
            >
              {data.heroImages.slice(0, 2).map((img, i) => (
                <div
                  key={img.src}
                  className={`relative aspect-[9/19] w-56 overflow-hidden rounded-[2.2rem] border-[6px] border-slate-800 bg-slate-900 shadow-2xl ${
                    i === 1 ? "-ml-16 mt-16" : ""
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="224px"
                  />
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* LIGHT PANEL overlapping hero */}
      <div className="relative -mt-28 rounded-t-[2.5rem] bg-slate-50 px-6 pb-16 pt-12">
        <div className="mx-auto max-w-6xl space-y-6">
          {/* Role */}
          <LightCard className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              My role
            </span>
            <p className="text-slate-700 md:text-right">{data.role}</p>
          </LightCard>

          {/* Problem + Solution */}
          <div className="grid gap-6 md:grid-cols-2">
            <LightCard>
              <SectionTitle icon={AlertCircle} title="The problem" />
              <div className="space-y-3 text-slate-600">
                {data.problem.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </LightCard>

            <LightCard>
              <SectionTitle icon={Lightbulb} title="The solution" />
              <p className="font-medium text-slate-900">
                {data.solution.intro}
              </p>
              <p className="mt-2 text-slate-600">{data.solution.body}</p>
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {data.solution.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle2 size={16} className={ACCENT} />
                    {f}
                  </li>
                ))}
              </ul>
            </LightCard>
          </div>

          {/* Differentiators */}
          <LightCard>
            <SectionTitle icon={Star} title="What makes it different" />
            <div className="grid gap-4 sm:grid-cols-2">
              {data.differentiators.map((d) => (
                <div
                  key={d.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <d.icon size={18} className={`mb-2 ${ACCENT}`} />
                  <p className="font-medium text-slate-900">{d.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{d.body}</p>
                </div>
              ))}
            </div>
          </LightCard>

          {/* Architecture */}
          <LightCard>
            <SectionTitle icon={Layers} title="Technical architecture" />
            <p className="mb-6 text-sm text-slate-600">
              A serverless architecture for performance and security.
            </p>
            <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
              {data.architecture.map((node, i) => (
                <div
                  key={node.label}
                  className="flex flex-1 items-center gap-3 md:flex-col md:gap-2"
                >
                  <div className="flex w-full flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 md:flex-col md:text-center">
                    <node.icon size={22} className={ACCENT} />
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {node.label}
                      </p>
                      <p className="text-xs text-slate-500">{node.sublabel}</p>
                    </div>
                  </div>
                  {i < data.architecture.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="shrink-0 rotate-90 text-slate-400 md:rotate-0"
                    />
                  )}
                </div>
              ))}
            </div>
          </LightCard>

          {/* Tech stack */}
          <LightCard>
            <SectionTitle icon={Wrench} title="Tech stack" />
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
              {data.stack.map((t) => (
                <li
                  key={t.name}
                  className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 text-center"
                >
                  <t.icon size={22} className={ACCENT} />
                  <span className="text-sm font-medium text-slate-900">
                    {t.name}
                  </span>
                  {t.sublabel && (
                    <span className="text-xs text-slate-500">{t.sublabel}</span>
                  )}
                </li>
              ))}
            </ul>
          </LightCard>

          {/* Dark highlight + result cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <DarkCard>
              <SectionTitle icon={Code2} title="Engineering highlights" dark />
              <ul className="space-y-3">
                {data.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-slate-200">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-violet-400"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </DarkCard>

            <DarkCard>
              <SectionTitle
                icon={Rocket}
                title="Results and current status"
                dark
              />
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-300">
                <Zap size={12} /> {data.result.status}
              </span>
              <p className="mt-4 text-slate-300">{data.result.body}</p>
              {data.result.metric && (
                <div className="mt-6 inline-flex flex-col rounded-xl border border-white/10 bg-black/30 px-5 py-3">
                  <span className="text-2xl font-bold">
                    {data.result.metric.value}
                  </span>
                  <span className="text-xs text-slate-400">
                    {data.result.metric.label}
                  </span>
                </div>
              )}
            </DarkCard>
          </div>

          {/* Takeaway */}
          <LightCard className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Trophy size={20} className={ACCENT} />
              <h3 className="text-lg font-semibold text-slate-900">
                Key takeaway
              </h3>
            </div>
            <p className="max-w-xl text-slate-600">{data.takeaway}</p>
          </LightCard>
        </div>
      </div>
    </article>
  );
}
