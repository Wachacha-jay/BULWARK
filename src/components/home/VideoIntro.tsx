"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoIntro() {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "VfzEupZEzU4";

  return (
    <section className="pt-4 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <p className="text-bulwark-orange font-black text-xs uppercase tracking-[0.4em] mb-3">Company Insight</p>
          <h2 className="text-4xl md:text-5xl font-black text-bulwark-charcoal tracking-tight">
            Introduction Video
          </h2>
        </div>

        <div className="relative aspect-[21/9] md:aspect-[25/9] rounded-[3rem] overflow-hidden group shadow-2xl shadow-bulwark-charcoal/10">
          {/* Background Image (YouTube Thumbnail) */}
          <img 
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="General Manager Samuel Muchemi"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          
          {/* Elegant Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-bulwark-charcoal/80 via-bulwark-charcoal/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 p-8 md:p-16 flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-white/60 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">General Manager</p>
              <div className="relative">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight border-l-4 border-white pl-6">
                  Samuel Muchemi
                </h2>
              </div>
            </div>

            {/* Play Button */}
            <button 
              onClick={() => setIsOpen(true)}
              className="relative group/play flex items-center justify-center mr-0 md:mr-20"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover/play:bg-bulwark-orange/30 transition-colors animate-pulse" />
              <div className="w-20 h-20 md:w-32 md:w-32 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover/play:scale-110 group-hover/play:border-bulwark-orange transition-all duration-500">
                <Play size={40} className="text-white fill-white ml-2 group-hover/play:text-bulwark-orange group-hover/play:fill-bulwark-orange transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-bulwark-charcoal/95 backdrop-blur-xl"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={40} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Bulwark Industries Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
