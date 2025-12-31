"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, MapPin, ArrowUpRight } from "lucide-react";
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
        setFormState({ name: "", email: "", message: "" });
      } else {
        console.error("Form submission failed:", result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
      // Clear success message after 4 seconds
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section id="contact" className="w-full px-6 py-32 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-bold text-co-rich tracking-tight">
                  Let's Connect
                </h2>
                <p className="mt-4 text-sub-rich leading-relaxed">
                  I'm always open to discussing full-stack opportunities,
                  project collaborations, or smart AI integrations. Drop me a
                  line!
                </p>
              </motion.div>

              {/* Quick Info Badges */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-4 text-sub-rich">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-co-rich">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-sub-rich/50 font-medium">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-white/90">
                      Toronto, ON (Open to Remote)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connection Directory links */}
            <div className="pt-6 border-t border-white/5">
              <p className="text-xs font-mono text-sub-rich/40 uppercase tracking-widest mb-4">
                Find Me On
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between group p-3 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 text-sub-rich group-hover:text-white transition-colors">
                    <FaGithub className="w-5 h-5" />
                    <span className="text-sm font-medium">GitHub Profile</span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-sub-rich/40 group-hover:text-co-rich group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between group p-3 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 text-sub-rich group-hover:text-white transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      LinkedIn Network
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-sub-rich/40 group-hover:text-co-rich group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Block */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-charcoal-base border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-sub-rich"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="
                      w-full bg-white/[0.02] border border-white/10 rounded-2xl px-4 py-3.5 
                      text-white placeholder-white/20 text-sm outline-none transition-all duration-300
                      focus:border-co-rich focus:bg-white/[0.04] focus:ring-1 focus:ring-co-rich/20
                    "
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-sub-rich"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="
                      w-full bg-white/[0.02] border border-white/10 rounded-2xl px-4 py-3.5 
                      text-white placeholder-white/20 text-sm outline-none transition-all duration-300
                      focus:border-co-rich focus:bg-white/[0.04] focus:ring-1 focus:ring-co-rich/20
                    "
                  />
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-sub-rich"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell me about your project, team, or ideas..."
                    className="
                      w-full bg-white/[0.02] border border-white/10 rounded-2xl px-4 py-3.5 
                      text-white placeholder-white/20 text-sm outline-none transition-all duration-300 resize-none
                      focus:border-co-rich focus:bg-white/[0.04] focus:ring-1 focus:ring-co-rich/20
                    "
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="
                    w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl
                    bg-white text-black font-semibold text-sm transition-all duration-300
                    hover:bg-white/90 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none
                  "
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : submitted ? (
                    <span className="flex items-center gap-2 text-emerald-600 font-bold">
                      Message Sent Successfully! <MessageSquare size={16} />
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} className="mt-0.5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
