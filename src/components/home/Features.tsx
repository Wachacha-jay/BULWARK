"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Recycle, ThermometerSnowflake, Ruler, HardHat } from "lucide-react";

const features = [
  {
    title: "Superior Quality",
    description: "Hydrophobic (aquaphobic) technology that sticks firmly to any structure.",
    icon: Shield,
    color: "bg-blue-600",
  },
  {
    title: "Effortless Application",
    description: "Expertly formulated to be easy to mix and spread, saving time on the job site.",
    icon: Zap,
    color: "bg-orange-600",
  },
  {
    title: "Eco-Friendly Finishing",
    description: "Easy smooth sanding with minimal dust for a cleaner, greener workspace.",
    icon: Recycle,
    color: "bg-green-600",
  },
  {
    title: "Premium Appearance",
    description: "Achieves a brilliant white, flawless finish that elevates architectural aesthetics.",
    icon: Ruler,
    color: "bg-indigo-600",
  },
  {
    title: "Universal Utility",
    description: "Good for all surfaces, providing versatility across diverse construction needs.",
    icon: HardHat,
    color: "bg-slate-600",
  },
  {
    title: "Unbeatable Value",
    description: "Quality meets affordability. Economical with exceptionally wide surface coverage.",
    icon: Zap,
    color: "bg-yellow-600",
  },
  {
    title: "Health & Wellness",
    description: "Environmentally friendly formulation with no direct side effects for inhabitants.",
    icon: Shield,
    color: "bg-cyan-600",
  },
  {
    title: "Smart Packaging",
    description: "Quality, reusable, and biodegradable packaging designed to be attractive and sustainable.",
    icon: Recycle,
    color: "bg-emerald-600",
  },
  {
    title: "The Bulwark Promise",
    description: "Our dual commitment to adorability and industry-leading durability.",
    icon: HardHat,
    color: "bg-bulwark-orange",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-bulwark-orange font-bold uppercase tracking-widest text-sm">The Benefits</h2>
          <p className="text-4xl md:text-5xl font-black text-bulwark-charcoal tracking-tight">
            Why Top Contractors Choose Bulwark
          </p>
          <p className="text-bulwark-slate/60 text-lg">
            We bridge the gap between raw materials and architectural excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-transparent transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`text-${feature.color.split('-')[1]}-600`} size={24} />
              </div>
              <h3 className="text-xl font-bold text-bulwark-charcoal mb-3">{feature.title}</h3>
              <p className="text-bulwark-slate/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Manufacturing Visuals */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="/images/products in manufacturing.jpg" 
              alt="Manufacturing Facility" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bulwark-charcoal/80 to-transparent flex items-end p-8">
              <p className="text-white font-bold text-xl">State-of-the-Art Manufacturing</p>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="/images/products in manufacturing 2.jpg" 
              alt="Quality Control" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bulwark-charcoal/80 to-transparent flex items-end p-8">
              <p className="text-white font-bold text-xl">Rigorous Quality Standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
