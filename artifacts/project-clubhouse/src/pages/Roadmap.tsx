import { motion } from "framer-motion";
import { Zap, CheckCircle2, Circle, Lock } from "lucide-react";
import { Navbar } from "@/components/Navbar";

// ─── Internal Roadmap — Not linked in public navigation ───────────────────────
// Access at /roadmap · For Grant & Joe only

const phases = [
  {
    num: "01",
    title: "Build the Club",
    subtitle: "Vision → Concept → Website",
    status: "in-progress",
    color: "text-primary",
    items: [
      { label: "Define the concept and brand identity", done: true },
      { label: "Build the marketing website", done: true },
      { label: "Create vision boards for all 5 zones", done: true },
      { label: "Build PrimalTrack progress engine (app)", done: false },
      { label: "Finalize zone layouts and equipment list", done: false },
      { label: "Identify first location / market", done: false },
      { label: "Develop founding member pricing strategy", done: false },
      { label: "Build community waitlist", done: false },
    ],
  },
  {
    num: "02",
    title: "Launch",
    subtitle: "First Location · Founding Members · Events",
    status: "upcoming",
    color: "text-white",
    items: [
      { label: "Open first physical location", done: false },
      { label: "Enroll founding members", done: false },
      { label: "Activate local leaderboards on Performance Floor wall", done: false },
      { label: "Launch first club events and competitions", done: false },
      { label: "Enable rewards system (protein credits, badges)", done: false },
      { label: "PR parties and milestone celebrations", done: false },
      { label: "Invite community to shape Phase 3", done: false },
    ],
  },
  {
    num: "03",
    title: "Scale",
    subtitle: "Multi-Club Network · National Competition",
    status: "locked",
    color: "text-muted-foreground",
    items: [
      { label: "Expand to second and third locations", done: false },
      { label: "Activate national leaderboards across clubs", done: false },
      { label: "Club-vs-club competitions and events", done: false },
      { label: "Franchise or expansion strategy", done: false },
      { label: "Advanced Progress Engine — full AI insights", done: false },
      { label: "Multi-city community events", done: false },
      { label: "Corporate partnerships and sponsorships", done: false },
    ],
  },
];

const statusLabel: Record<string, { label: string; color: string }> = {
  "in-progress": { label: "In Progress", color: "text-primary border-primary/40 bg-primary/10" },
  upcoming: { label: "Up Next", color: "text-white border-white/20 bg-white/5" },
  locked: { label: "Phase 3", color: "text-muted-foreground border-white/10 bg-transparent" },
};

export default function Roadmap() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-primary selection:text-background">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-24 md:pb-40 border-b border-white/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/40 text-primary font-display text-sm tracking-widest uppercase font-bold mb-10">
              <Lock className="w-4 h-4" /> Internal · Not Public
            </div>
            <h1 className="font-display text-6xl md:text-9xl lg:text-[11rem] font-black uppercase tracking-tighter leading-none mb-8">
              Future<br /><span className="text-primary">Roadmap.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              The long-term vision for Project Clubhouse — organized into three phases. For Grant &amp; Joe only. Not linked anywhere on the public site.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6 space-y-16 md:space-y-24">
          {phases.map((phase, pi) => (
            <motion.div
              key={pi}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: pi * 0.1 }}
            >
              {/* Phase header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-10">
                <div>
                  <div className="font-display text-xs text-muted-foreground tracking-[0.4em] uppercase mb-3">
                    Phase {phase.num}
                  </div>
                  <h2 className={`font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none ${phase.color}`}>
                    {phase.title}
                  </h2>
                  <p className="text-muted-foreground font-display uppercase tracking-widest text-lg mt-3">
                    {phase.subtitle}
                  </p>
                </div>
                <span className={`inline-flex items-center gap-2 px-5 py-2 border font-display text-sm tracking-widest uppercase font-bold self-start md:self-auto ${statusLabel[phase.status].color}`}>
                  {phase.status === "in-progress" && <Zap className="w-4 h-4" />}
                  {phase.status === "locked" && <Lock className="w-4 h-4" />}
                  {statusLabel[phase.status].label}
                </span>
              </div>

              {/* Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phase.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ii * 0.05 }}
                    className={`flex items-start gap-5 p-6 border transition-colors duration-200 ${
                      item.done
                        ? "border-primary/20 bg-primary/5"
                        : "border-white/5 bg-card hover:border-white/15"
                    }`}
                  >
                    {item.done ? (
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className={`w-6 h-6 flex-shrink-0 mt-0.5 ${phase.status === "locked" ? "text-white/10" : "text-white/30"}`} />
                    )}
                    <span className={`font-display text-lg md:text-xl uppercase tracking-wide font-bold leading-snug ${
                      item.done ? "text-white" : phase.status === "locked" ? "text-white/30" : "text-muted-foreground"
                    }`}>
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <div className="border-t border-white/10 py-16 text-center">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Project Clubhouse · Internal Roadmap · Updated July 2026
        </p>
      </div>
    </div>
  );
}
