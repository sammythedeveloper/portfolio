"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Github, ArrowUpRight } from "lucide-react";

import ReactIcon from "@/components/icons/React.svg";
import AWSIcon from "@/components/icons/AWS.svg";
import GitIcon from "@/components/icons/GitHub.svg";
import ExpressIcon from "@/components/icons/Express.svg";
import TypeScriptIcon from "@/components/icons/TypeScript.svg";
import NodeIcon from "@/components/icons/Node.js.svg";
import MongoDBIcon from "@/components/icons/MongoDB.svg";
import DockerIcon from "@/components/icons/Docker.svg";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
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

  const technologies = [
    { name: "React", icon: ReactIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "Node.js", icon: NodeIcon },
    { name: "Express", icon: ExpressIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "AWS", icon: AWSIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Git", icon: GitIcon },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-second-base text-text-main"
    >
      {/* TOP BAR */}
      <div className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#666] dark:text-[#999]">
            Toronto, Ontario
          </div>
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#666] dark:text-[#999]">
            {time} EST
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 lg:px-10 lg:pt-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.7fr] lg:gap-6">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-current opacity-80" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#666] dark:text-[#999]">
                Samson Daba
              </span>
            </div>

            <h1 className="text-[clamp(2.75rem,6.2vw,4.25rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
              Full-Stack
              <br />
              <span className="text-[#888] dark:text-[#777]">
                web developer
              </span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-relaxed text-[#555] dark:text-[#aaa] sm:text-lg">
              I build reliable APIs, production web applications, and
              data-driven systems.
            </p>

            <div className="mt-8 flex max-w-lg flex-wrap gap-2">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-xs font-medium dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <tech.icon className="h-3.5 w-3.5" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-[#111] px-6 py-3.5 text-sm font-medium text-[#F4F3EF] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black dark:bg-[#F4F3EF] dark:text-[#111] dark:hover:bg-white"
              >
                View my work
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-sm font-medium transition-colors duration-300 hover:bg-[#111] hover:text-[#F4F3EF] dark:border-white/15 dark:hover:bg-[#F4F3EF] dark:hover:text-[#111]"
              >
                Resume
              </a>
            </div>

            <div className="mt-9 flex items-center gap-5">
              <a
                href="https://github.com/sammythedeveloper"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-current opacity-80 transition-opacity hover:opacity-100"
              >
                <Github size={19} strokeWidth={1.6} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-current opacity-80 transition-opacity hover:opacity-100"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:hello@example.com"
                aria-label="Email"
                className="text-current opacity-80 transition-opacity hover:opacity-100"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </motion.div>

          {/* MOBILE PORTRAIT */}
          <div className="relative order-first flex justify-center lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <img
                src="/IMG_0300.jpg"
                alt="Samson Daba"
                className="h-60 w-60 rounded-full object-cover object-top shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-black/10 dark:ring-white/10" />
            </motion.div>
          </div>

          {/* DESKTOP PORTRAIT */}
          <div className="hidden items-center justify-center lg:flex">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="relative"
            >
              <img
                src="/IMG_0300.jpg"
                alt="Samson Daba"
                className="h-[360px] w-[360px] rounded-full object-cover object-top shadow-2xl xl:h-[420px] xl:w-[420px]"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-black/10 dark:ring-white/10" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#999]">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 1.45, 1] }}
          transition={{
            duration: 1.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-10 w-px origin-top bg-current opacity-25"
        />
      </motion.div>
    </section>
  );
}
