"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Info } from "lucide-react";
import Link from "next/link";

export default function QuotePreview() {
  const [sqm, setSqm] = useState<number>(100);
  
  // Simple logic for the preview (real one would call API)
  const bagsNeeded = Math.ceil(sqm / 15);
  const estimatedCost = bagsNeeded * 2500;

  return (
    <section className="py-24 bg-bulwark-slate text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-bulwark-orange/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Smart Estimation. <br />
            <span className="text-bulwark-orange">Zero Guesswork.</span>
          </h2>
          <p className="text-white/60 text-lg">
            Tell us your project size, and our engine calculates the exact materials needed. 
            Reduce waste by up to 20% with our precision quoting tool.
          </p>
          <ul className="space-y-4 pt-4">
            {["Real-time pricing", "Stock availability check", "Direct distributor routing"].map((item, i) => (
              <li key={i} className="flex items-center space-x-3 text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-bulwark-orange/20 flex items-center justify-center text-bulwark-orange">
                  <ArrowRight size={12} />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card bg-white/5 border-white/10 p-8 rounded-3xl"
        >
          <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-white/10">
            <Calculator className="text-bulwark-orange" />
            <h3 className="text-xl font-bold">Quick Quote Preview</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/60 mb-2">Project Surface Area (sqm)</label>
              <input
                type="range"
                min="10"
                max="5000"
                step="10"
                value={sqm}
                onChange={(e) => setSqm(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-bulwark-orange"
              />
              <div className="flex justify-between mt-2 text-xs font-bold text-white/40">
                <span>10m²</span>
                <span className="text-bulwark-orange text-lg">{sqm}m²</span>
                <span>5000m²</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-white/40 text-xs uppercase mb-1">Bags Required</p>
                <p className="text-2xl font-black text-bulwark-orange">~{bagsNeeded}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-white/40 text-xs uppercase mb-1">Est. Investment</p>
                <p className="text-2xl font-black text-white">KES {estimatedCost.toLocaleString()}</p>
              </div>
            </div>

            <Link 
              href="/quote" 
              className="w-full btn-primary py-4 flex items-center justify-center space-x-2"
            >
              <span>Get Full Breakdown</span>
              <ArrowRight size={18} />
            </Link>
            
            <p className="text-center text-white/30 text-[10px] flex items-center justify-center space-x-1">
              <Info size={12} />
              <span>Estimates based on standard application rates.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
