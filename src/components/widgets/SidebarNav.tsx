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
      className="fixed left-6 top-1/4 w-20 flex flex-col items-center gap-4 py-6 bg-navy-base rounded-full border border-gold-rich/20 shadow-2xl z-50"
    >
      {NAV_ITEMS.map((item) => (
        <div
          key={item.name}
          className="relative flex items-center justify-center cursor-pointer w-full h-16 group"
          onMouseEnter={() => setHovered(item.name)}
          onMouseLeave={() => setHovered(null)}
        >
          <motion.div
            className="absolute w-14 h-14 rounded-full bg-navy-hover/0 transition-colors duration-300"
            animate={{
              backgroundColor:
                hovered === item.name ? "#000000" : "transparent",
            }}
          />

          {/* Icon container */}
          <div className="relative w-7 h-7 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
            <Image
              src={item.iconUrl}
              alt={item.name}
              fill
              sizes="28px"
              className="object-contain"
              style={{
                filter:
                  hovered === item.name
                    ? "invert(74%) sepia(47%) saturate(682%) hue-rotate(6deg) brightness(92%) contrast(91%)"
                    : "brightness(0) invert(1)",
              }}
            />
          </div>
        </div>
      ))}
    </motion.nav>
  );
}
