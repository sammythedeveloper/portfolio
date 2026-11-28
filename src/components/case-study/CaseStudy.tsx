"use client";

import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { iconMap, brandColors } from "./icons";
import type { CaseStudyData, IconName } from "./types";

const prose = "text-base leading-relaxed text-text-main/80";
const sectionTitle = "font-serif text-2xl md:text-3xl leading-tight";

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="grid gap-6 border-t border-text-main/10 py-14 md:grid-cols-[180px_1fr] md:gap-12">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted md:pt-1">
        {label}
      </p>
      <div className="min-w-0">{children}</div>
    </Reveal>
  );
}

// Brand icons that are white (like Expo) would disappear on a light background,
// so they fall back to the text color
function NamedIcon({
  name,
  size = 22,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[name];
  const color = brandColors[name];
  const style = color && color !== "#FFFFFF" ? { color } : undefined;
  return <Icon size={size} className={className} style={style} />;
}

function PhoneFrame({
  src,
  alt,
  className = "",
  platform = "android",
}: {
  src: string;
  alt: string;
  className?: string;
  platform?: "ios" | "android";
}) {
  const outer =
    platform === "android" ? "rounded-[1.1rem]" : "rounded-[1.9rem]";
  const inner =
    platform === "android" ? "rounded-[0.95rem]" : "rounded-[1.7rem]";

  return (
    <div
      className={`relative w-[28%] max-w-[170px] shrink-0 md:w-[200px] md:max-w-none ${className}`}
    >
      {/* Side buttons: Android usually has power on the right, volume on the left */}
      <span className="absolute -left-[2px] top-[22%] h-[6%] w-[2px] rounded-l bg-[#2a2e34]" />
      <span className="absolute -left-[2px] top-[32%] h-[9%] w-[2px] rounded-l bg-[#2a2e34]" />
      <span className="absolute -right-[2px] top-[28%] h-[12%] w-[2px] rounded-r bg-[#2a2e34]" />

      {/* Body */}
      <div
        className={`${outer} bg-gradient-to-b from-[#2b2f36] via-[#101216] to-[#1a1d22] p-[3px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]`}
      >
        {/* Screen */}
        <div
          className={`relative aspect-[9/19.5] w-full overflow-hidden ${inner} bg-black`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 200px, 28vw"
            className="object-cover object-top"
          />
          {/* Glass reflection */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default function CaseStudy({ data }: { data: CaseStudyData }) {
  return (
    <article className="min-h-screen bg-second-base text-text-main">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        {/* Top bar */}
        <nav className="flex items-center justify-between py-8 text-sm">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-text-muted transition hover:text-text-main"
          >
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
          <span className="text-text-muted">Case study</span>
        </nav>

        {/* Header */}
        <header className="pb-14 pt-10 md:pt-16">
          <Reveal>
            <h1 className="font-serif text-6xl leading-none tracking-tight md:text-7xl">
              {data.title}
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-6 font-serif text-xl italic md:text-2xl">
              {data.tagline}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
              {data.summary}
            </p>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-6 text-sm">
            {data.liveUrl && (
              <a
                href={data.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 border-b border-text-main pb-0.5 font-medium"
              >
                View live <ArrowUpRight size={14} />
              </a>
            )}
            {data.repoUrl && (
              <a
                href={data.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 border-b border-text-main/30 pb-0.5 font-medium transition hover:border-text-main"
              >
                Pre release <ArrowUpRight size={14} />
              </a>
            )}
          </Reveal>

          <Reveal className="mt-12 grid gap-6 border-t border-text-main/10 pt-6 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                Platform
              </p>
              <p className="mt-2 text-sm">{data.platforms[0]}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                Built with
              </p>
              <p className="mt-2 text-sm">
                {data.platforms.slice(1).join(" · ")}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                Status
              </p>
              <p className="mt-2 text-sm">{data.result.status}</p>
            </div>
          </Reveal>
        </header>

        {/* Phone screenshots */}
        {data.heroImages && (
          <Reveal className="flex items-end justify-center gap-2 pb-6 sm:gap-4 md:gap-8">
            {data.heroImages.map((img, i) => (
              <PhoneFrame
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={i === 1 ? "-translate-y-3 md:-translate-y-8" : ""}
              />
            ))}
          </Reveal>
        )}

        <Section label="Role">
          <p className={prose}>{data.role}</p>
        </Section>

        <Section label="The problem">
          <div className="space-y-4">
            {data.problem.body.map((p, i) => (
              <p key={i} className={prose}>
                {p}
              </p>
            ))}
          </div>
        </Section>

        <Section label="The solution">
          <h2 className={sectionTitle}>{data.solution.intro}</h2>
          <p className={`mt-4 ${prose}`}>{data.solution.body}</p>
          <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            {data.solution.features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="h-px w-4 bg-co-rich" />
                {f}
              </li>
            ))}
          </ul>
        </Section>

        {data.systems && (
          <Section label="Three systems, one app">
            <div className="divide-y divide-text-main/10">
              {data.systems.map((s) => (
                <div key={s.title} className="py-6 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-text-muted`}>
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section label="What makes it different">
          <ul className="divide-y divide-text-main/10">
            {data.differentiators.map((d) => (
              <li
                key={d.title}
                className="grid gap-2 py-5 first:pt-0 last:pb-0 md:grid-cols-[1fr_1.4fr] md:gap-10"
              >
                <p className="font-medium">{d.title}</p>
                <p className="text-sm leading-relaxed text-text-muted">
                  {d.body}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Architecture">
          <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
            {data.architecture.map((node, i) => (
              <Fragment key={node.label}>
                <div className="flex flex-1 flex-col items-center gap-3 rounded-xl border border-text-main/10 p-5 text-center">
                  <NamedIcon name={node.icon} size={26} />
                  <p className="text-sm font-medium">{node.label}</p>
                  <p className="text-xs text-text-muted">{node.sublabel}</p>
                </div>
                {i < data.architecture.length - 1 && (
                  <div className="flex items-center justify-center text-text-muted">
                    <ArrowRight size={18} className="rotate-90 md:rotate-0" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </Section>

        <Section label="Tech stack">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-text-main/10 bg-text-main/10 sm:grid-cols-3">
            {data.stack.map((t) => (
              <li
                key={t.name}
                className="flex flex-col items-center gap-3 bg-second-base p-6 text-center"
              >
                <NamedIcon name={t.icon} size={26} />
                <span className="text-sm font-medium">{t.name}</span>
                {t.sublabel && (
                  <span className="text-xs text-text-muted">{t.sublabel}</span>
                )}
              </li>
            ))}
          </ul>
        </Section>

        {data.delivery && (
          <Section label="Delivery">
            <div className="grid gap-8 md:grid-cols-3">
              {data.delivery.map((d) => (
                <div key={d.title}>
                  <p className="font-medium">{d.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section label="Engineering highlights">
          <ul className="space-y-3 text-sm leading-relaxed">
            {data.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-2.5 h-px w-4 shrink-0 bg-co-rich" />
                {h}
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Results">
          <p className="text-sm font-medium text-co-rich">
            {data.result.status}
          </p>
          <p className={`mt-3 ${prose}`}>{data.result.body}</p>
        </Section>

        {/* Takeaway */}
        <Reveal className="border-t border-text-main/10 py-16">
          <p className="max-w-3xl font-serif text-xl leading-snug md:text-2xl">
            {data.takeaway}
          </p>
        </Reveal>

        <footer className="border-t border-text-main/10 py-10 text-sm text-text-muted">
          <Link href="/#projects" className="transition hover:text-text-main">
            ← Back to portfolio
          </Link>
        </footer>
      </div>
    </article>
  );
}
