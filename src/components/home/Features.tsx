"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Recycle, 
  Ruler, 
  HardHat, 
  Target, 
  Sparkles, 
  Activity,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Superior Quality",
    description: "Advanced hydrophobic technology that bonds molecularly to surfaces for an impenetrable moisture barrier.",
    icon: Shield,
    color: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-600",
  },
  {
    title: "Effortless Application",
    description: "Engineered for high-viscosity spreadability. Reduces contractor fatigue and accelerates project timelines.",
    icon: Zap,
    color: "from-orange-500/10 to-amber-500/10",
    iconColor: "text-bulwark-orange",
  },
  {
    title: "Eco-Smooth Finish",
    description: "A low-VOC, dust-suppressing formula for a cleaner environment and professional-grade interior aesthetics.",
    icon: Sparkles,
    color: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-600",
  },
  {
    title: "Premium Appearance",
    description: "Delivers a high-luminosity brilliant white finish that serves as a flawless canvas for architectural paint.",
    icon: Ruler,
    color: "from-violet-500/10 to-purple-500/10",
    iconColor: "text-violet-600",
  },
  {
    title: "Universal Utility",
    description: "Multi-substrate compatibility. One material for diverse surfaces, simplifying onsite operations.",
    icon: Layers,
    color: "from-slate-500/10 to-zinc-500/10",
    iconColor: "text-slate-600",
  },
  {
    title: "Unbeatable Value",
    description: "Strategic cost-efficiency. High coverage rates mean you use less material per square meter.",
    icon: Activity,
    color: "from-rose-500/10 to-pink-500/10",
    iconColor: "text-rose-600",
  },
  {
    title: "Health & Wellness",
    description: "Biologically inert and safe. Formulated for indoor air quality, protecting both builders and inhabitants.",
    icon: Target,
    color: "from-cyan-500/10 to-sky-500/10",
    iconColor: "text-cyan-600",
  },
  {
    title: "Smart Packaging",
    description: "Sustainable lifecycle design. Heavy-duty, reusable containers that reduce environmental impact.",
    icon: Recycle,
    color: "from-lime-500/10 to-green-500/10",
    iconColor: "text-lime-600",
  },
  {
    title: "The Bulwark Promise",
    description: "Our dual-commitment to aesthetic perfection and structural longevity. Materials built for time.",
    icon: HardHat,
    color: "from-bulwark-orange/10 to-orange-600/10",
    iconColor: "text-bulwark-orange",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#F8FAFC] px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-bulwark-orange/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm"
          >
            <div className="w-1 h-1 bg-bulwark-orange rounded-full" />
            <span className="text-bulwark-charcoal font-black text-[9px] uppercase tracking-[0.2em]">Our Core Advantages</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-bulwark-charcoal tracking-tight"
          >
            Why Professionals <span className="text-bulwark-orange">Choose Bulwark</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto"
          >
            Bridging raw materials and architectural excellence with precision engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                feature.color
              )} />
              
              <div className="relative z-10 flex flex-col items-start">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white group-hover:shadow-md transition-all">
                  <feature.icon className={cn("transition-transform group-hover:scale-110", feature.iconColor)} size={20} />
                </div>
                
                <h3 className="text-lg font-bold text-bulwark-charcoal mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Manufacturing Visuals - More Compact */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
          >
            <img 
              src="/images/products in manufacturing.jpg" 
              alt="Manufacturing Facility" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bulwark-charcoal/80 to-transparent flex flex-col justify-end p-6">
              <span className="text-[9px] text-white/60 font-black uppercase tracking-widest mb-1">Industrial Excellence</span>
              <p className="text-white font-bold text-xl leading-none">Precision Manufacturing</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
          >
            <img 
              src="/images/products in manufacturing 2.jpg" 
              alt="Quality Control" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bulwark-charcoal/80 to-transparent flex flex-col justify-end p-6">
              <span className="text-[9px] text-white/60 font-black uppercase tracking-widest mb-1">Quality Standards</span>
              <p className="text-white font-bold text-xl leading-none">Rigorous Control</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
