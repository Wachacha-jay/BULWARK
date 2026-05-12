"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, MapPin, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Eng. David Maina",
    role: "Lead Architect",
    location: "Nairobi",
    content: "The precision quoting tool changed how we handle procurement. We saved roughly 12% on waste using Bulwark's data-driven system.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    name: "Sarah Wanjiku",
    role: "Property Developer",
    location: "Mombasa",
    content: "Bulwark's moisture-resistant coatings are the only ones that have actually held up against the salt air. Absolute game changer.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Samuel Otieno",
    role: "Chief Contractor",
    location: "Kisumu",
    content: "Their technical support team is top-notch. They came to the site to ensure proper application. Professionalism at its peak.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Samuel",
  },
  {
    name: "Jane Mwangi",
    role: "Interior Designer",
    location: "Nakuru",
    content: "The brilliant white finish of their wall filler is unmatched. It provides a perfect base for our premium architectural paints.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
  },
  {
    name: "Mark Kamau",
    role: "Site Manager",
    location: "Eldoret",
    content: "Efficiency is key for us. Bulwark materials spread further and dry faster, saving us days on the project timeline.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
  },
  {
    name: "Alice Njeri",
    role: "Home Owner",
    location: "Thika",
    content: "I wanted durability for my family home. Bulwark delivered a finish that still looks brand new after 2 years.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearInterval(interval);
    };
  }, [currentIndex]);

  const itemsPerPage = isMobile ? 1 : 3;
  const maxIndex = testimonials.length - itemsPerPage;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-24 bg-[#F8FAFC] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-3">
            <p className="text-bulwark-orange font-black uppercase tracking-[0.3em] text-[10px]">Client Success</p>
            <h2 className="text-3xl md:text-5xl font-black text-bulwark-charcoal tracking-tight">
              Trusted Across <span className="text-bulwark-orange">Kenya</span>
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:bg-bulwark-orange hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:bg-bulwark-orange hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {testimonials.map((t, index) => (
              <div 
                key={index}
                className={cn(
                  "min-w-full md:min-w-[calc(33.333%-16px)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between transition-all duration-500",
                  currentIndex === index ? "border-bulwark-orange/30 shadow-md" : "opacity-60 grayscale-[0.5]"
                )}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2 text-bulwark-orange">
                      <MapPin size={12} />
                      <span className="text-[9px] font-black uppercase tracking-widest">{t.location}</span>
                    </div>
                    <div className="flex space-x-0.5 text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} size={8} fill="currentColor" />)}
                    </div>
                  </div>
                  
                  <p className="text-bulwark-charcoal font-medium text-sm leading-relaxed">
                    "{t.content}"
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-50 flex items-center space-x-3">
                  <div className="relative w-10 h-10 shrink-0">
                    <img 
                      src={t.avatar} 
                      alt={t.name}
                      className="w-full h-full rounded-xl object-cover bg-slate-50 border border-slate-100"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
                      <ShieldCheck size={8} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-bulwark-charcoal text-xs">{t.name}</h4>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[8px]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Indicators */}
        <div className="mt-10 flex items-center justify-center space-x-2">
          {testimonials.slice(0, testimonials.length - itemsPerPage + 1).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                currentIndex === i ? "w-8 bg-bulwark-orange" : "w-2 bg-slate-200"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
