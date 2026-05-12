"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle2, Microscope, Cpu } from "lucide-react";

const certs = [
  {
    name: "KEBS Certified",
    detail: "Standard Compliance",
    icon: ShieldCheck,
    tag: "National"
  },
  {
    name: "ISO 9001:2015",
    detail: "Process Excellence",
    icon: Award,
    tag: "Global"
  },
  {
    name: "German Tech",
    detail: "Precision Engineering",
    icon: Cpu,
    tag: "Innovation"
  },
  {
    name: "Quality Tested",
    detail: "Site Ready Material",
    icon: Microscope,
    tag: "Verified"
  },
];

const standardLabels = [
  "Bulwark Industries Limited",
  "Official Manufacturer",
  "Authorized Distribution",
  "ISO 9001:2015 Standards",
  "Precision Engineering",
  "Nairobi • Kenya"
];

export default function Certifications() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left space-y-1"
          >
            <p className="text-bulwark-orange font-black text-[9px] uppercase tracking-[0.4em]">Compliance & Authority</p>
            <h2 className="text-2xl md:text-3xl font-black text-bulwark-charcoal tracking-tight">Our Quality Standards</h2>
          </motion.div>
          <div className="h-px flex-1 bg-slate-100 hidden md:block mx-12" />
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-[11px] font-bold max-w-[200px] text-center md:text-right uppercase tracking-wider"
          >
            Rigorous adherence to international standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {certs.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-[#F8FAFC] border border-slate-100 group transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-bulwark-orange shadow-sm border border-slate-50 group-hover:bg-bulwark-orange group-hover:text-white transition-colors">
                  <cert.icon size={20} />
                </div>
                
                <div>
                  <h3 className="font-black text-bulwark-charcoal text-sm tracking-tight mb-0.5">{cert.name}</h3>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                    {cert.detail}
                  </p>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <CheckCircle2 size={12} className="text-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Infinite Standard Strip - Elegant Loop */}
        <div className="mt-16 relative overflow-hidden py-4 border-t border-slate-50">
          {/* Side Fade Masks */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div 
            className="flex whitespace-nowrap gap-12"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...standardLabels, ...standardLabels, ...standardLabels].map((label, i) => (
              <div key={i} className="flex items-center space-x-4">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] hover:text-bulwark-orange transition-colors cursor-default">
                  {label}
                </span>
                <div className="w-1 h-1 bg-bulwark-orange rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
