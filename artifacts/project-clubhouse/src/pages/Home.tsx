import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Dumbbell, 
  ArrowRight, 
  Zap, 
  Target, 
  Users, 
  Flame, 
  Activity, 
  CheckCircle2, 
  Menu, 
  X 
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Link } from "wouter";

// --- ASSETS ---
import imgPerformanceFloor from "@assets/ChatGPT_Image_Jul_14,_2026,_12_51_10_PM_1784052604352.png";
import imgClubhouse from "@assets/ChatGPT_Image_Jul_14,_2026,_12_51_02_PM_1784052604353.png";
import imgFuelStation from "@assets/ChatGPT_Image_Jul_14,_2026,_12_51_25_PM_1784052604352.png";
import imgOutdoorPatio from "@assets/ChatGPT_Image_Jul_14,_2026,_12_51_18_PM_1784052604352.png";
import imgAppInfo from "@assets/ChatGPT_Image_Jul_14,_2026,_01_05_56_PM_1784052604351.png";
import imgSupport1 from "@assets/ChatGPT_Image_Jul_14,_2026,_12_50_52_PM_1784052604353.png";
import imgSupport2 from "@assets/ChatGPT_Image_Jul_14,_2026,_12_50_45_PM_1784052604353.png";
import imgSupport3 from "@assets/ChatGPT_Image_Jul_14,_2026,_12_50_33_PM_1784052604354.png";

// --- COMPONENTS ---

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-background">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img src={imgSupport1} alt="Clubhouse Energy" className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale contrast-125" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-background/20" />
      </motion.div>
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display font-black text-[5rem] md:text-[8rem] lg:text-[11rem] leading-[0.8] tracking-tighter uppercase mb-8 select-none">
            <span className="block text-transparent text-stroke-white opacity-80 -translate-x-4">Stronger</span>
            <span className="block text-primary transform scale-105">Together.</span>
            <span className="block text-white translate-x-4">Better</span>
            <span className="block text-white opacity-90">Every Day.</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-3xl text-muted-foreground font-light mb-12 max-w-3xl font-display tracking-widest uppercase"
        >
          This isn't just a gym. It's our club. <br className="hidden md:block" />
          The workout is only the beginning.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button size="lg" className="text-xl md:text-2xl px-12 h-16 md:h-20" onClick={() => document.getElementById("pricing")?.scrollIntoView({behavior: "smooth"})}>
            CLAIM YOUR SPOT <ArrowRight className="ml-3 w-6 h-6 md:w-8 md:h-8" />
          </Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground/50 font-display uppercase tracking-widest text-sm"
      >
        <span className="mb-2">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

