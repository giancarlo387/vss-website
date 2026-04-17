"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "./RevealWrapper";

const services = [
  {
    id: "01",
    title: "Virtual Assistant",
    description:
      "Delegate your daily operations to a skilled VA. From inbox management to executive support — handled with care.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80",
    href: "/services#virtual-assistant",
  },
  {
    id: "02",
    title: "Data Entry",
    description:
      "Fast, accurate, and confidential data entry to keep your databases clean and operations running smoothly.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    href: "/services#data-entry",
  },
  {
    id: "03",
    title: "Social Media Marketing",
    description:
      "Grow your brand presence with strategic social media management — content, scheduling, and analytics.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&q=80",
    href: "/services#social-media",
  },
  {
    id: "04",
    title: "Bookkeeping",
    description:
      "Keep your financials accurate and audit-ready with professional bookkeeping and monthly reporting.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80",
    href: "/services#bookkeeping",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <RevealWrapper className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            What We Do
          </span>
          <h2
            className="text-4xl font-extrabold text-dark mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Services built for{" "}
            <em className="not-italic font-light text-muted">modern businesses</em>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Whether you need a part-time VA or a full operations team, we have the right service to
            scale with you.
          </p>
        </RevealWrapper>

        {/* Grid — 2px gap creates border-like grid effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-border rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <RevealWrapper key={service.id} delay={i * 0.1}>
              <motion.div
                className="relative bg-white p-8 group overflow-hidden h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                {/* Number */}
                <span
                  className="text-7xl font-extrabold text-border/80 leading-none select-none"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.id}
                </span>

                {/* Content */}
                <div className="mt-4 mb-6">
                  <h3
                    className="text-xl font-bold text-dark mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Image */}
                <div className="relative w-full h-40 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="text-accent text-sm font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all"
                >
                  Learn more →
                </Link>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0, width: "100%" }}
                />
              </motion.div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="mt-12 text-center" delay={0.3}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-dark text-white font-semibold px-8 py-3.5 rounded-full hover:bg-dark2 transition-all hover:-translate-y-0.5"
          >
            View All Services →
          </Link>
        </RevealWrapper>
      </div>
    </section>
  );
}
