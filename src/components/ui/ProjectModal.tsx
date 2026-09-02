"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  X,
  ChevronRight,
} from "lucide-react";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    purpose: string;
    image: string;
    techStack: string[];
    features: string[];
    documentation: string;
    live: string;
    repo: string;
  } | null;

  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="
            fixed inset-0 z-[150]
            flex items-center justify-center
            bg-black/75
            px-4 py-5
            backdrop-blur-md
            md:px-8
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
            data-lenis-prevent
            className="
            relative flex h-full max-h-[90vh]
            w-full max-w-5xl flex-col
            overflow-hidden
            rounded-2xl
            border border-black/[0.08]
            bg-charcoal-base
            dark:border-white/[0.08]
          "
          >
            {/* TOP BAR */}

            <div
              className="
                flex shrink-0 items-center justify-between
                border-b border-black/[0.08]
                px-5 py-3
                dark:border-white/[0.08]
                md:px-8
              "
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-circuit" />

                <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
                  Project Details
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project"
                className="
                  group flex h-9 w-9 items-center justify-center
                  text-text-muted transition-colors
                  hover:text-co-rich
                "
              >
                <X
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-90"
                />
              </button>
            </div>

            {/* CONTENT */}

            <div className="custom-scrollbar flex-1 overflow-y-auto">
              <div className="px-5 py-8 md:px-10 md:py-10 lg:px-14">
                {/* HEADER */}

                <motion.header
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.45 }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
                    Selected Work
                  </p>

                  <h2
                    className="
                      mt-3 max-w-3xl
                      text-3xl font-semibold
                      leading-tight tracking-[-0.04em]
                      text-black/55
                      dark:text-white/55
                      sm:text-4xl
                      md:text-5xl
                    "
                  >
                    {project.title}
                  </h2>

                  <p
                    className="
                      mt-4 max-w-2xl
                      text-sm leading-7
                      text-text-muted
                      md:text-base
                    "
                  >
                    {project.description}
                  </p>
                </motion.header>

                {/* THE IDEA */}

                <ProjectSection label="The Idea">
                  <p className="max-w-3xl text-sm leading-7 text-text-muted md:text-base">
                    {project.purpose}
                  </p>
                </ProjectSection>

                {/* WHAT I BUILT */}

                <ProjectSection label="What I Built">
                  <div className="space-y-4">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.04,
                        }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1 shrink-0 text-co-rich">
                          <ChevronRight size={16} strokeWidth={1.8} />
                        </span>

                        <p className="max-w-3xl text-sm leading-7 text-text-muted md:text-base">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </ProjectSection>

                {/* TECHNOLOGY */}

                <ProjectSection label="Technology">
                  <div
                    className="
                      grid max-w-3xl
                      grid-cols-2 gap-x-6 gap-y-3
                      sm:grid-cols-3
                    "
                  >
                    {project.techStack.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 text-sm text-text-main"
                      >
                        <span className="h-px w-3 shrink-0 bg-text-muted/50" />
                        {tech}
                      </div>
                    ))}
                  </div>
                </ProjectSection>

                {/* LINKS */}

                <div
                  className="
                    mt-12 border-t
                    border-black/[0.08]
                    pt-6
                    dark:border-white/[0.08]
                  "
                >
                  <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
                      Explore
                    </span>

                    <ProjectLink
                      href={project.live}
                      icon={<ArrowUpRight size={14} />}
                    >
                      Live Project
                    </ProjectLink>

                    <ProjectLink
                      href={project.repo}
                      icon={<Github size={14} />}
                    >
                      GitHub
                    </ProjectLink>

                    <ProjectLink
                      href={project.documentation}
                      icon={<ExternalLink size={14} />}
                    >
                      Documentation
                    </ProjectLink>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

/* ================================================================
   SECTION
================================================================ */

function ProjectSection({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section
      className="
        mt-12 grid grid-cols-1 gap-4
        border-t border-black/[0.08]
        pt-6
        dark:border-white/[0.08]
        md:mt-14
        md:grid-cols-[150px_1fr]
        md:gap-8
      "
    >
      <span
        className="
          text-[10px] font-medium
          uppercase tracking-[0.2em]
          text-text-muted
        "
      >
        {label}
      </span>

      <div>{children}</div>
    </section>
  );
}

/* ================================================================
   LINK
================================================================ */

function ProjectLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: ReactNode;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        group inline-flex items-center gap-2
        text-sm text-co-rich
        transition-colors duration-300
        hover:text-text-main
      "
    >
      <span>{children}</span>

      <span
        className="
          transition-transform duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
        "
      >
        {icon}
      </span>
    </a>
  );
}
