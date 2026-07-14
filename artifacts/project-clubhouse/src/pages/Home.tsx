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
  BookOpen,
  Tv,
  CalendarDays,
  Coffee,
  Heart,
  Trophy,
  TrendingUp,
  Medal,
  Star,
  Gift,
  Ticket,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Link } from "wouter";

import imgPerformanceFloor from "@assets/ChatGPT_Image_Jul_14,_2026,_12_51_10_PM_1784052604352.png";
import imgClubhouse from "@assets/ChatGPT_Image_Jul_14,_2026,_12_51_02_PM_1784052604353.png";
import imgFuelStation from "@assets/ChatGPT_Image_Jul_14,_2026,_12_51_25_PM_1784052604352.png";
import imgOutdoorPatio from "@assets/ChatGPT_Image_Jul_14,_2026,_12_51_18_PM_1784052604352.png";
import imgAppInfo from "@assets/ChatGPT_Image_Jul_14,_2026,_01_05_56_PM_1784052604351.png";
import imgSupport1 from "@assets/ChatGPT_Image_Jul_14,_2026,_12_50_52_PM_1784052604353.png";
import imgSupport2 from "@assets/ChatGPT_Image_Jul_14,_2026,_12_50_45_PM_1784052604353.png";
import imgSupport3 from "@assets/ChatGPT_Image_Jul_14,_2026,_12_50_33_PM_1784052604354.png";

// ─── Hero ────────────────────────────────────────────────────────────────────
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
          Where Progress Beats Perfection.<br className="hidden md:block" />
          The First Fitness Club Built Around Community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button size="lg" className="text-xl md:text-2xl px-12 h-16 md:h-20" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>
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

