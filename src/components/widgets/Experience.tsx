"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

// 2. Add your career data here
const experiences: ExperienceItem[] = [
  {
    role: "Software Developer Intern",
    company: "InteractMet",
    location: "Toronto, ON ",
    period: "Present",
    description: [
      "Selected to participate in an industry-sponsored software development capstone project with InteractMet, an AI communication technology company.",
      "Collaborating with a student development team to analyze requirements and design software solutions for real-world business needs",
      "Applying software development practices including project planning, version control, documentation, and Agile collaboration."
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Self-Directed Product development",
    location: "Toronto, ON ",
    period: "Jan 2026 - Present",
    description: [
      "Built, tested, and deployed multiple full-stack web applications from scratch, handling everything from database design to frontend animations.",
      "Used AI pairing tools to speed up my development loop, allowing me to build features, refactor code, and prototype ideas at the pace of a multi-person team.",
      "Focused heavily on performance across my projects, optimizing databases and backend queries to significantly cut down API response times.",
      "Gained deep experience integrating AI models like the Gemini API for smart automation features, while setting up clean CI/CD pipelines to automate my deployment workflows.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Freelance ",
    location: "Toronto, ON ",
    period: " 2025 - 2026",
    description: [
      "Worked with small business owners to update, improve, and maintain their websites based on changing business needs.",
      "Built and modified website features, fixed bugs, and improved existing functionality to create smoother user experiences.",
      "Helped clients improve their online presence by making websites more responsive, user-friendly, and reliable across devices.",
      "Managed the full development process, including understanding requirements, making updates, testing changes, and deploying improvements.",
      "Used modern frontend and backend technologies to customize websites and integrate tools that support business operations.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Evangadi Network",
    location: "Remote ,Silverspring, MD",
    period: "2024",
    description: [
      "Developed and enhanced full-stack web application features using React, Next.js, and Node.js, improving user workflows and application reliability.",
      "Created reusable React components and optimized frontend architecture to improve maintainability, consistency, and development efficiency.",
      "Implemented RESTful API endpoints and secure form-handling logic to ensure reliable data flow between frontend and backend systems.",
      "Implemented Cypress end-to-end testing to validate critical user flows, identify issues early, and improve overall application quality.",
      "Collaborated within an Agile/Scrum development environment through sprint planning, standups, code reviews, and team discussions to deliver features and resolve technical challenges.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full px-6 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-left"
        >
          <h2 className="text-5xl font-bold text-co-rich tracking-tight">
            Work Experience
          </h2>
          <p className="mt-4 text-sub-rich max-w-xl">
            A history of positions where I’ve built robust applications, led
            frontend modules, and integrated next-gen tools.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Node Point Indicator */}
              <div
                className="
                absolute 
                -left-[9px] 
                top-1.5 
                w-4 
                h-4 
                rounded-full 
                bg-charcoal-base 
                border-2 
                border-white/20 
                group-hover:border-co-rich 
                group-hover:bg-co-rich
                transition-all 
                duration-300
                z-10
              "
              />

              {/* Main Card */}
              <div
                className="
                w-full 
                bg-charcoal-base 
                border 
                border-white/10 
                rounded-3xl 
                p-6 
                md:p-8 
                hover:border-white/20
                transition-all 
                duration-300
                relative
                overflow-hidden
              "
              >
                {/* Subtle Left Border Glow Accent on Card Hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-co-rich opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Metadata row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-co-rich tracking-tight group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-sub-rich mt-1 font-medium">
                      <span className="text-white/80">{exp.company}</span>
                      <span className="text-white/20">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Period badge */}
                  <span
                    className="
                    self-start 
                    md:self-center 
                    flex 
                    items-center 
                    gap-2 
                    px-4 
                    py-1.5 
                    rounded-full 
                    bg-white/5 
                    border 
                    border-white/10 
                    text-xs 
                    md:text-sm 
                    text-sub-rich 
                    font-medium
                  "
                  >
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>

                {/* Bullets List */}
                <ul className="mt-6 space-y-3 text-sub-rich leading-relaxed text-sm md:text-base">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-co-rich mt-1.5 flex-shrink-0 text-xs">
                        •
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
