"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, 
  ArrowRight, 
  ArrowLeft, 
  CloudRain, 
  Sun, 
  Waves, 
  Mountain, 
  Building2, 
  Home, 
  Factory 
} from "lucide-react";

type Step = "environment" | "surface" | "project" | "result";

export default function RecommendationTool() {
  const [step, setStep] = useState<Step>("environment");
  const [data, setData] = useState({
    climate: "",
    surface: "",
    type: "",
  });

  const nextStep = (field: string, value: string, next: Step) => {
    setData({ ...data, [field]: value });
    setStep(next);
  };

  const reset = () => {
    setData({ climate: "", surface: "", type: "" });
    setStep("environment");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 min-h-[500px] flex flex-col">
      <div className="bg-bulwark-slate p-6 text-white flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Compass className="text-bulwark-orange" />
          <h2 className="font-bold">Product Matchmaker</h2>
        </div>
        <div className="text-xs font-bold text-white/40 uppercase tracking-widest">
          {step !== "result" && `Step ${step === "environment" ? 1 : step === "surface" ? 2 : 3} of 3`}
        </div>
      </div>

      <div className="flex-1 p-8 md:p-12">
        <AnimatePresence mode="wait">
          {step === "environment" && (
            <motion.div
              key="env"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-bulwark-charcoal">What's the project climate?</h3>
                <p className="text-slate-500">Environmental factors significantly impact material longevity.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => nextStep("climate", "coastal", "surface")}
                  className="p-6 border-2 border-slate-100 rounded-2xl flex flex-col items-center space-y-4 hover:border-bulwark-orange hover:bg-orange-50 transition-all group"
                >
                  <Waves size={32} className="text-slate-400 group-hover:text-bulwark-orange" />
                  <div className="text-center">
                    <p className="font-bold text-bulwark-charcoal">Coastal / Humid</p>
                    <p className="text-xs text-slate-400">High salt & moisture (e.g. Mombasa)</p>
                  </div>
                </button>
                <button
                  onClick={() => nextStep("climate", "arid", "surface")}
                  className="p-6 border-2 border-slate-100 rounded-2xl flex flex-col items-center space-y-4 hover:border-bulwark-orange hover:bg-orange-50 transition-all group"
                >
                  <Sun size={32} className="text-slate-400 group-hover:text-bulwark-orange" />
                  <div className="text-center">
                    <p className="font-bold text-bulwark-charcoal">Arid / Hot</p>
                    <p className="text-xs text-slate-400">High UV & temperature (e.g. Lodwar)</p>
                  </div>
                </button>
                <button
                  onClick={() => nextStep("climate", "highland", "surface")}
                  className="p-6 border-2 border-slate-100 rounded-2xl flex flex-col items-center space-y-4 hover:border-bulwark-orange hover:bg-orange-50 transition-all group"
                >
                  <Mountain size={32} className="text-slate-400 group-hover:text-bulwark-orange" />
                  <div className="text-center">
                    <p className="font-bold text-bulwark-charcoal">Highland / Temperate</p>
                    <p className="text-xs text-slate-400">Moderate climate (e.g. Nairobi)</p>
                  </div>
                </button>
                <button
                  onClick={() => nextStep("climate", "wet", "surface")}
                  className="p-6 border-2 border-slate-100 rounded-2xl flex flex-col items-center space-y-4 hover:border-bulwark-orange hover:bg-orange-50 transition-all group"
                >
                  <CloudRain size={32} className="text-slate-400 group-hover:text-bulwark-orange" />
                  <div className="text-center">
                    <p className="font-bold text-bulwark-charcoal">Wet / Tropical</p>
                    <p className="text-xs text-slate-400">High rainfall (e.g. Kisumu)</p>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {step === "surface" && (
            <motion.div
              key="surface"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <button onClick={() => setStep("environment")} className="text-slate-400 flex items-center space-x-2 text-sm hover:text-bulwark-charcoal">
                <ArrowLeft size={14} /> <span>Back</span>
              </button>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-bulwark-charcoal">Select the application surface.</h3>
                <p className="text-slate-500">Different surfaces require specific adhesion properties.</p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {["Exterior Wall", "Interior Wall", "Foundation / Floor", "Roofing Deck"].map((s) => (
                  <button
                    key={s}
                    onClick={() => nextStep("surface", s.toLowerCase(), "project")}
                    className="p-4 border border-slate-200 rounded-xl flex justify-between items-center hover:border-bulwark-orange hover:bg-orange-50 transition-all font-bold text-bulwark-slate"
                  >
                    <span>{s}</span>
                    <ArrowRight size={18} className="text-bulwark-orange" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "project" && (
            <motion.div
              key="project"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <button onClick={() => setStep("surface")} className="text-slate-400 flex items-center space-x-2 text-sm hover:text-bulwark-charcoal">
                <ArrowLeft size={14} /> <span>Back</span>
              </button>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-bulwark-charcoal">Final step: Project type?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: "residential", label: "Residential", icon: Home },
                  { id: "commercial", label: "Commercial", icon: Building2 },
                  { id: "industrial", label: "Industrial", icon: Factory },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => nextStep("type", p.id, "result")}
                    className="p-6 border-2 border-slate-100 rounded-2xl flex flex-col items-center space-y-4 hover:border-bulwark-orange hover:bg-orange-50 transition-all group"
                  >
                    <p.icon size={28} className="text-slate-400 group-hover:text-bulwark-orange" />
                    <span className="font-bold text-bulwark-charcoal text-sm">{p.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8 py-4"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <Compass size={40} />
              </div>
              <div className="space-y-2">
                <p className="text-bulwark-orange font-bold uppercase tracking-widest text-xs">Your Perfect Match</p>
                <h3 className="text-3xl font-black text-bulwark-charcoal">Bulwark AquaShield Ultra</h3>
                <p className="text-slate-500 max-w-sm mx-auto">
                  Based on your {data.climate} environment and {data.surface} needs, we recommend our premium elastomeric waterproof coating.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 grid grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Key Benefit</p>
                  <p className="text-sm font-bold text-bulwark-slate">10-Year UV Protection</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Coverage</p>
                  <p className="text-sm font-bold text-bulwark-slate">~2.5m²/Litre</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 btn-primary">Download Technical PDF</button>
                <button onClick={reset} className="flex-1 border border-slate-200 hover:bg-slate-50 py-3 rounded-xl font-bold text-sm transition-all">
                  Start Over
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
