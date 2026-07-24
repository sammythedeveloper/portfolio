"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Github, ArrowUpRight } from "lucide-react";

import me from "../../../public/yes.jpg";

const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "AWS",
  "Docker",
];

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-CA", {
          timeZone: "America/Toronto",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        w-full
        min-h-screen
        bg-navy-base
        overflow-hidden
        flex
        items-center
      "
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-1/2
            left-1/3
            w-[500px]
            h-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-co-rich/[0.04]
            blur-[120px]
          "
        />
      </div>

      {/* Top information bar */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          z-20
          flex
          justify-between
          items-center
          px-6
          md:px-12
          py-5
          text-xs
          font-mono
          tracking-widest
          uppercase
          text-white
        "
      >
        <span>Toronto, Ontario</span>

        <span>{time} EST</span>
      </div>

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          mx-auto
          px-6
          md:px-12
          pt-20
          lg:pt-0
          grid
          grid-cols-1
          lg:grid-cols-[1fr_auto]
          items-center
          gap-16
        "
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-co-rich" />

            <span
              className="
                text-xs
                font-mono
                uppercase
                tracking-[0.25em]
                text-co-rich
              "
            >
              Samson Daba
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="
              text-5xl
              sm:text-6xl
              lg:text-7xl
              font-bold
              tracking-tight
              leading-[0.95]
              text-co-rich
            "
          >
            Full-Stack
            <br />
            Software Engineer
          </h1>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-xl
              text-base
              md:text-lg
              leading-relaxed
              text-sub-rich
            "
          >
            I build production-ready web applications, reliable APIs, and
            data-driven systems with a focus on scalable and maintainable
            software.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-7 max-w-xl">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-sub-rich
                  transition-colors
                  hover:border-co-rich/30
                  hover:text-co-rich
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-9">
            <a
              href="#projects"
              className="
                group
                flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-6
                py-3
                text-sm
                font-semibold
                text-black
                transition-all
                hover:bg-white/90
                active:scale-[0.98]
              "
            >
              View Featured Projects

              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                border
                border-white/10
                bg-white/[0.02]
                px-6
                py-3
                text-sm
                font-semibold
                text-sub-rich
                transition-all
                hover:border-white/20
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              View Resume
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5 mt-8">
            <a
              href="https://github.com/sammythedeveloper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                text-sub-rich/60
                transition-colors
                hover:text-white
              "
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/samson-daba-29b877231/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                text-sub-rich/60
                transition-colors
                hover:text-white
              "
            >
              <FaLinkedin size={19} />
            </a>

            <a
              href="mailto:samsondev3@gmail.com"
              aria-label="Email"
              className="
                text-sub-rich/60
                transition-colors
                hover:text-co-rich
              "
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="
            hidden
            lg:flex
            relative
            w-80
            h-80
            xl:w-96
            xl:h-96
            items-center
            justify-center
          "
        >
          {/* Outer glow */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-co-rich/[0.06]
              blur-3xl
            "
          />

          {/* Gradient ring */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              p-[1px]
              bg-gradient-to-br
              from-co-rich/40
              via-white/10
              to-transparent
            "
          >
            <div className="w-full h-full rounded-full bg-navy-base" />
          </div>

          {/* Image */}
          <div
            className="
              relative
              w-[calc(100%-12px)]
              h-[calc(100%-12px)]
              rounded-full
              overflow-hidden
              border
              border-white/10
            "
          >
            <Image
              src={me}
              alt="Samson Daba"
              fill
              priority
              className="object-cover object-[center_70%]"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          hidden
          md:flex
          flex-col
          items-center
          gap-2
          text-[10px]
          font-mono
          uppercase
          tracking-[0.3em]
          text-sub-rich/30
        "
      >
        <span className=" text-gray-300 hover:text-co-rich " >Scroll</span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className=" hover:text-co-rich w-px h-8 bg-white/20"
        />
      </motion.div>
    </section>
  );
}