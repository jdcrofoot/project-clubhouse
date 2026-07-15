import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Zap, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import imgArrival from "@assets/15EB68E0-3FA6-46B6-BD2D-7537459C86F8_1784062882601.png";

export default function ArrivalExperience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-primary selection:text-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={imgArrival}
            alt="The Arrival Experience"
            className="w-full h-full object-cover opacity-60 grayscale-[30%] contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 text-primary font-display tracking-widest uppercase mb-6 text-xl font-bold bg-black/50 px-6 py-2 border border-primary/30"
          >
            <Zap className="w-5 h-5" /> Zone 00
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display font-black text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.8] tracking-tighter uppercase mb-6"
          >
            The Arrival<br />
            <span className="text-primary text-stroke-white text-transparent">Experience</span>
          </motion.h1>
        </div>
      </section>

      {/* Full Vision Board */}
      <section className="relative z-10 bg-black">
        <div className="relative">
          <img
            src={imgArrival}
            alt="Arrival Experience Vision Board"
            className="w-full h-auto block"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 md:py-32 relative z-10 bg-background border-t border-primary/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            <div className="lg:col-span-4 flex flex-col gap-8">
              <Link href="/#experience" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-display uppercase tracking-widest font-bold w-fit">
                <ArrowLeft className="w-5 h-5" /> Back to Spaces
              </Link>

              <div className="bg-card border border-white/5 p-8 rounded-sm">
                <Star className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-display text-3xl font-black uppercase tracking-tight mb-4">Features</h3>
                <ul className="space-y-4 text-muted-foreground font-display tracking-wider uppercase">
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Leaderboard</span> <span className="text-white font-bold">20' LED Wall</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Check-In</span> <span className="text-white font-bold">Mobile Tap</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Lobby</span> <span className="text-white font-bold">Open & Welcoming</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Energy</span> <span className="text-white font-bold">Instant</span></li>
                </ul>
                <Button className="w-full mt-8" asChild>
                  <Link href="/#pricing">Join Now</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-p:text-muted-foreground"
              >
                <h2 className="text-5xl md:text-7xl mb-8">First Impression. Instant Energy.</h2>
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-12">
                  Walk in. See the energy. You belong here. This isn't just a gym lobby — it's a live scoreboard, a community feed, and a signal that something different is happening inside.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                  {[
                    "20' LED leaderboard wall",
                    "Live PRs, events & shoutouts",
                    "Mobile tap check-in",
                    "Open, high-ceiling lobby",
                    "Community merch & gear",
                    "Instant belonging from step one",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 bg-secondary border border-white/5">
                      <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                      <span className="font-display text-xl uppercase tracking-wider font-bold">{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-4xl md:text-5xl mt-16 mb-6">You Show Up. We Level Up.</h3>
                <p className="text-lg md:text-xl font-light leading-relaxed">
                  The moment you walk through the door, the club knows you're here. Your name on the leaderboard, your streak on the screen, your community around you. The arrival experience sets the tone for everything that follows.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
