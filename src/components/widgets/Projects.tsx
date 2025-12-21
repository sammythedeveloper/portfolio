"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Devpulse",
    description:
      "A modern full-stack platform focused on delivering efficient and user-friendly solutions.",
    image: "/projects/devpulse.png",
    live: "#",
    repo: "#",
  },
  {
    title: "Booking",
    description:
      "A modern full-stack platform focused on delivering efficient and user-friendly solutions.",
    image: "/projects/book.png",
    live: "#",
    repo: "#",
  },
  {
    title: "Slate",
    description:
      "A developer-focused application built with modern technologies and scalable architecture.",
    image: "/projects/slate.png",
    live: "#",
    repo: "#",
  },
  {
    title: "Ecommerce",
    description:
      "A modern full-stack platform focused on delivering efficient and user-friendly solutions.",
    image: "/projects/ecommerce.jpg",
    live: "#",
    repo: "#",
  },
  {
    title: "Stacky",
    description:
      "A developer-focused application built with modern technologies and scalable architecture.",
    image: "/projects/redddit.png",
    live: "#",
    repo: "#",
  },
  {
    title: "Stacky",
    description:
      "A developer-focused application built with modern technologies and scalable architecture.",
    image: "/projects/finance.jpg",
    live: "#",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full px-6 py-32">
      <div className="max-w-[2000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>

          <p className="mt-4 text-neutral-400 max-w-xl">
            A collection of projects where I combine full-stack development,
            modern UI, and emerging technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                w-full
                bg-[#111111]
                border border-[#1f1f1f]
                rounded-3xl
                overflow-hidden
                group
                hover:border-white/20
                transition-all
              "
            >
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-semibold">{project.title}</h3>

                <p className="mt-4 text-neutral-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.live}
                    className="
                      flex items-center gap-2
                      rounded-full
                      px-5 py-3
                      bg-white
                      text-black
                      text-sm
                      font-medium
                    "
                  >
                    Live Demo
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href={project.repo}
                    className="
                      rounded-full
                      px-5 py-3
                      border border-white/20
                      text-sm
                    "
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
