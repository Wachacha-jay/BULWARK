"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

export default function QuotePreview() {
  const [sqm, setSqm] = useState<number>(250);
  
  // Real logic based on Premium Filler price (950)
  const bagsNeeded = Math.ceil(sqm / 15);
  const estimatedCost = bagsNeeded * 950;

  return (
    <section className="py-24 bg-bulwark-charcoal text-white overflow-hidden relative">
      {/* Subtle UI Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bulwark-orange/10 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/2 opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              <Sparkles size={14} className="text-bulwark-orange" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/70">Calculation Engine</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
              Smart Estimation. <br />
              <span className="text-bulwark-orange">Zero Guesswork.</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg font-medium leading-relaxed max-w-lg">
              Precision planning to eliminate waste. Get an accurate breakdown of your requirements in seconds.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-bulwark-orange group-hover:bg-bulwark-orange group-hover:text-white transition-all">
                <ShieldCheck size={20} />
              </div>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-none">ISO Certified<br/><span className="text-white/60">Model</span></p>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-bulwark-orange group-hover:bg-bulwark-orange group-hover:text-white transition-all">
                <Calculator size={20} />
              </div>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-none">Live KES<br/><span className="text-white/60">Pricing</span></p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 glass-card bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
            <div className="flex items-center space-x-3 mb-8">
              <Calculator className="text-bulwark-orange" size={24} />
              <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40">Quick Estimate</h3>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-[9px] font-black text-white/40 uppercase tracking-widest">Surface Area</label>
                  <p className="text-2xl font-black text-bulwark-orange">{sqm}<span className="text-xs text-white/20 ml-1 italic font-medium">m²</span></p>
                </div>
                <input
                  type="range"
                  min="10"
                  max="5000"
                  step="10"
                  value={sqm}
                  onChange={(e) => setSqm(parseInt(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-bulwark-orange"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5 space-y-1">
                  <p className="text-white/30 text-[9px] font-black uppercase tracking-widest">Bags Required</p>
                  <p className="text-xl font-black text-white">~{bagsNeeded} <span className="text-[10px] text-white/20">Bags</span></p>
                </div>
                <div className="bg-bulwark-orange/10 p-4 rounded-2xl border border-bulwark-orange/20 space-y-1">
                  <p className="text-bulwark-orange/60 text-[9px] font-black uppercase tracking-widest">Est. Investment</p>
                  <p className="text-xl font-black text-white"><span className="text-[10px] text-bulwark-orange/40 mr-1">KES</span>{estimatedCost.toLocaleString()}</p>
                </div>
              </div>

              <div className="space-y-4">
                <Link 
                  href="/quote" 
                  className="w-full py-4 bg-white text-bulwark-charcoal rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-bulwark-orange hover:text-white transition-all shadow-lg"
                >
                  <span>Generate Full Quote</span>
                  <ArrowRight size={16} />
                </Link>
                <p className="text-center text-[8px] font-bold text-white/20 uppercase tracking-widest">
                  Estimates based on standard application rates.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
