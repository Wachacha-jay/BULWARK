import PageHeader from "@/components/ui/PageHeader";
import { CheckCircle2, PlayCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Surface Preparation",
      description: "Ensure the surface is clean, dry, and free from dust, oil, and loose particles.",
    },
    {
      title: "Mixing",
      description: "Mix Bulwark Wall Filler with clean water in a ratio of 1:3 until a smooth paste is formed.",
    },
    {
      title: "Application",
      description: "Apply the first coat using a steel trowel. Allow to dry for 4-6 hours.",
    },
    {
      title: "Final Finish",
      description: "Apply a second coat for a brilliant white, smooth finish. Lightly sand if necessary.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Application Procedure" 
        description="Master the art of perfect finishing. Follow our expert guide to achieve the brilliant white, smooth surface your project deserves."
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 bg-bulwark-orange/10 rounded-full flex items-center justify-center text-bulwark-orange font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-bulwark-charcoal">{step.title}</h3>
                <p className="text-bulwark-slate/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-3xl bg-bulwark-slate text-white flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold">Watch Our Tutorial</h2>
              <p className="text-white/60">See our experts demonstrate the application process for Bulwark Premium Wall Filler.</p>
            </div>
            <button className="flex items-center space-x-3 bg-white text-bulwark-charcoal px-8 py-4 rounded-xl font-bold hover:bg-bulwark-orange hover:text-white transition-all">
              <PlayCircle size={24} />
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
