"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    live: string;
    repo: string;
  };
  onClick: () => void;
}

export default function ProjectCard({
  project,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.article
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: true }}
      className="
        w-full
        bg-charcoal-base
        border border-[#1f1f1f]
        rounded-3xl
        overflow-hidden
        group
        cursor-pointer
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
        <h3 className="text-3xl font-semibold">
          {project.title}
        </h3>

        <p className="mt-4 text-neutral-400 leading-relaxed">
          {project.description}
        </p>


        <div className="flex items-center gap-2 mt-8 text-sm">
          <span>
            View Details
          </span>

          <ArrowRight
            size={16}
            className="
              group-hover:translate-x-1
              transition-transform
            "
          />
        </div>
      </div>
    </motion.article>
  );
}