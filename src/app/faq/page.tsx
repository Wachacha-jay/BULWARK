"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, HelpCircle } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
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
    answer: "Yes, and it's one of our most recommended use cases. Bulwark bonds molecularly with the substrate — it doesn't just cover cracks, it heals them. The flexible formula expands and contracts with normal temperature variations, preventing the crack from recurring. For structural cracks wider than 5mm, we recommend a base repair before applying the filler."
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
  },
  {
    question: "What is the mixing ratio for Bulwark Wall Filler?",
    answer: "The recommended ratio is 1 part clean water to 3 parts Bulwark Wall Filler. Mix thoroughly using a clean trowel or mechanical stirrer until you achieve a smooth, lump-free paste. Only prepare enough material that can be used within 60 minutes for optimal workability and bond strength."
  },
  {
    question: "Is Bulwark filler safe to use indoors?",
    answer: "Yes. Bulwark Wall Filler is biologically inert and has a low-VOC (Volatile Organic Compounds) formulation, making it safe for indoor use. It is non-toxic during and after application, making it suitable for residential spaces including bedrooms and children's rooms."
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Frequently Asked Questions" 
        description="Everything you need to know about Bulwark products and services. If you can't find your answer, our team is always ready to help."
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  layout
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "bg-bulwark-charcoal border-bulwark-charcoal shadow-xl shadow-bulwark-charcoal/10"
                      : "bg-[#F8FAFC] border-slate-100 hover:border-slate-200 hover:shadow-md"
                  )}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-6 p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all",
                        isOpen ? "bg-bulwark-orange/20 text-bulwark-orange" : "bg-white text-slate-300 shadow-sm"
                      )}>
                        <HelpCircle size={16} />
                      </div>
                      <span className={cn(
                        "font-bold text-sm md:text-base leading-snug transition-colors",
                        isOpen ? "text-white" : "text-bulwark-charcoal"
                      )}>
                        {faq.question}
                      </span>
                    </div>

                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                      isOpen
                        ? "bg-bulwark-orange text-white"
                        : "bg-white text-slate-400 shadow-sm border border-slate-100"
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
                        <div className="px-6 pb-6 pt-0 pl-[4.5rem]">
                          <div className="h-px bg-white/10 mb-4" />
                          <p className="text-white/60 text-sm leading-relaxed">
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

          {/* CTA at bottom */}
          <div className="mt-16 p-10 bg-bulwark-charcoal rounded-[2.5rem] text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-bulwark-orange/10 blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <p className="text-white/50 text-sm uppercase tracking-widest font-black">Still have a question?</p>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Our team is here to help.</h3>
            <Link href="/contact" className="inline-flex items-center gap-3 btn-primary px-10 py-4">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
