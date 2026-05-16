import PageHeader from "@/components/ui/PageHeader";
import { Building2, TrendingUp, ShieldCheck, Users, HardHat, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function B2BPage() {
  const benefits = [
    {
      icon: <TrendingUp className="text-bulwark-orange" />,
      title: "Cost Optimization",
      description: "Our high-coverage formula reduces material waste and labor time by up to 15%.",
    },
    {
      icon: <ShieldCheck className="text-bulwark-orange" />,
      title: "Quality Assurance",
      description: "ISO 9001 certified materials manufactured using German technology for guaranteed results.",
    },
    {
      icon: <Building2 className="text-bulwark-orange" />,
      title: "Bulk Logistics",
      description: "Dedicated supply chain support for large-scale residential and commercial projects.",
    },
    {
      icon: <Users className="text-bulwark-orange" />,
      title: "On-site Training",
      description: "We provide technical training for your application teams to ensure perfect results.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Contractors & Developers" 
        description="Partner with Bulwark Industries to elevate your construction standards. We provide premium materials and technical support for large-scale projects."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-6 p-8 bg-bulwark-silver/10 rounded-3xl border border-bulwark-silver/30 hover:border-bulwark-orange/30 transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-bulwark-charcoal">{benefit.title}</h3>
                  <p className="text-bulwark-slate/70 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Expert Contractor Collaboration Section */}
          <div className="mt-16 bg-bulwark-charcoal rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-bulwark-orange/10 blur-[100px] -translate-y-1/2 translate-x-1/4" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-bulwark-orange/20 border border-bulwark-orange/10 px-4 py-2 rounded-full">
                  <HardHat size={16} className="text-bulwark-orange" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-bulwark-orange">Premium Support</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  Need Expert <br />
                  <span className="text-bulwark-orange">Application Help?</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed max-w-lg">
                  Beyond materials, we collaborate with a network of certified expert contractors. If you need professional application for your project, our partners are ready to deliver excellence.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Request Expert Assistance</h3>
                  <p className="text-white/40 text-sm italic">"Let us connect you with the right professionals for your Bulwark project."</p>
                </div>
                
                <Link 
                  href="/contact" 
                  className="btn-primary w-full py-5 flex items-center justify-center space-x-3 text-lg"
                >
                  <span>Make an Enquiry</span>
                  <ArrowRight size={20} />
                </Link>

                <p className="text-[10px] text-white/30 text-center font-bold uppercase tracking-widest">
                  Response within 24 business hours
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-bulwark-charcoal">Ready to scale your project?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="btn-primary py-5 px-12 text-lg">Request Project Quote</Link>
              <Link href="/support" className="btn-outline py-5 px-12 text-lg">Download Tech Specs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
