import Link from "next/link";
import { ArrowRight, Phone, Users, Package, ShieldCheck } from "lucide-react";

export default function CTASection() {
  return (
    <section className="pt-8 pb-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-bulwark-charcoal rounded-[3rem] p-8 md:p-14 overflow-hidden relative shadow-2xl shadow-black/20">
          {/* Subtle Background */}
          <div className="absolute inset-0 z-0">
             <img 
               src="/images/products in manufacturing.jpg" 
               alt="Background" 
               className="w-full h-full object-cover opacity-10 grayscale"
             />
             <div className="absolute inset-0 bg-gradient-to-br from-bulwark-charcoal via-bulwark-charcoal/95 to-transparent" />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-bulwark-orange/20 border border-bulwark-orange/10 px-3 py-1 rounded-full">
                <ShieldCheck size={14} className="text-bulwark-orange" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-bulwark-orange">Direct Action</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to elevate your <br />
                <span className="text-bulwark-orange">Construction Standards?</span>
              </h2>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="btn-primary px-10 py-4 text-xs">
                  Speak to an Expert
                </Link>
                <Link href="/distributors" className="flex items-center space-x-3 text-white font-black uppercase text-[10px] tracking-widest group">
                  <span className="border-b border-white/20 group-hover:border-bulwark-orange transition-colors pb-0.5">Partner Network</span>
                  <ArrowRight size={16} className="text-bulwark-orange group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
              {[
                { icon: Phone, title: "Direct Sales", color: "text-bulwark-orange" },
                { icon: Users, title: "Contractors", color: "text-blue-400" },
                { icon: Package, title: "Sample Kits", color: "text-emerald-400" },
                { icon: ShieldCheck, title: "Partners", color: "text-bulwark-orange" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center space-x-3 hover:bg-white/10 transition-all group cursor-pointer">
                  <div className={cn("w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center", item.color)}>
                    <item.icon size={18} />
                  </div>
                  <span className="text-white font-bold text-[11px] tracking-tight whitespace-nowrap">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
