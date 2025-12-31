"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import me from "../../../public/IMG_0448.jpg";

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

const starColors = ["#B87333", "#C98A4A", "#FFFFFF", "#E5E7EB"];

type Star = {
  shapeType: number;
  size: number;
  color: string;
  left: number;
  top: number;
  xMove: number;
  yMove: number;
  duration: number;
  delay: number;
};

type FloatingIcon = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  left: number;
  top: number;
  size: number;
  xMove: number;
  yMove: number;
  duration: number;
  delay: number;
};

// STATIC DATA = NO HYDRATION ISSUE

const stars: Star[] = Array.from({ length: 120 }, (_, i) => ({
  shapeType: i % 3,
  size: 2 + (i % 5),
  color: starColors[i % starColors.length],

  left: (i * 37) % 100,
  top: (i * 53) % 100,

  xMove: i % 2 === 0 ? 300 : -300,
  yMove: i % 3 === 0 ? -200 : 200,

  duration: 5 + (i % 5),
  delay: i * 0.1,
}));

const floatingTechIcons: FloatingIcon[] = techIcons.map((Icon, index) => ({
  Icon,

  left: (index * 31) % 100,
  top: (index * 47) % 100,

  size: 40,

  xMove: index % 2 === 0 ? 300 : -300,

  yMove: index % 2 === 0 ? -200 : 200,

  duration: 60 + index * 2,
  delay: index,
}));

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
      className="relative w-full h-screen bg-navy-base overflow-hidden"
    >
      {/* TOP BAR */}
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
        <span className="tracking-wide">Toronto, Ontario</span>

        <span className="tracking-wide">{time} EST</span>
      </div>

      {/* PARTICLES */}

      <div className="absolute inset-0 z-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="
              absolute
              flex
              items-center
              justify-center
              pointer-events-none
            "
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
              repeatType: "reverse",
              ease: "linear",
              delay: star.delay,
            }}
          >
            {star.shapeType === 1 ? (
              <svg
                viewBox="0 0 24 24"
                fill={star.color}
                className="w-full h-full"
              >
                <path
                  d="
                    M12 0
                    L14.59 9.41
                    L24 12
                    L14.59 14.59
                    L12 24
                    L9.41 14.59
                    L0 12
                    L9.41 9.41
                    L12 0
                  "
                />
              </svg>
            ) : star.shapeType === 2 ? (
              <svg
                viewBox="0 0 24 24"
                fill={star.color}
                className="w-full h-full"
              >
                <path
                  d="
                    M12 0
                    L24 12
                    L12 24
                    L0 12
                    Z
                  "
                />
              </svg>
            ) : (
              <div
                className="
                    w-full
                    h-full
                    rounded-full
                  "
                style={{
                  backgroundColor: star.color,
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* FLOATING TECHNOLOGY ICONS */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          overflow-hidden
        "
      >
        {floatingTechIcons.map((item, index) => {
          const Icon = item.Icon;

          return (
            <motion.div
              key={index}
              className="
                    absolute
                    opacity-10
                  "
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
              <Icon
                className="
                      w-full
                      h-full
                    "
              />
            </motion.div>
          );
        })}
      </div>

      {/* HERO CONTENT */}

      <div
        className="
          relative
          z-10
          flex
          flex-row
          items-center
          justify-center
          h-full
          gap-16
          px-20
        "
      >
        <div
          className="
            flex
            flex-col
            items-start
            text-left
            max-w-lg
          "
        >
          <h1
            className="
              text-6xl
              font-bold
              text-co-rich
              mb-2
            "
          >
            Hello, I'm Samson
          </h1>

          <h2
            className="
              text-2xl
              text-sub-rich
              font-semibold
              mb-4
            "
          >
            Full-Stack Developer
          </h2>

          <p
            className="
            text-sub-rich
              mb-8
              text-lg
            "
          >
            Building scalable applications and intuitive user interfaces with a
            focus on clean, maintainable code.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/sammythedeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className=" px-6 py-2 border border-gray-600 text-sub-rich rounded-md hover:bg-co-rich hover:text-black transition flex items-center gap-2 "
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="/path-to-your-resume.pdf" // Or a Google Drive link
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-gray-600 text-sub-rich rounded-md hover:bg-co-rich hover:text-black transition inline-block text-center "
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/samson-daba-29b877231/"
              target="_blank"
              rel="noopener noreferrer"
              className=" px-6 py-2 border border-gray-600 text-sub-rich rounded-md hover:bg-co-rich hover:text-black transition flex items-center gap-2"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* PROFILE IMAGE */}

        <div
          className="
    hidden
    lg:flex
    relative
    w-56
    h-56
    rounded-full
    border
    border-gray-800
    p-4
    shadow-2xl
    items-center
    justify-center
  "
        >
          <div
            className="
      relative
      w-full
      h-full
      rounded-full
      overflow-hidden
    "
          >
            <Image
              src={me}
              alt="Samson"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
