"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/nav-data";

// Your photo in /public. Change the file name if yours is different.
const PROFILE_PHOTO = "/IMG_1980.PNG";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const switchSoundRef = useRef<HTMLAudioElement | null>(null);

  // Load the switch sound once
  useEffect(() => {
    const sound = new Audio("/sound/sound.mp3");
    sound.preload = "auto";
    switchSoundRef.current = sound;

    return () => {
      sound.pause();
      switchSoundRef.current = null;
    };
  }, []);

  // Track which section is in view
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
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

    setTheme(isDark ? "light" : "dark");
  };

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b border-text-main/10 bg-second-base/50 backdrop-blur-xl backdrop-saturate-150"
        style={{
          WebkitBackdropFilter: "blur(16px) saturate(150%)",
        }}
      >
        <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6 lg:px-10">
          {/* Home: your photo */}
          <button
            type="button"
            onClick={() => scrollTo("home")}
            aria-label="Back to top"
            className="shrink-0 overflow-hidden rounded-full ring-1 ring-text-main/15 transition hover:ring-text-main/40"
          >
            <Image
              src={PROFILE_PHOTO}
              alt="Samson Daba"
              width={36}
              height={36}
              className="h-9 w-9 object-cover object-top"
            />
          </button>

          {/* Desktop links */}
          <nav
            aria-label="Section navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={`group relative py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                    isActive
                      ? "text-text-main"
                      : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-text-main transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right side: theme toggle, plus the menu button on mobile */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              disabled={!mounted}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              className="flex h-9 w-9 items-center justify-center rounded-full text-text-muted transition hover:text-text-main disabled:opacity-0"
            >
              {mounted &&
                (isDark ? (
                  <Sun size={16} strokeWidth={1.6} />
                ) : (
                  <Moon size={16} strokeWidth={1.6} />
                ))}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-9 w-9 items-center justify-center rounded-full text-text-main transition hover:bg-text-main/5 md:hidden"
            >
              {menuOpen ? (
                <X size={20} strokeWidth={1.6} />
              ) : (
                <Menu size={20} strokeWidth={1.6} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu: a sibling of the header, so its blur sees the page */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile section navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 top-24 z-40 overflow-y-auto bg-second-base/60 backdrop-blur-2xl backdrop-saturate-150 md:hidden"
            style={{
              WebkitBackdropFilter: "blur(24px) saturate(150%)",
            }}
          >
            <ul className="flex flex-col px-6 pt-2">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;

                return (
                  <li
                    key={item.id}
                    className="border-b border-text-main/10 last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => scrollTo(item.id)}
                      className={`flex w-full items-center justify-between py-5 text-left text-3xl transition-colors ${
                        isActive ? "text-text-main" : "text-text-muted"
                      }`}
                      style={{
                        fontFamily:
                          "var(--font-instrument-serif), Georgia, serif",
                      }}
                    >
                      {item.name}
                      {isActive && <span className="h-px w-8 bg-text-main" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
