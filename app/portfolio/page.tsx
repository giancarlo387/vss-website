"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";
import CtaBand from "@/components/CtaBand";
import { workItems } from "@/lib/data";

export default function PortfolioPage() {
  const featured = workItems[0];
  const rest = workItems.slice(1);

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
            Case Studies
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] max-w-3xl mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Client{" "}
            <em className="not-italic font-light text-white/40">success stories</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed max-w-xl"
          >
            Real results from real businesses. See how VSS helped these clients grow, save time,
            and scale with confidence.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured Item */}
          <RevealWrapper>
            <motion.div
              className="relative rounded-3xl overflow-hidden mb-5 group cursor-pointer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-[420px] lg:h-[520px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 lg:p-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent bg-accent/20 px-3 py-1 rounded-full mb-4 inline-block">
                  {featured.category}
                </span>
                <h2
                  className="text-3xl lg:text-4xl font-extrabold text-white mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {featured.title}
                </h2>
                <p className="text-white/70 text-base max-w-lg mb-6">{featured.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-dark font-semibold text-sm px-6 py-3 rounded-full hover:bg-accent hover:text-white transition-all"
                >
                  Start a project →
                </Link>
              </div>
            </motion.div>
          </RevealWrapper>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rest.map((item, i) => (
              <RevealWrapper key={item.title} delay={i * 0.1}>
                <motion.div
                  className="relative rounded-2xl overflow-hidden group cursor-pointer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="relative w-full h-72">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/10 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent bg-accent/20 px-2.5 py-1 rounded-full mb-3 inline-block">
                      {item.category}
                    </span>
                    <h3
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/65 text-sm mb-4 max-w-sm">{item.description}</p>
                    <Link
                      href="/contact"
                      className="text-white text-sm font-semibold border-b border-white/30 hover:border-accent hover:text-accent transition-colors pb-0.5"
                    >
                      Start a project →
                    </Link>
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
