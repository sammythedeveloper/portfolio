"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

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
    period: "June 2026 - Present",
    description: [
      "Developing software for an industry-sponsored project focused on AI-powered communication analysis.",
      "Building backend APIs with C#/.NET and frontend functionality with React and TypeScript.",
      "Working with multimodal data and AI services to support video, audio, and language analysis workflows.",
      "Collaborating in a development team using Git, Agile practices, documentation, and code reviews.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Independent Product Development",
    location: "Toronto, ON",
    period: "Jan 2025 — Present",
    description: [
      "Built and deployed full-stack applications covering frontend interfaces, backend APIs, databases, authentication, and deployment.",
      "Designed application architecture, database schemas, API integrations, and reusable frontend components.",
      "Integrated Gemini and other AI services to build AI-powered application features and automation workflows.",
      "Set up Docker-based development environments and CI/CD workflows for repeatable deployments.",
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
  {
    role: "Relocation Transition & Professional Development",
    company: "Ethiopia → Canada",
    location: "Toronto, Canada",
    period: "2021–2023",
    description: [
      "Transitioned from an engineering background into software development while adapting to a new professional environment in Canada.",
      "Developed foundational programming skills through structured learning and hands-on technical training.",
      "Focused on learning modern software development practices, including programming fundamentals, web technologies, databases, and version control.",
      "Progressively developed the technical foundation and problem-solving skills needed to pursue a career in software development.",
      "Adapted to a new country and career path while continuously learning, developing, and preparing for professional opportunities in technology.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full bg-second-base px-6 py-24 text-text-main md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1560px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-3xl font-medium uppercase tracking-[0.2em] text-co-rich">
            Experience
          </span>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-muted md:text-base">
            Professional, freelance, and hands-on development experience across
            full-stack applications, APIs, databases, and AI integrations.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div
          className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory
            pb-4 px-0
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            md:grid md:grid-cols-2 md:overflow-visible
            md:px-0 md:pb-0
            lg:grid-cols-4
          "
        >
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="
                group relative flex flex-col flex-shrink-0
                w-full snap-start
                border-x border-t border-black/[0.12] dark:border-white/[0.12]
                rounded-t-2xl
                bg-charcoal-base
                shadow-[inset_0_5px_12px_-12px_rgba(0,0,0,0.2)]
                dark:shadow-[inset_0_5px_12px_-12px_rgba(255,255,255,0.2)]
                p-6
                transition-colors duration-300
                hover:bg-black/[0.015] dark:hover:bg-white/[0.025]
                md:w-auto md:min-w-0 md:p-7
                lg:min-h-[560px]
              "
            >
              {/* Top metadata */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-text-muted">
                  {exp.period}
                </span>
              </div>

              {/* Location */}
              <div className="mt-4 flex items-center gap-2 text-xs text-text-muted">
                <MapPin size={13} strokeWidth={1.5} />
                {exp.location}
              </div>

              {/* Role */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold leading-tight tracking-tight text-text-main md:text-[22px]">
                  {exp.role}
                </h3>

                <span className="mt-2 block text-sm font-medium text-text-muted">
                  {exp.company}
                </span>
              </div>

              {/* Divider */}
              <div className="my-7 h-px w-8 bg-black/20 transition-all duration-300 group-hover:w-14 group-hover:bg-co-rich dark:bg-white/20" />

              {/* Description */}
              <ul className="space-y-4">
                {exp.description.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-text-muted"
                  >
                    <span className="mt-[8px] h-1 w-1 flex-shrink-0 rounded-full bg-black/30 dark:bg-white/30" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
