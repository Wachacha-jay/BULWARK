"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Package, CheckCircle2, AlertCircle, RefreshCcw, Download } from "lucide-react";

const quoteSchema = z.object({
  sqm: z.number().min(1, "Area must be greater than 0"),
  surfaceType: z.enum(["concrete", "plaster", "stone", "metal"]),
  projectType: z.enum(["residential", "commercial", "industrial"]),
});

type QuoteData = z.infer<typeof quoteSchema>;

export default function QuoteCalculator() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<QuoteData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      sqm: 100,
      surfaceType: "concrete",
      projectType: "residential",
    }
  });

  const onSubmit = async (data: QuoteData) => {
    setLoading(true);
    // Simulate API call to /quote
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock Calculation Logic
    const coverageRate = data.surfaceType === "concrete" ? 12 : 15; // sqm per bag
    const bags = Math.ceil(data.sqm / coverageRate);
    const unitPrice = data.projectType === "industrial" ? 2200 : 2500;
    
    setResult({
      bags,
      totalCost: bags * unitPrice,
      recommendedProduct: "Bulwark Pro-X Coating",
      efficiencyScore: 94,
      deliveryTime: "2-3 Working Days",
    });
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Form Side */}
          <div className="p-8 md:p-12 bg-slate-50/50">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-bulwark-orange rounded-lg flex items-center justify-center text-white">
                <Calculator size={20} />
              </div>
              <h2 className="text-2xl font-bold text-bulwark-charcoal">Project Details</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-bulwark-slate mb-2">Surface Area (Square Meters)</label>
                <input
                  type="number"
                  {...register("sqm", { valueAsNumber: true })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-bulwark-orange focus:border-transparent outline-none transition-all"
                  placeholder="e.g. 250"
                />
                {errors.sqm && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.sqm.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-bulwark-slate mb-2">Surface Type</label>
                <select
                  {...register("surfaceType")}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-bulwark-orange outline-none transition-all"
                >
                  <option value="concrete">Raw Concrete</option>
                  <option value="plaster">Plastered Wall</option>
                  <option value="stone">Natural Stone</option>
                  <option value="metal">Structural Metal</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-bulwark-slate mb-2">Project Classification</label>
                <div className="grid grid-cols-3 gap-3">
                  {["residential", "commercial", "industrial"].map((type) => (
                    <label key={type} className="relative cursor-pointer">
                      <input
                        type="radio"
                        value={type}
                        {...register("projectType")}
                        className="peer sr-only"
                      />
                      <div className="bg-white border border-slate-200 rounded-lg py-3 text-center text-xs font-bold uppercase tracking-tighter text-slate-400 peer-checked:bg-bulwark-orange peer-checked:text-white peer-checked:border-bulwark-orange transition-all">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-4 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {loading ? <RefreshCcw className="animate-spin" /> : <span>Generate Precision Quote</span>}
              </button>
            </form>
          </div>

          {/* Results Side */}
          <div className="p-8 md:p-12 bg-bulwark-charcoal text-white relative">
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-white/20">
                    <Package size={40} />
                  </div>
                  <p className="text-white/40 text-sm italic">
                    Enter your project parameters to <br /> see material breakdown.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-bulwark-orange font-bold text-xs uppercase tracking-widest mb-1">Recommended</p>
                      <h3 className="text-2xl font-black">{result.recommendedProduct}</h3>
                    </div>
                    <div className="bg-green-500/20 text-green-400 p-2 rounded-lg">
                      <CheckCircle2 size={24} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <p className="text-white/40 text-xs uppercase mb-2">Total Bags Required</p>
                      <p className="text-4xl font-black text-white">{result.bags}</p>
                      <p className="text-[10px] text-white/20 mt-2">Based on {watch("sqm")}m² at standard application thickness.</p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <p className="text-white/40 text-xs uppercase mb-2">Estimated Investment</p>
                      <p className="text-3xl font-black text-bulwark-orange">KES {result.totalCost.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/40">Efficiency Score</span>
                      <span className="text-green-400 font-bold">{result.efficiencyScore}%</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${result.efficiencyScore}%` }}
                        className="bg-green-400 h-full"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 bg-white text-bulwark-charcoal font-bold py-3 rounded-xl text-sm flex items-center justify-center space-x-2 hover:bg-slate-200 transition-colors">
                      <Download size={16} />
                      <span>Datasheet</span>
                    </button>
                    <button className="flex-1 border border-white/20 hover:bg-white/5 font-bold py-3 rounded-xl text-sm transition-all">
                      Email Quote
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
