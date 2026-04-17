"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 100, suffix: "%", label: "Remote Ready" },
  { value: 24, suffix: "/7", label: "Support" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 35);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count}{suffix}</span>;
}

const floatingCards = [
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80",
    label: "Team Collaboration",
    delay: 0,
    top: "14%", left: "6%",
    width: 170, height: 120,
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
    label: "Remote Work",
    delay: 1.8,
    top: "44%", right: "6%",
    width: 155, height: 115,
  },
  {
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&q=80",
    label: "Social Media",
    delay: 3.2,
    bottom: "22%", left: "10%",
    width: 145, height: 108,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-screen flex flex-col lg:flex-row pt-16"
      style={{ maxWidth: "100vw", overflow: "hidden" }}
    >
      {/* ── LEFT PANEL ── */}
      <motion.div
        className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-20 bg-bg w-full lg:w-1/2 min-w-0"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent bg-accent-light px-4 py-2 rounded-full w-fit mb-8 border border-accent/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Virtual Assistant Services · Philippines
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-[2.8rem] sm:text-5xl xl:text-[3.8rem] font-extrabold text-dark leading-[1.08] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your Business,
          <br />
          <span className="relative inline-block">
            <em className="not-italic bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Handled
            </em>
          </span>{" "}
          by Experts
        </motion.h1>

        {/* Subtext */}
        <motion.p variants={itemVariants} className="text-muted text-lg leading-relaxed mb-10 max-w-[420px]">
          VSS connects you with skilled Filipino virtual assistants who manage your operations,
          grow your brand, and keep your books — so you can focus on what matters most.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-14">
          <Link
            href="/contact"
            className="group relative overflow-hidden bg-dark text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-dark/20"
          >
            <span className="relative z-10">Work With Us</span>
            <span className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 rounded-full" />
          </Link>
          <Link
            href="/services"
            className="border-2 border-dark text-dark font-semibold px-7 py-3.5 rounded-full hover:bg-dark hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Our Services →
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="border-t border-border pt-8 flex flex-wrap gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
            >
              <p className="text-2xl font-extrabold text-dark" style={{ fontFamily: "var(--font-display)" }}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-muted mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── RIGHT PANEL ── */}
      <div className="relative min-h-[520px] lg:min-h-0 w-full lg:w-1/2 min-w-0 overflow-hidden">

        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
          alt="VSS team at work"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark2/90 via-dark2/70 to-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

        {/* Animated glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-accent/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-blue-400/15 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Growth pill */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="absolute top-8 left-1/2 -translate-x-1/2 z-20 bg-white/10 backdrop-blur-xl border border-white/25 text-white text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap shadow-lg"
        >
          <motion.span
            className="text-gold text-base"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >↑</motion.span>
          Client Growth +127%
        </motion.div>

        {/* Floating image cards */}
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            className="absolute z-20 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            style={{
              width: card.width,
              height: card.height,
              top: card.top,
              left: card.left,
              right: card.right,
              bottom: card.bottom,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 + i * 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="w-full h-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
            >
              <Image
                src={card.image}
                alt={card.label}
                fill
                className="object-cover"
                sizes={`${card.width}px`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              <span className="absolute bottom-2 left-3 text-white text-[10px] font-semibold uppercase tracking-wider opacity-80">
                {card.label}
              </span>
            </motion.div>
          </motion.div>
        ))}

        {/* Live indicator card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-xl"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div>
            <p className="text-white text-xs font-bold">VAs Available Now</p>
            <p className="text-white/60 text-[10px]">Ready to start today</p>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="absolute bottom-0 left-0 right-0 p-8 z-20"
        >
          <p className="text-white/50 text-xs uppercase tracking-widest mb-2 font-medium">
            Trusted by businesses worldwide
          </p>
          <p className="text-white text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Your dedicated<br />remote team, ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
