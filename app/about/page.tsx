"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";
import CtaBand from "@/components/CtaBand";
import { values, teamMembers } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark2 pt-32 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            {/* Left */}
            <div className="pb-20">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full mb-8"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block"></span>
                About VSS
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                We&apos;re VSS —{" "}
                <em className="not-italic font-light text-white/40">
                  your team behind the scenes
                </em>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg"
              >
                Founded in the Philippines, Virtual Smart Solutions was built on one belief: skilled
                remote talent can transform any business. We connect companies worldwide with
                dedicated VAs who care as much about your growth as you do.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="bg-white text-dark font-semibold px-7 py-3.5 rounded-full hover:bg-accent hover:text-white transition-all hover:-translate-y-0.5"
                >
                  Work With Us
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:border-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  Our Services →
                </Link>
              </motion.div>
            </div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative h-80 lg:h-[520px] rounded-t-3xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
                alt="VSS team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark2/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper className="mb-14 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
              Our Values
            </span>
            <h2
              className="text-4xl font-extrabold text-dark leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built on principles that{" "}
              <em className="not-italic font-light text-muted">drive real results</em>
            </h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <RevealWrapper key={value.title} delay={i * 0.08}>
                <motion.div
                  className="bg-bg border border-border rounded-2xl p-7 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-3xl mb-4 block">{value.icon}</span>
                  <h3
                    className="text-lg font-bold text-dark mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <RevealWrapper className="mb-14 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
              The Team
            </span>
            <h2
              className="text-4xl font-extrabold text-dark leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The people behind{" "}
              <em className="not-italic font-light text-muted">your business growth</em>
            </h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {teamMembers.map((member, i) => (
              <RevealWrapper key={member.name} delay={i * 0.1}>
                <motion.div
                  className="bg-card border border-border rounded-3xl overflow-hidden"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="relative w-full h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-lg font-bold text-dark"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
