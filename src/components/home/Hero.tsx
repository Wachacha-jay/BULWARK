"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Activity, BarChart3 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-bulwark-charcoal text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,84,0,0.1),transparent)]" />
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
            <Link href="/products" className="btn-outline">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-card bg-white/10 border-white/20 p-8 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 group">
            <div className="aspect-[4/5] bg-gradient-to-br from-bulwark-slate to-bulwark-charcoal rounded-2xl overflow-hidden relative">
               <img 
                 src="/images/product.png" 
                 alt="Bulwark Wall Filler" 
                 className="object-contain w-full h-full scale-110 group-hover:scale-125 transition-transform duration-700"
               />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-bulwark-orange p-6 rounded-2xl shadow-xl">
              <p className="text-white font-black text-3xl">#1</p>
              <p className="text-white/80 text-[10px] uppercase font-bold tracking-tighter">Choice of Top Contractors</p>
            </div>
          </div>
          
          {/* Background shapes */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-bulwark-orange/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
