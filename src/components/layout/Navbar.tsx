"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Products", href: "/products" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Contractors", href: "/b2b" },
  { name: "Distributors", href: "/distributors" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm border-b" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-4 group">
          <div className="relative w-20 h-20 shrink-0">
            <img 
              src="/images/Logo.png" 
              alt="Bulwark Icon" 
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center border-l border-white/10 pl-4 py-1">
            <span className={cn(
              "font-black text-3xl tracking-tighter leading-none transition-colors duration-300",
              scrolled ? "text-bulwark-charcoal" : "text-white"
            )}>
              BULWARK
            </span>
            <span className={cn(
              "text-xs uppercase tracking-[0.4em] font-bold mt-2 transition-colors duration-300",
              scrolled ? "text-bulwark-slate" : "text-white/70"
            )}>
              INDUSTRIES
            </span>
            <span className={cn(
              "text-[9px] uppercase tracking-[0.3em] font-bold mt-2 transition-opacity duration-300",
              scrolled ? "text-bulwark-orange opacity-100" : "text-white/40 opacity-80"
            )}>
              Just do it
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-bulwark-orange",
                scrolled ? "text-bulwark-slate" : "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/quote" className="btn-primary py-2 px-5 text-sm">
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? "text-bulwark-charcoal" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-bulwark-charcoal" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden border-b"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-bulwark-slate font-medium flex justify-between items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={16} className="text-bulwark-orange" />
                </Link>
              ))}
              <Link
                href="/quote"
                className="btn-primary text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
