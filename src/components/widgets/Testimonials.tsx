"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  company?: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Samson approached the project with a clear understanding of the business problem we wanted to solve. From designing the user experience to implementing the backend functionality, he was focused on delivering something practical rather than just making it look good.",
    name: "Freelance Client",
    company: "",
  },
  {
    quote: "Working with Sam was a great experience. He understands both frontend and backend development and knows how to bring the pieces together into a reliable application. His attention to functionality, usability, and maintainable code makes him a valuable contributor to any development team.",
    name: "Biruk K.",
    company: "EvangadiNet",
  },
  {
    quote: "That combination of his technical ability and practical thinking is valuable to any organization",
    name: "Ziran.",
    company: "Intractmet",
  },
 
 
];

const INTERVAL_MS = 6000;
const serif = { fontFamily: "var(--font-serif)" } as const;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const total = testimonials.length;

  useEffect(() => {
    if (paused || total < 2) return;

    const timer = setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % total);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [paused, total]);

  if (total === 0) return null;

  const visibleTestimonials = [0, 1, 2].map(
    (offset) => testimonials[(index + offset) % total]
  );

  const goPrev = () => {
    setDirection(-1);
    setIndex((current) => (current - 1 + total) % total);
  };

  const goNext = () => {
    setDirection(1);
    setIndex((current) => (current + 1) % total);
  };

  return (
    <section
      id="testimonials"
      className="w-full bg-second-base px-6 py-20 text-text-main md:py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span
            style={serif}
            className="text-4xl font-normal tracking-tight md:text-5xl"
          >
            What People Say
          </span>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-text-muted">
            Feedback from people I&apos;ve worked with.
          </p>
        </motion.div>

        {/* Testimonial container */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative overflow-hidden rounded-3xl border border-black/10 bg-charcoal-base p-6 md:p-10 dark:border-white/10"
        >
          {/* Three-column carousel */}
          <div className="px-2 md:px-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: direction * 60,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction * -60,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
              >
                {visibleTestimonials.map((item, i) => {
                  const initials = item.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase();

                  return (
                    <motion.figure
                      key={`${index}-${i}`}
                      className="flex min-h-[180px] flex-col rounded-2xl border border-gray-200 bg-white/[0.03] p-6 transition-colors dark:border-white/10"
                    >
                      <Quote
                        size={18}
                        strokeWidth={1}
                        className="mb-6 text-text-main/25"
                        aria-hidden="true"
                      />

                      <blockquote
                        style={serif}
                        className="flex-1 text-lg leading-snug md:text-lg"
                      >
                        {item.quote}
                      </blockquote>

                      <figcaption className="mt-8 flex items-center gap-3">

                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium">
                            {item.name}
                          </p>
                          <p className="truncate text-xs text-text-muted">
                            {item.company ? ` ${item.company}` : ""}
                          </p>
                        </div>
                      </figcaption>
                    </motion.figure>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom-centered navigation */}
          {total > 1 && (
            <div className="mt-9 flex flex-col items-center gap-5">
              {/* Arrows */}
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous testimonials"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-black/[0.04] dark:border-white/15 dark:hover:bg-white/[0.06]"
                >
                  <ArrowLeft size={15} strokeWidth={1.5} />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next testimonials"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-black/[0.04] dark:border-white/15 dark:hover:bg-white/[0.06]"
                >
                  <ArrowRight size={15} strokeWidth={1.5} />
                </button>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show testimonial group ${i + 1}`}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className="flex items-center justify-center p-1"
                  >
                    <span
                      className={`block h-1 rounded-full transition-all duration-300 ${
                        i === index
                          ? "w-7 bg-text-main"
                          : "w-2.5 bg-text-main/20 hover:bg-text-main/40"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Progress line */}
          {total > 1 && (
            <div className="absolute bottom-0 left-0 right-0 h-px bg-black/5 dark:bg-white/5">
              <motion.div
                key={`${index}-${paused}`}
                initial={{ width: "0%" }}
                animate={{ width: paused ? "0%" : "100%" }}
                transition={{
                  duration: paused ? 0 : INTERVAL_MS / 1000,
                  ease: "linear",
                }}
                className="h-full bg-text-main/60"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
