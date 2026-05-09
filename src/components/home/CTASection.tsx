import Link from "next/link";
import { ArrowRight, Phone, Users, Package } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-bulwark-charcoal rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          {/* Accent decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-bulwark-orange/10 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to elevate your <br />
                <span className="text-bulwark-orange">construction standards?</span>
              </h2>
              <p className="text-white/60 text-lg max-w-md">
                Whether you're a homeowner, a contractor, or looking to join our distributor network, we have the right partnership model for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Speak to an Expert
                </Link>
                <Link href="/distributors" className="text-white font-bold border-b-2 border-bulwark-orange pb-1 hover:text-bulwark-orange transition-colors">
                  Join Distributor Network
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-bulwark-orange/20 flex items-center justify-center text-bulwark-orange">
                  <Phone size={20} />
                </div>
                <h3 className="text-white font-bold">Direct Sales</h3>
                <p className="text-white/40 text-xs">Bulk orders and logistics support for major projects.</p>
                <ArrowRight size={16} className="text-bulwark-orange" />
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Users size={20} />
                </div>
                <h3 className="text-white font-bold">For Contractors</h3>
                <p className="text-white/40 text-xs">Technical training and preferential pricing tiers.</p>
                <ArrowRight size={16} className="text-blue-400" />
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                  <Package size={20} />
                </div>
                <h3 className="text-white font-bold">Samples</h3>
                <p className="text-white/40 text-xs">Request a material sample kit for your architecture firm.</p>
                <ArrowRight size={16} className="text-green-400" />
              </div>

              <div className="bg-bulwark-orange p-6 rounded-2xl space-y-4 shadow-xl">
                <h3 className="text-white font-black text-xl italic tracking-tighter uppercase">Become a <br />Partner</h3>
                <p className="text-white/90 text-xs font-medium">Limited distributor slots available for 2024.</p>
                <Link href="/apply" className="inline-block bg-white text-bulwark-charcoal text-[10px] font-black px-3 py-1 rounded">
                  APPLY NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
