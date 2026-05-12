"use client";

import { useState } from "react";
import { 
  Users, 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal, 
  Mail, 
  Phone, 
  Calculator,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Mock Lead Data
const leads = [
  {
    id: "LD-8821",
    customer: "James Kamau",
    contact: "+254 722 000 111",
    email: "james.k@buildco.ke",
    project: "Highland Residency",
    quote: "KES 145,000",
    items: "50 Bags Wall Filler, 12L Primer",
    status: "New",
    date: "2024-05-09",
    time: "14:30"
  },
  {
    id: "LD-8822",
    customer: "Fatima Ali",
    contact: "+254 733 999 888",
    email: "f.ali@coastprojects.com",
    project: "Beachfront Villa",
    quote: "KES 85,400",
    items: "30 Bags Premium Putty",
    status: "Contacted",
    date: "2024-05-09",
    time: "11:15"
  },
  {
    id: "LD-8823",
    customer: "Samuel Otieno",
    contact: "+254 711 555 444",
    email: "s.otieno@lakeside.ke",
    project: "Kisumu Plaza",
    quote: "KES 1,240,000",
    items: "400 Bags Bulk Filler",
    status: "Converted",
    date: "2024-05-08",
    time: "16:45"
  },
  {
    id: "LD-8824",
    customer: "Eng. David Maina",
    contact: "+254 700 123 456",
    email: "d.maina@landmark.co.ke",
    project: "Skyline Towers",
    quote: "KES 560,000",
    items: "200 Bags Wall Filler",
    status: "New",
    date: "2024-05-08",
    time: "09:20"
  }
];

export default function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-bulwark-charcoal tracking-tight flex items-center gap-3">
            Leads & Quotes
            <span className="px-3 py-1 bg-bulwark-orange/10 text-bulwark-orange text-[10px] font-black uppercase tracking-widest rounded-full">
              {leads.length} Active
            </span>
          </h1>
          <p className="text-slate-500 text-sm">Manage quote requests and customer inquiries from the calculator.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center space-x-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all">
            <Download size={18} />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center">
            <CheckCircle2 size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Conversion Rate</p>
            <p className="text-2xl font-black text-bulwark-charcoal">24%</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="w-14 h-14 bg-bulwark-orange/10 text-bulwark-orange rounded-2xl flex items-center justify-center">
            <Calculator size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Pipeline</p>
            <p className="text-2xl font-black text-bulwark-charcoal">KES 4.2M</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="w-14 h-14 bg-blue-500/10 text-blue-600 rounded-2xl flex items-center justify-center">
            <Clock size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg. Response</p>
            <p className="text-2xl font-black text-bulwark-charcoal">2.5 hrs</p>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by customer or project..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-bulwark-orange/20 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:text-bulwark-charcoal transition-colors">
              <Filter size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Customer</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Project & Value</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Calculated Items</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-bulwark-charcoal">{lead.customer}</span>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
                          <Phone size={10} className="text-bulwark-orange" /> {lead.contact}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
                          <Mail size={10} className="text-bulwark-orange" /> {lead.email}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-bulwark-charcoal">{lead.project}</span>
                      <span className="text-bulwark-orange font-black text-sm mt-1">{lead.quote}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs text-slate-500 italic">"{lead.items}"</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                      lead.status === "New" && "bg-bulwark-orange/10 text-bulwark-orange",
                      lead.status === "Contacted" && "bg-blue-500/10 text-blue-600",
                      lead.status === "Converted" && "bg-emerald-500/10 text-emerald-600"
                    )}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col text-right">
                      <span className="text-xs font-bold text-bulwark-charcoal">{lead.date}</span>
                      <span className="text-[10px] text-slate-400">{lead.time}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-3 bg-slate-50 lg:bg-transparent lg:hover:bg-white rounded-xl text-slate-400 hover:text-bulwark-charcoal transition-all">
                      <MoreHorizontal size={20} />
                    </button>
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
