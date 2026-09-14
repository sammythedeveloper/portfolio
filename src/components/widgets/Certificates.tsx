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
    issuer:
      "Ted Rogers School of Management - Toronto Metropolitan University",
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
    <section id="certificates" className="w-full py-20 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-co-rich">
            Credentials
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Certifications & Training
          </h2>

          <p className="mt-3 max-w-xl text-sm md:text-base text-sub-rich">
            Verified certifications and technical training.
          </p>
        </motion.div>

        {/* Credential Carousel */}
        <div
          className="mt-10"
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
                className="min-h-[120px] px-5 py-5 md:px-7 md:py-6"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                  {/* Number */}
                  <div className="shrink-0">
                    <span className="font-mono text-xs text-sub-rich">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>

                    <span className="mx-1 text-sub-rich/30">/</span>

                    <span className="font-mono text-xs text-sub-rich/50">
                      {String(certificates.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                        {activeCertificate.title}
                      </h3>

                      <span className="text-[10px] uppercase tracking-[0.18em] text-co-rich">
                        {activeCertificate.type}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-sub-rich">
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
                      text-sm
                      font-medium
                      text-sub-rich
                      transition-colors
                      hover:text-co-rich
                    "
                  >
                    Verify
                    <ExternalLink
                      size={14}
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
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {certificates.map((certificate, index) => (
                <button
                  key={certificate.title}
                  type="button"
                  aria-label={`Show ${certificate.title}`}
                  onClick={() => setActiveIndex(index)}
                  className="
                    group
                    flex
                    items-center
                    justify-center
                    p-1
                  "
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
                          ? "w-8 bg-co-rich"
                          : "w-3 bg-white/15 group-hover:bg-white/30"
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            <span className="text-[11px] text-sub-rich/50">
              {isPaused ? "Paused" : "Auto rotating"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}