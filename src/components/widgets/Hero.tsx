"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Github, ArrowUpRight } from "lucide-react";

import NextIcon from "@/components/icons/Next.js.svg";
import ReactIcon from "@/components/icons/React.svg";
import TypeScriptIcon from "@/components/icons/TypeScript.svg";
import NodeIcon from "@/components/icons/Node.js.svg";
import PostgresIcon from "@/components/icons/PostgresSQL.svg";
import AWSIcon from "@/components/icons/AWS.svg";

const serif = {
  fontFamily: "var(--font-instrument-serif), Georgia, serif",
} as const;

const technologies = [
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "PostgreSQL", icon: PostgresIcon },
  { name: "AWS", icon: AWSIcon },
];

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Toronto",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-second-base text-text-main"
    >
      {/* Top bar: same width as the content, so it doesn't touch the screen edges */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-10 md:px-10">
        <span style={serif} className="text-base text-text-muted">
          Toronto, Ontario
        </span>
        <span style={serif} className="text-base tabular-nums text-text-muted">
          {time} EST
        </span>
      </div>

      {/* Centered content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center"
      >
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-text-muted">
          Samson Daba
        </p>

        <h1
          style={serif}
          className="max-w-4xl text-6xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl"
        >
          Full-stack engineer building{" "}
          <span className="text-text-muted">web and mobile products.</span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
          I design, build, and ship products from database to interface,
          including a live SaaS platform, an Android app in testing, and an
          AI-powered assistant.
        </p>

        {/* Stack chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-xs font-medium dark:border-white/10"
            >
              <tech.icon className="h-3.5 w-3.5" />
              {tech.name}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-text-main px-6 py-3 text-sm font-medium text-second-base transition-transform duration-300 hover:-translate-y-0.5"
          >
            View my work
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Contact */}
        <div className="mt-8 flex items-center justify-center gap-5 text-text-muted">
          <a
            href="https://github.com/sammythedeveloper"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-text-main"
          >
            <Github size={19} strokeWidth={1.6} />
          </a>
          <a
            href="https://www.linkedin.com/in/samson-daba-29b877231/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-text-main"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="transition-colors hover:text-text-main"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
