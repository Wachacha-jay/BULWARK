"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Plus, 
  Search, 
  MapPin, 
  Navigation, 
  Phone, 
  Edit2, 
  Trash2, 
  Globe,
  ArrowRight,
  ShieldCheck,
  Building2,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const initialLocations = [
  { id: 1, name: "BuildTech Solutions", region: "Nairobi", address: "Industrial Area, Enterprise Rd", phone: "+254 711 000 111", status: "Active" },
  { id: 2, name: "Coastal Builders", region: "Mombasa", address: "Nyali, Links Rd", phone: "+254 711 000 333", status: "Active" },
  { id: 3, name: "Rift Valley Paints", region: "Nakuru", address: "Kenyatta Ave", phone: "+254 711 000 555", status: "Pending Approval" },
  { id: 4, name: "Highland Hardware", region: "Eldoret", address: "Uganda Rd", phone: "+254 711 000 666", status: "Active" },
];

export default function LocationManager() {
  const [locations] = useState(initialLocations);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-bulwark-charcoal tracking-tight">Location Manager</h1>
          <p className="text-slate-500">Manage your authorized distributor network and site-wide locator map.</p>
        </div>
        <Link href="/admin/locations/new" className="btn-primary flex items-center space-x-2 px-6 py-3 text-white">
          <Plus size={20} />
          <span>Add New Location</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Quick Stats */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="w-10 h-10 bg-bulwark-orange/10 rounded-xl flex items-center justify-center text-bulwark-orange mb-4">
            <Building2 size={20} />
          </div>
          <p className="text-2xl font-black text-bulwark-charcoal">{locations.length}</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Shops</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-4">
            <Globe size={20} />
          </div>
          <p className="text-2xl font-black text-bulwark-charcoal">6 Cities</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Regional Coverage</p>
        </div>
        <div className="lg:col-span-2 bg-bulwark-charcoal p-6 rounded-3xl text-white flex items-center justify-between shadow-2xl shadow-slate-200">
          <div className="space-y-1">
            <p className="text-xl font-bold italic">"Expand with Quality."</p>
            <p className="text-white/40 text-xs">Ready to add a new territory? Our system automates the setup.</p>
          </div>
          <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Locations Table */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50/30">
          <div className="relative flex-1 w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by city, shop name or address..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-bulwark-orange transition-all text-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Distributor Hub</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Region</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Contact Info</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {locations.map((loc) => (
                <tr key={loc.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-bulwark-orange/10 group-hover:text-bulwark-orange transition-colors">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="font-bold text-bulwark-charcoal">{loc.name}</p>
                        <p className="text-xs text-slate-400">{loc.address}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {loc.region}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <Phone size={14} className="text-bulwark-orange" />
                      <span>{loc.phone}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        loc.status === "Active" ? "bg-emerald-500" : "bg-amber-500"
                      )} />
                      <span className={cn(
                        "text-xs font-bold",
                        loc.status === "Active" ? "text-emerald-600" : "text-amber-600"
                      )}>
                        {loc.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex items-center justify-end space-x-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                      <button className="p-2 bg-slate-50 lg:hover:bg-white hover:shadow-md rounded-lg text-slate-400 hover:text-bulwark-orange transition-all">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 bg-slate-50 lg:hover:bg-white hover:shadow-md rounded-lg text-slate-400 hover:text-bulwark-charcoal transition-all">
                        <Navigation size={18} />
                      </button>
                      <button className="p-2 bg-slate-50 lg:hover:bg-white hover:shadow-md rounded-lg text-red-300 hover:text-red-500 transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
