"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useSyncExternalStore, useRef } from "react";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_ITEMS } from "@/lib/nav-data";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function SidebarNav() {
  const [active, setActive] = useState<string | null>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const switchSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const sound = new Audio("/sound/sound.mp3");
    sound.preload = "auto";
    switchSoundRef.current = sound;

    return () => {
      sound.pause();
      switchSoundRef.current = null;
    };
  }, []);

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

  const toggleTheme = () => {
    const sound = switchSoundRef.current;

    if (sound) {
      sound.currentTime = 0;
      void sound.play().catch((error) => {
        console.error("Switch sound playback failed:", error);
      });
    }

    setTheme(resolvedTheme === "dark" ? "light" : "dark");
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
      bg-[#F4F3EF]/70
      backdrop-blur-2xl
      backdrop-saturate-150
      dark:border-white/[0.08]
      dark:bg-[#0B0D12]/55
    "
      aria-label="Section navigation"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-8 px-6 lg:px-10">
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
                      className="object-contain transition dark:invert"
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
                          ? "text-text-main"
                          : "text-text-muted hover:text-text-main group-focus-visible:text-text-main"
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

        <button
          type="button"
          onClick={toggleTheme}
          disabled={!mounted}
          aria-label={
            resolvedTheme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          title={
            resolvedTheme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          className="
            flex
            shrink-0
            items-center
            justify-center
            text-text-muted
            transition-all
            duration-300
            hover:scale-105
            hover:text-text-main
            disabled:opacity-0
          "
        >
          {mounted &&
            (resolvedTheme === "dark" ? (
              <Sun size={16} strokeWidth={1.7} />
            ) : (
              <Moon size={16} strokeWidth={1.7} />
            ))}
        </button>
      </div>
    </motion.nav>
  );
}
