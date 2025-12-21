"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/nav-data";

export default function SidebarNav() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
      hidden md:flex
      fixed left-4 top-1/4
      w-20
      flex-col items-center gap-4
      py-3
      bg-bar-surface/60
      backdrop-blur-xl
      rounded-full
      border border-white/10
      shadow-2xl
      z-50
    "
    >
      {NAV_ITEMS.map((item) => (
        <div
          key={item.name}
          className="relative flex items-center justify-center cursor-pointer w-12 h-12 group"
          onMouseEnter={() => setHovered(item.name)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => {
            document.getElementById(item.id)?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <motion.div
            className="absolute w-10 h-10 rounded-full bg-navy-hover/0 transition-colors duration-300"
            animate={{
              backgroundColor:
                hovered === item.name ? "#000000" : "transparent",
            }}
          />

          {/* Icon container */}
          <div className="relative w-5 h-5 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
            <Image
              src={item.iconUrl}
              alt={item.name}
              fill
              sizes="28px"
              className="object-contain"
              style={{
                filter:
                  hovered === item.name ? "#132537" : "brightness(0) invert(1)",
              }}
            />
          </div>
        </div>
      ))}
    </motion.nav>
  );
}
