"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Activity, BarChart3 } from "lucide-react";

const heroSlides = [
  {
    image: "/images/premium-filler.jpeg",
    label: "Premium Wall Filler",
    badge: "Hydrophobic",
    subBadge: "Brilliant white finish"
  },
  {
    image: "/images/internal-filler.jpeg",
    label: "Internal Wall Filler",
    badge: "Super Smooth",
    subBadge: "German Technology"
  },
  {
    image: "/images/products in manufacturing.jpg",
    label: "Production Excellence",
    badge: "German Tech",
    subBadge: "State of the art precision"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-bulwark-charcoal text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,84,0,0.15),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-bulwark-orange text-sm font-semibold">
            <ShieldCheck size={16} />
            <span>ISO 9001 Certified Materials</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            The Ultimate <span className="text-bulwark-orange">Wall Skimming</span> Filler
          </h1>
          
          <p className="text-xl text-white/60 max-w-lg leading-relaxed">
            Premium cement-based Wall Putty for internal and external surfaces. 
            Manufactured using latest German Technology for a brilliant white, hydrophobic finish.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/quote" className="btn-primary flex items-center justify-center space-x-2 py-4 px-8 text-lg">
              <span>Calculate Smart Quote</span>
              <ChevronRight size={20} />
            </Link>
            <Link href="/products" className="btn-outline px-10">
              Explore Products
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div>
              <div className="flex items-center space-x-2 text-bulwark-orange mb-1">
                <BarChart3 size={18} />
                <span className="font-bold text-xl">15%</span>
              </div>
              <p className="text-white/40 text-xs uppercase tracking-widest">Cost Savings</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-bulwark-orange mb-1">
                <Activity size={18} />
                <span className="font-bold text-xl">2.5x</span>
              </div>
              <p className="text-white/40 text-xs uppercase tracking-widest">Durability</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-bulwark-orange mb-1">
                <ShieldCheck size={18} />
                <span className="font-bold text-xl">50yr</span>
              </div>
              <p className="text-white/40 text-xs uppercase tracking-widest">Lifespan</p>
            </div>
          </div>
        </motion.div>

        {/* Slideshow Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-card bg-white/5 border-white/10 p-8 rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 group overflow-hidden">
            <div className="aspect-[4/5] bg-gradient-to-br from-bulwark-slate to-bulwark-charcoal rounded-[2.5rem] overflow-hidden relative">
               <AnimatePresence mode="wait">
                 <motion.img 
                   key={currentSlide}
                   src={heroSlides[currentSlide].image}
                   alt={heroSlides[currentSlide].label}
                   initial={{ opacity: 0, scale: 1.1 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   transition={{ duration: 0.8, ease: "easeInOut" }}
                   className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-1000"
                 />
               </AnimatePresence>
               
               {/* Overlay content based on slide */}
               <div className="absolute inset-0 bg-gradient-to-t from-bulwark-charcoal via-transparent to-transparent opacity-60" />
               
               <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <motion.div 
                    key={currentSlide}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <p className="text-bulwark-orange font-black text-sm uppercase tracking-widest">{heroSlides[currentSlide].label}</p>
                    <div className="h-1 w-12 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        key={currentSlide}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="h-full bg-bulwark-orange"
                      />
                    </div>
                  </motion.div>
               </div>
            </div>

            {/* Dynamic Badge */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                className="absolute -bottom-6 -left-6 bg-bulwark-orange p-6 rounded-3xl shadow-xl z-20"
              >
                <p className="text-white font-black text-3xl">{heroSlides[currentSlide].badge}</p>
                <p className="text-white/80 text-[10px] uppercase font-bold tracking-tighter">{heroSlides[currentSlide].subBadge}</p>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="absolute top-12 right-12 flex flex-col gap-2 z-20">
              {heroSlides.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 transition-all duration-500 rounded-full ${currentSlide === i ? "h-8 bg-bulwark-orange shadow-[0_0_10px_rgba(255,84,0,0.8)]" : "h-4 bg-white/20"}`} 
                />
              ))}
            </div>
          </div>
          
          {/* Background Ambient Glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-bulwark-orange/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
