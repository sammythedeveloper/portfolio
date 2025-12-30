"use client";

import React from "react";
import { motion } from "framer-motion";

import ReactJs from "@/components/icons/React.svg";
import AWS from "@/components/icons/AWS.svg";
import Git from "@/components/icons/GitHub.svg";
import Bootstrap from "@/components/icons/Bootstrap.svg";
import CSharp from "@/components/icons/CSharp.svg";
import CSS3 from "@/components/icons/CSS3.svg";
import Express from "@/components/icons/Express.svg";
import JavaScript from "@/components/icons/JavaScript.svg";
import HTML5 from "@/components/icons/HTML5.svg";
import TypeScript from "@/components/icons/TypeScript.svg";
import Node from "@/components/icons/Node.js.svg";
import MongoDB from "@/components/icons/MongoDB.svg";
import Docker from "@/components/icons/Docker.svg";
import PostgresSQL from "@/components/icons/PostgresSQL.svg";
import MySQL from "@/components/icons/MySQL.svg";
import ESLint from "@/components/icons/ESLint.svg";

const technologies = [
  // Frontend
  { name: "HTML5", Icon: HTML5 },
  { name: "CSS3", Icon: CSS3 },
  { name: "JavaScript", Icon: JavaScript },
  { name: "TypeScript", Icon: TypeScript },
  { name: "React", Icon: ReactJs },
  { name: "Bootstrap", Icon: Bootstrap },

  // Backend
  { name: "Node.js", Icon: Node },
  { name: "Express", Icon: Express },
  { name: "C#", Icon: CSharp },

  // Databases
  { name: "PostgreSQL", Icon: PostgresSQL },
  { name: "MongoDB", Icon: MongoDB },
  { name: "MySQL", Icon: MySQL },

  // Cloud & Development
  { name: "AWS", Icon: AWS },
  { name: "Docker", Icon: Docker },
  { name: "Git", Icon: Git },
  { name: "ESLint", Icon: ESLint },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="py-24 bg-charcoal-base text-sub-rich overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col items-center mb-12 px-6">
        <p className="text-xs tracking-[0.2em] text-co-rich uppercase mb-4">
          Tech Stack
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-co-rich tracking-tight text-center">
          Tools I Build With
        </h2>

        <p className="m-4  text-sub-rich text-center max-w-xl">
          A collection of technologies I use to build modern, scalable
          applications across the frontend, backend, databases, and cloud.
        </p>
      </div>

      {/* Marquee */}
      <div className="flex overflow-hidden mask-fade-edges">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-4 pr-4"
        >
          {[...technologies, ...technologies].map((tech, index) => {
            const Icon = tech.Icon;

            return (
              <motion.div
                key={`${tech.name}-${index}`}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  mt-4
                  px-5
                  py-3
                  bg-white/[0.02]
                  border
                  border-white/[0.08]
                  rounded-2xl
                  shrink-0
                  transition-all
                  duration-300
                  hover:border-co-rich/40
                  hover:bg-white/[0.04]
                  cursor-default
                "
              >
                <Icon className="w-5 h-5" />

                <span className="text-sm font-medium text-sub-rich whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}