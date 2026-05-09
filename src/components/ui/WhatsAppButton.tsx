"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "254700000000"; // Placeholder
  const message = "Hi Bulwark Industries, I'm interested in your construction materials. Can I get more information?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="absolute right-full mr-4 bg-white text-bulwark-charcoal px-3 py-1 rounded-md text-sm font-semibold shadow-md whitespace-nowrap opacity-0 transition-opacity md:group-hover:opacity-100 pointer-events-none">
        Need Help?
      </span>
    </motion.a>
  );
}
