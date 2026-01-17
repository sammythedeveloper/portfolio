"use client";

import { ReactLenis } from "lenis/react";
import LenisResize from "./LenisResize";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <LenisResize />
      {children}
    </ReactLenis>
  );
}