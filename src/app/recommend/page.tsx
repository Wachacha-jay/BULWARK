import RecommendationTool from "@/components/tools/RecommendationTool";
import { Compass, Lightbulb, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Product Recommendation Tool | Bulwark Industries",
  description: "Find the perfect material for your construction project based on climate, surface, and project type.",
};

export default function RecommendPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Lightbulb size={14} />
            <span>AI-Driven Analysis</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-bulwark-charcoal tracking-tight">
            Find Your <span className="text-bulwark-orange">Ideal Solution</span>
          </h1>
          <p className="text-bulwark-slate/60 text-lg">
            Don't leave material selection to chance. Our recommendation engine uses environmental data 
            to match you with the highest-performing Bulwark products.
          </p>
        </div>

        <RecommendationTool />

        <div className="max-w-3xl mx-auto mt-20 p-8 bg-white rounded-[2rem] border border-slate-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-16 h-16 bg-bulwark-orange/10 rounded-full flex items-center justify-center shrink-0">
            <MessageSquare className="text-bulwark-orange" />
          </div>
          <div className="space-y-2 flex-1 text-center md:text-left">
            <h3 className="font-bold text-xl text-bulwark-charcoal">Need a Custom Specification?</h3>
            <p className="text-slate-500 text-sm">
              For complex industrial projects, our engineering team can provide a tailored technical specification document (TSD) free of charge.
            </p>
          </div>
          <button className="btn-primary whitespace-nowrap">Contact Engineering</button>
        </div>
      </div>
    </div>
  );
}
