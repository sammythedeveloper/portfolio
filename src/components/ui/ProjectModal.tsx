"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import Github from "@/components/icons/GitHub.svg";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    purpose: string;
    image: string;
    techStack: string[];
    features: string[];
    documentation: string;
    live: string;
    repo: string;
  } | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[150]                
            bg-charcoal-base/60
            backdrop-blur-md
            p-4
            md:p-8
            flex
            justify-center
            items-center            
          "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="
              relative
              w-full
              max-w-4xl
              bg-charcoal-base
              border
              border-white/10
              rounded-3xl
              p-6
              md:p-8
              flex
              flex-col
              h-auto
              max-h-[85vh]           
              overflow-hidden         
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition z-20 bg-charcoal-base/80 backdrop-blur-sm"
            >
              <X className="hover:text-co-rich" size={22} />
            </button>
            
            {/* Scrollable Content Wrapper */}
            <div className="flex-1 overflow-y-auto pr-12 space-y-6 custom-scrollbar">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-co-rich pr-8">
                  {project.title}
                </h2>
                <p className="mt-3 text-sub-rich leading-relaxed">
                  {project.purpose}
                </p>
              </div>

              <div className="relative h-[220px] sm:h-[320px] w-full rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <section>
                <h3 className="text-xl font-semibold text-co-rich">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-full bg-sub-rich text-black text-xs md:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-co-rich">Features</h3>
                <ul className="mt-3 space-y-2 text-sub-rich text-sm md:text-base">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-co-rich">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sticky Action Footer (Never gets clipped or cut off!) */}
            <div className="flex flex-wrap gap-4 pt-4 mt-4 border-t border-white/5 bg-charcoal-base z-10">
              <a
                href={project.documentation}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sub-rich text-black font-semibold text-sm hover:bg-co-rich hover:text-black transition"
              >
                Documentation <ExternalLink size={14} />
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm font-medium  hover:bg-co-rich hover:text-black transition"
              >
                GitHub <Github size={14} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm font-medium  hover:bg-co-rich hover:text-black transition"
              >
                Live
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
