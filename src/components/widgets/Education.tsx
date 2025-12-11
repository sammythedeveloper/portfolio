"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
}

const education: EducationItem[] = [
  {
    institution: "Humber Polytechic College",
    degree: "",
    field: "Enterprise Backend Software Development",
    startDate: "",
    endDate: "2026",
    location: "Toronto, Canada",
    description:
      "Studing advanced backend development, microservices architecture, and enterprise software solutions.",
  },

  {
    institution: "Evangadi Academy Coding Bootcamp",
    degree: "",
    field: "Full Stack Web Development",
    startDate: "2023",
    endDate: "2024",
    location: "Remote, USA",
    description:
      "Studied programming fundamentals, web development, databases, and software engineering.",
    },
    {
        institution: "NPower Canada",
        degree: "",
        field: "IT Analyst Program",
        startDate: "2022",
        endDate: "2022",
        location: "Toronto, Canada",
        description:
          "Studied IT fundamentals, networking, and troubleshooting in a professional environment.",
    },
    {
        institution: "Hawassa University",
        degree: "Bachelor of Science",
        field: "Construction Technology and Management",
        startDate: "2016",
        endDate: "2020",
        location: "Ethiopia",
        description:
          "Studied construction technology, project management, and civil engineering principles and completed coursework before relocating to Canada",
      },

  // Add more education here...
];

export default function Education() {
  return (
    <section id="education" className="w-full py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-co-rich tracking-tight">
            Education
          </h2>

          <p className="mt-4 text-2xl text-sub-rich max-w-xl">
            My academic journey that have shaped my skills and knowledge in the field of technology.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.article
              key={`${item.institution}-${item.degree}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute inset-0
                  rounded-3xl
                  bg-co-rich/10
                  opacity-0
                  blur-2xl
                  group-hover:opacity-100
                  transition-opacity duration-500
                "
              />

              {/* Card */}
              <div
                className="
                  relative
                  h-full
                  rounded-3xl
                  border border-white/10
                  bg-charcoal-base
                  p-7
                  transition-all duration-300
                  group-hover:-translate-y-1
                  group-hover:border-co-rich/30
                "
              >
                {/* Top Row */}
                <div className="flex items-start justify-between gap-6">
                  {/* Icon */}
                  <div
                    className="
                      shrink-0
                      p-3
                      rounded-2xl
                      bg-white/[0.03]
                      border border-white/5
                      text-co-rich
                      transition-all duration-300
                      group-hover:bg-co-rich
                      group-hover:text-black
                    "
                  >
                    <GraduationCap size={24} />
                  </div>

                  {/* Dates */}
                  <div className="flex items-center gap-1.5 text-xs text-sub-rich whitespace-nowrap">
                    <Calendar size={13} />
                    <span>
                      {item.startDate} — {item.endDate}
                    </span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="mt-7">
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-white
                      tracking-tight
                      group-hover:text-co-rich
                      transition-colors duration-300
                    "
                  >
                    {item.degree}
                  </h3>

                  <p className="mt-1 text-base font-medium text-sub-rich">
                    {item.field}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-white/80">
                    {item.institution}
                  </p>

                  {/* Location */}
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-sub-rich">
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="mt-5 text-sm leading-relaxed text-sub-rich">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Bottom Accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-7
                    right-7
                    h-px
                    bg-co-rich/0
                    group-hover:bg-co-rich/40
                    transition-colors duration-300
                  "
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}