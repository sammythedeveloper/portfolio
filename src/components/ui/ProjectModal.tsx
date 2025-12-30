"use client";

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
  return (
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
            z-50
            flex
            items-center
            justify-center
            bg-charcoal-base/60
            backdrop-blur-md
            p-6
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-4xl
              max-h-[90vh]
              overflow-y-auto
              bg-charcoal-base
              border
              border-white/10
              rounded-3xl
              p-8
            "
          >
            <button
              onClick={onClose}
              className="
                absolute
                top-5
                right-5
                p-2
                rounded-full
                hover:bg-white/10
                transition
              "
            >
              <X size={22} />
            </button>

            <h2 className="text-4xl font-bold">{project.title}</h2>

            <p
              className="
              mt-4
              text-neutral-400
              leading-relaxed
            "
            >
              {project.purpose}
            </p>
            <div
              className="
              mt-8
              relative
              h-[300px]
              rounded-2xl
              overflow-hidden
            "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

            <section className="mt-8">
              <h3 className="text-xl font-semibold">Tech Stack</h3>

              <div
                className="
                flex
                flex-wrap
                gap-3
                mt-4
              "
              >
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-white/10
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h3 className="text-xl font-semibold">Features</h3>

              <ul
                className="
                mt-4
                space-y-2
                text-neutral-400
              "
              >
                {project.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </section>

            <div
              className="
              flex
              flex-wrap
              gap-4
              mt-10
            "
            >
              <a
                href={project.documentation}
                target="_blank"
                className="
                  flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-full
                  bg-white
                  text-black
                "
              >
                Documentation
                <ExternalLink size={16} />
              </a>

              <a
                href={project.repo}
                target="_blank"
                className="
                  flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-full
                  border
                  border-white/20
                "
              >
                GitHub
                <Github size={16} />
              </a>
              <a
                href={project.live}
                target="_blank"
                className="
                  flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-full
                  border
                  border-white/20
                "
              >
                Live
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
