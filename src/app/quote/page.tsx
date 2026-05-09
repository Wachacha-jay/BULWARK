import QuoteCalculator from "@/components/tools/QuoteCalculator";
import { Calculator, Info, ShieldCheck, Truck } from "lucide-react";

export const metadata = {
  title: "Smart Quote Calculator | Bulwark Industries",
  description: "Get a precision material breakdown for your construction project. Instant estimates for bags and costs.",
};

export default function QuotePage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-bulwark-orange/10 text-bulwark-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Calculator size={14} />
            <span>Smart Estimator v2.0</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-bulwark-charcoal tracking-tight">
            Quote with <span className="text-bulwark-orange">Confidence</span>
          </h1>
          <p className="text-bulwark-slate/60 text-lg">
            Our data-driven engine helps you plan your project materials with unmatched accuracy. 
            Select your parameters below to generate your custom breakdown.
          </p>
        </div>

        <QuoteCalculator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
              <ShieldCheck className="text-bulwark-orange" />
            </div>
            <div>
              <h3 className="font-bold text-bulwark-charcoal">Guaranteed Rates</h3>
              <p className="text-sm text-bulwark-slate/60">Estimates are synced with our current factory inventory prices.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
              <Truck className="text-bulwark-orange" />
            </div>
            <div>
              <h3 className="font-bold text-bulwark-charcoal">Logistics Ready</h3>
              <p className="text-sm text-bulwark-slate/60">Quotes include options for direct site delivery across Kenya.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
              <Info className="text-bulwark-orange" />
            </div>
            <div>
              <h3 className="font-bold text-bulwark-charcoal">Expert Review</h3>
              <p className="text-sm text-bulwark-slate/60">Request a manual review of your quote for complex industrial projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
