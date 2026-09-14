"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, ArrowUpRight, Check } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormState({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Form submission failed:", result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section id="contact" className="w-full px-6 py-24 md:py-28">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-co-rich">
            Contact
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let&apos;s talk.
          </h2>

          <p className="mt-4 max-w-xl text-sub-rich leading-relaxed">
          Seeking Backend / Full-Stack opportunities · Toronto, ON · Open to remote, hybrid, or onsite
          </p>
        </motion.div>

        {/* Contact Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-sub-rich">
            <MapPin size={15} className="text-co-rich" />
            <span>Toronto, ON</span>
            <span className="text-white/20">·</span>
            <span>Open to Remote</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/sammythedeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-1.5
                text-sm
                text-sub-rich
                transition-colors
                hover:text-co-rich
              "
            >
              <FaGithub size={15} />
              GitHub
              <ArrowUpRight
                size={13}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>

            <a
              href="https://www.linkedin.com/in/samson-daba-29b877231/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-1.5
                text-sm
                text-sub-rich
                transition-colors
                hover:text-co-rich
              "
            >
              <FaLinkedin size={15} />
              LinkedIn
              <ArrowUpRight
                size={13}
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

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-10 h-px bg-white/10 origin-left"
        />

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="group">
              <label
                htmlFor="name"
                className="
                  block
                  mb-2
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-sub-rich/60
                "
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    name: e.target.value,
                  })
                }
                placeholder="Your name"
                className="
                  w-full
                  bg-transparent
                  border-0
                  border-b
                  border-white/10
                  px-0
                  py-3
                  text-white
                  placeholder-white/20
                  text-sm
                  outline-none
                  transition-colors
                  duration-300
                  focus:border-co-rich
                "
              />
            </div>

            {/* Email */}
            <div className="group">
              <label
                htmlFor="email"
                className="
                  block
                  mb-2
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-sub-rich/60
                "
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value,
                  })
                }
                placeholder="you@example.com"
                className="
                  w-full
                  bg-transparent
                  border-0
                  border-b
                  border-white/10
                  px-0
                  py-3
                  text-white
                  placeholder-white/20
                  text-sm
                  outline-none
                  transition-colors
                  duration-300
                  focus:border-co-rich
                "
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-8">
            <label
              htmlFor="message"
              className="
                block
                mb-2
                text-xs
                font-medium
                uppercase
                tracking-[0.15em]
                text-sub-rich/60
              "
            >
              Message
            </label>

            <textarea
              id="message"
              required
              rows={4}
              value={formState.message}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  message: e.target.value,
                })
              }
              placeholder="Tell me about the opportunity, project, or idea..."
              className="
                w-full
                bg-transparent
                border-0
                border-b
                border-white/10
                px-0
                py-3
                text-white
                placeholder-white/20
                text-sm
                outline-none
                resize-none
                transition-colors
                duration-300
                focus:border-co-rich
              "
            />
          </div>

          {/* Bottom Action */}
          <div className="mt-8 flex items-center justify-between">
            <p className="hidden sm:block text-xs text-sub-rich/40">
              I&apos;ll get back to you as soon as I can.
            </p>

            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className="
                group
                ml-auto
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-white
                transition-colors
                duration-300
                hover:text-co-rich
                disabled:opacity-50
                disabled:pointer-events-none
              "
            >
              {isSubmitting ? (
                <>
                  <span>Sending...</span>

                  <div
                    className="
                      h-4
                      w-4
                      rounded-full
                      border-2
                      border-white/20
                      border-t-co-rich
                      animate-spin
                    "
                  />
                </>
              ) : submitted ? (
                <>
                  <span className="text-co-rich">Message sent</span>
                  <Check size={15} className="text-co-rich" />
                </>
              ) : (
                <>
                  <span>Send message</span>

                  <Send
                    size={14}
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                </>
              )}
            </button>
          </div>
        </motion.form>

        {/* Bottom Rule */}
        <div className="mt-16 h-px bg-white/5" />
      </div>
    </section>
  );
}