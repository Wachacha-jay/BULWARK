"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Save, 
  MapPin, 
  Building2, 
  Phone, 
  Globe,
  Navigation,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

export default function NewLocation() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/admin/locations");
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <Link href="/admin/locations" className="flex items-center space-x-2 text-slate-400 hover:text-bulwark-charcoal transition-colors font-bold text-sm">
          <ArrowLeft size={18} />
          <span>Back to Locations</span>
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
              <span>Save Distributor</span>
            </>
          )}
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
        <div className="p-10 space-y-10">
          <div className="space-y-4">
            <h1 className="text-3xl font-black text-bulwark-charcoal tracking-tight">Add Authorized Partner</h1>
            <p className="text-slate-500">Register a new distributor hub in the Bulwark supply chain network.</p>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Shop Name */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Building2 size={14} className="text-bulwark-orange" />
                  Distributor Name
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Master Build Hardware"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-bulwark-orange transition-all font-bold text-slate-700"
                />
              </div>

              {/* Region Selector */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Globe size={14} className="text-bulwark-orange" />
                  Region
                </label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-bulwark-orange transition-all font-bold text-slate-600">
                  <option>Nairobi & Environs</option>
                  <option>Coast Region</option>
                  <option>Rift Valley</option>
                  <option>Central Region</option>
                  <option>Nyanza & Western</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                <MapPin size={14} className="text-bulwark-orange" />
                Physical Address
              </label>
              <input 
                type="text" 
                placeholder="e.g. Plot 45, Enterprise Road, Industrial Area"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-bulwark-orange transition-all font-bold text-slate-700"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Phone size={14} className="text-bulwark-orange" />
                  Primary Phone
                </label>
                <input 
                  type="text" 
                  placeholder="+254 7XX XXX XXX"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-bulwark-orange transition-all font-bold text-slate-700"
                />
              </div>

              {/* Status Toggle */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Activation Status</label>
                <div className="flex gap-4">
                  <label className="flex-1 flex items-center justify-center p-4 rounded-2xl border-2 border-slate-100 cursor-pointer hover:border-bulwark-orange transition-all has-[:checked]:bg-bulwark-orange/5 has-[:checked]:border-bulwark-orange">
                    <input type="radio" name="status" value="active" defaultChecked className="hidden" />
                    <span className="font-bold text-sm text-emerald-600">Active Map</span>
                  </label>
                  <label className="flex-1 flex items-center justify-center p-4 rounded-2xl border-2 border-slate-100 cursor-pointer hover:border-bulwark-orange transition-all has-[:checked]:bg-bulwark-orange/5 has-[:checked]:border-bulwark-orange">
                    <input type="radio" name="status" value="hidden" className="hidden" />
                    <span className="font-bold text-sm text-slate-400">Hidden / Draft</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Map Integration Tip */}
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm text-bulwark-orange shrink-0">
                <Navigation size={20} />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-bulwark-charcoal">Smart Map Integration</p>
                <p className="text-xs text-slate-500 leading-relaxed">The system will automatically geocode this address and place a pin on the public distributor locator for your customers.</p>
              </div>
            </div>
          </form>
        </div>

        <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end">
          <div className="flex gap-4">
             <button className="text-sm font-bold text-slate-400 hover:text-red-500 transition-colors">Cancel</button>
             <button className="btn-primary px-12 py-3" onClick={handleSubmit}>Create Partner Hub</button>
          </div>
        </div>
      </div>
    </div>
  );
}
