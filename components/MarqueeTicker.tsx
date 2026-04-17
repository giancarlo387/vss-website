const items = [
  "Virtual Assistant",
  "Data Entry",
  "Social Media Marketing",
  "Bookkeeping",
  "Appointment Setting",
  "Inbound & Outbound",
  "Virtual Assistant",
  "Data Entry",
  "Social Media Marketing",
  "Bookkeeping",
  "Appointment Setting",
  "Inbound & Outbound",
];

export default function MarqueeTicker() {
  return (
    <div className="bg-dark2 py-4 overflow-hidden border-y border-white/10">
      <div className="animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-4">
            <span
              className={`text-sm font-medium uppercase tracking-widest whitespace-nowrap px-4 ${
                i % 3 === 1 ? "text-accent" : "text-white/70"
              }`}
            >
              {item}
            </span>
            <span className="text-white/30 text-lg">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
