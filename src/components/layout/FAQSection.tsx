"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What surfaces can I apply Bulwark Wall Filler on?",
    answer: "Bulwark Wall Filler is engineered for multi-substrate compatibility. It adheres strongly to concrete, cement plaster, brick, block, and gypsum board — both internal and external surfaces. The key requirement is that the surface is clean, dry, and structurally sound before application."
  },
  {
    question: "Can I use the filler instead of painting?",
    answer: "Absolutely. Bulwark Premium Filler delivers a brilliant, high-luminosity white finish that many architects and homeowners are now using as a standalone aesthetic. It's a popular choice for the 'Industrial Minimalist' look — saving the full cost of paint while providing a clean, luminous atmosphere that's easy to maintain."
  },
  {
    question: "How much does a bag of Bulwark Filler cover?",
    answer: "One 25kg bag of Bulwark Wall Filler covers approximately 15 square metres at a standard application thickness. For precise project estimates, use our Smart Quote Calculator on the website — it gives you an exact material count and cost breakdown in seconds."
  },
  {
    question: "How long does it take to dry before I can apply paint?",
    answer: "Under normal Kenyan weather conditions (20–28°C), the first coat is surface-dry within 4–6 hours. We recommend allowing a full 24 hours before applying the second coat or any topcoat paint, ensuring maximum bond strength and a flawless, durable finish."
  },
  {
    question: "Can Bulwark filler be used to fix cracked walls?",
    answer: "Yes, and it's one of our most recommended use cases. Bulwark bonds molecularly with the substrate, meaning it doesn't just cover cracks — it heals them. The flexible formula expands and contracts with normal temperature variations, preventing the crack from recurring. For structural cracks wider than 5mm, we recommend a base repair before applying the filler."
  },
  {
    question: "Will it save me money on paint?",
    answer: "Significantly. Uncoated porous walls act like sponges — absorbing multiple coats of expensive paint before achieving the desired finish. By applying Bulwark first, you create a dense, low-porosity base that reduces paint consumption by up to 40%. On large projects, this saving can be substantial."
  },
  {
    question: "Where can I buy Bulwark products in Kenya?",
    answer: "Bulwark products are available through our growing network of authorized distributors across Kenya, covering Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret. Visit our Distributors page to find your nearest stockist, or contact us directly for bulk orders and delivery arrangements."
  },
  {
    question: "Do you train contractors on how to use your products?",
    answer: "Yes — capacity building is core to our mission. We regularly run nationwide Fundi Training Workshops where our technical team demonstrates best-practice application techniques. We also collaborate with expert contractors for professional installation. If you'd like to attend or host a workshop, contact us and we'll arrange it."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-bulwark-charcoal px-6 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
          <div className="space-y-3 max-w-sm">
            <p className="text-bulwark-orange font-black text-[9px] uppercase tracking-[0.4em]">Got Questions?</p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Common FAQs
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              Everything you need to know about Bulwark products and how to get the best out of them.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-white/20 text-[10px] font-black uppercase tracking-widest mb-2">Still have questions?</p>
            <a href="/contact" className="inline-flex items-center gap-2 text-bulwark-orange text-sm font-black hover:underline">
              Talk to our team →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                layout
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "bg-white/10 border-white/20"
                    : "bg-white/[0.03] border-white/5 hover:bg-white/[0.06] hover:border-white/10"
                )}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className={cn(
                    "font-bold text-sm leading-snug transition-colors",
                    isOpen ? "text-white" : "text-white/70"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                    isOpen
                      ? "bg-bulwark-orange text-white rotate-0"
                      : "bg-white/5 text-white/40 hover:bg-white/10"
                  )}>
                    {isOpen ? <X size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="h-px bg-white/10 mb-4" />
                        <p className="text-white/50 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
