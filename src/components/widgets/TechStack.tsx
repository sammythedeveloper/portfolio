"use client";

import React from "react";
import { motion } from "framer-motion";

import ReactJs from "@/components/icons/React.svg";
import AWS from "@/components/icons/AWS.svg";
import Git from "@/components/icons/GitHub.svg";
import Tailwind from "@/components/icons/Tailwind-CSS.svg";
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
import Cloudflare from "@/components/icons/Cloudflare.svg";
import Vercel from "@/components/icons/Vercel.svg";
import ESLint from "@/components/icons/ESLint.svg";
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
  { name: "PostgresSQL ", Icon: PostgresSQL  },
  { name: "Express", Icon: Express },
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
  { name: "PostgreSQL", Icon: PostgresSQL },
  { name: "MongoDB", Icon: MongoDB },
  { name: "Typescript", Icon: TypeScript },
  { name: "React", Icon: ReactJs },
];

const deployRun: Technology[] = [
  { name: "AWS", Icon: AWS },
  { name: "Docker", Icon: Docker },
  { name: "Github", Icon: Git },
  { name: "Render" },
  { name: "Cloudflare", Icon: Cloudflare  },
  { name: "Vercel", Icon: Vercel },
];

const practices: Technology[] = [
  { name: "REST APIs" },
  { name: "Testing" },
  { name: "TDD" },
  { name: "OOP" },
  { name: "CI/CD" },
  { name: "Debugging" },
  { name: "Agile / Scrum" },
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
        gap-2.5
        px-3.5
        py-2.5
        rounded-xl
        bg-white/[0.025]
        border
        border-white/[0.07]
        hover:border-co-rich/40
        hover:bg-white/[0.045]
        transition-colors
        duration-300
      "
    >
      {Icon ? (
        <Icon className="w-4 h-4 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-co-rich/60 shrink-0" />
      )}

      <span className="text-xs font-medium text-sub-rich whitespace-nowrap">
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
}: {
  title: string;
  description: string;
  technologies: Technology[];
  className?: string;
  featured?: boolean;
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
        rounded-3xl
        border
        border-white/[0.08]
        bg-white/[0.02]
        backdrop-blur-sm
        overflow-hidden
        ${featured ? "border-co-rich/20 bg-white/[0.035]" : ""}
        ${className}
      `}
    >
      {/* Technical corner details */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/[0.08] rounded-tl-3xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/[0.08] rounded-tr-3xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/[0.08] rounded-bl-3xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/[0.08] rounded-br-3xl" />


      <div className="relative p-6 md:p-7">
        {/* Label */}
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-lg font-semibold text-co-rich">
            {title}
          </h3>
        </div>

        <p className="text-xs text-sub-rich/70 mb-6 max-w-xs">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2.5">
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

      {/* ---------------------------------- */}
      {/* LEFT → CORE                       */}
      {/* ---------------------------------- */}

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
        className="text-co-rich/40"
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
        className="text-co-rich/70"
      />

      {/* CORE connection node */}
      <circle
        cx="470"
        cy="225"
        r="4"
        fill="currentColor"
        className="text-co-rich/70"
      />

      {/* ---------------------------------- */}
      {/* CORE → RIGHT                      */}
      {/* ---------------------------------- */}

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
        className="text-co-rich/40"
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
        className="text-co-rich/70"
      />

      {/* ---------------------------------- */}
      {/* CORE → BOTTOM LEFT                */}
      {/* ---------------------------------- */}

      <path
        d="M 520 445
           L 520 500
           L 460 560
           L 350 560"
        fill="none"
        stroke="currentColor"
        className="text-white/[0.10]"
        strokeWidth="1.5"
      />

      <path
        d="M 520 445
           L 520 500
           L 460 560
           L 350 560"
        fill="none"
        stroke="currentColor"
        className="text-co-rich/40"
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
        className="text-co-rich/70"
      />

      {/* ---------------------------------- */}
      {/* CORE → BOTTOM RIGHT               */}
      {/* ---------------------------------- */}

      <path
        d="M 680 445
           L 680 500
           L 740 560
           L 850 560"
        fill="none"
        stroke="currentColor"
        className="text-white/[0.10]"
        strokeWidth="1.5"
      />

      <path
        d="M 680 445
           L 680 500
           L 740 560
           L 850 560"
        fill="none"
        stroke="currentColor"
        className="text-co-rich/40"
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
        className="text-co-rich/70"
      />

      {/* ---------------------------------- */}
      {/* Decorative circuit traces         */}
      {/* ---------------------------------- */}

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

      <circle
        cx="130"
        cy="330"
        r="2"
        fill="currentColor"
        className="text-white/20"
      />

      <circle
        cx="1130"
        cy="330"
        r="2"
        fill="currentColor"
        className="text-white/20"
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
        py-28
        bg-charcoal-base
        text-sub-rich
        overflow-hidden
      "
    >
      {/* Background technical grid */}
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

      {/* Ambient center glow */}
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
      <div className="relative z-10 flex flex-col items-center mb-20 px-6">
        <p className="text-xs tracking-[0.25em] text-co-rich uppercase mb-4">
          Tech Stack
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-co-rich tracking-tight text-center">
          Tools I Build With
        </h2>

        <p className="mt-5 text-sub-rich text-center max-w-xl leading-relaxed">
          The technologies, infrastructure, and engineering practices that
          shape how I build and ship software.
        </p>
      </div>

      {/* System */}
<div className="relative z-10 max-w-6xl mx-auto px-6">
  <div className="relative min-h-[1050px]">

    {/* Circuit wiring */}
    <CircuitLines />

    {/* ================================ */}
    {/* ALSO USE                         */}
    {/* ================================ */}

    <div
      className="
        relative
        lg:absolute
        lg:left-0
        lg:top-[-20px]
        w-full
        lg:w-[340px]
        lg:min-h-[240px]
        z-10
      "
    >
      <TechModule
        title="Also Use"
        description="Technologies I’m confident shipping with"
        technologies={alsoUse}
      />
    </div>

    {/* ================================ */}
    {/* DEPLOY & RUN                     */}
    {/* ================================ */}

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
        title="Deploy & Run"
        description="The infrastructure behind my projects"
        technologies={deployRun}
      />
    </div>

    {/* ================================ */}
    {/* CORE STACK                       */}
    {/* ================================ */}

    <div
      className="
        relative
        mt-8
        lg:mt-0
        lg:absolute
        lg:left-1/2
        lg:top-[380px]
        lg:-translate-x-1/2
        w-full
        lg:w-[520px]
        lg:min-h-[290px]
        z-20
      "
    >
      <TechModule
        title="Core Stack"
        description="My everyday development toolkit"
        technologies={coreStack}
        featured
      />

      {/* Core badge */}
      <div
        className="
          absolute
          -top-2
          left-1/2
          -translate-x-1/2
          px-3
          py-1
          bg-charcoal-base
          border
          border-co-rich/20
          rounded-full
        "
      >
        <span className="text-[8px] tracking-[0.2em] uppercase text-co-rich/70">
          Core
        </span>
      </div>
    </div>

    {/* ================================ */}
    {/* PRACTICES                        */}
    {/* ================================ */}

    <div
      className="
        relative
        mt-8
        lg:mt-0
        lg:absolute
        lg:left-1/2
        lg:top-[790px]
        lg:-translate-x-1/2
        w-full
        lg:w-[720px]
        lg:min-h-[180px]
        z-10
      "
    >
      <TechModule 
        title="Practices"
        description="Principles that guide how I build"
        technologies={practices}
      />
    </div>

  </div>
</div>

      {/* Bottom technical detail */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-10">
        <div className="flex items-center justify-between text-[9px] font-mono tracking-[0.15em] text-sub-rich/30 uppercase">
          <span>Learn / Adapt</span>

          <div className="hidden md:flex items-center gap-3">
            <span className="w-12 h-px bg-white/[0.08]" />
            <span> Elevate </span>
            <span className="w-12 h-px bg-white/[0.08]" />
          </div>

          <span>Build / Ship / Iterate</span>
        </div>
      </div>
    </section>
  );
}