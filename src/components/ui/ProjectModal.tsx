"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  X,
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

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
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
      if (event.key === "Escape") {
        onClose();
      }
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
            fixed
            inset-0
            z-[150]
            flex
            items-center
            justify-center
            bg-black/75
            px-4
            py-6
            backdrop-blur-xl
            md:px-8
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
            data-lenis-prevent
            className="
              relative
              flex
              h-full
              max-h-[90vh]
              w-full
              max-w-5xl
              flex-col
              overflow-hidden
              border
              border-white/[0.08]
              bg-charcoal-base
            "
          >
            {/* TOP BAR */}

            <div
              className="
                flex
                shrink-0
                items-center
                justify-between
                border-b
                border-white/[0.08]
                px-6
                py-5
                md:px-10
              "
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-co-rich" />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-sub-rich/45
                  "
                >
                  Project Details
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project"
                className="
                  group
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  text-sub-rich/50
                  transition-colors
                  hover:text-co-rich
                "
              >
                <X
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-90
                  "
                />
              </button>
            </div>

            {/* CONTENT */}

            <div
              className="
                flex-1
                overflow-y-auto
                custom-scrollbar
              "
            >
              <div
                className="
                  px-6
                  py-12
                  md:px-10
                  md:py-16
                  lg:px-16
                "
              >
                {/* HEADER */}

                <motion.header
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.05,
                    duration: 0.45,
                  }}
                >
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-sub-rich/40
                    "
                  >
                    Selected Work
                  </p>

                  <h2
                    className="
                      mt-5
                      max-w-4xl
                      text-5xl
                      font-semibold
                      leading-[0.95]
                      tracking-[-0.055em]
                      text-co-rich
                      md:text-7xl
                    "
                  >
                    {project.title}
                  </h2>

                  <p
                    className="
                      mt-7
                      max-w-2xl
                      text-base
                      leading-8
                      text-sub-rich
                      md:text-lg
                    "
                  >
                    {project.description}
                  </p>
                </motion.header>

                {/* THE IDEA */}

                <ProjectSection label="The Idea">
                  <p
                    className="
                      max-w-3xl
                      text-base
                      leading-8
                      text-sub-rich
                      md:text-lg
                    "
                  >
                    {project.purpose}
                  </p>
                </ProjectSection>

                {/* WHAT I BUILT */}

                <ProjectSection label="What I Built">
                  <div className="divide-y divide-white/[0.07]">
                    {project.features.map(
                      (feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{
                            opacity: 0,
                            x: -10,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.35,
                            delay: index * 0.04,
                          }}
                          className="
                            flex
                            gap-6
                            py-5
                          "
                        >
                          <span
                            className="
                              shrink-0
                              pt-1
                              text-[10px]
                              tracking-[0.15em]
                              text-sub-rich/30
                            "
                          >
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <p
                            className="
                              max-w-3xl
                              text-sm
                              leading-7
                              text-sub-rich
                              md:text-base
                            "
                          >
                            {feature}
                          </p>
                        </motion.div>
                      )
                    )}
                  </div>
                </ProjectSection>

                {/* TECHNOLOGY */}

                <ProjectSection label="Technology">
                  <div
                    className="
                      grid
                      max-w-3xl
                      grid-cols-2
                      gap-x-8
                      gap-y-4
                      sm:grid-cols-3
                    "
                  >
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          text-sm
                          text-co-rich
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </ProjectSection>

                {/* LINKS */}

                <div
                  className="
                    mt-20
                    border-t
                    border-white/[0.08]
                    pt-8
                  "
                >
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-x-8
                      gap-y-5
                    "
                  >
                    <span
                      className="
                        mr-2
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-sub-rich/35
                      "
                    >
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
        mt-20
        grid
        grid-cols-1
        gap-8
        border-t
        border-white/[0.08]
        pt-8
        md:grid-cols-[180px_1fr]
      "
    >
      <span
        className="
          text-[10px]
          font-medium
          uppercase
          tracking-[0.22em]
          text-sub-rich/40
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
        group
        inline-flex
        items-center
        gap-2
        text-sm
        text-co-rich
        transition-colors
        duration-300
        hover:text-sub-rich
      "
    >
      <span>{children}</span>

      <span
        className="
          transition-transform
          duration-300
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
        "
      >
        {icon}
      </span>
    </a>
  );
}