import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#virtual-assistant", label: "Virtual Assistant" },
  { href: "/services#data-entry", label: "Data Entry" },
  { href: "/services#social-media", label: "Social Media Marketing" },
  { href: "/services#bookkeeping", label: "Bookkeeping" },
  { href: "/services#appointment-setting", label: "Appointment Setting" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white relative overflow-hidden">

      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-1">
              Ready to delegate?
            </p>
            <h3
              className="text-2xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s build your remote team today.
            </h3>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="bg-accent text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-blue-500 transition-all hover:-translate-y-0.5"
            >
              Get Started →
            </Link>
            <Link
              href="/services"
              className="border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full hover:border-white/50 hover:bg-white/5 transition-all hover:-translate-y-0.5"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
              </span>
              <span
                className="font-extrabold text-white text-xl tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Virtual Smart Solutions
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Philippines-based virtual assistants helping businesses worldwide grow smarter,
              faster, and leaner — 100% remote.
            </p>

            {/* Social / contact badges */}
            <div className="flex flex-col gap-2">
              <a
                href="mailto:virtualsmartsolutions@gmail.com"
                className="inline-flex items-center gap-2 text-white/50 text-xs hover:text-accent transition-colors group"
              >
                <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/40 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                virtualsmartsolutions@gmail.com
              </a>
              <span className="inline-flex items-center gap-2 text-white/50 text-xs">
                <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                Philippines · Remote Worldwide
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="h-px w-4 bg-accent inline-block" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors hover:pl-1 inline-block duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="h-px w-4 bg-accent inline-block" />
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors hover:pl-1 inline-block duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Stats */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="h-px w-4 bg-accent inline-block" />
              Why VSS
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                  label: "Fast Onboarding", sub: "Start within 48 hours"
                },
                {
                  icon: <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
                  label: "NDA Protected", sub: "Your data stays private"
                },
                {
                  icon: <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>,
                  label: "Global Ready", sub: "Any time zone, any industry"
                },
                {
                  icon: <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  label: "Quality Assured", sub: "Double-checked every task"
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white/80 text-sm font-medium">{item.label}</p>
                    <p className="text-white/40 text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Virtual Smart Solutions · All rights reserved
          </p>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
            <p className="text-white/30 text-xs">All systems operational</p>
          </div>
        </div>
      </div>

    </footer>
  );
}
