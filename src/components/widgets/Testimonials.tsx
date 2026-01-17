"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string; // optional local path, e.g. "/testimonials/name.jpg"
};

// Replace these placeholders with real quotes you have permission to publish.
const testimonials: Testimonial[] = [
  {
    quote: "[Replace with a real quote from a manager or teammate]",
    name: "[Full Name]",
    role: "[Job title]",
    company: "[Company]",
  },
  {
    quote: "[A second quote, about a different part of your work]",
    name: "[Full Name]",
    role: "[Job title]",
    company: "[Company]",
  },
];

const INTERVAL_MS = 6000;
const serif = { fontFamily: "var(--font-serif)" } as const;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused || total < 2) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [paused, total]);

  if (total === 0) return null;

  const item = testimonials[index];
  const initials = item.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  return (
    <section
      id="testimonials"
      className="w-full bg-second-base px-6 py-20 text-text-main md:py-24"
    >
      <div className="mx-auto w-full max-w-4xl">
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

        {/* Card */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative overflow-hidden rounded-3xl border border-black/10 bg-charcoal-base p-8 md:p-12 dark:border-white/10"
        >
          <Quote
            size={40}
            strokeWidth={1}
            className="mb-6 text-text-main/15"
            aria-hidden="true"
          />

          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="min-h-[180px] md:min-h-[160px]"
            >
              <blockquote
                style={serif}
                className="text-2xl leading-snug md:text-3xl"
              >
                {item.quote}
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4">
                {item.avatar ? (
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 text-xs font-medium dark:border-white/10">
                    {initials}
                  </div>
                )}

                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-text-muted">
                    {item.role}
                    {item.company ? ` · ${item.company}` : ""}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {/* Controls: hidden when there's only one quote */}
          {total > 1 && (
            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
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

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-colors hover:bg-black/[0.04] dark:border-white/15 dark:hover:bg-white/[0.06]"
                >
                  <ArrowLeft size={16} strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-colors hover:bg-black/[0.04] dark:border-white/15 dark:hover:bg-white/[0.06]"
                >
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
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
