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
  { name: "HTML5", Icon: HTML5 },
  { name: "CSS3", Icon: CSS3 },
  { name: "JavaScript", Icon: JavaScript },
  { name: "React", Icon: ReactJs },
  { name: "Express", Icon: Express },
  { name: "TypeScript", Icon: TypeScript },
  { name: "ESLint", Icon: ESLint },
  { name: "Git", Icon: Git },
  { name: "C#", Icon: CSharp },
  { name: "PostgresSQL", Icon: PostgresSQL },
  { name: "Bootstrap", Icon: Bootstrap },
  { name: "AWS", Icon: AWS },
  { name: "Node.js", Icon: Node },
  { name: "MongoDB", Icon: MongoDB },
  { name: "Docker", Icon: Docker },
  { name: "MySQL", Icon: MySQL },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="py-20 bg-charcoal-base text-sub-rich overflow-hidden"
    >
      <div className="flex flex-col items-center mb-12">
        <p className="text-xs tracking-[0.2em] text-co-rich uppercase mb-4">
          Tech Stack
        </p>
        <h2 className="text-4xl font-bold mb-4 text-co-rich ">
          Tools I Build With
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex overflow-hidden mask-fade-edges">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 pr-6"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-3 px-6 py-4 mt-6 bg-bar-surface border border-gray-800 rounded-2xl cursor-pointer hover:border-sub-rich transition-colors shrink-0"
            >
              <tech.Icon className="w-6 h-6" />
              <span className="font-semibold text-sm whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
