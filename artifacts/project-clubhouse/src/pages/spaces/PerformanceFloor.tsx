import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Dumbbell, Zap, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import imgPerformanceFloor from "@assets/ChatGPT_Image_Jul_14,_2026,_12_51_10_PM_1784052604352.png";

export default function PerformanceFloor() {
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
            src={imgPerformanceFloor} 
            alt="Performance Floor" 
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
            <Zap className="w-5 h-5" /> Zone 01
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display font-black text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.8] tracking-tighter uppercase mb-6"
          >
            The Performance <br/>
            <span className="text-primary text-stroke-white text-transparent">Floor</span>
          </motion.h1>
        </div>
      </section>

      {/* Photo Showcase */}
      <section className="relative z-10 bg-black">
        <div className="relative">
          <img
            src={imgPerformanceFloor}
            alt="Performance Floor Vision"
            className="w-full h-auto block"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 md:py-32 relative z-10 bg-background border-t border-primary/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-4 flex flex-col gap-8">
              <Link href="/#spaces" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-display uppercase tracking-widest font-bold w-fit">
                <ArrowLeft className="w-5 h-5" /> Back to Spaces
              </Link>
              
              <div className="bg-card border border-white/5 p-8 rounded-sm">
                <Dumbbell className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-display text-3xl font-black uppercase tracking-tight mb-4">Specs</h3>
                <ul className="space-y-4 text-muted-foreground font-display tracking-wider uppercase">
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Squat Racks</span> <span className="text-white font-bold">12 Racks</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Turf Strip</span> <span className="text-white font-bold">40 Yards</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Dumbbells</span> <span className="text-white font-bold">Up to 150lbs</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Leaderboards</span> <span className="text-white font-bold">Live Sync</span></li>
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
                <h2 className="text-5xl md:text-7xl mb-8">Train. Compete. Get Better.</h2>
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-12">
                  This isn't a sea of treadmills. The Performance Floor is built for real work. Whether you're an athlete training for the season, a powerlifter chasing a PR, or just trying to get stronger, this is where it happens.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                  {[
                    "Plate-loaded racks & platforms",
                    "Open turf strip for sprints & sleds",
                    "Extensive free weights zone",
                    "Digital leaderboard wall",
                    "Dedicated coaching zone",
                    "PR wall & verified records"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 bg-secondary border border-white/5">
                      <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                      <span className="font-display text-xl uppercase tracking-wider font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-4xl md:text-5xl mt-16 mb-6">The Live Leaderboard</h3>
                <p className="text-lg md:text-xl font-light leading-relaxed">
                  Look up. The massive digital screens on the Performance Floor are synced live to the PrimalTrack OS. See who is currently putting in the work, check the daily challenges, and see your name light up when you hit a verified PR.
                </p>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
