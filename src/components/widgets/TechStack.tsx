"use client";

import React from "react";
import { motion } from "framer-motion";

import ReactJs from "@/components/icons/React.svg";
import AWS from "@/components/icons/AWS.svg";
import Git from "@/components/icons/GitHub.svg";
import Postman from "@/components/icons/Postman.svg";
import CSharp from "@/components/icons/CSharp.svg";
import CSS3 from "@/components/icons/CSS3.svg";
import Express from "@/components/icons/Express.svg";
import JavaScript from "@/components/icons/JavaScript.svg";
import HTML5 from "@/components/icons/HTML5.svg";
import TypeScript from "@/components/icons/TypeScript.svg";
import Node from "@/components/icons/Node.js.svg";
import MongoDB from "@/components/icons/MongoDB.svg";
import Docker from "@/components/icons/Docker.svg";
import PostgresSQL from "@/components/icons/PostgresSQL.svg";
import MySQL from "@/components/icons/MySQL.svg";
import Cloud from "@/components/icons/Cloudflare.svg";
import Vercel from "@/components/icons/Vercel.svg";
import Next from "@/components/icons/Next.js.svg";

type Technology = {
  name: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const coreStack: Technology[] = [
  { name: "C#", Icon: CSharp },
  { name: "TypeScript", Icon: TypeScript },
  { name: "JavaScript", Icon: JavaScript },
  { name: "Git", Icon: Git },
  { name: "Express", Icon: Express },
  { name: "Postman", Icon: Postman },
  { name: "Docker", Icon: Docker },
  { name: "Node.js", Icon: Node },
  { name: "HTML5", Icon: HTML5 },
  { name: "CSS3", Icon: CSS3 },
  { name: "NextJs", Icon: Next },
  { name: "MySQL", Icon: MySQL },
];

const alsoUse: Technology[] = [
  { name: "Node", Icon: Node },
  { name: "Express", Icon: Express },
  { name: "Postgres", Icon: PostgresSQL },
  { name: "MongoDB", Icon: MongoDB },
  { name: "Typescr", Icon: TypeScript },
  { name: "React", Icon: ReactJs },
];

const deployRun: Technology[] = [
  { name: "AWS", Icon: AWS },
  { name: "Docker", Icon: Docker },
  { name: "Github", Icon: Git },
  { name: "Render" },
  { name: "Cloud", Icon: Cloud },
  { name: "Vercel", Icon: Vercel },
];

const practices: Technology[] = [
  { name: "Clean Architecture" },
  { name: "API Design" },
  { name: "Debugging & Error Handling" },
  { name: "Database Design" },
  { name: "Schema Migrations" },
  { name: "Authentication & Authorization" },
  { name: "Testing / TDD" },
  { name: "CI/CD" },
  { name: "Observability" },
];

function TechItem({ tech }: { tech: Technology }) {
  const Icon = tech.Icon;

  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 20,
      }}
      className="
        group
        flex
        items-center
        gap-2
        px-2.5
        py-2
        rounded-lg
        bg-black/[0.025] dark:bg-white/[0.025]
        border
        border-black/[0.07] dark:border-white/[0.07]
        hover:border-co-rich/40
        hover:bg-black/[0.045] dark:hover:bg-white/[0.045]
        transition-colors
        duration-300
      "
    >
      {Icon ? (
        <Icon className="w-4 h-4 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-co-rich/60 shrink-0" />
      )}

      <span className="text-xs font-medium text-text-main whitespace-nowrap">
        {tech.name}
      </span>
    </motion.div>
  );
}

