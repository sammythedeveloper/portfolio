"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/nav-data";

export default function SidebarNav() {
  const [active, setActive] = useState<string | null>(null);

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
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        sticky
        top-0
        z-50
        hidden
        md:block
        w-full
        border-b
        border-black/[0.06]
        bg-white/[0.72]
        backdrop-blur-xl
        backdrop-saturate-150
      "
      aria-label="Section navigation"
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center gap-10 px-6 lg:px-10">
        {/* Navigation */}
        <div className="flex flex-1 items-center justify-between">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => scrollToSection(item.id)}
                aria-label={`Go to ${item.name}`}
                className="
                  group
                  flex
                  h-12
                  items-center
                  justify-center
                  px-4
                  outline-none
                "
              >
                {item.id === "home" ? (
                  <span
                    className="
                      relative
                      h-[18px]
                      w-[18px]
                      opacity-60
                      transition
                      group-hover:opacity-100
                      group-focus-visible:opacity-100
                    "
                  >
                    <Image
                      src={item.iconUrl}
                      alt=""
                      fill
                      sizes="18px"
                      className="object-contain"
                    />
                  </span>
                ) : (
                  <span
                    className={`
                      whitespace-nowrap
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      transition
                      ${
                        isActive
                          ? "text-black"
                          : "text-black/50 group-hover:text-black group-focus-visible:text-black"
                      }
                    `}
                  >
                    {item.name}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Section index */}
        <div
          className="
            shrink-0
            text-[9px]
            font-mono
            tracking-[0.2em]
            text-black/30
          "
        >
          {String(
            Math.max(
              0,
              NAV_ITEMS.findIndex((item) => item.id === active)
            ) + 1
          ).padStart(2, "0")}
          /{String(NAV_ITEMS.length).padStart(2, "0")}
        </div>
      </div>
    </motion.nav>
  );
}