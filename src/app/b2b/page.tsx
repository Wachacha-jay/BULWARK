import PageHeader from "@/components/ui/PageHeader";
import { Building2, TrendingUp, ShieldCheck, Users } from "lucide-react";

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

      <section className="py-24 bg-bulwark-silver/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-6 p-8 bg-white rounded-3xl shadow-sm border border-bulwark-silver/50">
                <div className="w-14 h-14 bg-bulwark-orange/10 rounded-2xl flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-bulwark-charcoal">{benefit.title}</h3>
                  <p className="text-bulwark-slate/70 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-bulwark-charcoal">Ready to scale your project?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-primary py-4 px-10">Request Project Quote</button>
              <button className="btn-outline">Download Tech Specs</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
