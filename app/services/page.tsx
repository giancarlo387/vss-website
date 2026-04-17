"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/data";

export default function ServicesPage() {
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
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] max-w-3xl mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything your business{" "}
            <em className="not-italic font-light text-white/40">needs to thrive</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed max-w-xl"
          >
            From virtual assistance to bookkeeping, our skilled Filipino professionals integrate
            seamlessly with your workflow — so you can scale without the overhead.
          </motion.p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.slug}
            className={`py-24 ${i % 2 === 0 ? "bg-bg" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  isEven ? "" : "lg:flex lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <RevealWrapper delay={0.1}>
                  <div className="relative w-full h-80 lg:h-[480px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                  </div>
                </RevealWrapper>

                {/* Text */}
                <RevealWrapper delay={0.2}>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
                      Service {service.id}
                    </span>
                    <h2
                      className="text-3xl sm:text-4xl font-extrabold text-dark mb-5 leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-muted text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-10">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0 inline-block" />
                          <span className="text-dark text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-dark text-white font-semibold px-7 py-3.5 rounded-full hover:bg-accent transition-all hover:-translate-y-0.5"
                    >
                      {service.cta} →
                    </Link>
                  </div>
                </RevealWrapper>
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}
