"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RevealWrapper from "@/components/RevealWrapper";

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email Us",
    value: "virtualsmartsolutions@gmail.com",
    href: "mailto:virtualsmartsolutions@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
    label: "Website",
    value: "vss.ph.com",
    href: "#",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Philippines (Remote — Worldwide)",
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
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

const inputClass =
  "w-full border border-border rounded-xl px-4 py-3 text-sm text-dark bg-white placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    company: "", service: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark2 pt-32 pb-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-2 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Get In Touch
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] max-w-2xl mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s start{" "}
            <em className="not-italic bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              working together
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl"
          >
            Tell us about your business — we&apos;ll match you with the right VA and reply within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-14 items-start">

            {/* Left — info */}
            <div>
              {/* Contact cards */}
              <div className="space-y-3 mb-10">
                {contactDetails.map((detail, i) => (
                  <RevealWrapper key={detail.label} delay={i * 0.08}>
                    <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4 hover:border-accent/30 hover:shadow-sm transition-all group">
                      <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                        {detail.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted mb-0.5">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a href={detail.href} className="text-dark font-semibold text-sm hover:text-accent transition-colors break-all">
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-dark font-semibold text-sm">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  </RevealWrapper>
                ))}
              </div>

              {/* Trust badges */}
              <RevealWrapper delay={0.35}>
                <div className="bg-dark2 rounded-2xl p-6">
                  <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">Why clients choose VSS</p>
                  <div className="space-y-3">
                    {[
                      { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: "No contracts — cancel anytime" },
                      { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, text: "Start working within 48 hours" },
                      { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>, text: "NDA available on request" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3 text-white/60 text-sm">
                        <span className="text-accent flex-shrink-0">{item.icon}</span>
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            </div>

            {/* Right — form */}
            <RevealWrapper delay={0.15}>
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
                      <svg className="w-9 h-9 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-extrabold text-dark mb-3" style={{ fontFamily: "var(--font-display)" }}>
                      Message sent!
                    </h3>
                    <p className="text-muted text-sm max-w-sm leading-relaxed">
                      Thanks for reaching out. We&apos;ll review your inquiry and reply within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-xl font-extrabold text-dark mb-1" style={{ fontFamily: "var(--font-display)" }}>
                        Send us a message
                      </h2>
                      <p className="text-muted text-sm">All fields marked * are required</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-dark uppercase tracking-wider mb-2">First Name *</label>
                          <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="Juan" className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-dark uppercase tracking-wider mb-2">Last Name *</label>
                          <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Dela Cruz" className={inputClass} />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-dark uppercase tracking-wider mb-2">Email Address *</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className={inputClass} />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-dark uppercase tracking-wider mb-2">Company Name</label>
                        <input name="company" value={form.company} onChange={handleChange} placeholder="Your Company" className={inputClass} />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-dark uppercase tracking-wider mb-2">Service Interested In *</label>
                        <select name="service" value={form.service} onChange={handleChange} required className={`${inputClass} cursor-pointer`}>
                          <option value="" disabled>Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-dark uppercase tracking-wider mb-2">Message *</label>
                        <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your business and what you need help with..." className={`${inputClass} resize-none`} />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full font-bold py-4 rounded-full text-sm transition-all flex items-center justify-center gap-2 ${
                          loading ? "bg-muted text-white cursor-wait" : "bg-dark text-white hover:bg-accent hover:-translate-y-0.5"
                        }`}
                      >
                        {loading ? (
                          <>
                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>Send Message <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></>
                        )}
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </RevealWrapper>

          </div>
        </div>
      </section>
    </>
  );
}
