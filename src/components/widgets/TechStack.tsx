"use client";
import React from "react";
import ReactIcon from "@/components/icons/React.svg";
import AWSIcon from "@/components/icons/AWS.svg";
import GitIcon from "@/components/icons/GitHub.svg";
import BootstrapIcon from "@/components/icons/Bootstrap.svg";
import CSharpIcon from "@/components/icons/CSharp.svg";
import CSSIcon from "@/components/icons/CSS3.svg";
import ExpressIcon from "@/components/icons/Express.svg";
import JavaScriptIcon from "@/components/icons/JavaScript.svg";
import HTMLIcon from "@/components/icons/HTML5.svg";
import TypeScriptIcon from "@/components/icons/TypeScript.svg";
import NodeIcon from "@/components/icons/Node.js.svg";
import MongoDBIcon from "@/components/icons/MongoDB.svg";
import DockerIcon from "@/components/icons/Docker.svg";
import Postgres from "@/components/icons/PostgresSQL.svg";
import MySQL from "@/components/icons/MySQL.svg";

const technologies = [
  { name: "HTML5", Icon: HTMLIcon },
  { name: "CSS3", Icon: CSSIcon },
  { name: "JavaScript", Icon: JavaScriptIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Express", Icon: ExpressIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Bootstrap", Icon: BootstrapIcon },
  { name: "PostgreSQL", Icon: Postgres },
  { name: "CSharp", Icon: CSharpIcon },
  { name: "Node.js", Icon: NodeIcon },
  { name: "MongoDB", Icon: MongoDBIcon },
  { name: "Docker", Icon: DockerIcon },
  { name: "AWS", Icon: AWSIcon },
  { name: "Git", Icon: GitIcon },
  { name: "MySQL", Icon: MySQL },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="py-20 bg-navy-base text-white flex flex-col items-center px-6"
    >
      {/* Header */}
      <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">
        Tech Stack
      </p>
      <h2 className="text-4xl font-bold mb-4">Tools I Build With</h2>
      <p className="text-gray-400 mb-12 max-w-md text-center">
        A curated set of technologies I rely on to build modern web experiences
      </p>

      {/* Responsive Grid/Flex Container */}
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 px-5 py-3 bg-132537 border border-gray-800 rounded-full hover:border-gray-600 transition-colors cursor-default"
          >
            <tech.Icon className="w-5 h-5" />
            <span className="font-medium text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
