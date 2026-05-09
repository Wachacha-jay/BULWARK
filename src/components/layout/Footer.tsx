import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { 
    Icon: ({ size }: { size?: number }) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ), 
    href: "https://www.facebook.com/profile.php?id=100084896551995&mibextid=ZbWKwL" 
  },
  { 
    Icon: ({ size }: { size?: number }) => (
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <defs>
          <radialGradient id="rg" r="150%" cx="30%" cy="107%">
            <stop stopColor="#fdf497" offset="0" />
            <stop stopColor="#fdf497" offset="0.05" />
            <stop stopColor="#fd5949" offset="0.45" />
            <stop stopColor="#d6249f" offset="0.6" />
            <stop stopColor="#285AEB" offset="0.9" />
          </radialGradient>
        </defs>
        <path fill="url(#rg)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ), 
    href: "https://www.instagram.com/bulwarkindustrieske/" 
  },
  { 
    Icon: ({ size }: { size?: number }) => (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="#FF0000">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ), 
    href: "https://www.youtube.com/@bulwarkindustrieske" 
  },
  { 
    Icon: ({ size }: { size?: number }) => (
      <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M12.53 0H9.59v17.36c0 2.36-1.92 4.27-4.28 4.27s-4.28-1.92-4.28-4.27 1.92-4.28 4.28-4.28c.16 0 .31.01.46.03V10.1c-.15-.01-.3-.02-.46-.02C2.37 10.08 0 12.45 0 15.37S2.37 20.66 5.31 20.66c2.94 0 5.31-2.37 5.31-5.3V7.12C12.92 8.78 14.99 9.87 17.3 9.87v-2.94a5.27 5.27 0 01-4.77-3.03V0z" fill="#25F4EE" transform="translate(-1, -1)" />
        <path d="M12.53 0H9.59v17.36c0 2.36-1.92 4.27-4.28 4.27s-4.28-1.92-4.28-4.27 1.92-4.28 4.28-4.28c.16 0 .31.01.46.03V10.1c-.15-.01-.3-.02-.46-.02C2.37 10.08 0 12.45 0 15.37S2.37 20.66 5.31 20.66c2.94 0 5.31-2.37 5.31-5.3V7.12C12.92 8.78 14.99 9.87 17.3 9.87v-2.94a5.27 5.27 0 01-4.77-3.03V0z" fill="#FE2C55" transform="translate(1, 1)" />
        <path d="M12.53 0H9.59v17.36c0 2.36-1.92 4.27-4.28 4.27s-4.28-1.92-4.28-4.27 1.92-4.28 4.28-4.28c.16 0 .31.01.46.03V10.1c-.15-.01-.3-.02-.46-.02C2.37 10.08 0 12.45 0 15.37S2.37 20.66 5.31 20.66c2.94 0 5.31-2.37 5.31-5.3V7.12C12.92 8.78 14.99 9.87 17.3 9.87v-2.94a5.27 5.27 0 01-4.77-3.03V0z" fill="white" />
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
