"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RevealWrapper from "@/components/RevealWrapper";

const contactDetails = [
  {
    icon: "✉️",
    label: "Email",
    value: "virtualsmartsolutions@gmail.com",
    href: "mailto:virtualsmartsolutions@gmail.com",
  },
  {
    icon: "🌐",
    label: "Website",
    value: "vss.ph.com",
    href: "#",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Philippines (Remote — Worldwide)",
    href: null,
  },
  {
    icon: "🕐",
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

const serviceOptions = [
  "Virtual Assistant",
  "Data Entry",
  "Social Media Marketing",
  "Bookkeeping",
  "Appointment Setting (Inbound)",
  "Appointment Setting (Outbound)",
  "Multiple Services",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-dark2 pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block"></span>
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] max-w-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s start{" "}
            <em className="not-italic font-light text-white/40">working together</em>
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16">
            {/* Left — contact info */}
            <div>
              <RevealWrapper>
                <p className="text-muted text-lg leading-relaxed mb-10">
                  Ready to delegate and grow? Fill out the form and we&apos;ll get back to you
                  within 24 hours with a tailored plan for your business.
                </p>
              </RevealWrapper>

              <div className="space-y-4">
                {contactDetails.map((detail, i) => (
                  <RevealWrapper key={detail.label} delay={i * 0.08}>
                    <div className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0">{detail.icon}</span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-dark font-medium text-sm hover:text-accent transition-colors break-all"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-dark font-medium text-sm">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  </RevealWrapper>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <RevealWrapper delay={0.2}>
              <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-xl shadow-dark/5">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                    >
                      <span className="text-4xl">✓</span>
                    </motion.div>
                    <h3
                      className="text-2xl font-extrabold text-dark mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Message sent!
                    </h3>
                    <p className="text-muted text-sm max-w-sm">
                      Thanks for reaching out. We&apos;ll review your inquiry and get back to you
                      within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2">
                          First Name
                        </label>
                        <input
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          placeholder="Maria"
                          className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark bg-bg placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2">
                          Last Name
                        </label>
                        <input
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Santos"
                          className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark bg-bg placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark bg-bg placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2">
                        Company Name
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark bg-bg placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark bg-bg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition appearance-none"
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-dark uppercase tracking-wider mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your business and what you need help with..."
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-dark bg-bg placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className={`w-full font-semibold py-4 rounded-full text-sm transition-all ${
                        loading
                          ? "bg-muted text-white cursor-wait"
                          : "bg-dark text-white hover:bg-accent hover:-translate-y-0.5"
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? "Sending..." : "Send Message →"}
                    </motion.button>
                  </form>
                )}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
