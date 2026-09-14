"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Software Developer Intern",
    company: "InteractMet",
    location: "Toronto, ON",
    period: "Present",
    description: [
      "Developing software for an industry-sponsored project focused on AI-powered communication analysis.",
      "Building backend APIs with C#/.NET and frontend functionality with React and TypeScript.",
      "Working with multimodal data and AI services to support video, audio, and language analysis workflows.",
      "Collaborating in a development team using Git, Agile practices, documentation, and code reviews.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Self-Directed Product Development",
    location: "Toronto, ON",
    period: "Jan 2026 — Present",
    description: [
      "Built and deployed full-stack applications covering frontend interfaces, backend APIs, databases, authentication, and deployment.",
      "Designed application architecture, database schemas, API integrations, and reusable frontend components.",
      "Integrated Gemini and other AI services to build AI-powered application features and automation workflows.",
      "Set up Docker-based development environments and CI/CD workflows for repeatable deployments.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    location: "Toronto, ON",
    period: "2025 — 2026",
    description: [
      "Built, maintained, and improved websites for small-business clients based on changing requirements.",
      "Developed responsive frontend features, fixed application issues, and improved usability across devices.",
      "Worked directly with clients to understand requirements, implement changes, test functionality, and deploy updates.",
      "Integrated third-party tools and services to support client websites and business workflows.",
    ],
  },
  {
    role: "Junior Full-Stack Developer",
    company: "Evangadi Network",
    location: "Remote",
    period: "2024",
    description: [
      "Developed full-stack features using React, Next.js, and Node.js within an Agile development team.",
      "Created reusable React components and contributed to frontend architecture and maintainability.",
      "Built REST API endpoints and form-handling functionality for reliable frontend-backend data flow.",
      "Created and maintained Cypress end-to-end tests covering critical application workflows.",
      "Collaborated with a team of developers through sprint planning, standups, code reviews, and technical discussions.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full bg-charcoal-base px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-co-rich">
            Experience
          </span>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sub-rich md:text-base">
            Professional, freelance, and hands-on development experience across
            full-stack applications, APIs, databases, and AI integrations.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="border-t border-white/10">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group border-b border-white/10 py-10 md:py-12"
            >
              <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
                {/* Left metadata */}
                <div>
                  <div className="font-mono text-xs text-sub-rich">
                    {exp.period}
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-sm text-sub-rich">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>

                {/* Main content */}
                <div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold tracking-tight text-co-rich transition-colors group-hover:text-white md:text-2xl">
                      {exp.role}
                    </h3>

                    <span className="text-sm font-medium text-sub-rich">
                      {exp.company}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {exp.description.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-sub-rich md:text-base"
                      >
                        <span className="mt-[9px] h-1 w-1 flex-shrink-0 rounded-full bg-co-rich" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
