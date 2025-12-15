"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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

const techIcons = [
  ReactIcon,
  AWSIcon,
  GitIcon,
  ExpressIcon,
  BootstrapIcon,
  CSSIcon,
  CSharpIcon,
  JavaScriptIcon,
  HTMLIcon,
  TypeScriptIcon,
  NodeIcon,
  MongoDBIcon,
  DockerIcon,
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

  const starColors = ["#B87333", "#C98A4A", "#FFFFFF", "#E5E7EB"];

  const stars = useMemo(
    () =>
      Array.from({ length: 120 }, () => ({
        shapeType: Math.floor(Math.random() * 3),
        size: Math.random() * 6 + 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        xMove: (Math.random() - 0.5) * 1000,
        yMove: (Math.random() - 0.5) * 1000,
        duration: 5 + Math.random() * 5,
        delay: Math.random() * 10,
      })),
    []
  );

  const floatingTechIcons = useMemo(
    () =>
      techIcons.map((Icon) => ({
        Icon,

        left: Math.random() * 100,
        top: Math.random() * 100,

        size: Math.random() * 20 + 35,

        xMove: (Math.random() - 0.5) * 500,
        yMove: (Math.random() - 0.5) * 500,

        duration: 50 + Math.random() * 30,
        delay: Math.random() * 10,
      })),
    []
  );

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-navy-base overflow-hidden"
    >
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
    py-4
    text-md
    backdrop-blur-sm
  "
      >
        <span className="tracking-wide"> Toronto, Ontario</span>

        <span className="tracking-wide"> {time} EST</span>
      </div>

      {/* PARTICLES */}
      <div className="absolute inset-0 z-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center pointer-events-none"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              x: [0, star.xMove],
              y: [0, star.yMove],
              opacity: [0, 0.8, 0],

              rotate: star.shapeType !== 0 ? [0, 360] : 0,
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              delay: star.delay,
            }}
          >
            {star.shapeType === 1 ? (
              <svg
                viewBox="0 0 24 24"
                fill={star.color}
                className="w-full h-full"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            ) : star.shapeType === 2 ? (
              <svg
                viewBox="0 0 24 24"
                fill={star.color}
                className="w-full h-full"
              >
                <path d="M12 0L24 12L12 24L0 12L12 0Z" />
              </svg>
            ) : (
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundColor: star.color,
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* FLOATING TECH ICONS */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingTechIcons.map((item, index) => {
          const Icon = item.Icon;

          return (
            <motion.div
              key={index}
              className="absolute opacity-10"
              style={{
                left: `${item.left}%`,
                top: `${item.top}%`,
                width: item.size,
                height: item.size,
              }}
              animate={{
                x: item.xMove,
                y: item.yMove,
                rotate: 360,
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                ease: "linear",
                delay: item.delay,
              }}
            >
              <Icon className="w-full h-full" />
            </motion.div>
          );
        })}
      </div>

      {/* HERO CONTENT */}

      <div className="relative z-10 flex flex-row items-center justify-center h-full gap-16 px-20 ">
        <div className="flex flex-col items-start text-left max-w-lg">
          <h1 className="text-6xl font-bold text-white mb-2">
            Hello ,I'm Samson
          </h1>
          <h2 className="text-2xl text-co-simple font-semibold mb-4">
            Full-Stack Developer
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Building scalable applications and intuitive user interfaces with a
            focus on clean, maintainable code.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-2 border border-gray-600 text-white rounded-md hover:bg-white/10 transition flex items-center gap-2">
              <FaGithub className="w-5 h-5" />
              GitHub
            </button>
            <button className="px-6 py-2 border border-gray-600 text-white rounded-md hover:bg-white/10 transition">
              Resume
            </button>
            <button className="px-6 py-2 border border-gray-600 text-white rounded-md hover:bg-white/10 transition flex items-center gap-2">
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </button>
          </div>
        </div>

        <div className="hidden lg:flex relative w-72 h-72 bg-[#0F172A] rounded-2xl border border-gray-800 p-4 shadow-2xl items-center justify-center">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/G7pAzXNdA4oxyw4kbTVYB0npiM.png?scale-down-to=512&width=1254&height=1254"
              alt="Samson"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
