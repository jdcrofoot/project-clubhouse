import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MonitorPlay, Zap, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import imgClubhouse from "@assets/generated_images/vision_board_clubhouse_v2.png";

export default function Clubhouse() {
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
            src={imgClubhouse} 
            alt="The Clubhouse" 
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
            <Zap className="w-5 h-5" /> Zone 02
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display font-black text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.8] tracking-tighter uppercase mb-6"
          >
            The <br/>
            <span className="text-primary text-stroke-white text-transparent">Clubhouse</span>
          </motion.h1>
        </div>
      </section>

      {/* Photo Showcase */}
      <section className="relative z-10 bg-black">
        <div className="relative">
          <img
            src={imgClubhouse}
            alt="The Clubhouse Vision"
            className="w-full max-h-[80vh] object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-8 bg-gradient-to-t from-black/80 to-transparent">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">Vision Board · Zone 02</span>
            <span className="font-display text-xs uppercase tracking-widest text-white/50">The Clubhouse</span>
          </div>
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
                <MonitorPlay className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-display text-3xl font-black uppercase tracking-tight mb-4">Vibe</h3>
                <ul className="space-y-4 text-muted-foreground font-display tracking-wider uppercase">
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Seating</span> <span className="text-white font-bold">Lounge & Tables</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Screens</span> <span className="text-white font-bold">Massive TV Wall</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Audio</span> <span className="text-white font-bold">Curated Playlists</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Wifi</span> <span className="text-white font-bold">Gigabit Free</span></li>
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
                <h2 className="text-5xl md:text-7xl mb-8">Hang Out. Watch. Connect. Stay a While.</h2>
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-12">
                  The workout is only half the reason you're here. The Clubhouse is the social heart of the facility. It's where you drop your bags, grab a couch, watch the game, and connect with your squad.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                  {[
                    "Massive TV wall showing live sports",
                    "Deep, comfortable lounge seating",
                    "Community tables for homework or hanging out",
                    "High-speed gigabit Wi-Fi",
                    "Curated club playlists",
                    "Direct view of the Performance Floor"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 bg-secondary border border-white/5">
                      <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                      <span className="font-display text-xl uppercase tracking-wider font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-4xl md:text-5xl mt-16 mb-6">More Than A Lobby</h3>
                <p className="text-lg md:text-xl font-light leading-relaxed">
                  Traditional gyms want you in and out. We built The Clubhouse so you have a place to be. Do your homework, wait for your ride, or just hang out with friends who actually understand your goals.
                </p>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
