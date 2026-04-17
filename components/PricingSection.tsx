"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RevealWrapper from "./RevealWrapper";
import { pricingPlans } from "@/lib/data";

export default function PricingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            Pricing
          </span>
          <h2
            className="text-4xl font-extrabold text-dark mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Transparent plans,{" "}
            <em className="not-italic font-light text-muted">zero surprises</em>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Choose the plan that fits your workload. Upgrade or cancel anytime.
          </p>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-end">
          {pricingPlans.map((plan, i) => (
            <RevealWrapper key={plan.name} delay={i * 0.1}>
              <motion.div
                className={`rounded-2xl p-7 border transition-all ${
                  plan.featured
                    ? "bg-dark text-white border-dark scale-105 shadow-2xl shadow-dark/20"
                    : "bg-white text-dark border-border hover:border-accent/30"
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                {plan.featured && (
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-4 block">
                    ⭐ Most Popular
                  </span>
                )}
                <p
                  className={`text-sm font-semibold mb-1 ${
                    plan.featured ? "text-white/70" : "text-muted"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className="text-3xl font-extrabold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.featured ? "text-white/60" : "text-muted"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-xs mb-6 ${plan.featured ? "text-white/60" : "text-muted"}`}>
                  {plan.note}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span className={`mt-0.5 ${plan.featured ? "text-gold" : "text-accent"}`}>
                        ✓
                      </span>
                      <span className={plan.featured ? "text-white/80" : "text-dark"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center font-semibold text-sm py-3 rounded-full transition-all ${
                    plan.featured
                      ? "bg-white text-dark hover:bg-accent hover:text-white"
                      : "bg-dark text-white hover:bg-accent"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
