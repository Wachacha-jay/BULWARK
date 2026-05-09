"use client";

import { FileText, Package, MapPin, Users, TrendingUp, ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

const stats = [
  { name: "Blog Posts", value: "12", icon: FileText, color: "bg-blue-500", trend: "+2 this month" },
  { name: "Products", value: "24", icon: Package, color: "bg-orange-500", trend: "Fully Stocked" },
  { name: "Distributors", value: "8", icon: MapPin, color: "bg-green-500", trend: "6 Cities Covered" },
  { name: "Leads", value: "148", icon: Users, color: "bg-indigo-500", trend: "+12% vs last week" },
];

const recentActivity = [
  { action: "New Blog Post", target: "The Future of Smart Construction", time: "2 hours ago", user: "Admin" },
  { action: "Price Updated", target: "AquaShield Waterproofing", time: "5 hours ago", user: "Admin" },
  { action: "Location Added", target: "Thika Garissa Rd Hardware", time: "1 day ago", user: "Admin" },
  { action: "Inventory Sync", target: "Full Product Catalog", time: "2 days ago", user: "System" },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-bulwark-charcoal tracking-tight">Command Center</h1>
          <p className="text-slate-500">Welcome back! Here's what's happening across the Bulwark network.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/blog" className="flex items-center space-x-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all">
            <Plus size={18} />
            <span>New Blog</span>
          </Link>
          <Link href="/admin/products" className="btn-primary flex items-center space-x-2 px-4 py-2 text-sm">
            <Plus size={18} />
            <span>Add Product</span>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg", stat.color)}>
                <stat.icon size={24} />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.trend}</span>
            </div>
            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">{stat.name}</h3>
            <p className="text-3xl font-black text-bulwark-charcoal">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-bulwark-charcoal flex items-center gap-2">
            <TrendingUp size={20} className="text-bulwark-orange" />
            Recent Activity
          </h2>
          <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm">
            <div className="divide-y divide-slate-50">
              {recentActivity.map((item, i) => (
                <div key={i} className="p-6 hover:bg-slate-50 transition-colors flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-bulwark-orange" />
                    <div>
                      <p className="text-sm font-bold text-bulwark-charcoal">
                        {item.action}: <span className="text-slate-500 font-normal">{item.target}</span>
                      </p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">by {item.user} • {item.time}</p>
                    </div>
                  </div>
                  <button className="p-2 text-slate-300 hover:text-bulwark-orange transition-colors">
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              ))}
            </div>
            <Link href="/admin/activity" className="block w-full py-4 text-center text-xs font-black uppercase text-slate-400 bg-slate-50/50 hover:bg-slate-50 hover:text-bulwark-charcoal transition-all">
              View All Activity
            </Link>
          </div>
        </div>

        {/* System Health / Quick Tips */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-bulwark-charcoal">Quick Actions</h2>
          <div className="bg-bulwark-charcoal p-8 rounded-[2.5rem] text-white space-y-6 shadow-2xl shadow-slate-200">
            <div className="space-y-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Global Site Update</p>
                <p className="font-bold flex items-center justify-between">
                  Refresh Cache
                  <ArrowUpRight size={16} className="text-bulwark-orange opacity-0 group-hover:opacity-100 transition-all" />
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Analytics</p>
                <p className="font-bold flex items-center justify-between">
                  Generate Report
                  <ArrowUpRight size={16} className="text-bulwark-orange opacity-0 group-hover:opacity-100 transition-all" />
                </p>
              </div>
              <div className="p-4 bg-bulwark-orange text-white rounded-2xl hover:bg-white hover:text-bulwark-charcoal transition-all cursor-pointer font-bold text-center">
                Review New Leads
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function for class names
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
