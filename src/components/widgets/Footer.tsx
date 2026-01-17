"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Check, Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "your.email@example.com"; // replace with your real email
const GITHUB = "https://github.com/sammythedeveloper";
const LINKEDIN = "https://www.linkedin.com/in/samson-daba-29b877231/";

const serif = {
  fontFamily: "var(--font-instrument-serif), Georgia, serif",
} as const;

const inputClass =
  "w-full rounded-lg border border-black/10 bg-white/50 px-3.5 py-2.5 text-sm text-text-main outline-none placeholder:text-text-muted/60 transition-colors focus:border-text-main/40 dark:border-white/10 dark:bg-white/[0.03]";

// Tells smooth-scroll (Lenis) and the browser that the page changed height
function refreshPageHeight() {
  window.dispatchEvent(new Event("resize"));
}

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Re-measure when the form opens or closes, and again after the animation ends
  useEffect(() => {
    refreshPageHeight();
    const timer = setTimeout(refreshPageHeight, 350);
    return () => clearTimeout(timer);
  }, [open]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => {
          setSubmitted(false);
          refreshPageHeight();
        }, 4000);
        refreshPageHeight();
      } else {
        console.error("Form submission failed:", result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="contact"
      className="w-full border-t border-text-main/10 bg-second-base px-6 py-12 text-text-main"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Contact row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-text-muted">
              Contact
            </p>
            <p className="mt-2 text-3xl leading-tight" style={serif}>
              Let&apos;s talk.
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-text-muted">
              <MapPin size={14} />
              Toronto, ON · Open to remote, hybrid, or onsite
            </p>
            <p className="mt-2 text-sm text-text-muted" style={serif}>
              Made by Samson Daba
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-text-main/15 px-4 py-2 text-xs font-medium transition hover:bg-text-main/5"
            >
              <Mail size={14} /> Email
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-text-main/15 transition hover:bg-text-main/5"
            >
              <FaGithub size={15} />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-text-main/15 transition hover:bg-text-main/5"
            >
              <FaLinkedin size={15} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex items-center gap-2 rounded-full bg-text-main px-4 py-2 text-xs font-semibold text-second-base transition hover:opacity-85"
            >
              {open ? "Close" : "Send a message"}
              <ArrowUpRight size={13} />
            </button>
          </div>
        </div>

        {/* Collapsible form */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.form
              key="contact-form"
              data-lenis-prevent
              onSubmit={handleSubmit}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>

              <textarea
                required
                rows={3}
                placeholder="Tell me about the opportunity, project, or idea..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} mt-4 resize-none`}
              />

              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="inline-flex items-center gap-2 rounded-full bg-text-main px-5 py-2.5 text-xs font-semibold text-second-base transition hover:opacity-85 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : submitted ? (
                    <>
                      Message sent <Check size={14} />
                    </>
                  ) : (
                    <>
                      Send <Send size={13} />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
}
