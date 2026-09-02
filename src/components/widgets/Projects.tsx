"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects } from "@/lib/projects";

type Project = (typeof projects)[number];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const audioContextRef = useRef<AudioContext | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const cardGap = 16;

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const visibleCount =
    containerWidth >= 1024 ? 4 : containerWidth >= 768 ? 2 : 1;

  const cardWidth =
    containerWidth > 0
      ? (containerWidth - cardGap * (visibleCount - 1)) / visibleCount
      : 0;

  const maxIndex = Math.max(0, projects.length - visibleCount);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const goNext = () => {
    setCurrentIndex((index) => Math.min(index + 1, maxIndex));
  };

  const goPrevious = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  };

  const playClickSound = () => {
    const context =
      audioContextRef.current ?? (audioContextRef.current = new AudioContext());

    if (context.state === "suspended") {
      void context.resume();
    }

    const duration = 0.025;
    const buffer = context.createBuffer(
      1,
      Math.floor(context.sampleRate * duration),
      context.sampleRate
    );

    const data = buffer.getChannelData(0);

    for (let i = 0; i < data.length; i++) {
      const decay = Math.exp(-i / (context.sampleRate * 0.004));
      data[i] = (Math.random() * 2 - 1) * decay;
    }

    const source = context.createBufferSource();
    const gain = context.createGain();

    source.buffer = buffer;
    gain.gain.value = 0.16;

    source.connect(gain);
    gain.connect(context.destination);

    source.start();
  };

  return (
    <section
      id="projects"
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
            Selected Work
          </span>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-muted md:text-base">
            A selection of applications, products, and systems built across
            full-stack development, cloud infrastructure, and AI.
          </p>
        </motion.div>

        {/* Project Carousel */}
        <div ref={carouselRef} className="overflow-hidden">
          <motion.div
            className="flex"
            style={{ gap: `${cardGap}px` }}
            animate={{
              x: -(safeIndex * (cardWidth + cardGap)),
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
          >
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => {
                  playClickSound();
                  setSelectedProject(project);
                }}
                style={{
                  width: `${cardWidth}px`,
                  flex: `0 0 ${cardWidth}px`,
                }}
                className="
                  group relative flex min-h-[420px] flex-col
                  border-x border-t border-black/[0.12] dark:border-white/[0.12]
                  rounded-t-2xl
                  bg-charcoal-base
                  shadow-[inset_0_8px_16px_-12px_rgba(0,0,0,0.2)]
                  dark:shadow-[inset_0_8px_16px_-12px_rgba(255,255,255,0.2)]
                  p-6 text-left outline-none
                  transition-colors duration-300
                  hover:bg-black/[0.015] dark:hover:bg-white/[0.025]
                  md:min-h-[440px] md:p-7
                  lg:min-h-[460px]
                "
              >
                {/* Top metadata */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="text-text-muted/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-co-rich"
                  />
                </div>

                {/* Project category */}
                <div className="mt-10">
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-co-rich">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold leading-tight tracking-tight text-text-main transition-colors duration-300 group-hover:text-co-rich md:text-[22px]">
                    {project.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className="my-7 h-px w-8 bg-black/20 transition-all duration-300 group-hover:w-14 group-hover:bg-co-rich dark:bg-white/20" />

                {/* Description */}
                <p className="text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>

                {/* Technology stack */}
                <div className="mt-7 flex flex-wrap gap-x-2.5 gap-y-2">
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="
                        border border-black/10 dark:border-white/10
                        px-2 py-1 text-[10px] font-medium uppercase tracking-[0.08em]
                        text-text-muted
                        transition-colors duration-300
                        group-hover:border-black/20 dark:group-hover:border-white/20
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Explore */}
                <div className="mt-auto pt-10">
                  <div className="flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-4">
                    <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted transition-colors duration-300 group-hover:text-text-main">
                      Explore project
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="text-text-muted/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-co-rich"
                    />
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Carousel Navigation */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            onClick={() => {
              playClickSound();
              goPrevious();
            }}
            disabled={safeIndex === 0}
            aria-label="Previous project"
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full border border-black/10 dark:border-white/10
              text-text-main
              transition-all duration-200
              hover:bg-black hover:text-white
              dark:hover:bg-white dark:hover:text-black
              disabled:cursor-not-allowed disabled:opacity-30
            "
          >
            <ArrowLeft size={17} strokeWidth={1.5} />
          </button>

          <button
            onClick={() => {
              playClickSound();
              goNext();
            }}
            disabled={safeIndex >= maxIndex}
            aria-label="Next project"
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full border border-black/10 dark:border-white/10
              text-text-main
              transition-all duration-200
              hover:bg-black hover:text-white
              dark:hover:bg-white dark:hover:text-black
              disabled:cursor-not-allowed disabled:opacity-30
            "
          >
            <ArrowRight size={17} strokeWidth={1.5} />
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-7 text-xs uppercase tracking-[0.16em] text-text-muted">
          <span>Built and Deployed</span>
          <span>{String(projects.length).padStart(2, "0")} Projects</span>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
