"use client";

import { useState, useEffect } from "react";
import { 
  TrendingUp, 
  Users, 
  MousePointer2, 
  Clock, 
  ArrowUpRight, 
  ArrowDownRight,
  Globe,
  Monitor,
  Smartphone,
  Search,
  Filter,
  Download,
  Activity
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Mock Data
const trafficStats = [
  { label: "Active Users", value: "148", trend: "+12%", up: true, icon: Users },
  { label: "Conversion Rate", value: "3.2%", trend: "+0.4%", up: true, icon: Activity },
  { label: "Avg. Session", value: "4m 12s", trend: "-8s", up: false, icon: Clock },
  { label: "Bounce Rate", value: "42%", trend: "-2%", up: true, icon: MousePointer2 },
];

const regionalData = [
  { city: "Nairobi", users: 1240, share: "45%", trend: "+15%" },
  { city: "Mombasa", users: 890, share: "32%", trend: "+8%" },
  { city: "Kisumu", users: 420, share: "15%", trend: "+22%" },
  { city: "Nakuru", users: 210, share: "8%", trend: "+5%" },
];

export default function AnalyticsDashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-bulwark-charcoal tracking-tight flex items-center gap-3">
            Analytics Intelligence
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Live
            </span>
          </h1>
          <p className="text-slate-500 text-sm">Real-time performance monitoring and market intelligence.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center space-x-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all">
            <Download size={18} />
            <span>Export Report</span>
          </button>
          <div className="flex items-center space-x-2 bg-bulwark-charcoal text-white px-4 py-2.5 rounded-xl text-sm font-bold">
            <Filter size={18} className="text-bulwark-orange" />
            <span>Last 30 Days</span>
          </div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trafficStats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-bulwark-orange/10 group-hover:text-bulwark-orange transition-all">
                <stat.icon size={20} />
              </div>
              <div className={cn(
                "flex items-center text-[10px] font-black px-2 py-1 rounded-lg",
                stat.up ? "bg-emerald-500/10 text-emerald-600" : "bg-red-500/10 text-red-600"
              )}>
                {stat.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {stat.trend}
              </div>
            </div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-2xl font-black text-bulwark-charcoal">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
          <div className="flex justify-between items-center">
            <h3 className="font-black text-bulwark-charcoal uppercase tracking-widest text-xs flex items-center gap-2">
              <TrendingUp size={16} className="text-bulwark-orange" />
              Traffic Velocity
            </h3>
            <div className="flex gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-bulwark-orange" /> Current</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-slate-200" /> Previous</div>
            </div>
          </div>
          
          {/* Custom SVG Area Chart Mock */}
          <div className="h-64 w-full relative pt-4">
            <svg viewBox="0 0 1000 200" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF5400" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#FF5400" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line x1="0" y1="50" x2="1000" y2="50" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="100" x2="1000" y2="100" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="150" x2="1000" y2="150" stroke="#f1f5f9" strokeWidth="1" />
              
              {/* Prev Period Line */}
              <motion.path
                d="M0,180 Q100,160 200,170 T400,140 T600,160 T800,130 T1000,150"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              
              {/* Main Area */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M0,150 Q100,120 200,140 T400,80 T600,110 T800,40 T1000,70 L1000,200 L0,200 Z"
                fill="url(#gradient)"
              />
              {/* Main Line */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M0,150 Q100,120 200,140 T400,80 T600,110 T800,40 T1000,70"
                fill="none"
                stroke="#FF5400"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Data Points */}
              <circle cx="400" cy="80" r="6" fill="#FF5400" className="animate-pulse" />
              <circle cx="800" cy="40" r="6" fill="#FF5400" className="animate-pulse" />
            </svg>
            <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] font-black text-slate-300 uppercase tracking-widest pt-4">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
        </div>

        {/* Device & Location */}
        <div className="space-y-8">
          <div className="bg-bulwark-charcoal p-8 rounded-[2.5rem] text-white space-y-6 shadow-2xl shadow-slate-200">
            <h3 className="font-black uppercase tracking-widest text-xs flex items-center gap-2">
              <Globe size={16} className="text-bulwark-orange" />
              Regional Market
            </h3>
            <div className="space-y-4">
              {regionalData.map((region, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span>{region.city}</span>
                    <span className="text-bulwark-orange">{region.share}</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: region.share }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                      className="h-full bg-bulwark-orange" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
            <h3 className="font-black text-bulwark-charcoal uppercase tracking-widest text-xs flex items-center gap-2">
              <Monitor size={16} className="text-bulwark-orange" />
              Device Ecosystem
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-bulwark-charcoal">
                  <Smartphone size={24} />
                </div>
                <div>
                  <p className="text-sm font-black text-bulwark-charcoal">68% Mobile</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Phone & Tablet</p>
                </div>
              </div>
              <div className="text-emerald-500 font-black text-xs">+4%</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-bulwark-charcoal">
                  <Monitor size={24} />
                </div>
                <div>
                  <p className="text-sm font-black text-bulwark-charcoal">32% Desktop</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Workstations</p>
                </div>
              </div>
              <div className="text-slate-300 font-black text-xs">-4%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
