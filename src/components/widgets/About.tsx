"use client";

import { motion } from "framer-motion";

const aboutItems = [
  {
    title: "Full-stack Development",
    description:
      "React, React Native, JavaScript, TypeScript, C#/.NET, Node.js, and clean, typed REST APIs.",
  },
  {
    title: "Backend & Data",
    description:
      "API architecture, PostgreSQL, SQL, database design, schema migrations, and reliable data flows.",
  },
  {
    title: "Production Engineering",
    description:
      "Authentication, error handling, testing, Docker, CI/CD, and repeatable deployments.",
  },
  {
    title: "AI Integration",
    description:
      "LLM APIs, multimodal processing, and AI-powered features integrated into real applications.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "AWS services, serverless architecture, IAM policies, and cloud deployments.",
  },
  {
    title: "Engineering Approach",
    description:
      "Practical problem-solving, maintainable code, clear architecture, and avoiding unnecessary complexity.",
  },
];

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-second-base px-6 py-20 text-text-main md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1560px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="text-3xl font-medium uppercase tracking-[0.2em] text-co-rich">
            About
          </span>

          <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
            What I build and how I approach software.
          </p>
        </motion.div>

        {/* Six About Cards */}
        <div className="mb-5 flex items-center justify-between border-b border-black/10 pb-4 dark:border-white/10">
          <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-co-rich">
            Focus & Approach
          </h3>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {aboutItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
              className="
                group relative flex min-h-[155px] flex-col
                rounded-2xl border
                border-black/[0.10] dark:border-white/[0.12]
                bg-black/[0.015] dark:bg-white/[0.025]
                p-5 md:p-6
                shadow-[0_4px_14px_-10px_rgba(0,0,0,0.2)]
                dark:shadow-[0_4px_14px_-10px_rgba(255,255,255,0.2)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-black/[0.035]
                dark:hover:bg-white/[0.055]
              "
            >
              <span className="font-mono text-xs text-text-muted/60 transition-colors duration-300 group-hover:text-text-main">
                {romanNumerals[index]}
              </span>

              <div className="mt-4">
                <h4 className="text-lg font-semibold tracking-tight text-text-main transition-colors duration-300 md:text-xl">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-text-muted transition-colors duration-300 group-hover:text-text-main/80">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
