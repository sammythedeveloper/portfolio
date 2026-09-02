"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface EducationItem {
  institution: string;
  credential: string;
  field: string;
  period: string;
  location: string;
  description: string;
  subjects: string[];
}

interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  verificationUrl: string;
  type: "Certification" | "Course" | "Certificate";
}

const education: EducationItem[] = [
  {
    institution: "Humber Polytechnic",
    credential: "Software Development",
    field: "Backend Software Development",
    period: "2026",
    location: "Toronto, ON",
    description:
      "Backend development, databases, APIs, cloud-native development, and enterprise software.",
    subjects: ["C# / .NET", "SQL", "APIs", "Cloud", "Backend"],
  },
  {
    institution: "Hawassa University",
    credential: "University Coursework",
    field: "BSc in Construction Engenering ",
    period: "2016 — 2020",
    location: "Ethiopia",
    description:
      "Coursework completed across engineering, architectural and technical design, construction management, structural analysis.",
    subjects: ["Engineering"],
  },
];

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

export default function Education() {
  const [activeEducation, setActiveEducation] = useState(0);
  const [activeCertificate, setActiveCertificate] = useState(0);
  const [isCertificatePaused, setIsCertificatePaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEducation((current) => (current + 1) % education.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isCertificatePaused) return;

    const interval = setInterval(() => {
      setActiveCertificate((current) => (current + 1) % certificates.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isCertificatePaused]);

  const item = education[activeEducation];
  const certificate = certificates[activeCertificate];

  return (
    <section
      id="education"
      className="relative w-full overflow-hidden bg-second-base px-6 py-12 text-text-main md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {/* EDUCATION CARD */}
          <div className="flex min-w-0 flex-col rounded-xl border border-black/10 bg-charcoal-base p-5 dark:border-white/10 md:p-6">
            {/* Header */}
            <div className="flex items-end justify-between border-b border-black/10 pb-3 dark:border-white/10">
            <h2 className="mt-2 font-sans text-xl font-bold tracking-tight text-text-main md:text-2xl">
                Education
              </h2>
            </div>

            {/* Education Display */}
            <div className="relative min-h-[235px] py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEducation}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="grid gap-4 sm:grid-cols-[85px_1fr] sm:gap-5"
                >
                  {/* Index / Date */}
                  <div>
                    <div className="mt-2 font-mono text-[11px] text-text-muted">
                      {item.period}
                    </div>

                    <div className="mt-1 text-xs text-text-muted">
                      {item.location}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-co-rich">
                      {item.credential}
                    </p>

                    <h3 className="mt-1.5 font-sans text-xl font-semibold tracking-tight text-text-main md:text-2xl">
                      {item.institution}
                    </h3>

                    <p className="mt-1.5 font-sans text-sm text-text-muted">
                      {item.field}
                    </p>

                    <p className="mt-3 font-sans text-xs leading-relaxed text-text-muted">
                      {item.description}
                    </p>

                    {/* Subjects */}
                    <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                      {item.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="font-mono text-[9px] uppercase tracking-wide text-text-muted"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Education Navigation */}
            <div className="flex items-center gap-1">
              {education.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveEducation(index)}
                  aria-label={`Show education ${index + 1}`}
                  className="group h-5 w-9"
                >
                  <span
                    className={`block h-px w-full transition-all duration-500 ${
                      activeEducation === index
                        ? "bg-co-rich"
                        : "bg-black/15 group-hover:bg-black/30 dark:bg-white/15 dark:group-hover:bg-white/40"
                    }`}
                  />
                </button>
              ))}

              <span className="ml-2 text-[10px] text-text-muted">
                Auto-rotates
              </span>
            </div>
          </div>

          {/* CERTIFICATIONS CARD */}
          <div className="flex min-w-0 flex-col rounded-xl border border-black/10 bg-charcoal-base p-5 dark:border-white/10 md:p-6">
            {/* Header */}
            <div className="border-b border-black/10 pb-3 dark:border-white/10">
              <h2 className="mt-2 font-sans text-xl font-bold tracking-tight text-text-main md:text-2xl">
                Certifications & Training
              </h2>

              <p className="mt-1 font-sans text-xs text-text-muted">
                Verified certifications and technical training.
              </p>
            </div>

            {/* Certificate Carousel */}
            <div
              className="flex flex-1 flex-col"
              onMouseEnter={() => setIsCertificatePaused(true)}
              onMouseLeave={() => setIsCertificatePaused(false)}
            >
              <div className="relative flex-1 overflow-hidden py-6">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={certificate.title}
                    initial={{ opacity: 0, x: 35 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -35 }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                    className="flex min-h-[150px] flex-col justify-between gap-5"
                  >
                    {/* Main Content */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <h3 className="font-sans text-lg font-semibold tracking-tight text-text-main">
                          {certificate.title}
                        </h3>

                        <span className="text-[9px] uppercase tracking-[0.16em] text-co-rich">
                          {certificate.type}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-2 font-sans text-xs text-text-muted">
                        <span>{certificate.issuer}</span>
                        <span className="text-black/20 dark:text-white/20">
                          ·
                        </span>
                        <span>{certificate.date}</span>
                      </div>
                    </div>

                    {/* Verify */}
                    <a
                      href={certificate.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex w-fit items-center gap-1.5 text-xs font-medium text-text-muted transition-colors hover:text-co-rich"
                    >
                      Verify
                      <ExternalLink
                        size={12}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Bar */}
              <div className="h-px bg-black/5 dark:bg-white/5">
                <motion.div
                  key={`${activeCertificate}-${isCertificatePaused}`}
                  initial={{ width: "0%" }}
                  animate={{
                    width: isCertificatePaused ? "0%" : "100%",
                  }}
                  transition={{
                    duration: isCertificatePaused ? 0 : 5,
                    ease: "linear",
                  }}
                  className="h-full bg-co-rich"
                />
              </div>

              {/* Certificate Navigation */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {certificates.map((certificateItem, index) => (
                    <button
                      key={certificateItem.title}
                      type="button"
                      aria-label={`Show ${certificateItem.title}`}
                      onClick={() => setActiveCertificate(index)}
                      className="group flex items-center justify-center p-1"
                    >
                      <span
                        className={`block h-1 rounded-full transition-all duration-300 ${
                          index === activeCertificate
                            ? "w-7 bg-co-rich"
                            : "w-2.5 bg-black/15 group-hover:bg-black/30 dark:bg-white/15 dark:group-hover:bg-white/30"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <span className="text-[10px] text-text-muted">
                  {isCertificatePaused ? "Paused" : "Auto rotating"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
