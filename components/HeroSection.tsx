"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "5+", label: "Core Services" },
  { value: "100%", label: "Remote Ready" },
  { value: "24/7", label: "Support Available" },
];

const floatingImages = [
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80",
    alt: "Team collaboration",
    delay: 0,
    style: { top: "10%", right: "8%", width: 140, height: 110 },
  },
  {
    src: "https://images.unsplash.com/photo-1553484771-047a44eee27b?w=500&q=80",
    alt: "Remote work",
    delay: 1.5,
    style: { bottom: "18%", right: "12%", width: 150, height: 115 },
  },
  {
    src: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&q=80",
    alt: "Social media",
    delay: 3,
    style: { top: "42%", left: "8%", width: 130, height: 100 },
  },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row pt-16 w-full overflow-hidden">
      {/* Left — text */}
      <div className="flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-20 bg-bg lg:w-1/2 flex-shrink-0">
        <motion.span
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent bg-accent-light px-3 py-1.5 rounded-full w-fit mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block" />
          Virtual Assistant Services Philippines
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-dark leading-[1.1] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your Business,{" "}
          <em className="not-italic font-light text-muted">Handled</em> by Experts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted text-lg leading-relaxed mb-10 max-w-md"
        >
          VSS connects you with skilled Filipino virtual assistants who manage your operations,
          grow your brand, and keep your books — so you can focus on what matters most.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-14"
        >
          <Link
            href="/contact"
            className="bg-dark text-white font-semibold px-7 py-3.5 rounded-full hover:bg-dark2 transition-all hover:-translate-y-0.5 shadow-lg shadow-dark/10"
          >
            Work With Us
          </Link>
          <Link
            href="/services"
            className="border-2 border-dark text-dark font-semibold px-7 py-3.5 rounded-full hover:bg-dark hover:text-white transition-all hover:-translate-y-0.5"
          >
            Our Services →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-border pt-8 flex flex-wrap gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p
                className="text-2xl font-extrabold text-dark"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-muted mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right — dark panel */}
      <div className="relative bg-dark2 min-h-[480px] lg:min-h-0 lg:w-1/2 flex-shrink-0 overflow-hidden">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
          alt="VSS team"
          fill
          className="object-cover opacity-30"
          priority
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark2/80 to-dark/60" />

        {/* Growth pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2 z-10 whitespace-nowrap"
        >
          <span className="text-gold">↑</span> Growth +127%
        </motion.div>

        {/* Floating images */}
        {floatingImages.map((img, i) => (
          <motion.div
            key={i}
            className="absolute z-10 rounded-2xl overflow-hidden shadow-2xl"
            style={img.style}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: img.delay,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.style.width}
              height={img.style.height}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}

        {/* Bottom text overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-2">
            Trusted by businesses worldwide
          </p>
          <p
            className="text-white text-2xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your dedicated
            <br />
            remote team, ready.
          </p>
        </div>
      </div>
    </section>
  );
}
