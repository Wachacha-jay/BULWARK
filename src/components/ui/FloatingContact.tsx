"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingContact() {
  const phoneNumber = "+254722850000";
  const whatsappMessage = "Hello Bulwark Industries, I'm interested in your products and would like to learn more.";

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-xs px-4">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex overflow-hidden rounded-full shadow-2xl shadow-black/20 border border-white/10 backdrop-blur-sm"
      >
        {/* Call Us Button */}
        <a 
          href={`tel:${phoneNumber}`}
          className="flex-1 bg-bulwark-orange hover:bg-orange-600 transition-colors flex flex-col items-center justify-center py-3 text-white space-y-1"
        >
          <Phone size={20} fill="white" />
          <span className="text-[10px] font-black uppercase tracking-widest">Call Us</span>
        </a>

        {/* WhatsApp Button */}
        <a 
          href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-bulwark-charcoal hover:bg-black transition-colors flex flex-col items-center justify-center py-3 text-white space-y-1 border-l border-white/10"
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-5 h-5"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.73.443 3.357 1.215 4.78l-1.215 4.436 4.542-1.19a9.972 9.972 0 004.462 1.074c5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2z" 
              fill="#25D366"
            />
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M17.135 14.73c-.23-.116-1.365-.674-1.576-.752-.211-.078-.364-.116-.518.117-.153.232-.593.75-.726.903-.134.153-.268.172-.498.056-.23-.116-.97-.358-1.848-1.14-.683-.61-1.144-1.362-1.278-1.594-.134-.233-.014-.358.101-.474.103-.105.23-.267.345-.401.115-.134.153-.23.23-.383.076-.154.038-.288-.019-.404-.058-.116-.518-1.246-.71-1.71-.186-.448-.374-.388-.518-.396-.134-.007-.287-.008-.44-.008-.153 0-.403.057-.613.287-.211.23-.805.787-.805 1.918 0 1.13.823 2.222.938 2.376.115.153 1.62 2.474 3.923 3.468.548.236.976.377 1.31.483.55.174 1.05.15 1.445.091.44-.066 1.364-.557 1.556-1.096.191-.539.191-1 .134-1.096-.057-.097-.21-.153-.44-.27z" 
              fill="white"
            />
          </svg>
          <span className="text-[10px] font-black uppercase tracking-widest leading-none">Whatsup Chat</span>
        </a>
      </motion.div>
    </div>
  );
}
