"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "./RevealWrapper";
import { workItems } from "@/lib/data";

export default function WorkCarousel() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
              Our Work
            </span>
            <h2
              className="text-4xl font-extrabold text-dark leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Results that{" "}
              <em className="not-italic font-light text-muted">speak for themselves</em>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-dark font-semibold text-sm border-b-2 border-dark pb-0.5 hover:text-accent hover:border-accent transition-colors whitespace-nowrap"
          >
            View All Work →
          </Link>
        </RevealWrapper>

        {/* Horizontal scroll */}
        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-4">
          {workItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex-shrink-0 w-72 bg-card border border-border rounded-2xl overflow-hidden group cursor-pointer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="relative w-full h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="288px"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {item.category}
                </span>
                <h3
                  className="text-base font-bold text-dark mt-1 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
