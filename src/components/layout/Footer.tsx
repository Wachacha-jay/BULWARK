import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { 
    Icon: Facebook, 
    href: "https://www.facebook.com/profile.php?id=100084896551995&mibextid=ZbWKwL" 
  },
  { 
    Icon: Instagram, 
    href: "https://www.instagram.com/bulwarkindustrieske/" 
  },
  { 
    Icon: Youtube, 
    href: "https://www.youtube.com/@bulwarkindustrieske" 
  },
  { 
    Icon: ({ size }: { size: number }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ), 
    href: "https://www.tiktok.com/@bulwarkindustrieske" 
  },
];

export default function Footer() {
  return (
    <footer className="bg-bulwark-charcoal text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div className="space-y-6">
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-16 h-16 shrink-0">
              <img 
                src="/images/Logo.png" 
                alt="Bulwark Icon" 
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col border-l border-white/10 pl-4 py-1">
              <span className="font-black text-2xl tracking-tighter leading-none text-white">
                BULWARK
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold mt-1 text-white/60">
                INDUSTRIES
              </span>
              <span className="text-[8px] uppercase tracking-[0.2em] font-bold mt-1 text-white/30">
                Just do it
              </span>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            Revolutionizing construction in Kenya with data-driven material solutions. 
            Durability, efficiency, and intelligence at every layer.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bulwark-orange transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><Link href="/products" className="hover:text-white transition-colors">Product Catalog</Link></li>
            <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            <li><Link href="/quote" className="hover:text-white transition-colors">Quote Calculator</Link></li>
            <li><Link href="/b2b" className="hover:text-white transition-colors">For Contractors</Link></li>
            <li><Link href="/distributors" className="hover:text-white transition-colors">Distributor Program</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Support</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
            <li><Link href="/support" className="hover:text-white transition-colors">Technical Support</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">Common FAQs</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Office</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-bulwark-orange shrink-0" />
              <span>Bulwark Plaza, Industrial Area, Nairobi, Kenya</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-bulwark-orange shrink-0" />
              <span>+254 722 850 000</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-bulwark-orange shrink-0" />
              <span>sales@bulwark.co.ke</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs gap-4">
        <p>© {new Date().getFullYear()} Bulwark Industries Limited. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
        </div>
      </div>
    </footer>
  );
}
