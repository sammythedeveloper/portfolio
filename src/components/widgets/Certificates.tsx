"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

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
  return (
    <section
      id="certficates"
      className="w-full py-28 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold tracking-[0.25em] uppercase text-co-rich">
            Credentials
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Licenses & Certifications
          </h2>

          <p className="mt-4 text-sub-rich max-w-2xl leading-relaxed">
            Verified credentials and specialized training covering cloud
            computing, machine learning, software development, and technical
            foundations.
          </p>
        </motion.div>

        {/* Certificate Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  bg-co-rich/10
                  opacity-0
                  blur-2xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Card */}
              <div
                className="
                  relative
                  h-full
                  min-h-[300px]
                  flex
                  flex-col
                  rounded-3xl
                  border
                  border-white/10
                  bg-charcoal-base
                  p-6
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:border-co-rich/30
                "
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      rounded-2xl
                      bg-white/[0.03]
                      border
                      border-white/5
                      text-co-rich
                      transition-all
                      duration-300
                      group-hover:bg-co-rich
                      group-hover:text-black
                    "
                  >
                    <Award size={22} />
                  </div>

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-3
                      py-1.5
                      text-[11px]
                      font-medium
                      text-sub-rich
                    "
                  >
                    {cert.type}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-7 flex-1">
                  <h3
                    className="
                      text-xl
                      font-bold
                      leading-snug
                      text-white
                      tracking-tight
                      transition-colors
                      duration-300
                      group-hover:text-co-rich
                    "
                  >
                    {cert.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-sub-rich">
                    {cert.issuer}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-sub-rich">
                    <Calendar size={13} />
                    {cert.date}
                  </div>

                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      text-sm
                      font-semibold
                      text-sub-rich
                      hover:text-co-rich
                      transition-colors
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

                {/* Verified Accent */}
                <div className="absolute top-6 right-6 pointer-events-none">
                  <ShieldCheck
                    size={14}
                    className="text-co-rich/30"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}