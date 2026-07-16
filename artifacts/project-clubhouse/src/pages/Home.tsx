import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dumbbell, ArrowRight, Zap, Target, Users, Flame, Activity, CheckCircle2,
  BookOpen, Tv, CalendarDays, Coffee, Heart, Trophy, TrendingUp, Medal,
  Star, Gift, Ticket, RefreshCw, RotateCcw, Wifi, Shield, Smartphone,
  Play, Eye, UserCheck, Bell, MapPin, Lock, Send, Loader2,
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
import imgSupport2 from "@assets/ChatGPT_Image_Jul_14,_2026,_12_50_45_PM_1784052604353.png";
import imgSupport3 from "@assets/ChatGPT_Image_Jul_14,_2026,_12_50_33_PM_1784052604354.png";
import imgVisionBoard from "@assets/ChatGPT_Image_Jul_15,_2026,_03_40_44_PM_1784148739754.png";

// ─── Hero ────────────────────────────────────────────────────────────────────
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-background">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img src={imgHero} alt="Project Clubhouse" className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale contrast-125" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-background/20" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display font-black text-[4rem] md:text-[7rem] lg:text-[10rem] leading-[0.85] tracking-tighter uppercase mb-8 select-none">
            <span className="block text-white">More Than</span>
            <span className="block text-transparent text-stroke-white opacity-70">A Gym.</span>
            <span className="block text-primary transform scale-105">The Place</span>
            <span className="block text-white">To Show Up.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl text-muted-foreground font-light mb-12 max-w-3xl font-display tracking-widest uppercase"
        >
          A modern fitness and social club where members train, watch the game,
          study, meet friends, join activities, and become part of a real community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="text-xl md:text-2xl px-12 h-16 md:h-20 font-black" onClick={() => document.getElementById("spaces")?.scrollIntoView({ behavior: "smooth" })}>
            Explore the Club <ArrowRight className="ml-3 w-6 h-6 md:w-8 md:h-8" />
          </Button>
          <Button size="lg" variant="outline" className="text-xl md:text-2xl px-12 h-16 md:h-20 font-black border-white/20 hover:border-primary hover:text-primary" onClick={() => document.getElementById("vision")?.scrollIntoView({ behavior: "smooth" })}>
            See How It Works
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

