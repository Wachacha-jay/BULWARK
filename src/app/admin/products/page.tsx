"use client";

import { useState } from "react";
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  Package, 
  Tag, 
  BarChart3,
  Archive,
  ArrowUpRight,
  Filter,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const initialProducts = [
  { id: 1, name: "Premium Wall Skimming Filler", category: "Wall Putty", price: "2,450", status: "In Stock", sku: "WSF-001" },
  { id: 2, name: "AquaShield Waterproofing", category: "Waterproofing", price: "3,800", status: "Low Stock", sku: "ASW-002" },
  { id: 3, name: "Bulwark Tile Adhesive", category: "Adhesives", price: "1,200", status: "In Stock", sku: "BTA-003" },
  { id: 4, name: "Eco-Smooth Finish 20kg", category: "Finishing", price: "2,100", status: "In Stock", sku: "ESF-004" },
];

export default function ProductManager() {
  const [products] = useState(initialProducts);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-bulwark-charcoal tracking-tight">Product Catalog</h1>
          <p className="text-slate-500">Manage your product line, pricing, and technical specifications.</p>
        </div>
        <button className="btn-primary flex items-center space-x-2 px-6 py-3">
          <Plus size={20} />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Total Items</p>
            <p className="text-2xl font-black text-bulwark-charcoal">24 Products</p>
          </div>
          <div className="w-12 h-12 bg-bulwark-orange/10 rounded-2xl flex items-center justify-center text-bulwark-orange">
            <Package size={24} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Average Price</p>
            <p className="text-2xl font-black text-bulwark-charcoal">KES 2,380</p>
          </div>
          <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
            <Tag size={24} />
          </div>
        </div>
        <div className="bg-bulwark-charcoal p-6 rounded-3xl text-white flex items-center justify-between">
          <div>
            <p className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">Stock Status</p>
            <p className="text-2xl font-black">92% Healthy</p>
          </div>
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
            <BarChart3 size={24} />
          </div>
        </div>
      </div>

      {/* Catalog Table */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50/30">
          <div className="relative flex-1 w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search catalog by name or SKU..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-bulwark-orange transition-all text-sm"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all">
            <Filter size={18} />
            <span>Category</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Product Details</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category & SKU</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Pricing</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-300">
                        <Archive size={20} />
                      </div>
                      <p className="font-bold text-bulwark-charcoal group-hover:text-bulwark-orange transition-colors">{p.name}</p>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="space-y-1">
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[9px] font-black uppercase tracking-widest">{p.category}</span>
                      <p className="text-[10px] text-slate-400 font-mono">{p.sku}</p>
                    </div>
                  </td>
                  <td className="p-6">
                    <p className="font-black text-bulwark-charcoal">KES {p.price}</p>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center space-x-2">
                      {p.status === "In Stock" ? (
                        <CheckCircle2 size={16} className="text-emerald-500" />
                      ) : (
                        <AlertCircle size={16} className="text-amber-500" />
                      )}
                      <span className={cn(
                        "text-xs font-bold",
                        p.status === "In Stock" ? "text-emerald-600" : "text-amber-600"
                      )}>
                        {p.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-white hover:shadow-md rounded-lg text-slate-400 hover:text-bulwark-orange transition-all">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 hover:bg-white hover:shadow-md rounded-lg text-slate-400 hover:text-bulwark-charcoal transition-all">
                        <ArrowUpRight size={18} />
                      </button>
                      <button className="p-2 hover:bg-white hover:shadow-md rounded-lg text-red-300 hover:text-red-500 transition-all">
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
