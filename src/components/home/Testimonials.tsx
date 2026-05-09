"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Eng. David Maina",
    role: "Lead Architect",
    location: "Nairobi",
    content: "The precision quoting tool changed how we handle procurement. We saved roughly 12% on waste using Bulwark.",
    avatar: "DM",
  },
  {
    name: "Sarah Wanjiku",
    role: "Property Developer",
    location: "Mombasa",
    content: "Bulwark's moisture-resistant coatings are the only ones that have actually held up against the salt air.",
    avatar: "SW",
  },
  {
    name: "Samuel Otieno",
    role: "Chief Contractor",
    location: "Kisumu",
    content: "Their technical support team is top-notch. They came to the site to ensure proper application. Highly recommended.",
    avatar: "SO",
  },
  {
    name: "Jane Mwangi",
    role: "Interior Designer",
    location: "Nakuru",
    content: "The brilliant white finish of their wall filler is unmatched. It provides a perfect base for premium paints.",
    avatar: "JM",
  },
  {
    name: "Mark Kamau",
    role: "Site Manager",
    location: "Eldoret",
    content: "Efficiency is key for us. Bulwark materials spread further and dry faster, saving us days on the project timeline.",
    avatar: "MK",
  },
  {
    name: "Alice Njeri",
    role: "Home Owner",
    location: "Thika",
    content: "I wanted durability for my family home. Bulwark delivered a finish that still looks brand new after 2 years.",
    avatar: "AN",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length - itemsPerPage + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - itemsPerPage + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - itemsPerPage + 1)) % (testimonials.length - itemsPerPage + 1));
  };

  return (
    <section className="py-24 bg-slate-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-bulwark-orange font-black uppercase tracking-[0.4em] text-xs">Testimonials</h2>
            <p className="text-4xl md:text-5xl font-black text-bulwark-charcoal tracking-tight">
              Trusted Across <span className="text-bulwark-orange">Kenya</span>
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-bulwark-orange hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-bulwark-orange hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((t, index) => (
              <div 
                key={index}
                className="min-w-full md:min-w-[calc(33.333%-16px)] bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-bulwark-orange/30 transition-all duration-500 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1.5 text-bulwark-orange">
                      <MapPin size={12} />
                      <span className="text-[9px] font-black uppercase tracking-widest">{t.location}</span>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} size={8} fill="currentColor" />)}
                    </div>
                  </div>
                  
                  <p className="text-bulwark-charcoal font-medium text-sm leading-relaxed">
                    "{t.content}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-50 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-50 text-bulwark-charcoal rounded-xl flex items-center justify-center font-black text-[10px] border border-slate-100 group-hover:bg-bulwark-orange group-hover:text-white group-hover:border-bulwark-orange transition-all duration-500">
                    {t.avatar}
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

        {/* Mobile Navigation Indicators */}
        <div className="mt-12 flex md:hidden gap-2">
          {testimonials.map((_, i) => (
            <div 
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-bulwark-orange" : "w-2 bg-slate-200"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
