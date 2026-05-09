"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle2, Globe } from "lucide-react";

const certs = [
  {
    name: "KEBS Certified",
    detail: "Quality Standards Verified",
    icon: ShieldCheck,
  },
  {
    name: "ISO 9001:2015",
    detail: "Quality Management System",
    icon: Award,
  },
  {
    name: "German Tech",
    detail: "Precision Engineering",
    icon: Globe,
  },
  {
    name: "Made in Kenya",
    detail: "Local Manufacturing Excellence",
    icon: CheckCircle2,
  },
];

export default function Certifications() {
  return (
    <section className="py-16 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-bulwark-orange font-black text-[10px] uppercase tracking-[0.4em] mb-2">Compliance & Trust</p>
          <h2 className="text-2xl font-black text-bulwark-charcoal tracking-tight">Our Quality Standards</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {certs.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-3 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-bulwark-orange/10 group-hover:text-bulwark-orange transition-all duration-500 border border-slate-100 group-hover:border-bulwark-orange/20 shadow-sm group-hover:shadow-lg">
                <cert.icon size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-black text-bulwark-charcoal text-sm uppercase tracking-tighter">{cert.name}</h3>
                <p className="text-[10px] font-medium text-slate-400 mt-1">{cert.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Subtle verification line */}
        <div className="mt-12 pt-8 border-t border-slate-50 text-center">
          <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em]">
            Authorized Manufacturer • Licensed Distribution • Verified Technical Standards
          </p>
        </div>
      </div>
    </section>
  );
}
