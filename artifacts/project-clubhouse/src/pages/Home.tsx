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
  RefreshCw,
  RotateCcw,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Link } from "wouter";

import imgHero from "@assets/15EB68E0-3FA6-46B6-BD2D-7537459C86F8_1784062882601.png";
import imgArrival from "@assets/15EB68E0-3FA6-46B6-BD2D-7537459C86F8_1784062882601.png";
import imgPerformanceFloor from "@assets/ChatGPT_Image_Jul_14,_2026,_12_51_10_PM_1784052604352.png";
import imgClubhouse from "@assets/ChatGPT_Image_Jul_14,_2026,_12_51_02_PM_1784052604353.png";
import imgFuelStation from "@assets/ChatGPT_Image_Jul_14,_2026,_12_51_25_PM_1784052604352.png";
import imgOutdoorPatio from "@assets/ChatGPT_Image_Jul_14,_2026,_12_51_18_PM_1784052604352.png";
import imgAppInfo from "@assets/ChatGPT_Image_Jul_14,_2026,_12_50_45_PM_1784052604353.png";
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
        <img src={imgHero} alt="Clubhouse Energy" className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale contrast-125" />
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
          <Button size="lg" className="text-xl md:text-2xl px-12 h-16 md:h-20" onClick={() => document.getElementById("membership")?.scrollIntoView({ behavior: "smooth" })}>
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

// ─── Chapter Divider ──────────────────────────────────────────────────────────
const ChapterDivider = ({ num, title }: { num: string; title: string }) => (
  <div className="flex items-center gap-6 px-6 md:px-12 py-5 border-y border-white/10 bg-secondary/40">
    <span className="font-display text-xs md:text-sm text-primary tracking-[0.3em] font-black uppercase whitespace-nowrap">
      Chapter {num}
    </span>
    <div className="flex-1 h-[1px] bg-white/10" />
    <span className="font-display text-xs md:text-sm text-muted-foreground tracking-[0.2em] uppercase font-bold whitespace-nowrap">
      {title}
    </span>
  </div>
);

