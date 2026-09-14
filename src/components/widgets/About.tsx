"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const focusAreas = [
  {
    title: "Full-stack SWE",
    description:
      "React, TypeScript, C#/.NET, Node.js, and REST APIs across frontend and backend systems.",
  },
  {
    title: "Backend & data",
    description:
      "API development, SQL, PostgreSQL, database design, schema migrations, and data-driven applications.",
  },
  {
    title: "Production engineering",
    description:
      "Authentication, error handling, testing, Containerizing, CI/CD workflows and Deploying.",
  },
  {
    title: "AI integration",
    description:
      "LLM APIs, multimodal processing, and AI-powered features integrated into real applications.",
  },
  {
    title: "Hands-on development",
    description:
      "Built and shipped full-stack applications through independent projects and collaborative engineering work.",
  },
];

const practices = [
  "Clean APIs and typed contracts.",
  "Schema migrations over manual database changes.",
  "Testing and validation where they provide real value.",
  "Dockerized environments and repeatable deployments.",
  "Clear separation between frontend, backend, data, and infrastructure.",
];

const links = [
  { label: "Résumé", href: "/resume" },
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-second-base px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-co-rich">
            About
          </span>

          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-sub-rich md:text-2xl">
            Evidence over hype—what I build and how I approach software.
          </p>
        </motion.div>

        {/* Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 border-t border-white/10"
        >
          {focusAreas.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-2 border-b border-white/10 py-6 md:grid-cols-[220px_1fr] md:gap-10"
            >
              <div className="font-medium text-co-rich">
                {item.title}
              </div>

              <div className="max-w-3xl leading-relaxed text-sub-rich">
                {item.description}
              </div>
            </div>
          ))}
        </motion.div>
        {/* How I Work */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-20"
        >
          <div className="border-b border-white/10 pb-5">
            <h3 className="text-sm font-medium text-co-rich">
              How I Work
            </h3>

            <p className="mt-2 text-sm text-sub-rich">
              Practical engineering over unnecessary complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            {practices.map((practice, index) => (
              <div
                key={practice}
                className="border-b border-white/10 py-5 md:pr-10"
              >
                <div className="flex gap-4">
                  <span className="font-mono text-xs text-co-rich/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm leading-relaxed text-sub-rich">
                    {practice}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}