// ─── Marquee ─────────────────────────────────────────────────────────────────
const Marquee = ({ text, reverse = false }: { text: string; reverse?: boolean }) => (
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

// ─── More Than A Gym ─────────────────────────────────────────────────────────
const MoreThanAGym = () => {
  const activities = [
    { icon: <Dumbbell className="w-8 h-8" />, label: "Train", desc: "Real equipment. Real results." },
    { icon: <Users className="w-8 h-8" />, label: "Hang Out", desc: "Lounge. Connect. Belong." },
    { icon: <BookOpen className="w-8 h-8" />, label: "Study", desc: "Tables, Wi-Fi, good energy." },
    { icon: <Tv className="w-8 h-8" />, label: "Watch Games", desc: "Big screens. Loud crowds." },
    { icon: <CalendarDays className="w-8 h-8" />, label: "Attend Events", desc: "Competitions, nights, more." },
    { icon: <Coffee className="w-8 h-8" />, label: "Refuel", desc: "$2 shakes. No excuses." },
    { icon: <Heart className="w-8 h-8" />, label: "Build Friendships", desc: "The real reason you stay." },
  ];

  return (
    <section id="experience" className="py-24 md:py-40 bg-background relative z-10 border-b border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 md:mb-32"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/40 text-primary font-display text-sm tracking-widest uppercase font-bold mb-8">
            <Zap className="w-4 h-4" /> The Concept
          </div>
          <h2 className="font-display text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-none mb-6">
            More Than<br />
            <span className="text-primary">A Gym.</span>
          </h2>
          <p className="text-xl md:text-3xl text-muted-foreground font-display tracking-widest uppercase max-w-2xl">
            Why would someone choose to spend three hours here instead of one?
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {activities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07 }}
              className="group flex flex-col items-center text-center p-6 md:p-8 bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:bg-primary/5 cursor-default"
            >
              <div className="text-primary mb-4 group-hover:scale-125 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-black uppercase tracking-tight mb-2 leading-none">{item.label}</h3>
              <p className="text-muted-foreground text-sm font-light leading-snug hidden md:block">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Supporting image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className="mt-16 md:mt-24 relative overflow-hidden"
        >
          <img
            src={imgClubhouse}
            alt="The Clubhouse"
            className="w-full max-h-[60vh] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <blockquote className="text-center px-6">
              <p className="font-display text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-none">
                "A place where ambitious<br />people want to spend time."
              </p>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Why Members Stay ─────────────────────────────────────────────────────────
const WhyMembersStay = () => {
  const reasons = [
    { emoji: "🏋️", label: "Train Together", desc: "Side-by-side with people who push you. No lone-wolf workouts." },
    { emoji: "📈", label: "Track Progress", desc: "Every rep, every PR, every streak. PrimalTrack captures it all." },
    { emoji: "🏆", label: "Compete", desc: "Leaderboards from friend groups to national rankings." },
    { emoji: "🥤", label: "Refuel", desc: "Quality nutrition at minimum cost, right where you need it." },
    { emoji: "🎉", label: "Attend Events", desc: "PR parties, club competitions, community nights. Always something happening." },
    { emoji: "🎬", label: "Watch Games", desc: "Big screens. Full sound. The best living room you've ever had." },
    { emoji: "👥", label: "Build Community", desc: "The friendships you build here outlast any workout." },
  ];

  return (
    <section id="community" className="py-24 md:py-40 bg-secondary relative border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 md:mb-32"
        >
          <h2 className="font-display text-5xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-none mb-6">
            Why Members<br /><span className="text-primary">Stay.</span>
          </h2>
          <p className="text-xl md:text-3xl text-muted-foreground font-display tracking-widest uppercase max-w-2xl mx-auto">
            We're not selling gym access. We're creating a community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className={`group p-8 md:p-10 bg-background border border-white/5 hover:border-primary/40 transition-all duration-300 ${i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}
            >
              <div className="text-5xl mb-6">{r.emoji}</div>
              <h3 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight mb-3 leading-none group-hover:text-primary transition-colors">{r.label}</h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 4 Zones / Spaces ────────────────────────────────────────────────────────
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
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-sm bg-primary flex items-center justify-center text-primary-foreground font-display text-3xl font-black mb-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    0{i + 1}
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

// ─── PrimalTrack OS / Member Journey ─────────────────────────────────────────
const PrimalTrack = () => {
  const steps = [
    { label: "Join Club", sub: "One membership. Everything included." },
    { label: "Walk In", sub: "Tap your phone. You're checked in." },
    { label: "Auto Check-In", sub: "PrimalTrack logs your visit instantly." },
    { label: "Workout Logged", sub: "Sets, reps, and PRs tracked live." },
    { label: "Progress Updated", sub: "Your score evolves in real time." },
    { label: "Leaderboard Changes", sub: "Your name moves up the board." },
    { label: "Rewards Earned", sub: "Streaks, badges, and credits unlock." },
    { label: "Community Events", sub: "Get invited to the next competition." },
    { label: "Repeat", sub: "The loop that keeps you coming back." },
  ];

  return (
    <section id="app" className="py-24 md:py-40 bg-secondary relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 electric-grid opacity-20 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 md:mb-32"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 border border-primary text-primary font-display text-lg tracking-widest uppercase rounded-sm font-bold shadow-[0_0_15px_rgba(198,255,0,0.2)] mb-8">
            <Target className="w-6 h-6" /> The App
          </div>
          <h2 className="font-display text-5xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-none mb-6">
            PRIMAL<span className="text-primary">TRACK</span><br />
            <span className="text-4xl md:text-6xl text-muted-foreground">The Operating System Behind Every Member Journey</span>
          </h2>
        </motion.div>

        {/* Journey Flow */}
        <div className="flex flex-col items-center mb-24 md:mb-40">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-6 w-full max-w-2xl"
              >
                <div className={`flex-1 p-6 md:p-8 border transition-all duration-300 hover:border-primary/60 group cursor-default ${i === steps.length - 1 ? "bg-primary/10 border-primary/40" : "bg-background border-white/5"}`}>
                  <div className="flex items-center gap-4">
                    <div className={`font-display text-sm tracking-widest uppercase font-bold ${i === steps.length - 1 ? "text-primary" : "text-muted-foreground"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className={`font-display text-2xl md:text-3xl font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors ${i === steps.length - 1 ? "text-primary" : "text-white"}`}>
                        {step.label}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1 font-light">{step.sub}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="w-[1px] h-8 bg-gradient-to-b from-primary/60 to-primary/20 my-1 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* App Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
        >
          <div className="flex-1 space-y-6">
            <h3 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Not just a tracker.<br /><span className="text-primary">The club runs on it.</span>
            </h3>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              PrimalTrack syncs with the leaderboard on the Performance Floor wall, logs your check-ins automatically, tracks your PRs, and connects you to your squad — all without you thinking about it.
            </p>
            <div className="space-y-4 pt-4">
              {[
                "Live Gym Leaderboards on the Performance Floor",
                "Verified Personal Records (PRs)",
                "Digital Achievements & Club Status",
                "Find Workout Partners & Join Squads",
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-4 font-display uppercase tracking-wider font-bold text-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-xl px-10 h-16 font-black" asChild>
                <a href="https://primaltrack.replit.app" target="_blank" rel="noopener noreferrer">
                  Launch PrimalTrack <ArrowRight className="ml-3 w-6 h-6" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-10 h-16 font-black border-white/20 hover:border-primary hover:text-primary" asChild>
                <a href="https://primaltrack.replit.app" target="_blank" rel="noopener noreferrer">
                  See How It Works
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
            <img
              src={imgAppInfo}
              alt="PrimalTrack App Dashboard"
              className="relative z-10 w-full max-w-lg mx-auto rounded-xl border-4 border-white/5 shadow-2xl shadow-black/80 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(198,255,0,0.3)] transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Progress Wins ────────────────────────────────────────────────────────────
const ProgressWins = () => {
  const wins = [
    { stat: "+18%", label: "Bench Improvement", sub: "Maya R. — 6 weeks", color: "text-primary" },
    { stat: "42", label: "Day Workout Streak", sub: "Jayden K. — ongoing", color: "text-white" },
    { stat: "MVP", label: "Community", sub: "Alex M. — this month", color: "text-primary" },
    { stat: "1st", label: "Pull-Up Ever", sub: "Lexi T. — milestone", color: "text-white" },
    { stat: "#1", label: "Most Improved", sub: "DeShaun P. — this week", color: "text-primary" },
    { stat: "#2", label: "Local Club Rank", sub: "Club — regional board", color: "text-white" },
    { stat: "Top 10", label: "Minnesota", sub: "State leaderboard", color: "text-primary" },
    { stat: "National", label: "Leaderboard", sub: "Club on the map", color: "text-white" },
  ];

  return (
    <section className="py-24 md:py-40 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 md:mb-32"
        >
          <h2 className="font-display text-5xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-none mb-6">
            Progress<br /><span className="text-primary">Wins.</span>
          </h2>
          <p className="text-xl md:text-3xl text-muted-foreground font-display tracking-widest uppercase max-w-3xl">
            Most fitness companies reward the strongest. We reward improvement. Every member has a shot at the top.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {wins.map((win, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07 }}
              className="group p-8 md:p-10 bg-card border border-white/5 hover:border-primary/40 transition-all duration-300 hover:bg-primary/5"
            >
              <div className={`font-display text-5xl md:text-6xl font-black leading-none mb-3 group-hover:scale-105 transition-transform ${win.color}`}>{win.stat}</div>
              <div className="font-display text-xl md:text-2xl font-black uppercase tracking-tight leading-tight mb-2 text-white">{win.label}</div>
              <div className="text-muted-foreground text-sm font-light">{win.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Leaderboard Visualization ────────────────────────────────────────────────
const leaderboardData: Record<string, { rank: number; name: string; score: number; change: string }[]> = {
  Friends: [
    { rank: 1, name: "Maya R.", score: 2840, change: "+3" },
    { rank: 2, name: "Jayden K.", score: 2710, change: "—" },
    { rank: 3, name: "Lexi T.", score: 2580, change: "+1" },
    { rank: 4, name: "Alex M.", score: 2430, change: "-1" },
    { rank: 5, name: "DeShaun P.", score: 2290, change: "+2" },
  ],
  "Local Club": [
    { rank: 1, name: "Tyler B.", score: 3120, change: "+1" },
    { rank: 2, name: "Maya R.", score: 2840, change: "+2" },
    { rank: 3, name: "Chris V.", score: 2780, change: "—" },
    { rank: 4, name: "Jayden K.", score: 2710, change: "-1" },
    { rank: 5, name: "Sam W.", score: 2640, change: "+4" },
  ],
  City: [
    { rank: 1, name: "Proj. Clubhouse", score: 9840, change: "+2" },
    { rank: 2, name: "Eastside Fit", score: 9210, change: "—" },
    { rank: 3, name: "Northgate Gym", score: 8870, change: "-1" },
    { rank: 4, name: "Lakefront Club", score: 8340, change: "+1" },
    { rank: 5, name: "South Athletic", score: 7980, change: "—" },
  ],
  State: [
    { rank: 1, name: "Metro Peak MN", score: 42100, change: "—" },
    { rank: 2, name: "Proj. Clubhouse", score: 38400, change: "+3" },
    { rank: 3, name: "Twin Cities Fit", score: 37200, change: "-1" },
    { rank: 4, name: "Duluth Athletic", score: 34800, change: "—" },
    { rank: 5, name: "Rochester Club", score: 31200, change: "+1" },
  ],
  National: [
    { rank: 1, name: "Apex Chicago", score: 198400, change: "—" },
    { rank: 2, name: "The Grid NYC", score: 184200, change: "+1" },
    { rank: 3, name: "Peak LA Fitness", score: 172600, change: "-1" },
    { rank: 47, name: "Proj. Clubhouse ↑", score: 38400, change: "+8", },
    { rank: 48, name: "Austin Club", score: 37100, change: "—" },
  ],
};

const LeaderboardViz = () => {
  const levels = ["Friends", "Local Club", "City", "State", "National"];
  const filters = ["All Ages", "Under 18", "18-24", "25-34", "35+"];
  const [activeLevel, setActiveLevel] = useState("Friends");
  const [activeFilter, setActiveFilter] = useState("All Ages");

  const rows = leaderboardData[activeLevel] || [];

  return (
    <section className="py-24 md:py-40 bg-secondary relative border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-display text-5xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-none mb-6">
            Everyone Has<br /><span className="text-primary">A Rank.</span>
          </h2>
          <p className="text-xl md:text-3xl text-muted-foreground font-display tracking-widest uppercase max-w-3xl">
            From your friend group to the national stage. Filter by what matters to you.
          </p>
        </motion.div>

        {/* Level Tabs */}
        <div className="flex gap-2 md:gap-3 flex-wrap mb-6">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setActiveLevel(lvl)}
              className={`px-4 md:px-6 py-2 md:py-3 font-display text-sm md:text-base uppercase tracking-widest font-black border transition-all duration-200 ${
                activeLevel === lvl
                  ? "bg-primary text-background border-primary"
                  : "bg-transparent text-muted-foreground border-white/10 hover:border-primary/40 hover:text-white"
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 flex-wrap mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 font-display text-xs uppercase tracking-widest font-bold rounded-full border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-primary/20 text-primary border-primary/40"
                  : "bg-transparent text-muted-foreground border-white/10 hover:border-white/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Table */}
        <motion.div
          key={activeLevel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-background border border-white/10 overflow-hidden"
        >
          <div className="grid grid-cols-12 px-6 md:px-10 py-4 border-b border-white/5 text-muted-foreground font-display text-xs uppercase tracking-widest">
            <span className="col-span-1">Rank</span>
            <span className="col-span-6 md:col-span-7">Name</span>
            <span className="col-span-3 text-right">Score</span>
            <span className="col-span-2 text-right">Change</span>
          </div>
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`grid grid-cols-12 px-6 md:px-10 py-5 border-b border-white/5 items-center hover:bg-primary/5 transition-colors ${row.rank <= 3 ? "border-l-2 border-l-primary" : ""}`}
            >
              <span className={`col-span-1 font-display text-2xl md:text-3xl font-black ${row.rank <= 3 ? "text-primary" : "text-muted-foreground"}`}>
                {row.rank}
              </span>
              <span className="col-span-6 md:col-span-7 font-display text-xl md:text-2xl font-black uppercase tracking-tight">
                {row.name}
              </span>
              <span className="col-span-3 text-right font-display text-lg md:text-xl font-bold text-muted-foreground">
                {row.score.toLocaleString()}
              </span>
              <span className={`col-span-2 text-right font-display text-base font-bold ${row.change.startsWith("+") ? "text-primary" : row.change.startsWith("-") ? "text-red-400" : "text-muted-foreground"}`}>
                {row.change}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-6 text-muted-foreground font-display text-sm uppercase tracking-widest text-center">
          Rankings update live · Powered by PrimalTrack OS
        </p>
      </div>
    </section>
  );
};

// ─── Progress Score ───────────────────────────────────────────────────────────
const ProgressScore = () => (
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
          { title: "Most Improved", icon: <Flame className="w-12 h-12 text-background" />, desc: "Based on relative gains. Pushing your limits week over week? You'll climb.", num: "01" },
          { title: "Consistency", icon: <Activity className="w-12 h-12 text-background" />, desc: "Show up. Put in the reps. Our consistency score tracks your discipline over time.", num: "02" },
          { title: "Community", icon: <Users className="w-12 h-12 text-background" />, desc: "Spot a friend. Join a squad. Real impact goes way beyond the weights you lift.", num: "03" },
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

// ─── Rewards ─────────────────────────────────────────────────────────────────
const Rewards = () => {
  const rewards = [
    { icon: <Coffee className="w-8 h-8" />, label: "Protein Credits", desc: "Earn shake tokens just for showing up consistently." },
    { icon: <Gift className="w-8 h-8" />, label: "Membership Discounts", desc: "Long-term members pay less. Loyalty has real value here." },
    { icon: <Ticket className="w-8 h-8" />, label: "Exclusive Events", desc: "Invite-only competitions and community nights." },
    { icon: <Medal className="w-8 h-8" />, label: "Badges & Status", desc: "Earn titles like Club MVP, Iron Streak, and Community Leader." },
    { icon: <Star className="w-8 h-8" />, label: "Community Recognition", desc: "Your name on the board. Your story in the feed." },
    { icon: <ShoppingBag className="w-8 h-8" />, label: "Merchandise", desc: "Earn limited gear. Wear what you've actually worked for." },
  ];

  return (
    <section className="py-24 md:py-40 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 md:mb-32"
        >
          <h2 className="font-display text-5xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-none mb-6">
            Progress<br /><span className="text-primary">Creates Rewards.</span>
          </h2>
          <p className="text-xl md:text-3xl text-muted-foreground font-display tracking-widest uppercase max-w-3xl">
            Consistency earns tangible benefits. Show up. Level up. Cash in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="group flex items-start gap-6 p-8 md:p-10 bg-card border border-white/5 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-1">
                {r.icon}
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 leading-none group-hover:text-primary transition-colors">{r.label}</h3>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Pricing ─────────────────────────────────────────────────────────────────
const Pricing = () => (
  <section id="pricing" className="py-24 md:py-40 bg-background relative overflow-hidden clip-slanted-reverse border-b border-primary/20">
    <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
    <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-display font-black text-stroke-white opacity-5 whitespace-nowrap pointer-events-none select-none">
      MEMBERSHIP
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto bg-card border border-primary/30 p-10 md:p-20 text-center shadow-[0_0_100px_rgba(198,255,0,0.05)] relative overflow-hidden">
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
            "Zero hidden fees. Cancel anytime.",
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

// ─── Who Is This For ──────────────────────────────────────────────────────────
const WhoIsThisFor = () => (
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
          <motion.img initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} src={imgSupport2} alt="Community Training" className="object-cover w-full h-64 md:h-96 grayscale hover:grayscale-0 transition-all duration-500" />
          <motion.img initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} src={imgSupport3} alt="Clubhouse Community" className="object-cover w-full h-64 md:h-96 mt-12 md:mt-24 grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
        <div className="space-y-12">
          {[
            { title: "Teenagers (13-18)", desc: "A safe, high-energy environment to build strength, confidence, and discipline from day one." },
            { title: "College Students", desc: "Your campus gym is crowded and smells weird. This is your escape. Better equipment, better vibe." },
            { title: "Young Adults", desc: "Find your squad. Push your limits. Actually look forward to where you work out." },
            { title: "Athletes & Families", desc: "Train together. Support each other. A community built entirely on mutual improvement." },
          ].map((group, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-l-4 border-white/10 hover:border-primary pl-8 md:pl-10 py-2 transition-colors duration-300">
              <h3 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-3 leading-none text-white">{group.title}</h3>
              <p className="text-muted-foreground text-xl font-light leading-relaxed">{group.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── Founder Wall ─────────────────────────────────────────────────────────────
const FounderWall = () => (
  <section className="py-24 md:py-40 bg-secondary relative border-t border-primary/20 overflow-hidden">
    <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
    <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/40 text-primary font-display text-sm tracking-widest uppercase font-bold mb-10">
          <Zap className="w-4 h-4" /> Version 1.0 — Coming Soon
        </div>

        <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-8">
          We're Building<br /><span className="text-primary">This Together.</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-16">
          This is Version 1 of Project Clubhouse. Over the coming months, we'll continue refining the club, the app, and the experience with input from future members, parents, athletes, and coaches.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          {[
            { label: "The Club", desc: "Physical location. Equipment. Zones. Community spaces. Coming to your area." },
            { label: "PrimalTrack", desc: "The app that powers everything. Leaderboards, check-ins, rewards, and squads." },
            { label: "The Experience", desc: "Events, competitions, member milestones. The thing that keeps you coming back." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-background border border-white/5 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-display text-2xl font-black uppercase tracking-tight mb-3 text-primary">{item.label}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="font-display text-xl md:text-2xl uppercase tracking-widest text-muted-foreground font-bold">
          This is an invitation — not a finished product.<br />
          <span className="text-white">Join the journey.</span>
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => (
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
      <Button size="lg" className="text-2xl md:text-4xl px-16 h-20 md:h-24 font-black" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>
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

// ─── Page ─────────────────────────────────────────────────────────────────────
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
      <MoreThanAGym />
      <WhyMembersStay />
      <Spaces />
      <PrimalTrack />
      <ProgressWins />
      <LeaderboardViz />
      <ProgressScore />
      <Rewards />
      <Marquee text="STRONGER TOGETHER • BETTER EVERY DAY" reverse />
      <Pricing />
      <WhoIsThisFor />
      <FounderWall />
      <Footer />
    </div>
  );
}
