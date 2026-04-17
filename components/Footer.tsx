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
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex rounded-full h-3 w-3 bg-accent"></span>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                VSS
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Philippines-based virtual assistant services helping businesses worldwide grow
              smarter, faster, and leaner.
            </p>
            <p className="text-white/40 text-xs">© {new Date().getFullYear()} Virtual Smart Solutions</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:virtualsmartsolutions@gmail.com"
                  className="text-white/60 text-sm hover:text-white transition-colors break-all"
                >
                  virtualsmartsolutions@gmail.com
                </a>
              </li>
              <li className="text-white/60 text-sm">Philippines (Remote — Worldwide)</li>
              <li className="text-white/60 text-sm">Response within 24 hours</li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-blue-600 transition-colors"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            Virtual Smart Solutions — Professional Remote Services
          </p>
          <a
            href="mailto:virtualsmartsolutions@gmail.com"
            className="text-white/40 text-xs hover:text-white/70 transition-colors"
          >
            virtualsmartsolutions@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
