"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Save, 
  Package, 
  Tag, 
  DollarSign, 
  Database,
  ShieldCheck,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

export default function NewProduct() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/admin/products");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <Link href="/admin/products" className="flex items-center space-x-2 text-slate-400 hover:text-bulwark-charcoal transition-colors font-bold text-sm">
          <ArrowLeft size={18} />
          <span>Back to Catalog</span>
        </Link>
        <button 
          onClick={handleSubmit}
          disabled={isLoading}
          className="btn-primary px-10 py-3 flex items-center gap-2"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Save size={18} />
              <span>Save Product</span>
            </>
          )}
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
        <div className="p-10 space-y-10">
          <div className="space-y-4">
            <h1 className="text-3xl font-black text-bulwark-charcoal tracking-tight">Add New Product</h1>
            <p className="text-slate-500">List a new construction material with its technical specs and pricing.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column: Core Details */}
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Package size={14} className="text-bulwark-orange" />
                  Product Name
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Premium Wall Filler 25kg"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-bulwark-orange transition-all font-bold text-slate-700"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Tag size={14} className="text-bulwark-orange" />
                  Category
                </label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-bulwark-orange transition-all font-bold text-slate-600">
                  <option>Wall Putty</option>
                  <option>Waterproofing</option>
                  <option>Adhesives</option>
                  <option>Finishing</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <DollarSign size={14} className="text-bulwark-orange" />
                    Price (KES)
                  </label>
                  <input 
                    type="text" 
                    placeholder="2,450"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-bulwark-orange transition-all font-black text-bulwark-charcoal"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Database size={14} className="text-bulwark-orange" />
                    SKU Code
                  </label>
                  <input 
                    type="text" 
                    placeholder="BWI-WS-01"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-bulwark-orange transition-all font-mono font-bold text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Stock Status</label>
                <div className="flex gap-4">
                  <label className="flex-1 flex items-center justify-center p-4 rounded-2xl border-2 border-slate-100 cursor-pointer hover:border-bulwark-orange transition-all has-[:checked]:bg-bulwark-orange/5 has-[:checked]:border-bulwark-orange">
                    <input type="radio" name="status" value="in-stock" defaultChecked className="hidden" />
                    <span className="font-bold text-sm">In Stock</span>
                  </label>
                  <label className="flex-1 flex items-center justify-center p-4 rounded-2xl border-2 border-slate-100 cursor-pointer hover:border-bulwark-orange transition-all has-[:checked]:bg-bulwark-orange/5 has-[:checked]:border-bulwark-orange">
                    <input type="radio" name="status" value="out-stock" className="hidden" />
                    <span className="font-bold text-sm text-slate-400">Out of Stock</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column: Visuals & Tech Specs */}
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <ImageIcon size={14} className="text-bulwark-orange" />
                  Product Image
                </label>
                <div className="aspect-square border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center p-8 text-center space-y-4 hover:border-bulwark-orange/30 hover:bg-slate-50 transition-all cursor-pointer">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
                    <ImageIcon size={32} />
                  </div>
                  <p className="font-bold text-sm text-slate-600">Upload Product Render</p>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Key Specifications</label>
                <textarea 
                  rows={5}
                  placeholder="e.g. Coverage: 40-50 sq.ft per kg. Pot life: 2 hours..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-bulwark-orange transition-all resize-none text-sm text-slate-600"
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end">
           <div className="flex gap-4">
             <button className="text-sm font-bold text-slate-400 hover:text-red-500 transition-colors">Cancel</button>
             <button className="btn-primary px-12 py-3" onClick={handleSubmit}>Add to Catalog</button>
           </div>
        </div>
      </div>
    </div>
  );
}
