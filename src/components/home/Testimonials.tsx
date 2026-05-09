"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Eng. David Maina",
    role: "Lead Architect, Landmark Projects",
    content: "The precision quoting tool changed how we handle procurement. We saved roughly 12% on waste for our last residential complex using Bulwark materials.",
    avatar: "DM",
  },
  {
    name: "Sarah Wanjiku",
    role: "Property Developer",
    content: "Building in coastal areas is tough. Bulwark's moisture-resistant coatings are the only ones that have actually held up against the salt air.",
    avatar: "SW",
  },
  {
    name: "Samuel Otieno",
    role: "Chief Contractor, BuildRight LTD",
    content: "Their technical support team is top-notch. They didn't just sell us bags; they came to the site to ensure proper application. Highly recommended.",
    avatar: "SO",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-bulwark-orange font-bold uppercase tracking-widest text-sm">Testimonials</h2>
            <p className="text-4xl md:text-5xl font-black text-bulwark-charcoal tracking-tight">
              Trusted by Kenya's <br />Finest Builders
            </p>
          </div>
          <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-sm font-bold text-bulwark-slate">4.9/5 Average Rating</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 relative group"
            >
              <Quote className="absolute top-6 right-8 text-slate-100 group-hover:text-bulwark-orange/10 transition-colors" size={60} />
              <div className="relative z-10 space-y-6">
                <p className="text-bulwark-slate font-medium leading-relaxed italic">
                  "{t.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-bulwark-slate text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-bulwark-charcoal text-sm">{t.name}</h4>
                    <p className="text-bulwark-slate/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