function TechModule({
  title,
  description,
  technologies,
  className = "",
  featured = false,
  technologyLayoutClassName = "",
}: {
  title: string;
  description: string;
  technologies: Technology[];
  className?: string;
  featured?: boolean;
  technologyLayoutClassName?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`
        relative
        h-full
        w-full
        rounded-2xl
        border
        uppercase
        border-black/[0.12] dark:border-white/[0.12]
        bg-white/[0.035] dark:bg-white/[0.035]
        backdrop-blur-sm
        shadow-[0_8px_18px_rgba(0,0,0,0.08)]
        dark:shadow-[0_8px_18px_rgba(0,0,0,0.08)]
        hover:shadow-[0_8px_24px_rgba(0,0,0,0.13)]
        dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]
        transition-shadow
        duration-300
        overflow-hidden
        ${featured ? "bg-white/[0.035]" : ""}
        ${className}
      `}
    >
      <div className="relative p-5">
        {/* Label */}
        <div className="flex items-center justify-center text-center mb-2">
          <h3 className="text-lg font-semibold text-text-main text-center">
            {title}
          </h3>
        </div>

        <p className="text-xs text-text-muted mb-4 text-center mx-auto max-w-xs">
          {description}
        </p>

        {/* Technologies */}
        <div className={`flex flex-wrap gap-2.5 ${technologyLayoutClassName}`}>
          {technologies.map((tech) => (
            <TechItem key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CircuitLines() {
  return (
    <svg
      className="
        absolute
        inset-0
        w-full
        h-full
        pointer-events-none
        hidden
        lg:block
      "
      viewBox="0 0 1200 760"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {/* Subtle glow */}
        <filter id="circuitGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* LEFT → CORE */}
      <path
        d="M 270 185
           L 350 185
           L 390 225
           L 470 225"
        fill="none"
        stroke="currentColor"
        className="text-white/[0.10]"
        strokeWidth="1.5"
      />

      <path
        d="M 270 185
           L 350 185
           L 390 225
           L 470 225"
        fill="none"
        stroke="currentColor"
        className="text-circuit/70"
        strokeWidth="1.5"
        strokeDasharray="5 14"
        filter="url(#circuitGlow)"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-38"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      {/* LEFT connection node */}
      <circle
        cx="270"
        cy="185"
        r="4"
        fill="currentColor"
        className="text-circuit/70"
      />

      {/* CORE connection node */}
      <circle
        cx="470"
        cy="225"
        r="4"
        fill="currentColor"
        className="text-circuit/70"
      />

      {/* CORE → RIGHT */}
      <path
        d="M 730 225
           L 810 225
           L 850 185
           L 930 185"
        fill="none"
        stroke="currentColor"
        className="text-white/[0.10]"
        strokeWidth="1.5"
      />

      <path
        d="M 730 225
           L 810 225
           L 850 185
           L 930 185"
        fill="none"
        stroke="currentColor"
        className="text-circuit/70"
        strokeWidth="1.5"
        strokeDasharray="5 14"
        filter="url(#circuitGlow)"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="38"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      {/* RIGHT connection node */}
      <circle
        cx="930"
        cy="185"
        r="4"
        fill="currentColor"
        className="text-circuit/70"
      />

      {/* CORE → BOTTOM LEFT */}
      <path
        d="M 520 445
           L 520 500
           L 460 560
           L 350 560"
        fill="none"
        stroke="currentColor"
        className="text-circuit/70"
        strokeWidth="1.5"
        strokeDasharray="5 14"
        filter="url(#circuitGlow)"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="38"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      <circle
        cx="350"
        cy="560"
        r="4"
        fill="currentColor"
        className="text-circuit/70"
      />

      {/* CORE → BOTTOM RIGHT */}
      <path
        d="M 680 445
           L 680 500
           L 740 560
           L 850 560"
        fill="none"
        stroke="currentColor"
        className="text-circuit/70"
        strokeWidth="1.5"
        strokeDasharray="5 14"
        filter="url(#circuitGlow)"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-38"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      <circle
        cx="850"
        cy="560"
        r="4"
        fill="currentColor"
        className="text-circuit/70"
      />

      {/* Decorative circuit traces */}
      <path
        d="M 70 330 L 130 330 L 160 300"
        fill="none"
        stroke="currentColor"
        className="text-white/[0.05]"
        strokeWidth="1"
      />

      <path
        d="M 1070 330 L 1130 330 L 1160 300"
        fill="none"
        stroke="currentColor"
        className="text-white/[0.05]"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function TechStack() {
  return (
    <section
      id="stack"
      className="
    relative
    py-16 md:py-20
    bg-second-base
    text-text-main
    overflow-hidden
  "
    >
      {/* Background technical grid — unchanged */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.025]
          bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      {/* Ambient center glow — unchanged */}
      <div
        className="
          absolute
          left-1/2
          top-[45%]
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-co-rich/[0.035]
          blur-[120px]
          pointer-events-none
        "
      />

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center mb-12 px-4">
        <p className="text-sm tracking-[0.25em] text-text-muted uppercase mb-4">
          Tech Stack
        </p>

        <h2
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-4xl font-normal tracking-tight text-text-main md:text-5xl"
        >
          Development Toolkit
        </h2>

        <p className="mt-5 text-text-muted text-center max-w-xl leading-relaxed">
          The technologies, infrastructure, and engineering practices that shape
          how I build and ship software.
        </p>
      </div>

      {/* System */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="relative min-h-0 lg:min-h-[740px]">
          {/* Circuit wiring */}
          <CircuitLines />

          {/* Utilize */}
          <div
            className="
              relative
              mt-8
              lg:mt-0
              lg:absolute
              lg:left-0
              lg:top-[-20px]
              w-full
              lg:w-[370px]
              lg:min-h-[240px]
              z-10
            "
          >
            <TechModule
              title="Utilize"
              description="Technologies I’m confident shipping with"
              technologies={alsoUse}
              technologyLayoutClassName="lg:grid lg:grid-cols-3"
            />
          </div>

          {/* DEPLOY & RUN */}
          <div
            className="
              relative
              mt-8
              lg:mt-0
              lg:absolute
              lg:right-0
              lg:top-[-20px]
              w-full
              lg:w-[340px]
              lg:min-h-[240px]
              z-10
            "
          >
            <TechModule
              title="Configure and Run"
              description="The infrastructure behind my projects"
              technologies={deployRun}
              technologyLayoutClassName="lg:grid lg:grid-cols-3"
            />
          </div>

          {/* CORE STACK */}
          <div
            className="
              relative
              mt-2
              lg:mt-0
              lg:absolute
              lg:left-1/2
              lg:top-[250px]
              lg:-translate-x-1/2
              w-full
              lg:w-[520px]
              lg:min-h-[250px]
              z-10
            "
          >
            <TechModule
              title="Core Tech Stack"
              description="My everyday development toolkit"
              technologies={coreStack}
              technologyLayoutClassName="lg:grid lg:grid-cols-4"
              featured
            />
          </div>

          {/* PRACTICES */}
          <div
            className="
              relative
              mt-8
              lg:mt-0
              lg:absolute
              lg:left-1/2
              lg:top-[650px]
              lg:-translate-x-1/2
              w-full
              lg:w-[760px]
              lg:min-h-[180px]
              z-10
            "
          >
            <TechModule
              title="Practices"
              description="Principles that guide how I build"
              technologies={practices}
              technologyLayoutClassName="lg:grid lg:grid-cols-3"
            />
          </div>
        </div>
      </div>

      {/* Bottom technical detail */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 m-10">
        <div className="flex items-center justify-between text-[9px] font-mono tracking-[0.15em] text-text-muted/30 uppercase">
          <span>Learn / Adapt / Elevate</span>

          <div className="hidden md:flex items-center gap-3">
            <span className="w-12 h-px bg-white/[0.08] dark:bg-white/[0.08]" />
            <span className="w-12 h-px bg-white/[0.08] dark:bg-white/[0.08]" />
          </div>

          <span>Build / Ship / Iterate</span>
        </div>
      </div>
    </section>
  );
}