const Marquee = ({ text, reverse = false }: { text: string; reverse?: boolean }) => {
  return (
    <div className="relative flex overflow-hidden bg-primary text-primary-foreground py-5 md:py-8 border-y border-primary/20 shadow-[0_0_50px_rgba(198,255,0,0.15)]">
      <motion.div
        animate={{ x: reverse ? [-2000, 0] : [0, -2000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="flex whitespace-nowrap gap-12 font-display text-4xl md:text-6xl uppercase font-black tracking-widest"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="flex items-center gap-12">
            {text} <Zap className="w-8 h-8 md:w-12 md:h-12" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Spaces = () => {
  const spaces = [
    { title: "The Performance Floor", img: imgPerformanceFloor, desc: "Strength training, open turf, and our massive digital leaderboard wall. Where the real work gets done.", link: "/spaces/performance-floor" },
    { title: "The Clubhouse", img: imgClubhouse, desc: "The social heart. Big screens, community tables, and lounge seating to hang out after.", link: "/spaces/clubhouse" },
    { title: "The Fuel Station", img: imgFuelStation, desc: "Self-serve nutrition hub. Protein dispensers, pre-workout on tap, and grab-and-go fuel.", link: "/spaces/fuel-station" },
    { title: "The Outdoor Patio", img: imgOutdoorPatio, desc: "Fire pits, full-court basketball, and string lights. Summer nights and post-workout recovery.", link: "/spaces/outdoor-patio" },
  ];

  return (
    <section id="spaces" className="py-24 md:py-40 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8"
        >
          <div>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
              4 Zones.<br />
              <span className="text-primary">1 Clubhouse.</span>
            </h2>
          </div>
          <p className="text-xl md:text-3xl text-muted-foreground font-display tracking-widest uppercase max-w-sm">
            Designed for athletic performance and social connection.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {spaces.map((space, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={space.link} className="block group relative h-[400px] md:h-[600px] overflow-hidden bg-card border border-white/5">
                <img src={space.img} alt={space.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-40 grayscale-[50%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                {/* Electric border accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-sm bg-primary flex items-center justify-center text-primary-foreground font-display text-3xl font-black mb-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    0{i+1}
                  </div>
                  <h3 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 leading-none">{space.title}</h3>
                  <p className="text-lg md:text-xl text-gray-400 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-out max-w-md">
                    {space.desc}
                  </p>

                  <div className="mt-6 flex items-center text-primary font-display uppercase tracking-widest font-bold text-lg opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    Explore <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PrimalTrack = () => {
  return (
    <section id="app" className="py-24 md:py-40 bg-secondary relative overflow-hidden clip-slanted">
      <div className="absolute inset-0 electric-grid opacity-20 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 border border-primary text-primary font-display text-lg tracking-widest uppercase rounded-sm font-bold shadow-[0_0_15px_rgba(198,255,0,0.2)]">
              <Target className="w-6 h-6" /> The Motivation Engine
            </div>
            
            <h2 className="font-display text-6xl md:text-[7rem] font-black uppercase tracking-tighter leading-none">
              PRIMAL<span className="text-primary">TRACK</span> OS
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Not just another tracker. This is the operating system of our club. Compete on leaderboards from your friend group up to national rankings.
            </p>
            
            <div className="space-y-6 pt-6">
              {[
                "Live Gym Leaderboards on the Performance Floor",
                "Verified Personal Records (PRs)",
                "Digital Achievements & Club Status",
                "Find Workout Partners & Join Squads"
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-xl md:text-2xl font-display uppercase tracking-wider font-bold"
                >
                  <div className="bg-primary/20 p-2 rounded-sm text-primary">
                    <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative perspective-1000"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
            <img 
              src={imgAppInfo} 
              alt="PrimalTrack App Dashboard" 
              className="relative z-10 w-full max-w-lg mx-auto rounded-xl border-4 border-white/5 shadow-2xl shadow-black/80 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(198,255,0,0.3)] transition-all duration-500" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProgressScore = () => {
  return (
    <section className="py-24 md:py-40 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-5xl mx-auto mb-20 md:mb-32"
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-[7rem] leading-none font-black uppercase tracking-tighter mb-8">
            WE REWARD <span className="text-primary block md:inline">IMPROVEMENT.</span><br />
            NOT JUST RAW STRENGTH.
          </h2>
          <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Our Progress Score ensures everyone has a shot at the top. The leaderboard isn't just for the elite—it's for the most dedicated.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { 
              title: "Most Improved", 
              icon: <Flame className="w-12 h-12 text-background" />, 
              desc: "Based on relative gains. If you're putting in the work and pushing your limits week over week, you'll climb this board.",
              num: "01"
            },
            { 
              title: "Consistency", 
              icon: <Activity className="w-12 h-12 text-background" />, 
              desc: "Show up. Put in the reps. Our consistency score tracks your discipline over time, day in and day out. No excuses.",
              num: "02"
            },
            { 
              title: "Community", 
              icon: <Users className="w-12 h-12 text-background" />, 
              desc: "Spot a friend. Join a squad. High-five a new member. Real athletic impact goes way beyond the weights you lift.",
              num: "03"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-white/5 p-10 md:p-12 hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-12 text-[10rem] font-display font-black text-white/5 pointer-events-none group-hover:text-primary/5 transition-colors">
                {item.num}
              </div>
              
              <div className="relative z-10">
                <div className="mb-8 p-5 bg-primary inline-block rounded-sm group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-[0_0_20px_rgba(198,255,0,0.4)]">
                  {item.icon}
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 leading-none">{item.title}</h3>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-40 bg-background relative overflow-hidden clip-slanted-reverse border-b border-primary/20">
      <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-display font-black text-stroke-white opacity-5 whitespace-nowrap pointer-events-none select-none">
        MEMBERSHIP
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-card border border-primary/30 p-10 md:p-20 text-center shadow-[0_0_100px_rgba(198,255,0,0.05)] relative overflow-hidden">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-primary" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary" />
          
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">The Club Membership</h2>
          <p className="text-xl md:text-3xl text-muted-foreground font-display tracking-widest uppercase mb-12">One simple price. Everything included.</p>
          
          <div className="font-display text-[8rem] md:text-[12rem] font-black text-primary mb-4 flex justify-center items-baseline leading-none shadow-primary text-glow">
            <span className="text-6xl md:text-8xl -translate-y-10 md:-translate-y-16">$</span>40
            <span className="text-4xl md:text-5xl text-muted-foreground ml-4">/mo</span>
          </div>
          
          <ul className="text-left max-w-lg mx-auto space-y-6 mb-16 mt-16">
            {[
              "Unlimited Access to the Performance Floor",
              "Full use of The Clubhouse & Fuel Station",
              "Outdoor Patio & Court Access",
              "PrimalTrack OS Premium Account",
              "Zero hidden fees. Cancel anytime."
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-5 text-xl md:text-2xl font-medium font-display tracking-wider uppercase">
                <CheckCircle2 className="text-primary w-8 h-8 flex-shrink-0 mt-1" />
                {feature}
              </li>
            ))}
          </ul>
          
          <Button size="lg" className="w-full md:w-auto text-2xl md:text-4xl px-16 h-20 md:h-24 font-black">
            BECOME A MEMBER <ArrowRight className="ml-4 w-10 h-10" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const Community = () => {
  return (
    <section className="py-24 md:py-40 bg-background relative border-b border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 md:mb-32"
        >
          <h2 className="font-display text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-none mb-6">
            Who Is <span className="text-primary">This For?</span>
          </h2>
          <p className="text-2xl md:text-4xl text-muted-foreground font-display tracking-widest uppercase">
            Built for the next generation of athletes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <motion.img 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={imgSupport2} 
              alt="Community Training" 
              className="object-cover w-full h-64 md:h-96 grayscale hover:grayscale-0 transition-all duration-500" 
            />
            <motion.img 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              src={imgSupport3} 
              alt="Clubhouse Community" 
              className="object-cover w-full h-64 md:h-96 mt-12 md:mt-24 grayscale hover:grayscale-0 transition-all duration-500" 
            />
          </div>
          
          <div className="space-y-12">
            {[
              { title: "Teenagers (13-18)", desc: "A safe, high-energy environment to build strength, confidence, and discipline from day one." },
              { title: "College Students", desc: "Your campus gym is crowded and smells weird. This is your escape. Better equipment, better vibe." },
              { title: "Young Adults", desc: "Find your squad. Push your limits. Actually look forward to where you work out." },
              { title: "Athletes & Families", desc: "Train together. Support each other. A community built entirely on mutual improvement." }
            ].map((group, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-4 border-white/10 hover:border-primary pl-8 md:pl-10 py-2 transition-colors duration-300"
              >
                <h3 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-3 leading-none text-white">{group.title}</h3>
                <p className="text-muted-foreground text-xl font-light leading-relaxed">{group.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary py-24 md:py-32 text-center relative overflow-hidden border-t border-primary/20">
      <div className="absolute inset-0 bg-background/50" />
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <h2 className="font-display text-[15vw] font-black uppercase tracking-tighter text-transparent text-stroke-white opacity-20 mb-8 leading-none select-none pointer-events-none">
          CLUBHOUSE
        </h2>
        
        <div className="bg-primary p-4 rounded-sm text-background mb-10 transform -translate-y-12 md:-translate-y-24 shadow-[0_0_30px_rgba(198,255,0,0.5)]">
          <Dumbbell className="w-12 h-12 md:w-16 md:h-16" />
        </div>
        
        <p className="font-display text-4xl md:text-6xl uppercase font-black tracking-widest max-w-5xl mx-auto leading-tight mb-16">
          Come for the workout.<br />
          <span className="text-primary text-glow">Stay for the community.</span>
        </p>
        
        <Button size="lg" className="text-2xl md:text-4xl px-16 h-20 md:h-24 font-black" onClick={() => document.getElementById("pricing")?.scrollIntoView({behavior: "smooth"})}>
          JOIN THE CLUB
        </Button>
        
        <div className="w-full mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-muted-foreground font-display text-xl uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} Project Clubhouse. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">TikTok</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-primary selection:text-background">
      <Navbar />
      <Hero />
      <Marquee text="COME FOR THE WORKOUT • STAY FOR THE COMMUNITY" />
      <Spaces />
      <PrimalTrack />
      <ProgressScore />
      <Marquee text="STRONGER TOGETHER • BETTER EVERY DAY" reverse />
      <Pricing />
      <Community />
      <Footer />
    </div>
  );
}
