"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface EducationItem {
  institution: string;
  credential: string;
  field: string;
  period: string;
  location: string;
  description: string;
  subjects: string[];
}

const education: EducationItem[] = [
  {
    institution: "Humber Polytechnic",
    credential: "Software Development",
    field: "Enterprise Backend Software Development",
    period: "2026",
    location: "Toronto, ON",
    description:
      "Advanced coursework focused on backend development, databases, APIs, cloud-native development, and enterprise software.",
    subjects: ["C# / .NET", "SQL", "APIs", "Cloud", "Backend"],
  },
  {
    institution: "Hawassa University",
    credential: "University Coursework",
    field: "BSc in Construction Technology & Management",
    period: "2016 — 2020",
    location: "Ethiopia",
    description:
      "coursework completed across engineering, architectural design , construction management, structural analysis, and technical design.",
    subjects: [
      "Engineering",
    ],
  },
];

export default function Education() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % education.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const item = education[activeIndex];

  return (
    <section
      id="education"
      className="relative w-full overflow-hidden bg-second-base px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-end justify-between border-b border-white/10 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-co-rich">
              Education
            </span>
          </div>

          <span className="hidden font-mono text-xs text-sub-rich sm:block">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(education.length).padStart(2, "0")}
          </span>
        </div>

        {/* Education Display */}
        <div className="relative min-h-[330px] py-12 md:min-h-[300px] md:py-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="grid gap-8 md:grid-cols-[180px_1fr]"
            >
              {/* Index / Date */}
              <div>
                <span className="font-mono text-5xl font-light text-white/10 md:text-6xl">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <div className="mt-5 font-mono text-xs text-sub-rich">
                  {item.period}
                </div>

                <div className="mt-2 text-sm text-sub-rich">
                  {item.location}
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-medium text-co-rich">
                  {item.credential}
                </p>

                <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {item.institution}
                </h3>

                <p className="mt-2 text-lg text-sub-rich">
                  {item.field}
                </p>

                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-sub-rich md:text-base">
                  {item.description}
                </p>

                {/* Subjects */}
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                  {item.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="font-mono text-[11px] uppercase tracking-wide text-sub-rich/70"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-1">
          {education.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show education ${index + 1}`}
              className="group h-6 w-12"
            >
              <span
                className={`block h-px w-full transition-all duration-500 ${
                  activeIndex === index
                    ? "bg-co-rich"
                    : "bg-white/15 group-hover:bg-white/40"
                }`}
              />
            </button>
          ))}

          <span className="ml-3 text-xs text-sub-rich">
            Auto-rotates
          </span>
        </div>
      </div>
    </section>
  );
}