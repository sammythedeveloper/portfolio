"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  verificationUrl: string;
}

const certificates: CertificateItem[] = [
  {
    title: "AWS Certified Cloud Practitioner ",
    issuer: "Amazon Web Services (AWS)",
    date: "2026",
    verificationUrl: "https://www.credly.com/badges/1f14f2cd-6a22-4cac-9bd4-abc559a82bf3/public_url",
  },
  {
    title: "Supervised Machine Learning",
    issuer: "Coursera",
    date: "2026",
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/T8XQVEHQX3X4",
  },
  {
    title: "Full-Stack Developer Certificate",
    issuer: "Evangadi Network",
    date: "2023",
    verificationUrl: "https://drive.google.com/file/d/13P5Y7XxAr_6GoSsrD5phLhySdhjUiVMK/view?usp=sharing",
  },
  {
    title: "Google IT Analyst Certificate",
    issuer: "Coursera",
    date: "2022",
    verificationUrl: "https://coursera.org/share/f6c8bee864de21f8980cdbbb4fc7d9c7",
  },
  {
    title: "Python for Everybody",
    issuer: "University of Michigan",
    date: "2025",
    verificationUrl: "https://coursera.org/share/d67b8665b73a37cd366bdf5949532d42",
  },
];

export default function Certificates() {
  const duplicatedCertificates = [...certificates, ...certificates];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="certificates" className="w-full py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-co-rich tracking-tight">
            Licenses & Certifications
          </h2>
          <p className="mt-4 text-sub-rich max-w-xl">
            Verified credentials highlighting specialized training, industry
            standards, and continuous technical growth.
          </p>
        </motion.div>
      </div>

      {/* Marquee Wrapper Container */}
      <div className="flex relative w-full overflow-hidden">
        
        {/* Linear Moving Track */}
        <motion.div
          className="flex gap-6 pr-6 min-w-full shrink-0 cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}  
          onMouseLeave={() => setIsPaused(false)} 
          animate={isPaused ? {} : { x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25, 
            repeat: Infinity,
          }}
        >
          {duplicatedCertificates.map((cert, index) => (
            <div
              key={`${cert.title}-${index}`}
              className="group relative w-[350px] sm:w-[400px] shrink-0"
            >
              {/* Animated Background Glow Accent */}
              <div
                className="
                absolute 
                inset-0 
                rounded-3xl 
                bg-gradient-to-r 
                from-co-rich/0 
                via-co-rich/10 
                to-co-rich/0 
                opacity-0 
                group-hover:opacity-100 
                transition-opacity 
                duration-500 
                blur-xl 
                -z-10
              "
              />

              {/* Main Container Card */}
              <div
                className="
                h-full
                flex 
                flex-col 
                justify-between
                bg-charcoal-base 
                border 
                border-white/10 
                rounded-3xl 
                p-6 
                md:p-8 
                hover:border-white/20
                transition-all 
                duration-300
              "
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-co-rich group-hover:bg-co-rich group-hover:text-black transition-all duration-300">
                      <Award size={24} />
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-sub-rich">
                      <Calendar size={12} />
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-co-rich transition-colors duration-300 line-clamp-2 min-h-[56px]">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-sub-rich/80">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex 
                      items-center 
                      gap-1.5 
                      text-sm 
                      font-semibold 
                      text-sub-rich 
                      hover:text-co-rich 
                      transition-colors 
                      group/link
                      relative
                      z-30                   {/* Elevates click tier layer */}
                    "
                  >
                    <span>Verify</span>
                    <ExternalLink
                      size={14}
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}