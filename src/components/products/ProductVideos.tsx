"use client";

import { useState } from "react";
import { Play, X, ShieldCheck, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const productVideos = [
  {
    id: "-8Qxayzp5Cs",
    title: "Product Uniqueness",
    subtitle: "Advanced Material Intelligence",
    icon: ShieldCheck,
    color: "text-bulwark-orange"
  },
  {
    id: "kn-cY5DT0CE",
    title: "Cost Effectiveness",
    subtitle: "Strategic Project Savings",
    icon: DollarSign,
    color: "text-emerald-500"
  }
];

export default function ProductVideos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-bulwark-orange font-black text-xs uppercase tracking-[0.4em] mb-3">Material Insights</p>
          <h2 className="text-3xl md:text-5xl font-black text-bulwark-charcoal tracking-tight">
            The Bulwark Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {productVideos.map((video) => (
            <div key={video.id} className="space-y-6">
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-bulwark-charcoal/5 border border-slate-100">
                {/* Background Image (YouTube Thumbnail) */}
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bulwark-charcoal/90 via-bulwark-charcoal/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                      <video.icon size={24} className={video.color} />
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="space-y-1">
                      <p className="text-white/60 font-bold uppercase tracking-[0.2em] text-[10px]">{video.subtitle}</p>
                      <h3 className="text-2xl font-black text-white tracking-tight">{video.title}</h3>
                    </div>

                    {/* Play Button */}
                    <button 
                      onClick={() => setActiveVideo(video.id)}
                      className="relative group/play flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover/play:bg-bulwark-orange/30 transition-colors animate-pulse" />
                      <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover/play:scale-110 group-hover/play:border-bulwark-orange transition-all duration-500">
                        <Play size={24} className="text-white fill-white ml-1 group-hover/play:text-bulwark-orange group-hover/play:fill-bulwark-orange transition-colors" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-bulwark-charcoal/95 backdrop-blur-xl"
          >
            <button 
              onClick={() => setActiveVideo(null)}
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
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Bulwark Product Insight"
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
