import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dumbbell, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    setMobileMenuOpen(false);
    if (location === "/") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#" + hash;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/50" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="bg-primary text-background p-2 rounded-sm group-hover:scale-110 transition-transform">
            <Dumbbell className="w-6 h-6" />
          </div>
          <span className="font-display font-black text-2xl tracking-widest uppercase text-foreground">Project Clubhouse</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-display tracking-widest text-lg font-bold uppercase">
          <button onClick={() => handleNavClick("spaces")} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">The Spaces</button>
          <button onClick={() => handleNavClick("app")} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">PrimalTrack</button>
          <button onClick={() => handleNavClick("pricing")} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Membership</button>
          <Button onClick={() => handleNavClick("pricing")}>Join Now</Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 p-6 flex flex-col gap-6 font-display text-2xl uppercase font-bold text-center shadow-2xl">
          <button onClick={() => handleNavClick("spaces")} className="text-muted-foreground hover:text-primary transition-colors">The Spaces</button>
          <button onClick={() => handleNavClick("app")} className="text-muted-foreground hover:text-primary transition-colors">PrimalTrack</button>
          <button onClick={() => handleNavClick("pricing")} className="text-muted-foreground hover:text-primary transition-colors">Membership</button>
          <Button className="w-full text-xl py-6" onClick={() => handleNavClick("pricing")}>Join Now</Button>
        </div>
      )}
    </motion.nav>
  );
};
