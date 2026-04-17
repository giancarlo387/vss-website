import Link from "next/link";
import RevealWrapper from "./RevealWrapper";

export default function CtaBand() {
  return (
    <section className="bg-dark py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <RevealWrapper className="max-w-xl">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-3 font-semibold">
              Get Started
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Not sure which plan is{" "}
              <em className="not-italic font-light text-white/50">right for you?</em>
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.15} className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-white text-dark font-semibold px-7 py-3.5 rounded-full hover:bg-accent hover:text-white transition-all hover:-translate-y-0.5"
            >
              Book a Free Call
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:border-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Explore Services →
            </Link>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
