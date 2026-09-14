"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects } from "@/lib/projects";

type Project = (typeof projects)[number];

const gearSizes = [240, 180, 220, 160, 200, 170];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-charcoal-base text-co-rich"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-12 lg:px-20 lg:py-36">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-co-rich/40" />
            <span className="text-xs uppercase tracking-[0.22em] text-sub-rich/60">
              Selected Work
            </span>
          </div>

          <h5 className="mt-5 max-w-3xl text-[clamp(2.8rem,6vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
            My builds.
          </h5>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-sub-rich md:text-base">
            A collection of applications, systems, and experiments built across
            full-stack development and AI.
          </p>
        </motion.div>

        {/* GEAR SYSTEM */}
        <div className="relative mx-auto max-w-[1050px]">
          {/* CENTRAL AXIS */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.09] to-transparent md:block" />

          <div className="relative space-y-14 md:space-y-20">
            {projects.map((project, index) => {
              const size = gearSizes[index % gearSizes.length];
              const side = index % 2 === 0 ? "left" : "right";

              return (
                <GearProject
                  key={project.title}
                  project={project}
                  index={index}
                  size={size}
                  side={side}
                  hovered={hovered === index}
                  anyHovered={hovered !== null}
                  onHover={() => setHovered(index)}
                  onLeave={() => setHovered(null)}
                  onOpen={() => setSelectedProject(project)}
                />
              );
            })}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-24 flex items-center justify-between border-t border-white/[0.07] pt-7 text-xs uppercase tracking-[0.16em] text-sub-rich/40">
          <span>Things I’ve built</span>
          <span>{String(projects.length).padStart(2, "0")} Projects</span>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GEAR PROJECT
═══════════════════════════════════════════════════════════════ */

function GearProject({
  project,
  index,
  size,
  side,
  hovered,
  anyHovered,
  onHover,
  onLeave,
  onOpen,
}: {
  project: Project;
  index: number;
  size: number;
  side: "left" | "right";
  hovered: boolean;
  anyHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onOpen: () => void;
}) {
  const rotationDirection = index % 2 === 0 ? 1 : -1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={`
        relative flex min-h-[260px] items-center
        ${side === "left" ? "justify-start" : "justify-end"}
      `}
      style={{
        opacity: anyHovered && !hovered ? 0.35 : 1,
        transition: "opacity 0.4s ease",
      }}
    >
      {/* Connection line to axis */}
      <div
        className={`
          absolute top-1/2 hidden h-px w-[18%] bg-white/[0.07] md:block
          ${side === "left" ? "left-[calc(50%-18%)]" : "right-[calc(50%-18%)]"}
        `}
      />

      <motion.button
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onOpen}
        className={`
          group relative flex items-center gap-7 outline-none
          ${side === "left" ? "flex-row" : "flex-row-reverse"}
        `}
      >
        {/* GEAR */}
        <div
          className="relative shrink-0"
          style={{ width: size, height: size }}
        >
          <motion.div
            animate={{
              rotate: hovered
                ? rotationDirection * 720
                : rotationDirection * 360,
            }}
            transition={{
              duration: hovered ? 6 : 28,
              ease: "linear",
              repeat: Infinity,
            }}
            className="h-full w-full"
          >
            <GearSVG active={hovered} />
          </motion.div>

          {/* Center number */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`
                text-[11px] font-medium tracking-[0.18em] transition-colors duration-300
                ${hovered ? "text-co-rich" : "text-sub-rich/50"}
              `}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* INFO */}
        <motion.div
          animate={{
            x: hovered ? (side === "left" ? 10 : -10) : 0,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`
            w-[210px] md:w-[250px]
            ${side === "left" ? "text-left" : "text-right"}
          `}
        >
          <div className="mb-1.5 text-[10px] uppercase tracking-[0.2em] text-sub-rich/45">
            Project {String(index + 1).padStart(2, "0")}
          </div>

          <h3 className="text-xl font-semibold tracking-[-0.035em] text-co-rich md:text-2xl">
            {project.title}
          </h3>

          <p className="mt-2.5 text-[13.5px] leading-relaxed text-sub-rich">
            {project.description}
          </p>

          {project.techStack?.length > 0 && (
            <div
              className={`
      mt-3.5 flex flex-wrap gap-x-2.5 gap-y-1
      ${side === "left" ? "justify-start" : "justify-end"}
    `}
            >
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] uppercase tracking-[0.12em] text-sub-rich/45"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div
            className={`
              mt-4 text-[11px] font-medium uppercase tracking-[0.15em]
              transition-all duration-300
              ${hovered ? "text-co-rich" : "text-co-rich/40"}
            `}
          >
            Explore →
          </div>
        </motion.div>
      </motion.button>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GEAR SVG (cleaner + stronger presence)
═══════════════════════════════════════════════════════════════ */

function GearSVG({ active }: { active: boolean }) {
  const teeth = 16;
  const outer = 46;
  const inner = 37.5;

  const points: string[] = [];

  for (let i = 0; i < teeth; i++) {
    const a1 = (i / teeth) * Math.PI * 2;
    const a2 = ((i + 0.42) / teeth) * Math.PI * 2;
    const a3 = ((i + 0.58) / teeth) * Math.PI * 2;
    const a4 = ((i + 1) / teeth) * Math.PI * 2;

    points.push(
      `${50 + Math.cos(a1) * inner},${50 + Math.sin(a1) * inner}`,
      `${50 + Math.cos(a2) * outer},${50 + Math.sin(a2) * outer}`,
      `${50 + Math.cos(a3) * outer},${50 + Math.sin(a3) * outer}`,
      `${50 + Math.cos(a4) * inner},${50 + Math.sin(a4) * inner}`
    );
  }

  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full overflow-visible"
      style={{ color: "currentColor" }}
    >
      {/* Outer gear body */}
      <polygon
        points={points.join(" ")}
        fill="currentColor"
        fillOpacity={active ? 0.04 : 0.02}
        stroke="currentColor"
        strokeOpacity={active ? 0.45 : 0.16}
        strokeWidth="0.7"
        className="transition-all duration-500"
      />

      {/* Inner ring */}
      <circle
        cx="50"
        cy="50"
        r="29"
        fill="none"
        stroke="currentColor"
        strokeOpacity={active ? 0.28 : 0.1}
        strokeWidth="0.55"
        className="transition-all duration-500"
      />

      {/* Center disc */}
      <circle
        cx="50"
        cy="50"
        r="12"
        fill="currentColor"
        fillOpacity={active ? 0.05 : 0.025}
        stroke="currentColor"
        strokeOpacity={active ? 0.35 : 0.14}
        strokeWidth="0.7"
        className="transition-all duration-500"
      />

      {/* Center hole */}
      <circle
        cx="50"
        cy="50"
        r="3.8"
        fill="currentColor"
        fillOpacity={active ? 0.25 : 0.12}
        className="transition-all duration-500"
      />

      {/* Spokes */}
      {[0, 60, 120].map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="36"
          x2="50"
          y2="64"
          stroke="currentColor"
          strokeOpacity={active ? 0.25 : 0.09}
          strokeWidth="0.65"
          transform={`rotate(${deg} 50 50)`}
          className="transition-all duration-500"
        />
      ))}
    </svg>
  );
}
