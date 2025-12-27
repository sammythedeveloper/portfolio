"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, HeartHandshake } from "lucide-react";

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
    verificationUrl:
      "https://www.credly.com/badges/1f14f2cd-6a22-4cac-9bd4-abc559a82bf3/public_url",
  },
  {
    title: "Supervised Machine Learning",
    issuer: "Coursera",
    date: "2026",
    verificationUrl:
      "https://www.coursera.org/account/accomplishments/verify/T8XQVEHQX3X4",
  },
  {
    title: "Full-Stack Developer Certificate",
    issuer: "Evangadi Network",
    date: "2023",
    verificationUrl:
      "https://drive.google.com/file/d/13P5Y7XxAr_6GoSsrD5phLhySdhjUiVMK/view?usp=sharing",
  },
  {
    title: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "2026",
    verificationUrl:
      "https://www.credly.com/badges/7aa30285-5c1d-4b9b-a792-31fae83a69e2/public_url",
  },
  {
    title: "Google IT Analyst Certificate",
    issuer: "Coursera",
    date: "2022",
    verificationUrl:
      "https://coursera.org/share/f6c8bee864de21f8980cdbbb4fc7d9c7",
  },
  {
    title: "Python for Everybody",
    issuer: "University of Michigan",
    date: "2025",
    verificationUrl:
      "https://coursera.org/share/d67b8665b73a37cd366bdf5949532d42",
  },
];

interface VolunteerItem {
  organization: string;
  role: string;
  date: string;
  description: string[];
}

const volunteerExperience: VolunteerItem[] = [
  {
    organization: "Art+Health",
    role: "Community Volunteer",
    date: "2025",
    description: [
      "Supported a nonprofit organization by assisting with digital resources, online communication, and community outreach initiatives for newcomers, youth, seniors, and families in the Ethiopian and Eritrean communities.",
      "Collaborated with volunteers to organize information and support initiatives that improved community engagement.",
      "Developed strong communication, teamwork, and organizational skills while working with diverse community members.",
    ],
  },
  {
    organization: "ISC2 Toronto Chapter",
    role: "Professional Member",
    date: "2025",
    description: [
      "Active member of the ISC2 Toronto Chapter, engaging in cybersecurity networking, professional development, and knowledge-sharing events within the local security community.",
    ],
  },
  {
    organization: "YMCA Black Achievers Mentorship Program",
    role: "Volunteer",
    date: "2024",
    description: [
      "Contribute to initiatives that empower Black youth through mentorship, leadership development, and community service.",
    ],
  },
  {
    organization: "Habesha Youth Association (HYA)",
    role: "Community Volunteer",
    date: "2023",
    description: [
      "Support Ethiopian and Eritrean youth in Toronto by participating in networking, mentorship, and community engagement initiatives that foster personal and professional growth.",
    ],
  },
];

export default function Certificates() {
  const duplicatedCertificates = [...certificates, ...certificates];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="certficates" className="w-full py-32 overflow-hidden">
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
      {/* Volunteer Section */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-co-rich">
            Volunteer Experience
          </h2>

          <p className="mt-4 text-sub-rich max-w-2xl">
            Giving back through mentoring, technical support, and community
            engagement.
          </p>
          <div className="mt-10 grid gap-6">
            {volunteerExperience.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-charcoal-base p-6 hover:border-white/20 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-co-rich">
                      <HeartHandshake size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.role}
                      </h3>
                      <p className="text-sub-rich">{item.organization}</p>
                    </div>
                  </div>

                  <span className="flex items-center gap-1 text-sm text-sub-rich">
                    <Calendar size={14} />
                    {item.date}
                  </span>
                </div>

                <ul className="mt-5 list-disc pl-5 space-y-2 text-sub-rich leading-relaxed">
                  {item.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
