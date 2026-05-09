import PageHeader from "@/components/ui/PageHeader";
import { Wrench, FileText, Video, MessageSquare } from "lucide-react";

export default function SupportPage() {
  const supportOptions = [
    {
      icon: <Wrench />,
      title: "Technical Assistance",
      description: "Direct access to our engineering team for complex project challenges.",
    },
    {
      icon: <FileText />,
      title: "Documentation",
      description: "Download SDS, TDS, and application guides for all Bulwark products.",
    },
    {
      icon: <Video />,
      title: "Video Guides",
      description: "Step-by-step visual tutorials for mixing and applying our materials.",
    },
    {
      icon: <MessageSquare />,
      title: "Live Chat",
      description: "Quick answers to common questions via our WhatsApp support channel.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Technical Support" 
        description="We don't just sell materials; we ensure they work for you. Access our support resources and expert guidance."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="flex gap-6 p-8 bg-bulwark-silver/10 rounded-3xl border border-bulwark-silver/30 hover:border-bulwark-orange transition-colors group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-bulwark-charcoal group-hover:text-bulwark-orange transition-colors shrink-0 shadow-sm">
                  {option.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-bulwark-charcoal">{option.title}</h3>
                  <p className="text-bulwark-slate/60 text-sm leading-relaxed">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
