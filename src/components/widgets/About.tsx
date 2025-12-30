"use client";

import { motion } from "framer-motion";

const qualities = [
  "Full-Stack Engineering",
  "Problem Solving",
  "Continuous Learning",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-second-base px-6 py-28 md:py-36"
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold tracking-[0.25em] uppercase text-co-rich">
            About Me
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="mt-5 max-w-4xl text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white">
            Full-Stack Engineer building{" "}
            <span className="text-co-rich">software that matters.</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl"
        >
          <p className="text-lg md:text-xl leading-relaxed text-sub-rich">
            I&apos;m a Full-Stack Web Developer with 3 years of hands-on
            experience building modern web applications, automation tools, and
            end-to-end systems.
          </p>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-sub-rich">
            I enjoy taking ownership of the entire development process — from
            understanding a problem and designing the architecture to building,
            testing, and deploying the final product.
          </p>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-sub-rich">
            My experience spans professional development, freelance work,
            collaborative engineering teams, and self-directed product
            development. I&apos;m particularly interested in building reliable
            systems, exploring AI-driven development, and continuously
            improving how software gets built and shipped.
          </p>
        </motion.div>

        {/* Qualities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {qualities.map((quality) => (
            <span
              key={quality}
              className="
                rounded-full
                border border-white/10
                bg-white/[0.03]
                px-5 py-2.5
                text-sm
                font-medium
                text-sub-rich
                transition-all duration-300
                hover:border-co-rich/30
                hover:text-co-rich
              "
            >
              {quality}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}