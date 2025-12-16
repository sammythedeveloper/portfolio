"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Triggers as it enters the bottom of the screen
  });

  // Increased range from [100, -100] to [200, -200] for a stronger effect
  const y = useTransform(scrollYProgress, [0, 1], [200, -200]); 
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section ref={ref} style={{ y, opacity }}>
      {children}
    </motion.section>
  );
}