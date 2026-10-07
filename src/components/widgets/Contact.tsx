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
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-co-rich  ">
            Contact
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-black md:text-5xl">
            Let&apos;s talk.
          </h2>

          <p className="mt-4 max-w-xl leading-relaxed text-black/50">
            Seeking Backend / Full-Stack opportunities · Toronto, ON · Open to
            remote, hybrid, or onsite
          </p>
        </motion.div>

        {/* Unified Contact Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="
            mt-10
            rounded-2xl
            border
            border-black/[0.08]
            bg-black/[0.015]
            p-6
            md:p-8
          "
        >
          {/* Contact Meta */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-black/50">
              <MapPin size={15} className="text-black" />
              <span>Toronto, ON</span>
              <span className="text-black/20">·</span>
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
                  text-black/50
                  transition-colors
                  hover:text-black
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
                  text-black/50
                  transition-colors
                  hover:text-black
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
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-black/[0.08]" />

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-black
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
                    border-b
                    border-black/10
                    bg-transparent
                    px-0
                    py-3
                    text-sm
                    text-black
                    outline-none
                    placeholder:text-black/20
                    transition-colors
                    duration-300
                    focus:border-black
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-black
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
                    border-b
                    border-black/10
                    bg-transparent
                    px-0
                    py-3
                    text-sm
                    text-black
                    outline-none
                    placeholder:text-black/20
                    transition-colors
                    duration-300
                    focus:border-black
                  "
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-8">
              <label
                htmlFor="message"
                className="
                  mb-2
                  block
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-black
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
                  resize-none
                  border-b
                  border-black/10
                  bg-transparent
                  px-0
                  py-3
                  text-sm
                  text-black
                  outline-none
                  placeholder:text-black/20
                  transition-colors
                  duration-300
                  focus:border-black
                "
              />
            </div>

            {/* Bottom Action */}
            <div className="mt-8 flex items-center justify-between">
              <p className="hidden text-xs text-black sm:block">
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
                  rounded-full
                  bg-black
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  duration-300
                  hover:bg-green-500 
                  disabled:pointer-events-none
                  disabled:opacity-50
                "
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>

                    <div
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-white/20
                        border-t-white
                      "
                    />
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
        </motion.div>

        {/* Bottom Rule */}
        <div className="mt-16 h-px bg-black/[0.05]" />
      </div>
    </section>
  );
}