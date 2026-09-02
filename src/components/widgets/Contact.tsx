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
    <section
      id="contact"
      className="w-full bg-second-base px-6 py-16 text-text-main md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-co-rich">
            Contact
          </span>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-text-main md:text-5xl">
            Let&apos;s talk.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-text-muted md:text-base">
            Seeking Backend / Full-Stack opportunities · Toronto, ON · Open to
            remote, hybrid, or onsite.
          </p>
        </motion.div>

        {/* CONTACT CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="
            mt-8
            overflow-hidden
            rounded-2xl
            border border-black/[0.10]
            bg-black/[0.015]
            shadow-[0_8px_30px_rgba(0,0,0,0.025)]
            dark:border-white/[0.10]
            dark:bg-white/[0.025]
            dark:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          "
        >
          {/* CONTACT DETAILS */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-7">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-text-main" />
                <span>Toronto, ON</span>
              </div>

              <span className="hidden text-text-muted/40 sm:inline">/</span>

              <span>Open to Remote</span>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://github.com/sammythedeveloper"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-main"
              >
                <FaGithub size={15} />
                GitHub
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/samson-daba-29b877231/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text-main"
              >
                <FaLinkedin size={15} />
                LinkedIn
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          <div className="h-px bg-black/[0.08] dark:bg-white/[0.08]" />

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="p-5 md:p-7"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted"
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
                    w-full rounded-lg
                    border border-black/[0.10]
                    bg-white/50
                    px-4 py-3
                    text-sm text-text-main
                    outline-none
                    placeholder:text-text-muted/60
                    transition-all duration-200
                    focus:border-co-rich
                    focus:ring-2 focus:ring-co-rich/10
                    dark:border-white/[0.10]
                    dark:bg-white/[0.025]
                  "
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted"
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
                    w-full rounded-lg
                    border border-black/[0.10]
                    bg-white/50
                    px-4 py-3
                    text-sm text-text-main
                    outline-none
                    placeholder:text-text-muted/60
                    transition-all duration-200
                    focus:border-co-rich
                    focus:ring-2 focus:ring-co-rich/10
                    dark:border-white/[0.10]
                    dark:bg-white/[0.025]
                  "
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted"
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
                  w-full resize-none rounded-lg
                  border border-black/[0.10]
                  bg-white/50
                  px-4 py-3
                  text-sm text-text-main
                  outline-none
                  placeholder:text-text-muted/60
                  transition-all duration-200
                  focus:border-co-rich
                  focus:ring-2 focus:ring-co-rich/10
                  dark:border-white/[0.10]
                  dark:bg-white/[0.025]
                "
              />
            </div>

            {/* FORM FOOTER */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-text-muted">
                I&apos;ll get back to you as soon as I can.
              </p>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="
                  group inline-flex items-center gap-2
                  rounded-full
                  bg-text-main
                  px-5 py-3
                  text-sm font-semibold
                  text-second-base
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:opacity-85
                  disabled:pointer-events-none
                  disabled:opacity-50
                "
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current/20 border-t-current" />
                  </>
                ) : submitted ? (
                  <>
                    <span>Message sent</span>
                    <Check size={15} />
                  </>
                ) : (
                  <>
                    <span>Send message</span>
                    <Send
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