// ─── Chapter 1: Why We Exist ──────────────────────────────────────────────────
const WhyWeExist = () => {
  const pillars = [
    {
      icon: <Heart className="w-10 h-10" />,
      label: "Belonging",
      desc: "Most people don't quit the gym because they stop wanting results. They quit because they never felt like they belonged. We fix that.",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      label: "Progress",
      desc: "We don't reward the strongest. We reward the most improved. Every member — from first pull-up to first podium — has a shot at the top.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      label: "Community",
      desc: "Fitness brings you in. Community keeps you here. The friendships built inside this club are the real reason people stay for years.",
    },
  ];

  return (
    <section id="why" className="py-24 md:py-40 bg-background relative z-10 border-b border-white/5">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mb-24 md:mb-40"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/40 text-primary font-display text-sm tracking-widest uppercase font-bold mb-10">
            <Zap className="w-4 h-4" /> Why We Exist
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-8">
            Most Places<br />
            Count Your Reps.<br />
            <span className="text-primary">We Count Your Growth.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
            Project Clubhouse is not a gym. It is a community built around a single belief — that consistent momentum, real friendships, and a place where you feel you belong will change your life far more than any piece of equipment ever could.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 md:mb-40">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15 }}
              className="group p-10 md:p-12 bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-10 font-display text-[8rem] font-black text-white/3 pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4 group-hover:text-primary transition-colors">
                {p.label}
              </h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Full-bleed quote image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden"
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
                "Why would someone choose to<br />spend three hours here instead of one?"
              </p>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Chapter 2: The Experience (Spaces) ───────────────────────────────────────
const Spaces = () => {
  const spaces = [
    { title: "The Arrival Experience", img: imgArrival, desc: "Walk in. See the energy. A 20' LED leaderboard wall, mobile check-in, and a lobby that tells you exactly where you are — somewhere different.", link: "/spaces/arrival-experience" },
    { title: "The Performance Floor", img: imgPerformanceFloor, desc: "Strength training, open turf, and a massive digital leaderboard wall. Competition and encouragement — side by side.", link: "/spaces/performance-floor" },
    { title: "The Clubhouse", img: imgClubhouse, desc: "Big screens, community tables, and lounge seating. The social heart of the club — where you come even when you skip the workout.", link: "/spaces/clubhouse" },
    { title: "The Fuel Station", img: imgFuelStation, desc: "Self-serve nutrition. $2 protein shakes, real food, coffee. High quality, low price, no friction.", link: "/spaces/fuel-station" },
    { title: "The Outdoor Patio", img: imgOutdoorPatio, desc: "Fire pits, basketball, string lights, and big screens. The place you stay long after the workout is done.", link: "/spaces/outdoor-patio" },
  ];

  return (
    <section id="experience" className="py-24 md:py-40 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8"
        >
          <div>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
              5 Zones.<br />
              <span className="text-primary">1 Clubhouse.</span>
            </h2>
          </div>
          <p className="text-xl md:text-3xl text-muted-foreground font-display tracking-widest uppercase max-w-sm">
            What does it feel like to spend an afternoon here?
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

// ─── Chapter 3: The Motivation Engine ────────────────────────────────────────
const MotivationEngine = () => (
  <section id="app" className="py-24 md:py-40 bg-secondary relative overflow-hidden border-y border-white/5">
    <div className="absolute inset-0 electric-grid opacity-20 pointer-events-none" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
      >
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 border border-primary text-primary font-display text-lg tracking-widest uppercase rounded-sm font-bold shadow-[0_0_15px_rgba(198,255,0,0.2)]">
            <Target className="w-6 h-6" /> PrimalTrack
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-none">
            Your Personal<br />
            <span className="text-primary">Progress Engine.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
            PrimalTrack is not a workout app. It is the engine that powers everything inside Project Clubhouse. It keeps members engaged before, during, and long after every session — turning every visit into momentum.
          </p>
          <div className="space-y-4 pt-2">
            {[
              "Live Progress Leaderboards on the Performance Floor",
              "Verified Personal Records — Celebrated by the Club",
              "Digital Achievements & Community Status",
              "Squads, Challenges & Club Events",
              "Rewards That Grow With Your Journey",
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-4 font-display uppercase tracking-wider font-bold text-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
            alt="PrimalTrack Progress Engine"
            className="relative z-10 w-full max-w-lg mx-auto rounded-xl border-4 border-white/5 shadow-2xl shadow-black/80 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(198,255,0,0.3)] transition-all duration-500"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── Flywheel ─────────────────────────────────────────────────────────────────
const Flywheel = () => {
  const steps = [
    { label: "Workout", icon: <Dumbbell className="w-6 h-6" /> },
    { label: "Progress", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Leaderboards", icon: <Trophy className="w-6 h-6" /> },
    { label: "Community", icon: <Users className="w-6 h-6" /> },
    { label: "Rewards", icon: <Gift className="w-6 h-6" /> },
    { label: "Events", icon: <CalendarDays className="w-6 h-6" /> },
    { label: "Belonging", icon: <Heart className="w-6 h-6" /> },
    { label: "Workout Again", icon: <RefreshCw className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24 md:py-40 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 md:mb-32"
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-6">
            The Ecosystem.<br /><span className="text-primary">The Loop.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-display tracking-widest uppercase max-w-2xl mx-auto">
            The physical club and the app are inseparable. This is what keeps members coming back — not habit. Momentum.
          </p>
        </motion.div>

        {/* Flywheel steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="relative group"
            >
              <div className="p-6 md:p-8 bg-card border border-white/5 hover:border-primary/60 transition-all duration-300 hover:bg-primary/5 text-center">
                <div className="font-display text-xs text-muted-foreground tracking-widest mb-4 uppercase">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-primary mb-4 flex justify-center group-hover:scale-125 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
                  {step.label}
                </h3>
              </div>
              {/* Arrow connector (not on last item in row) */}
              {i % 4 !== 3 && i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-primary/40">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Loop callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-4 text-muted-foreground font-display uppercase tracking-widest text-sm"
        >
          <RotateCcw className="w-4 h-4 text-primary" />
          <span>The loop repeats — and every cycle makes it stronger.</span>
          <RotateCcw className="w-4 h-4 text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

// ─── Member Journey ───────────────────────────────────────────────────────────
const MemberJourney = () => {
  const journey = [
    { step: "01", label: "Discover Project Clubhouse", time: "Day 1" },
    { step: "02", label: "Download PrimalTrack", time: "Day 1" },
    { step: "03", label: "Join Your Local Club", time: "Day 1" },
    { step: "04", label: "Complete First Workout", time: "Day 1" },
    { step: "05", label: "Earn Your First Badge", time: "Day 3" },
    { step: "06", label: "Meet Your First Friend", time: "Week 1" },
    { step: "07", label: "Attend Your First Event", time: "Week 2" },
    { step: "08", label: "Earn a Protein Credit", time: "Week 3" },
    { step: "09", label: "Hit a 30-Day Streak", time: "Month 1" },
    { step: "10", label: "Climb the Leaderboard", time: "Month 2" },
    { step: "11", label: "Mentor New Members", time: "Month 3+" },
  ];

  return (
    <section className="py-24 md:py-40 bg-secondary relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 md:mb-32"
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-6">
            Your Journey<br /><span className="text-primary">Starts Here.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-display tracking-widest uppercase max-w-2xl">
            Every member begins the same way. What separates them is consistency — and community.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          {journey.map((item, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-6 w-full max-w-2xl"
              >
                <div className={`flex-1 p-6 md:p-8 border transition-all duration-300 hover:border-primary/60 group cursor-default ${
                  i === journey.length - 1
                    ? "bg-primary/10 border-primary/40"
                    : i < 4
                    ? "bg-background border-white/5"
                    : "bg-background/60 border-white/5"
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`font-display text-xs tracking-widest uppercase font-bold ${
                        i === journey.length - 1 ? "text-primary" : "text-muted-foreground"
                      }`}>
                        {item.step}
                      </div>
                      <h3 className={`font-display text-xl md:text-2xl font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors ${
                        i === journey.length - 1 ? "text-primary" : "text-white"
                      }`}>
                        {item.label}
                      </h3>
                    </div>
                    <span className="font-display text-xs text-muted-foreground tracking-widest uppercase border border-white/10 px-3 py-1 flex-shrink-0">
                      {item.time}
                    </span>
                  </div>
                </div>
              </motion.div>
              {i < journey.length - 1 && (
                <div className="w-[1px] h-6 bg-gradient-to-b from-primary/60 to-primary/20 my-0.5 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Leaderboard Cards ────────────────────────────────────────────────────────
const LeaderboardCards = () => {
  const cards = [
    { icon: "🏆", category: "Most Improved", name: "Grant C.", stat: "+16%", sub: "This Month", accent: true },
    { icon: "🔥", category: "Longest Streak", name: "46 Days", stat: "Ongoing", sub: "Maya R.", accent: false },
    { icon: "❤️", category: "Community MVP", name: "Helped 17 Members", stat: "This Week", sub: "Alex M.", accent: false },
    { icon: "💪", category: "First Pull-Up", name: "Sophia R.", stat: "Yesterday", sub: "Milestone Unlocked", accent: true },
    { icon: "🥇", category: "Local Club", name: "Bench Press", stat: "#3", sub: "Project Clubhouse", accent: false },
    { icon: "🏅", category: "State Rank", name: "15–16 Age Group", stat: "#12", sub: "Minnesota", accent: true },
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
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-6">
            Progress<br /><span className="text-primary">Wins.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-display tracking-widest uppercase max-w-3xl">
            Most fitness companies reward the strongest. We reward the most dedicated. Every member has a shot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className={`group p-8 md:p-10 border transition-all duration-300 hover:scale-[1.02] cursor-default ${
                card.accent
                  ? "bg-primary/5 border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                  : "bg-card border-white/5 hover:border-primary/30 hover:bg-primary/5"
              }`}
            >
              <div className="text-4xl mb-6">{card.icon}</div>
              <div className="font-display text-xs text-muted-foreground tracking-[0.3em] uppercase mb-3">
                {card.category}
              </div>
              <div className={`font-display text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-2 group-hover:text-primary transition-colors ${card.accent ? "text-primary" : "text-white"}`}>
                {card.name}
              </div>
              <div className="flex items-baseline gap-3 mt-4">
                <span className="font-display text-2xl md:text-3xl font-black text-white">
                  {card.stat}
                </span>
                <span className="text-muted-foreground text-sm font-light">
                  {card.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Leaderboard Visualization ─────────────────────────────────────────────────
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
    { rank: 47, name: "Proj. Clubhouse ↑", score: 38400, change: "+8" },
    { rank: 48, name: "Austin Club", score: 37100, change: "—" },
  ],
};

const LeaderboardViz = () => {
  const levels = ["Friends", "Local Club", "City", "State", "National"];
  const filters = ["All Ages", "Under 18", "18–24", "25–34", "35+"];
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
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-6">
            Everyone Has<br /><span className="text-primary">A Rank.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-display tracking-widest uppercase max-w-3xl">
            From your friend group to the national stage. Filter by what matters to you.
          </p>
        </motion.div>

        <div className="flex gap-2 md:gap-3 flex-wrap mb-4">
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

        <motion.div
          key={activeLevel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-background border border-white/10 overflow-hidden"
        >
          <div className="grid grid-cols-12 px-6 md:px-10 py-4 border-b border-white/5 text-muted-foreground font-display text-xs uppercase tracking-widest">
            <span className="col-span-1">Rank</span>
            <span className="col-span-6 md:col-span-7">Member</span>
            <span className="col-span-3 text-right">Progress Score</span>
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
          Rankings update live · Powered by PrimalTrack
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
          We Reward <span className="text-primary block md:inline">Improvement.</span><br />
          Not Just Raw Strength.
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
          Our Progress Score ensures everyone has a shot at the top. The leaderboard is not for the elite — it is for the most consistent, the most dedicated, and the most improved.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {[
          { title: "Most Improved", icon: <Flame className="w-12 h-12 text-background" />, desc: "Based on relative gains. Pushing your limits week over week? You will climb.", num: "01" },
          { title: "Consistency", icon: <Activity className="w-12 h-12 text-background" />, desc: "Show up. Put in the reps. Our consistency score tracks your momentum over time.", num: "02" },
          { title: "Community", icon: <Users className="w-12 h-12 text-background" />, desc: "Spot a friend. Join a squad. Real growth goes way beyond the weights you lift.", num: "03" },
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

// ─── Chapter 4: Membership ────────────────────────────────────────────────────
const Rewards = () => {
  const rewards = [
    { icon: <Coffee className="w-8 h-8" />, label: "Protein Credits", desc: "Earn shake tokens just for showing up consistently." },
    { icon: <Gift className="w-8 h-8" />, label: "Membership Discounts", desc: "Long-term community members pay less. Loyalty has real value here." },
    { icon: <Ticket className="w-8 h-8" />, label: "Exclusive Events", desc: "Invite-only competitions and community nights." },
    { icon: <Medal className="w-8 h-8" />, label: "Badges & Status", desc: "Earn titles like Club MVP, Iron Streak, and Community Leader." },
    { icon: <Star className="w-8 h-8" />, label: "Community Recognition", desc: "Your name on the board. Your story in the feed." },
    { icon: <ShoppingBag className="w-8 h-8" />, label: "Merchandise", desc: "Earn limited gear. Wear what you have actually worked for." },
  ];

  return (
    <section className="py-24 md:py-40 bg-secondary relative border-t border-white/5">
      <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 md:mb-32"
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-6">
            Progress<br /><span className="text-primary">Creates Rewards.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-display tracking-widest uppercase max-w-3xl">
            Consistency earns tangible benefits. Show up. Build momentum. Cash in.
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
              className="group flex items-start gap-6 p-8 md:p-10 bg-background border border-white/5 hover:border-primary/50 transition-all duration-300"
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

const Pricing = () => (
  <section id="membership" className="py-24 md:py-40 bg-background relative overflow-hidden border-b border-primary/20">
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
            "Full Use of The Clubhouse & Fuel Station",
            "Outdoor Patio & Court Access",
            "PrimalTrack Premium Account",
            "Zero Hidden Fees. Cancel Anytime.",
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
          Anyone who wants to improve — and find their people doing it.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <motion.img initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} src={imgSupport2} alt="Community Training" className="object-cover w-full h-64 md:h-96 grayscale hover:grayscale-0 transition-all duration-500" />
          <motion.img initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} src={imgSupport3} alt="Clubhouse Community" className="object-cover w-full h-64 md:h-96 mt-12 md:mt-24 grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
        <div className="space-y-12">
          {[
            { title: "Teenagers (13–18)", desc: "A safe, high-energy environment to build strength, confidence, and consistency from day one." },
            { title: "College Students", desc: "Your campus gym is crowded and smells weird. This is your escape — better equipment, better community." },
            { title: "Young Adults", desc: "Find your squad. Push your limits. Actually look forward to where you train." },
            { title: "Athletes & Families", desc: "Train together. Support each other. A community built entirely around mutual growth." },
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
          This is Version 1 of Project Clubhouse. Over the coming months, we will continue refining the club, the app, and the experience — with input from future community members, parents, athletes, and coaches.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          {[
            { label: "The Club", desc: "Physical location. Equipment. Zones. Community spaces. Coming to your area." },
            { label: "PrimalTrack", desc: "The Progress Engine that powers everything — leaderboards, check-ins, rewards, and squads." },
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
      <Button size="lg" className="text-2xl md:text-4xl px-16 h-20 md:h-24 font-black" onClick={() => document.getElementById("membership")?.scrollIntoView({ behavior: "smooth" })}>
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

      {/* Chapter 1 — Why */}
      <ChapterDivider num="01" title="Why We Exist" />
      <WhyWeExist />

      {/* Chapter 2 — The Experience */}
      <ChapterDivider num="02" title="The Experience" />
      <Spaces />

      {/* Chapter 3 — The Motivation Engine */}
      <ChapterDivider num="03" title="The Motivation Engine" />
      <MotivationEngine />
      <Flywheel />
      <MemberJourney />
      <LeaderboardCards />
      <LeaderboardViz />
      <ProgressScore />

      {/* Chapter 4 — Membership */}
      <Marquee text="STRONGER TOGETHER • BETTER EVERY DAY" reverse />
      <ChapterDivider num="04" title="Membership" />
      <Rewards />
      <Pricing />
      <WhoIsThisFor />
      <FounderWall />
      <Footer />
    </div>
  );
}
