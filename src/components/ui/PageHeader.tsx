"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 bg-bulwark-charcoal text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bulwark-orange/10 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