// ─── Chapter 1a: The Problem ──────────────────────────────────────────────────
const TheProblem = () => (
  <section id="vision" className="py-24 md:py-40 bg-background relative z-10 border-b border-white/5">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mb-20 md:mb-32"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/40 text-primary font-display text-sm tracking-widest uppercase font-bold mb-10">
          <Zap className="w-4 h-4" /> The Concept
        </div>
        <h2 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-none mb-8">
          The Places People<br />
          Used to Gather<br />
          <span className="text-primary">Are Disappearing.</span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
          Community centers have closed. Libraries are no longer the default gathering spot. Restaurants require ongoing spending and aren't designed for teenagers to stay for hours. Most gyms are built for people to work out and leave.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 md:mb-32">
        {[
          { label: "Traditional Gyms", issue: "Designed to work out and leave. Not built for community." },
          { label: "Social Media", issue: "Connects people online. Often leaves them isolated in real life." },
          { label: "Restaurants", issue: "Not designed for teenagers to spend three hours." },
          { label: "Nothing Else", issue: "No affordable, active, supervised alternative exists." },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-card border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
          >
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-red-500/60 group-hover:bg-primary transition-colors" />
            <h3 className="font-display text-2xl font-black uppercase tracking-tight mb-3 leading-none">{item.label}</h3>
            <p className="text-muted-foreground text-base font-light leading-relaxed">{item.issue}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border border-primary/30 bg-primary/5 p-10 md:p-16 max-w-4xl"
      >
        <p className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-white">
          Project Clubhouse creates a safe, active, affordable place where people can spend meaningful time together.
        </p>
        <p className="text-xl text-primary font-display uppercase tracking-widest font-bold mt-6">
          Fitness is our common ground. Community is our advantage.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Chapter 1b: Value Proposition Grid ──────────────────────────────────────
const ValuePropGrid = () => {
  const items = [
    { icon: <Dumbbell className="w-8 h-8" />, label: "Train", desc: "A serious performance floor built for progress at every level — beginner to athlete." },
    { icon: <Tv className="w-8 h-8" />, label: "Watch", desc: "A sportsbook-inspired Clubhouse with large screens and real game-day energy." },
    { icon: <BookOpen className="w-8 h-8" />, label: "Study", desc: "Tables, strong Wi-Fi, and quiet focus spaces designed for school or work." },
    { icon: <Users className="w-8 h-8" />, label: "Connect", desc: "See who's at the club and naturally cross paths with teammates, mentors, and friends." },
    { icon: <Play className="w-8 h-8" />, label: "Play", desc: "Pickup basketball, outdoor activities, and member-created Link Ups." },
    { icon: <Coffee className="w-8 h-8" />, label: "Refuel", desc: "Affordable protein, hydration, and healthy self-service options. $2 shakes. No friction." },
    { icon: <CalendarDays className="w-8 h-8" />, label: "Participate", desc: "Events, Circles, challenges, watch parties, and spontaneous activities every week." },
    { icon: <Heart className="w-8 h-8" />, label: "Belong", desc: "A place where members become known — not by what they post, but by showing up." },
  ];

  return (
    <section className="py-24 md:py-40 bg-secondary relative border-t border-white/5">
      <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-6">
            One Membership.<br />
            <span className="text-primary">More Reasons</span><br />
            To Show Up.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-display tracking-widest uppercase max-w-2xl">
            Whatever brings you in, there's always a reason to stay.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              className="group p-8 md:p-10 bg-background border border-white/5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-8 font-display text-[7rem] font-black text-white/3 pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-3xl font-black uppercase tracking-tight mb-3 leading-none group-hover:text-primary transition-colors">
                {item.label}
              </h3>
              <p className="text-muted-foreground text-base font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Chapter 2a: The Spaces ───────────────────────────────────────────────────
const Spaces = () => {
  const spaces = [
    { title: "The Arrival Experience", img: imgArrival, desc: "Walk in and immediately feel that something is happening. Pulse Boards, live club activity, member recognition, and mobile check-in — all before you lift a weight.", link: "/spaces/arrival-experience" },
    { title: "The Performance Floor", img: imgPerformanceFloor, desc: "Serious training without the intimidation. Racks, turf, digital PRs, and coaching for every level — from first rep to personal record.", link: "/spaces/performance-floor" },
    { title: "The Clubhouse Lounge", img: imgClubhouse, desc: "Come for the game, the people, or simply a place to be. Big screens, community tables, lounge seating, and the social heart of the club.", link: "/spaces/clubhouse" },
    { title: "The Fuel Station", img: imgFuelStation, desc: "Real fuel. Low friction. Fair prices. Self-serve protein, food, coffee, and hydration — designed for speed and transparency.", link: "/spaces/fuel-station" },
    { title: "The Outdoor Patio", img: imgOutdoorPatio, desc: "A place to stay after the workout — not just cool down and leave. Fire pits, basketball, string lights, outdoor screens, and open air.", link: "/spaces/outdoor-patio" },
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
              5 Zones.<br />
              <span className="text-primary">1 Clubhouse.</span>
            </h2>
          </div>
          <p className="text-xl md:text-3xl text-muted-foreground font-display tracking-widest uppercase max-w-sm">
            What does an afternoon here actually feel like?
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

// ─── Chapter 2b: Pulse Boards ─────────────────────────────────────────────────
const PulseBoards = () => {
  const items = [
    "Today's top PRs",
    "57 members here right now",
    "Most Improved this week",
    "Pickup basketball — needs 2 more",
    "Bench Club starts in 20 minutes",
    "Welcome, Grant T. — first check-in",
    "Circle standings update",
    "Chef's Watch Party tonight 7pm",
  ];

  return (
    <section className="py-24 md:py-40 bg-secondary relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/40 text-primary font-display text-sm tracking-widest uppercase font-bold mb-10">
              <Activity className="w-4 h-4" /> Pulse Boards
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              The Club<br />
              <span className="text-primary">Has a Pulse.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8 max-w-xl">
              Screens throughout the building rotate live content — PRs, activity, events, shoutouts, and standings. Not digital signage. Part of the experience.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
              Think ESPN and a premium sportsbook — built entirely around the members themselves.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background border border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="bg-primary px-6 py-4 flex items-center justify-between">
                <span className="font-display text-sm uppercase tracking-widest font-black text-background">Pulse Board — Live Now</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-background animate-pulse" />
                  <span className="font-display text-xs uppercase tracking-widest text-background font-bold">Live</span>
                </div>
              </div>
              <div className="divide-y divide-white/5">
                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="font-display text-base md:text-lg uppercase tracking-wider font-bold text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="px-6 py-4 border-t border-white/5 text-center">
                <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">Every Screen · Every Day · Everybody Connected</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Chapter 3a: Your People ─────────────────────────────────────────────────
const YourPeople = () => {
  const circles = [
    "Football", "Wrestling", "Basketball", "Strength Club",
    "Running", "Study Group", "Photography", "Family",
    "Entrepreneurs", "Watch Party",
  ];

  const liveNow = [
    { label: "3 Football teammates are here", sub: "Arrived 12 min ago" },
    { label: "Your lifting mentor checked in", sub: "Performance Floor" },
    { label: "Pickup basketball needs 2 more", sub: "Outdoor Court · starts in 15 min" },
    { label: "Bench Club starts in 20 minutes", sub: "9 members joining" },
    { label: "Study Group is at Table C", sub: "Clubhouse Lounge" },
  ];

  return (
    <section id="community" className="py-24 md:py-40 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/40 text-primary font-display text-sm tracking-widest uppercase font-bold mb-10">
            <Users className="w-4 h-4" /> Circles & Presence
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-8">
            Know When<br />
            Your People<br />
            <span className="text-primary">Are Here.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
            The app does not create friendships. It makes the real-world opportunities for friendship easier to see.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Live Now Feed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-3xl font-black uppercase tracking-tight mb-8 text-primary">Live At The Club</h3>
            <div className="space-y-3">
              {liveNow.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-5 bg-card border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2 group-hover:scale-150 transition-transform" />
                  <div>
                    <p className="font-display text-lg uppercase tracking-wide font-bold text-white">{item.label}</p>
                    <p className="text-muted-foreground text-sm mt-1">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 border border-white/5 bg-card">
              <p className="text-muted-foreground text-sm font-display uppercase tracking-widest mb-2">Privacy First</p>
              <p className="text-base text-white/70 font-light leading-relaxed">Members control their own visibility. Friends and Circle members appear first. Exact indoor location is never required. Minors use safer privacy defaults by default.</p>
            </div>
          </motion.div>

          {/* Circles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display text-3xl font-black uppercase tracking-tight mb-4 text-primary">Circles</h3>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              Circles are identity layers — not chat groups. They shape who appears in Your People, which Link Ups you see, and what challenges you can join. They are real communities made more visible through software.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {circles.map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="px-4 py-2 border border-white/10 hover:border-primary/50 hover:text-primary font-display text-sm uppercase tracking-widest font-bold transition-all duration-200 cursor-default"
                >
                  {c}
                </motion.span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-display uppercase tracking-widest">
              Circles influence · Leaderboards · Link Ups · Events · Challenges · Recommendations
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── Chapter 3b: Link Ups ─────────────────────────────────────────────────────
const LinkUps = () => {
  const examples = [
    { title: "Pickup Basketball", detail: "Outdoor Court · Starts in 15 min", spots: "2 spots open" },
    { title: "Upper Body Session", detail: "Performance Floor · 4pm", spots: "3 spots open" },
    { title: "Algebra Study", detail: "Study Pod B · 5:30pm", spots: "2 spots open" },
    { title: "Watch the Game", detail: "Clubhouse · Tonight 7pm", spots: "Open" },
    { title: "Coffee After Training", detail: "Fuel Station · After 6pm", spots: "Open" },
    { title: "Patio Hangout", detail: "Outdoor Patio · Now", spots: "Open" },
  ];

  return (
    <section className="py-24 md:py-40 bg-secondary relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-6">
            Make a Plan<br />
            <span className="text-primary">In Seconds.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mb-6">
            Events are organized by the club. Link Ups are created by members. No chat platform required — Link Ups move people into real-world interaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 md:p-8 bg-background border border-white/5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className="font-display text-xs uppercase tracking-widest text-primary font-bold bg-primary/10 border border-primary/20 px-2 py-1">{ex.spots}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 leading-none group-hover:text-primary transition-colors pr-20">{ex.title}</h3>
              <p className="text-muted-foreground text-base">{ex.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Chapter 4: PrimalTrack ──────────────────────────────────────────────────
const MotivationEngine = () => {
  const pillars = [
    { icon: <Dumbbell className="w-5 h-5" />, label: "Train", desc: "Log workouts, track sets, and follow your progress over time." },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Progress", desc: "Track improvement, consistency, milestones, and personal records." },
    { icon: <Trophy className="w-5 h-5" />, label: "Compete", desc: "Join progress-first leaderboards and Circle challenges." },
    { icon: <Activity className="w-5 h-5" />, label: "Club Live", desc: "See what's happening at the club right now. Who's here. What's next." },
    { icon: <Users className="w-5 h-5" />, label: "Connect", desc: "Discover your people, Circles, events, and Link Ups." },
  ];

  return (
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
              The Club,<br />
              <span className="text-primary">In Your Pocket.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
              PrimalTrack connects the physical and digital experience — helping members train, see who's at the club, discover what's happening, join activities, track progress, and stay connected to their Circles.
            </p>
            <div className="space-y-3 pt-2">
              {pillars.map((p, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-background border border-white/5 hover:border-primary/30 transition-all duration-200 group">
                  <div className="text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">{p.icon}</div>
                  <div>
                    <span className="font-display text-sm uppercase tracking-widest font-black text-primary">{p.label} — </span>
                    <span className="text-muted-foreground text-sm">{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="text-xl px-10 h-16 font-black" asChild>
                <a href="https://primaltrack.replit.app" target="_blank" rel="noopener noreferrer">
                  Launch PrimalTrack <ArrowRight className="ml-3 w-6 h-6" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground font-display uppercase tracking-widest">
              Digital amplifies real life. Awareness. Connection. Motivation.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
            <img
              src={imgAppInfo}
              alt="PrimalTrack — The Club In Your Pocket"
              className="relative z-10 w-full max-w-lg mx-auto rounded-xl border-4 border-white/5 shadow-2xl shadow-black/80 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(198,255,0,0.3)] transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Business Flywheel ────────────────────────────────────────────────────────
const Flywheel = () => {
  const steps = [
    { label: "More Members", icon: <Users className="w-6 h-6" /> },
    { label: "More Presence", icon: <Eye className="w-6 h-6" /> },
    { label: "More Activity", icon: <Activity className="w-6 h-6" /> },
    { label: "More Link Ups", icon: <CalendarDays className="w-6 h-6" /> },
    { label: "More Friendships", icon: <Heart className="w-6 h-6" /> },
    { label: "Stronger Retention", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "More Members", icon: <RefreshCw className="w-6 h-6" /> },
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
            The Club Becomes<br /><span className="text-primary">More Valuable.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            The club becomes more valuable as the community becomes more active. This is the network effect — without the startup jargon.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
              className="relative group"
            >
              <div className="p-4 md:p-6 bg-card border border-white/5 hover:border-primary/60 transition-all duration-300 hover:bg-primary/5 text-center">
                <div className="font-display text-xs text-muted-foreground tracking-widest mb-3 uppercase">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-primary mb-3 flex justify-center group-hover:scale-125 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="font-display text-sm md:text-base font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {step.label}
                </h3>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-primary/40">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

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

// ─── Leaderboard Cards ────────────────────────────────────────────────────────
const LeaderboardCards = () => {
  const cards = [
    { icon: "📈", category: "Most Improved", name: "Grant C.", stat: "+16%", sub: "This Month", accent: true },
    { icon: "🔥", category: "Longest Streak", name: "46 Days", stat: "Ongoing", sub: "Maya R.", accent: false },
    { icon: "❤️", category: "Community MVP", name: "Helped 17 Members", stat: "This Week", sub: "Alex M.", accent: false },
    { icon: "💪", category: "First Pull-Up", name: "Sophia R.", stat: "Yesterday", sub: "Milestone Unlocked", accent: true },
    { icon: "🎯", category: "Most Consistent", name: "Jayden K.", stat: "28 of 30 Days", sub: "This Month", accent: false },
    { icon: "🏅", category: "Circle Leader", name: "Football Circle", stat: "#1", sub: "Strength Club", accent: true },
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
            Everyone Should<br />
            Have a Way<br />
            <span className="text-primary">To Win.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-display tracking-widest uppercase max-w-3xl">
            Traditional gyms celebrate the strongest person in the room. Project Clubhouse celebrates the people who keep showing up and getting better.
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
              <div className="font-display text-xs text-muted-foreground tracking-[0.3em] uppercase mb-3">{card.category}</div>
              <div className={`font-display text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-2 group-hover:text-primary transition-colors ${card.accent ? "text-primary" : "text-white"}`}>
                {card.name}
              </div>
              <div className="flex items-baseline gap-3 mt-4">
                <span className="font-display text-2xl md:text-3xl font-black text-white">{card.stat}</span>
                <span className="text-muted-foreground text-sm font-light">{card.sub}</span>
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
          Raw strength can remain one category — but it should never dominate. Every member who shows up consistently has a path to recognition.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {[
          { title: "Most Improved", icon: <Flame className="w-12 h-12 text-background" />, desc: "Based on relative gains. Pushing your personal limits week over week? You will climb.", num: "01" },
          { title: "Consistency", icon: <Activity className="w-12 h-12 text-background" />, desc: "Show up. Put in the reps. Consistency score tracks momentum over time — not just today.", num: "02" },
          { title: "Community", icon: <Users className="w-12 h-12 text-background" />, desc: "Spot a friend. Join a Circle. Real growth goes way beyond the weights you lift.", num: "03" },
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

// ─── Chapter 5a: Who Is This For ──────────────────────────────────────────────
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
          Built for More Than<br /><span className="text-primary">One Generation.</span>
        </h2>
        <p className="text-2xl md:text-3xl text-muted-foreground font-display tracking-widest uppercase">
          A diverse age mix is part of what makes the model valuable.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <motion.img initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} src={imgSupport2} alt="Community Training" className="object-cover w-full h-64 md:h-96 grayscale hover:grayscale-0 transition-all duration-500" />
          <motion.img initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} src={imgSupport3} alt="Clubhouse Community" className="object-cover w-full h-64 md:h-96 mt-12 md:mt-24 grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
        <div className="space-y-10">
          {[
            { title: "Teenagers & Young Adults", desc: "An affordable place to train, study, see friends, and become part of something positive." },
            { title: "Parents", desc: "A healthy, supervised environment they feel good paying for and allowing their children to spend time in." },
            { title: "Athletes & Teams", desc: "Train together, watch film or games, and build team connection in a space designed for it." },
            { title: "College Students & Young Professionals", desc: "A social, fitness, study, and networking environment without the pressure of a bar or formal event." },
            { title: "Adults & Mentors", desc: "A place to improve, connect, and naturally support younger members by just being present." },
          ].map((group, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-l-4 border-white/10 hover:border-primary pl-8 md:pl-10 py-2 transition-colors duration-300">
              <h3 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight mb-2 leading-none text-white">{group.title}</h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">{group.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── Chapter 5b: Safety & Trust ───────────────────────────────────────────────
const SafetyTrust = () => (
  <section className="py-24 md:py-40 bg-secondary relative border-t border-white/5">
    <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/40 text-primary font-display text-sm tracking-widest uppercase font-bold mb-10">
            <Shield className="w-4 h-4" /> Safety & Trust
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            Built for Freedom.<br />
            <span className="text-primary">Designed with Safety.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
            Because the concept includes teenagers and families, safety is built into the model — not added as an afterthought.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: <UserCheck className="w-6 h-6" />, label: "Staffed Environment", desc: "Supervised throughout operating hours." },
            { icon: <Smartphone className="w-6 h-6" />, label: "Mobile Check-In", desc: "Every entry is logged. No anonymous access." },
            { icon: <Lock className="w-6 h-6" />, label: "Youth-Safe Defaults", desc: "Minor accounts use stricter privacy settings automatically." },
            { icon: <Bell className="w-6 h-6" />, label: "Parent Notifications", desc: "Optional arrival and departure alerts for minor accounts." },
            { icon: <Eye className="w-6 h-6" />, label: "Full Visibility", desc: "Security and staff visibility throughout the facility." },
            { icon: <Shield className="w-6 h-6" />, label: "Clear Standards", desc: "Behavioral expectations enforced from day one." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 p-6 bg-background border border-white/5 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
              <div>
                <h3 className="font-display text-lg font-black uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">{item.label}</h3>
                <p className="text-muted-foreground text-sm font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── Chapter 6: Pricing ───────────────────────────────────────────────────────
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
        <p className="font-display text-sm uppercase tracking-widest text-primary mb-4 font-bold">Premium Experience. Accessible Membership.</p>
        <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">The Club Membership</h2>
        <p className="text-xl md:text-2xl text-muted-foreground font-display tracking-widest uppercase mb-12">Designed to remain accessible for teenagers, young adults, and families.</p>
        <div className="font-display text-[8rem] md:text-[12rem] font-black text-primary mb-4 flex justify-center items-baseline leading-none shadow-primary text-glow">
          <span className="text-6xl md:text-8xl -translate-y-10 md:-translate-y-16">$</span>40
          <span className="text-4xl md:text-5xl text-muted-foreground ml-4">/mo</span>
        </div>
        <ul className="text-left max-w-lg mx-auto space-y-6 mb-16 mt-16">
          {[
            "Unlimited Access to the Performance Floor",
            "Full Clubhouse Lounge, Fuel Station & Outdoor Patio",
            "PrimalTrack — Circles, Link Ups, Leaderboards & Progress",
            "Pulse Boards & Live Club Activity",
            "Zero Hidden Fees. Cancel Anytime.",
          ].map((feature, i) => (
            <li key={i} className="flex items-start gap-5 text-xl md:text-2xl font-medium font-display tracking-wider uppercase">
              <CheckCircle2 className="text-primary w-8 h-8 flex-shrink-0 mt-1" />
              {feature}
            </li>
          ))}
        </ul>
        <Button size="lg" className="w-full md:w-auto text-2xl md:text-4xl px-16 h-20 md:h-24 font-black" onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}>
          Help Us Build the First Clubhouse <ArrowRight className="ml-4 w-10 h-10" />
        </Button>
      </div>
    </div>
  </section>
);

// ─── Partnerships ─────────────────────────────────────────────────────────────
const Partnerships = () => (
  <section className="py-24 md:py-40 bg-background relative border-t border-white/5 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/40 text-primary font-display text-sm tracking-widest uppercase font-bold mb-10">
            <MapPin className="w-4 h-4" /> Partnerships
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            A Home Base for<br />Communities That<br />
            <span className="text-primary">Already Exist.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
            Project Clubhouse is designed to support the communities already in your area — not compete with them.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {[
            "High Schools", "Athletic Teams", "Youth Sports Orgs", "College Clubs",
            "Local Employers", "Community Orgs", "Health Systems", "Local Sports Media",
          ].map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-4 md:p-6 bg-card border border-white/5 hover:border-primary/40 hover:text-primary font-display text-base md:text-lg uppercase tracking-wide font-bold transition-all duration-200 text-center"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full composite vision board */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src={imgVisionBoard}
          alt="Project Clubhouse — Full Vision"
          className="w-full h-auto block"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between bg-gradient-to-t from-background/80 to-transparent pointer-events-none">
          <span className="font-display text-xs uppercase tracking-widest text-primary font-bold">The Complete Vision · All 8 Zones</span>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── Closing: Imagine After School ────────────────────────────────────────────
const ImagineAfterSchool = () => {
  const lines = [
    "Your teammates are already there.",
    "Your lifting mentor just checked in.",
    "A pickup basketball game needs one more player.",
    "The local game starts in twenty minutes.",
    "Your friends are studying at a community table.",
    "You train for an hour.",
    "Stay for three.",
    "Finish your homework.",
    "Grab a protein shake.",
    "Meet someone new.",
    "And leave already planning to come back tomorrow.",
  ];

  return (
    <section className="py-24 md:py-40 bg-secondary relative border-t border-primary/20 overflow-hidden">
      <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-16 md:mb-24">
            Imagine<br />
            <span className="text-primary">After School.</span>
          </h2>

          <div className="space-y-4 mb-16">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`font-light leading-relaxed ${
                  i >= 5
                    ? "text-3xl md:text-5xl font-display font-black uppercase tracking-tighter text-primary"
                    : "text-xl md:text-3xl text-muted-foreground"
                }`}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-display text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-16">
              That is not just a gym.<br />
              <span className="text-primary">That is Project Clubhouse.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-xl px-10 h-16 font-black" onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}>
                Help Us Build the First Clubhouse <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="text-xl px-10 h-16 font-black border-white/20 hover:border-primary hover:text-primary" onClick={() => document.getElementById("vision")?.scrollIntoView({ behavior: "smooth" })}>
                Explore the Vision
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Founder Wall ─────────────────────────────────────────────────────────────
const FounderWall = () => (
  <section className="py-24 md:py-40 bg-background relative border-t border-white/5 overflow-hidden">
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
          More Than a Gym.<br /><span className="text-primary">A Movement.</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-16">
          This is Version 1 of Project Clubhouse. Over the coming months, we will refine the club, the app, and the experience — with input from future members, parents, athletes, and coaches.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          {[
            { label: "The Club", desc: "Physical location. Equipment. Zones. Community spaces. Coming to your area." },
            { label: "PrimalTrack", desc: "The digital layer that powers everything — presence, Link Ups, leaderboards, and Circles." },
            { label: "The Community", desc: "Events, challenges, member milestones. The thing that makes people keep showing up." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-card border border-white/5 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-display text-2xl font-black uppercase tracking-tight mb-3 text-primary">{item.label}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="font-display text-xl md:text-2xl uppercase tracking-widest text-muted-foreground font-bold">
          Fitness is our common ground.<br />
          <span className="text-white">Community is our purpose.</span>
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Waitlist / Interest Form ─────────────────────────────────────────────────
const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, note }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="py-24 md:py-40 bg-background relative overflow-hidden border-t border-primary/20">
      <div className="absolute inset-0 electric-grid opacity-10 pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[15rem] md:text-[22rem] font-display font-black text-stroke-white opacity-5 whitespace-nowrap pointer-events-none select-none leading-none">
        JOIN
      </div>
      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/40 text-primary font-display text-sm tracking-widest uppercase font-bold mb-10">
            <Send className="w-4 h-4" /> Be a Founding Member
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-6">
            Help Us<br />
            <span className="text-primary">Build This.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-16 max-w-2xl">
            We're actively building Project Clubhouse and looking for people who want to shape what it becomes. Drop your name and email — founding members will be the first to hear about location, pricing, and early access.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-primary/40 bg-primary/5 p-12 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-primary">You're On The List.</h3>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                We'll reach out as things come together. Thanks for believing in this early.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First & Last Name"
                    className="w-full bg-card border border-white/10 focus:border-primary/60 outline-none px-5 py-4 font-display text-lg text-white placeholder:text-white/30 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block font-display text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-card border border-white/10 focus:border-primary/60 outline-none px-5 py-4 font-display text-lg text-white placeholder:text-white/30 transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block font-display text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3">
                  Anything You Want Us To Know <span className="text-white/30">(Optional)</span>
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Who you are, why you're interested, what you'd love to see..."
                  rows={4}
                  maxLength={500}
                  className="w-full bg-card border border-white/10 focus:border-primary/60 outline-none px-5 py-4 font-display text-base text-white placeholder:text-white/30 transition-colors duration-200 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 font-display text-sm uppercase tracking-widest font-bold">{errorMsg}</p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full text-xl md:text-2xl h-16 md:h-20 font-black"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-3 w-6 h-6 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    I Want In <ArrowRight className="ml-3 w-6 h-6" />
                  </>
                )}
              </Button>
              <p className="text-center text-sm text-muted-foreground font-display uppercase tracking-widest">
                No spam. No pressure. Just early access when it's ready.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

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
          <a href="https://www.instagram.com/projectclubhouse" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
          <a href="https://www.tiktok.com/@projectclubhouse" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">TikTok</a>
          <button onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary transition-colors cursor-pointer">Contact</button>
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
      <Marquee text="MORE THAN A GYM • THE PLACE TO SHOW UP" />

      {/* Chapter 01 — The Concept */}
      <ChapterDivider num="01" title="The Concept" />
      <TheProblem />
      <ValuePropGrid />

      {/* Chapter 02 — The Spaces */}
      <Marquee text="TRAIN • WATCH • STUDY • CONNECT • PLAY • REFUEL • BELONG" reverse />
      <ChapterDivider num="02" title="The Spaces" />
      <Spaces />
      <PulseBoards />

      {/* Chapter 03 — Your Community */}
      <ChapterDivider num="03" title="Your Community" />
      <YourPeople />
      <LinkUps />

      {/* Chapter 04 — The Digital Layer */}
      <Marquee text="DIGITAL AMPLIFIES REAL LIFE • THE CLUB IN YOUR POCKET" />
      <ChapterDivider num="04" title="The Digital Layer" />
      <MotivationEngine />
      <Flywheel />
      <LeaderboardCards />
      <LeaderboardViz />
      <ProgressScore />

      {/* Chapter 05 — Built For You */}
      <ChapterDivider num="05" title="Built For You" />
      <WhoIsThisFor />
      <SafetyTrust />

      {/* Chapter 06 — Membership */}
      <Marquee text="PREMIUM EXPERIENCE • ACCESSIBLE MEMBERSHIP • FITNESS IS OUR COMMON GROUND" reverse />
      <ChapterDivider num="06" title="Membership" />
      <Pricing />
      <Partnerships />

      {/* Close */}
      <ImagineAfterSchool />
      <FounderWall />
      <WaitlistForm />
      <Footer />
    </div>
  );
}
