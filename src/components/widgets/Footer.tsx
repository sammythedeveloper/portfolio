// components/widgets/Footer.tsx

"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-white"></p>
          Samson Daba
          <p className="mt-1 text-xs text-sub-rich">
            Full-Stack Developer · Toronto, ON
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-xs text-sub-rich/50">
            {" "}
            Build with React Next and Tailwind © 2026 All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-sub-rich transition-colors hover:text-co-rich"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
