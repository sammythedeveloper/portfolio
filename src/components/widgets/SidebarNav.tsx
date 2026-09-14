"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/nav-data";

export default function SidebarNav() {
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.nav
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        hidden md:flex
        fixed
        left-6
        top-1/2
        -translate-y-1/2
        z-50
        flex-col
        items-center
      "
      aria-label="Section navigation"
    >
      {/* Navigation rail */}
      <div
        className="
          relative
          flex
          flex-col
          items-center
          gap-2
          py-3
          px-2
          border-l
          border-white/10
        "
      >
        {NAV_ITEMS.map((item, index) => {
          const isActive = active === item.id;
          const isHovered = hovered === item.name;

          return (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Active indicator */}
              {isActive && (
                <motion.span
                  layoutId="sidebar-active"
                  className="
                    absolute
                    -left-[9px]
                    top-1/2
                    -translate-y-1/2
                    w-[3px]
                    h-7
                    rounded-full
                    bg-co-rich
                  "
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <button
                type="button"
                onClick={() => scrollToSection(item.id)}
                aria-label={`Go to ${item.name}`}
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  w-9
                  h-9
                  rounded-md
                  cursor-pointer
                  outline-none
                "
              >
                {/* Hover background */}
                <motion.span
                  initial={false}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.85,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    absolute
                    inset-0
                    rounded-md
                  "
                />

                {/* Icon */}
                <motion.span
                  animate={{
                    opacity: isActive ? 1 : isHovered ? 0.85 : 0.45,
                    scale: isHovered ? 1.08 : 1,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    relative
                    w-[17px]
                    h-[17px]
                    z-10
                  "
                >
                  <Image
                    src={item.iconUrl}
                    alt=""
                    fill
                    sizes="10px"
                    className="object-contain"
                    style={{
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </motion.span>
              </button>

              {/* Hover label */}
              <motion.div
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -6,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  pointer-events-none
                  absolute
                  left-12
                  top-1/2
                  -translate-y-1/2
                  whitespace-nowrap
                "
              >
                <span
                  className="
                    px-2.5
                    py-1.5
                    rounded-md
                    border
                    border-white/10
                    bg-bar-surface/90
                    backdrop-blur-md
                    text-[10px]
                    font-mono
                    uppercase
                    tracking-[0.18em]
                    text-co-rich
                    shadow-lg
                  "
                >
                  {item.name}
                </span>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Small index */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.8 }}
        className="
          mt-4
          text-[9px]
          font-mono
          tracking-[0.2em]
          text-sub-rich
        "
      >
        {String(
          Math.max(
            0,
            NAV_ITEMS.findIndex((item) => item.id === active)
          ) + 1
        ).padStart(2, "0")}
        /{String(NAV_ITEMS.length).padStart(2, "0")}
      </motion.div>
    </motion.nav>
  );
}
