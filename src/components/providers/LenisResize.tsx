"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

export default function LenisResize() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const refresh = () => lenis.resize();

    // Recalculate after the page finishes loading (fonts, images)
    window.addEventListener("load", refresh);

    // Recalculate whenever the page height changes (animations, lazy content)
    const observer = new ResizeObserver(refresh);
    observer.observe(document.body);

    refresh();

    return () => {
      window.removeEventListener("load", refresh);
      observer.disconnect();
    };
  }, [lenis]);

  return null;
}
