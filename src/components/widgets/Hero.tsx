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
      className="relative min-h-screen overflow-hidden bg-white text-black"
    >
      {/* =========================================================
          TOP LOCATION / TIME
      ========================================================= */}
      <div className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/45">
            Toronto, Ontario
          </div>

          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/45">
            {time} EST
          </div>
        </div>
      </div>
          {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 lg:px-10 lg:pt-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
              {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-black/55">
                Samson Daba
              </span>
            </div>

            {/* Heading */}
            <h3 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[72px]">
              Full-Stack
              <br />
              <span className="text-black/35">web developer</span>
            </h3>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-black/55 sm:text-lg">
              I build reliable APIs, production web applications, and
              data-driven systems.
            </p>
                {/* TECHNOLOGIES */}
            <div className="mt-8 flex max-w-xl flex-wrap gap-2">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.025] px-3 py-2 text-xs font-medium text-black/65"
                >
                  <tech.icon className="h-3.5 w-3.5" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>

{/* Button */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
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
                className="flex items-center gap-2 rounded-full border border-black/15 px-6 py-3.5 text-sm font-medium text-black transition-colors duration-300 hover:bg-black hover:text-white"
              >
                Resume
              </a>
            </div>
                {/*SOCIAL LINKS */}
            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com/sammythedeveloper"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-black transition-colors hover:text-green-500 "
              >
                <Github size={19} strokeWidth={1.7} />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-black transition-colors hover:text-co-rich "
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="mailto:hello@example.com"
                aria-label="Email"
                className="text-black transition-colors hover:text-orange-500"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE — ORGANIC PHOTO
              Hidden below lg
          ===================================================== */}
          <div className="relative hidden min-h-[540px] items-center justify-center lg:flex lg:min-h-[650px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="relative h-[610px] w-[520px]"
            >
              <motion.svg
                viewBox="0 0 560 650"
                className="absolute inset-0 h-full w-full overflow-visible"
                preserveAspectRatio="none"
                animate={{
                  y: [0, -10, 0, 8, 0],
                  rotate: [0, 0.4, 0, -0.4, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <defs>

                  {/* =================================================
                      GLASS EDGE
                  ================================================= */}
                  <linearGradient
                    id="glassBorder"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="white"
                      stopOpacity="0.9"
                    />

                    <stop
                      offset="18%"
                      stopColor="white"
                      stopOpacity="0.35"
                    />

                    <stop
                      offset="40%"
                      stopColor="black"
                      stopOpacity="0.12"
                    />

                    <stop
                      offset="58%"
                      stopColor="white"
                      stopOpacity="0.7"
                    />

                    <stop
                      offset="75%"
                      stopColor="white"
                      stopOpacity="0.25"
                    />

                    <stop
                      offset="100%"
                      stopColor="black"
                      stopOpacity="0.12"
                    />
                  </linearGradient>

                  {/* =================================================
                      ORGANIC PHOTO CLIP
                  ================================================= */}
                  <clipPath id="portraitClip">
                    <motion.path
                      animate={{
                        d: [
                          `
                            M 105 55
                            C 175 12, 275 15, 365 42
                            C 455 68, 515 120, 510 205
                            C 507 285, 545 345, 510 425
                            C 478 500, 415 510, 375 570
                            C 335 630, 235 650, 160 610
                            C 90 575, 65 515, 45 435
                            C 25 355, 55 305, 42 235
                            C 30 160, 45 92, 105 55
                            Z
                          `,

                          `
                            M 92 72
                            C 170 20, 275 25, 370 55
                            C 465 85, 525 145, 505 225
                            C 487 300, 545 360, 500 445
                            C 460 520, 400 515, 355 580
                            C 310 640, 220 635, 145 600
                            C 78 568, 60 500, 40 425
                            C 20 350, 62 295, 50 220
                            C 38 145, 38 108, 92 72
                            Z
                          `,

                          `
                            M 110 45
                            C 195 8, 290 20, 380 48
                            C 470 76, 525 135, 515 215
                            C 505 292, 535 350, 495 430
                            C 455 505, 405 525, 365 580
                            C 320 640, 225 650, 150 605
                            C 82 565, 58 505, 48 430
                            C 35 350, 52 295, 38 220
                            C 24 145, 50 78, 110 45
                            Z
                          `,
                        ],
                      }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </clipPath>
                </defs>

                {/* GLASSY 14PX ORGANIC BORDER */}
                <motion.path
                  animate={{
                    d: [
                      `
        M 105 55
        C 175 12, 275 15, 365 42
        C 455 68, 515 120, 510 205
        C 507 285, 545 345, 510 425
        C 478 500, 415 510, 375 570
        C 335 630, 235 650, 160 610
        C 90 575, 65 515, 45 435
        C 25 355, 55 305, 42 235
        C 30 160, 45 92, 105 55
        Z
      `,
                      `
        M 92 72
        C 170 20, 275 25, 370 55
        C 465 85, 525 145, 505 225
        C 487 300, 545 360, 500 445
        C 460 520, 400 515, 355 580
        C 310 640, 220 635, 145 600
        C 78 568, 60 500, 40 425
        C 20 350, 62 295, 50 220
        C 38 145, 38 108, 92 72
        Z
      `,
                      `
        M 110 45
        C 195 8, 290 20, 380 48
        C 470 76, 525 135, 515 215
        C 505 292, 535 350, 495 430
        C 455 505, 405 525, 365 580
        C 320 640, 225 650, 150 605
        C 82 565, 58 505, 48 430
        C 35 350, 52 295, 38 220
        C 24 145, 50 78, 110 45
        Z
      `,
                    ],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  fill="none"
                  stroke="url(#glassBorder)"
                  strokeWidth="24"
                  opacity="0.72"
                  transform="scale(0.99)"
                  transform-origin="center"
                />

                {/* =================================================
                    PHOTO
                ================================================= */}
                <image
                  href="/IMG_0300.jpg"
                  x="0"
                  y="0"
                  width="560"
                  height="630"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#portraitClip)"
                />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM SCROLL INDICATOR
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-black/30">
          Scroll
        </span>

        <motion.div
          animate={{ scaleY: [1, 1.4, 1] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-10 w-px origin-top bg-black/20"
        />
      </motion.div>
    </section>
  );
}