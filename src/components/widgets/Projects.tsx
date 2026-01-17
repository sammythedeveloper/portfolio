"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { featuredProjects, type FeaturedProject } from "@/lib/projects";

const COLUMNS = 3;
const INITIAL_ROWS = 1;
const INITIAL_COUNT = COLUMNS * INITIAL_ROWS;

const serif = { fontFamily: "var(--font-serif)" } as const;

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const total = featuredProjects.length;
  const visibleProjects = featuredProjects.slice(0, visibleCount);
  const remaining = total - visibleCount;
  const isExpanded = visibleCount > INITIAL_COUNT;

  return (
    <section
      id="projects"
      className="w-full bg-second-base px-6 py-20 text-text-main md:py-24"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span
            style={serif}
            className="text-4xl font-normal tracking-tight text-text-main md:text-5xl"
          >
            Selected Work
          </span>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
            The products I&apos;ve shipped across mobile, AI, and SaaS.
          </p>
        </motion.div>

        {/* Cards: 3 per row, grows by one row each time "Show more" is clicked */}
        <div className="grid gap-6 md:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % COLUMNS) * 0.1 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Toggle */}
        {(remaining > 0 || isExpanded) && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {remaining > 0 && (
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((count) => Math.min(count + COLUMNS, total))
                }
                className="flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-text-main transition-colors duration-300 hover:bg-black/[0.04] dark:border-white/15 dark:hover:bg-white/[0.06]"
              >
                Show more ({remaining})
                <ChevronDown size={14} strokeWidth={1.5} />
              </button>
            )}

            {isExpanded && (
              <button
                type="button"
                onClick={() => setVisibleCount(INITIAL_COUNT)}
                className="px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-text-muted transition-colors duration-300 hover:text-text-main"
              >
                Show less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-charcoal-base transition-colors duration-300 dark:border-white/10">
      {/* Banner (optional) */}
      {project.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.03]">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-5 p-6">
        {project.meta && (
          <p className="font-mono text-[11px] text-text-muted">
            {project.meta}
          </p>
        )}

        {/* Title row: name on the left, live link on the right */}
        <div className="flex items-center justify-between gap-4">
          <h3
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-3xl leading-none tracking-tight transition-colors duration-300 group-hover:text-co-rich"
          >
            {project.title}
          </h3>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 text-text-main transition-all duration-300 hover:bg-black hover:text-white dark:border-white/15 dark:hover:bg-white dark:hover:text-black"
            >
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </a>
          )}
        </div>

        {/* Body blocks: only the ones that have content */}
        <div className="flex flex-col gap-3.5">
          <Block label="Role" text={project.role} />
          {project.details?.map((detail) => (
            <Block
              key={detail.label}
              label={detail.label}
              text={detail.value}
            />
          ))}
          {project.problem && <Block label="Problem" text={project.problem} />}
          {project.solution && (
            <Block label="Solution" text={project.solution} />
          )}
          {project.result && <Block label="Result" text={project.result} />}
        </div>

        {/* Tech stack (optional) */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="border border-black/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-text-muted dark:border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="mb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-co-rich">
        {label}
      </h4>
      <p className="text-sm leading-snug text-text-muted">{text}</p>
    </div>
  );
}
