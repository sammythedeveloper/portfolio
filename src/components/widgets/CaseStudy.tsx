"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

const serif = {
  fontFamily: "var(--font-instrument-serif), Georgia, serif",
} as const;

// Reading list on the left. Add more articles here.
const readings = [
  {
    title: "Letting Muse post for me",
    category: "Article",
    href: "/articles/muse",
  },
];

type Note = {
  text: string;
  tag: string;
  slug?: string; // links to /case-studies/[slug]
  href?: string; // links to any other path, such as /articles/muse
  color: string;
  rotate: number;
};

type Quadrant = {
  title: string;
  subtitle: string;
  notes: Note[];
};

const YELLOW = "#F9DF6D";
const CORAL = "#F4A28C";
const MINT = "#A7E8C9";
const BLUE = "#A9C4F5";

// Replace these notes with real observations from your own work.
const quadrants: Quadrant[] = [
  {
    title: "Discover my case-studies",
    subtitle: "Where work gets lost or repeated",
    notes: [
      {
        text: "Expenses split across three apps",
        tag: "Cenlume",
        slug: "cenlume",
        color: CORAL,
        rotate: -2,
      },
      {
        text: "Requests lost in email threads",
        tag: "Soon",
        slug: "teamop",
        color: MINT,
        rotate: 1.5,
      },
      {
        text: "Wellness tips that ignore workload",
        tag: "Devpulse",
        slug: "Soon",
        color: BLUE,
        rotate: 1,
      },
      {
        text: "Approvals with no audit trail",
        tag: "TeamOp",
        slug: "Soon",
        color: YELLOW,
        rotate: -1.5,
      },
    ],
  },
];

export default function CaseStudy() {
  const availableSlugs = new Set(caseStudies.map((s) => s.slug));

  return (
    <section
      id="case-study"
      className="w-full bg-second-base px-6 py-20 text-text-main md:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1600px] items-start gap-16 lg:grid-cols-2 lg:gap-20">
        {/* LEFT: why and how */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-text-muted">
            Case studies
          </p>

          <h2
            style={serif}
            className="mt-5 text-5xl leading-[1.05] tracking-tight md:text-6xl"
          >
            Find the problem.
            <br />
            Test the idea.
            <br />
            <span className="text-text-muted">Then build.</span>
          </h2>

          <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-text-muted">
            <p>
              I write case studies because the reasoning matters more than the
              screens. A product shows what it does. A case study shows why I
              built it that way, and what I got wrong along the way.
            </p>
            <p>
              I start by looking for the places where people repeat steps,
              juggle tools, or lose track of work. I write those observations
              down before I think about solutions, so I don&apos;t build the
              wrong thing quickly.
            </p>
            <p>
              Then I test the riskiest assumption with the smallest build I can,
              compare the options, and keep the one that solves the problem with
              the least complexity.
            </p>
          </div>

          {/* Reading list */}
          <div className="mt-12 border-t border-black/10 pt-8 dark:border-white/10">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">
              Read the article
            </p>
            <ul className="flex flex-col">
              {readings.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between border-b border-black/10 py-4 transition-colors hover:text-text-main dark:border-white/10"
                  >
                    <span style={serif} className="text-2xl">
                      {item.title}
                    </span>
                    <span className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-text-muted">
                      {item.category}
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* RIGHT: the sticky wall, aligned to the right edge */}
        <div className="flex w-full justify-end">
          <div className="w-full max-w-2xl">
            {quadrants.map((quadrant, qIndex) => (
              <motion.div
                key={quadrant.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: qIndex * 0.1 }}
              >
                {/* Header badge */}
                <div className="inline-block max-w-full bg-[#111] px-5 py-3.5 text-[#F4F3EF] dark:bg-[#F4F3EF] dark:text-[#111]">
                  <p className="text-base font-semibold">{quadrant.title}</p>
                  <p className="mt-0.5 text-sm opacity-80">
                    {quadrant.subtitle}
                  </p>
                </div>

                {/* Notes */}
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {quadrant.notes.map((note, nIndex) => {
                    const isLinked = note.slug ? availableSlugs.has(note.slug) : false;
                    const delay = qIndex * 0.1 + nIndex * 0.05;

                    const noteBody = (
                      <>
                        <p style={serif} className="text-xl leading-snug">
                          {note.text}
                        </p>
                        <div className="mt-6 flex items-center justify-between">
                          <p className="text-xs font-medium opacity-70">
                            {note.tag}
                          </p>
                          {isLinked && (
                            <ArrowUpRight
                              size={16}
                              strokeWidth={1.5}
                              className="opacity-0 transition-opacity duration-300 group-hover:opacity-70"
                            />
                          )}
                        </div>
                      </>
                    );

                    const noteClasses =
                      "group relative flex min-h-[180px] flex-col justify-between p-6 text-[#1a1a1a] shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out [transform:rotate(var(--rot))] hover:z-10 hover:-translate-y-2 hover:scale-[1.04] hover:[transform:rotate(0deg)] hover:shadow-[0_18px_32px_rgba(0,0,0,0.22)] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111] focus-visible:ring-offset-2";

                    const noteStyle = {
                      backgroundColor: note.color,
                      "--rot": `${note.rotate}deg`,
                    } as CSSProperties;

                    return (
                      <motion.div
                        key={note.text}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay }}
                      >
                        {isLinked ? (
                          <Link
                            href={`/case-studies/${note.slug}`}
                            aria-label={`Read the ${note.tag} case study: ${note.text}`}
                            style={noteStyle}
                            className={noteClasses}
                          >
                            {noteBody}
                          </Link>
                        ) : (
                          <div style={noteStyle} className={noteClasses}>
                            {noteBody}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
