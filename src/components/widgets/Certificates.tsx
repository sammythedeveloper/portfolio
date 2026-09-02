"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  verificationUrl: string;
  type: "Certification" | "Course" | "Certificate";
}

const certificates: CertificateItem[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2026",
    type: "Certification",
    verificationUrl:
      "https://www.credly.com/badges/1f14f2cd-6a22-4cac-9bd4-abc559a82bf3/public_url",
  },
  {
    title: "Supervised Machine Learning",
    issuer: "Coursera",
    date: "2026",
    type: "Course",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/T8XQVEHQX3X4",
  },
  {
    title: "Advanced Digital and Professional Training (ADaPT)",
    issuer: "Ted Rogers School of Management - Toronto Metropolitan University",
    date: "2025",
    type: "Certification",
    verificationUrl:
      "https://certificate.bcdiploma.com/check/721CDD5B664E7A020B802B48178C034A39CC722301B66A77539FC9B730468A22WjdDZlRDZmpMN3BhU0tlVDA0TmRVSEhCcmFBdkdscUNMV0xOQVJTWDJHdG8zamxl",
  },
  {
    title: "Full-Stack Developer Certificate",
    issuer: "Evangadi Network",
    date: "2023",
    type: "Certificate",
    verificationUrl:
      "https://drive.google.com/file/d/13P5Y7XxAr_6GoSsrD5phLhySdhjUiVMK/view?usp=sharing",
  },
  {
    title: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "2026",
    type: "Course",
    verificationUrl:
      "https://www.credly.com/badges/7aa30285-5c1d-4b9b-a792-31fae83a69e2/public_url",
  },
  {
    title: "Google IT Analyst Certificate",
    issuer: "Coursera",
    date: "2022",
    type: "Certificate",
    verificationUrl:
      "https://coursera.org/share/f6c8bee864de21f8980cdbbb4fc7d9c7",
  },
];

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % certificates.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeCertificate = certificates[activeIndex];

  return (
    <section id="certificates" className="w-full px-6 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-co-rich">
            Credentials
          </span>

          <h2 className="mt-2 text-2xl font-bold text-black tracking-tight md:text-3xl">
            Certifications & Training
          </h2>

          <p className="mt-2 max-w-xl text-xs text-sub-rich md:text-sm">
            Verified certifications and technical training.
          </p>
        </motion.div>

        {/* Credential Carousel */}
        <div
          className="mt-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-charcoal-base">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeCertificate.title}
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -35 }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="min-h-[95px] px-4 py-4 md:px-6 md:py-5"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
                  {/* Number */}
                  <div className="shrink-0">
                    <span className="font-mono text-[11px] text-sub-rich">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>

                    <span className="mx-1 text-sub-rich/30">/</span>

                    <span className="font-mono text-[11px] text-sub-rich/50">
                      {String(certificates.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                      <h3 className="text-base font-semibold text-black tracking-tight md:text-lg">
                        {activeCertificate.title}
                      </h3>

                      <span className="text-[9px] uppercase tracking-[0.16em] text-co-rich">
                        {activeCertificate.type}
                      </span>
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-sub-rich">
                      <span>{activeCertificate.issuer}</span>

                      <span className="text-white/20">·</span>

                      <span>{activeCertificate.date}</span>
                    </div>
                  </div>

                  {/* Verify */}
                  <a
                    href={activeCertificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      shrink-0
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-medium
                      text-sub-rich
                      transition-colors
                      hover:text-co-rich
                    "
                  >
                    Verify
                    <ExternalLink
                      size={12}
                      className="
                        transition-transform
                        duration-200
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5">
              <motion.div
                key={`${activeIndex}-${isPaused}`}
                initial={{ width: "0%" }}
                animate={{
                  width: isPaused ? "0%" : "100%",
                }}
                transition={{
                  duration: isPaused ? 0 : 5,
                  ease: "linear",
                }}
                className="h-full bg-co-rich"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {certificates.map((certificate, index) => (
                <button
                  key={certificate.title}
                  type="button"
                  aria-label={`Show ${certificate.title}`}
                  onClick={() => setActiveIndex(index)}
                  className="group flex items-center justify-center p-1"
                >
                  <span
                    className={`
                      block
                      h-1
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        index === activeIndex
                          ? "w-7 bg-co-rich"
                          : "w-2.5 bg-white/15 group-hover:bg-white/30"
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            <span className="text-[10px] text-sub-rich/50">
              {isPaused ? "Paused" : "Auto rotating"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
