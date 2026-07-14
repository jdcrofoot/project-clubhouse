import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Coffee, Zap, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import imgFuelStation from "@assets/generated_images/fuel_station_v1_1.png";

export default function FuelStation() {
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
            src={imgFuelStation} 
            alt="The Fuel Station" 
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
            <Zap className="w-5 h-5" /> Zone 03
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display font-black text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.8] tracking-tighter uppercase mb-6"
          >
            The Fuel <br/>
            <span className="text-primary text-stroke-white text-transparent">Station</span>
          </motion.h1>
        </div>
      </section>

      {/* Photo Showcase */}
      <section className="relative z-10 bg-black">
        <div className="relative">
          <img
            src={imgFuelStation}
            alt="Fuel Station Vision"
            className="w-full max-h-[80vh] object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-8 bg-gradient-to-t from-black/80 to-transparent">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">Vision Board · Zone 03</span>
            <span className="font-display text-xs uppercase tracking-widest text-white/50">The Fuel Station</span>
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
                <Coffee className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-display text-3xl font-black uppercase tracking-tight mb-4">Menu</h3>
                <ul className="space-y-4 text-muted-foreground font-display tracking-wider uppercase">
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Shakes</span> <span className="text-primary font-bold">$2 Tap</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Pre-Workout</span> <span className="text-white font-bold">On Tap</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Food</span> <span className="text-white font-bold">Grab & Go</span></li>
                  <li className="flex justify-between border-b border-white/5 pb-2"><span>Payment</span> <span className="text-white font-bold">Apple Pay</span></li>
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
                <h2 className="text-5xl md:text-7xl mb-8">High Quality. Low Price. Self-Serve. Fast.</h2>
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-12">
                  No more $8 smoothies that take 15 minutes to make. The Fuel Station is built for speed and affordability. Tap your phone, grab what you need, and get back to it.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                  {[
                    "$2 self-serve protein shake tap",
                    "Pre-workout dispensers",
                    "Cold brew & energy drinks",
                    "Real food options & macro meals",
                    "Healthy grab-and-go snacks",
                    "Frictionless mobile pay kiosk"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 bg-secondary border border-white/5">
                      <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                      <span className="font-display text-xl uppercase tracking-wider font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-4xl md:text-5xl mt-16 mb-6">Fuel Your Body</h3>
                <p className="text-lg md:text-xl font-light leading-relaxed">
                  Nutrition is half the battle. We've made it impossible to skip your post-workout protein by keeping costs at absolute minimums. We don't make money on the shakes; we just want you to see results.
                </p>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
