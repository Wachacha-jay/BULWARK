"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { Store, Truck, Handshake, BarChart, MapPin, Phone, ExternalLink, Search, Globe, ChevronRight, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

const regions = [
  { 
    name: "Nairobi & Environs", 
    distributors: [
      { name: "BuildTech Solutions", address: "Industrial Area, Enterprise Rd", phone: "+254 711 000 111", type: "Wholesale" },
      { name: "Capital Hardware", address: "Westlands, Ring Rd", phone: "+254 711 000 222", type: "Retail" },
      { name: "Karen Construction Hub", address: "Karen, Ngong Rd", phone: "+254 711 000 888", type: "Retail" },
    ]
  },
  { 
    name: "Coast Region", 
    distributors: [
      { name: "Coastal Builders", address: "Nyali, Links Rd", phone: "+254 711 000 333", type: "Wholesale" },
      { name: "Mombasa Paints", address: "Moi Avenue", phone: "+254 711 000 444", type: "Retail" },
    ]
  },
  { 
    name: "Rift Valley", 
    distributors: [
      { name: "Rift Valley Paints", address: "Nakuru, Kenyatta Ave", phone: "+254 711 000 555", type: "Wholesale" },
      { name: "Highland Hardware", address: "Eldoret, Uganda Rd", phone: "+254 711 000 666", type: "Retail" },
    ]
  },
  { 
    name: "Central Region", 
    distributors: [
      { name: "Garissa Rd Hardware", address: "Thika, Garissa Rd", phone: "+254 711 000 777", type: "Retail" },
    ]
  }
];

export default function DistributorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDist, setSelectedDist] = useState(regions[0].distributors[0]);

  // Simple search logic
  const allDistributors = regions.flatMap(r => r.distributors);
  const filteredDistributors = allDistributors.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      <PageHeader 
        title="Distributor Explorer" 
        description="Our high-performance supply chain network spans across East Africa. Find a technical partner near you."
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enterprise Locator Tool */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100 flex flex-col lg:flex-row h-[700px]">
            
            {/* Sidebar: Search & List */}
            <div className="w-full lg:w-[400px] border-r border-slate-100 flex flex-col bg-white">
              <div className="p-6 border-b border-slate-50 bg-slate-50/50">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search by city or shop name..."
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-bulwark-orange transition-all text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar">
                {searchQuery ? (
                  <div className="p-4 space-y-2">
                    <p className="text-xs font-bold text-slate-400 uppercase px-2 mb-4">Search Results</p>
                    {filteredDistributors.map((dist, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedDist(dist)}
                        className={cn(
                          "w-full text-left p-4 rounded-2xl transition-all border-2",
                          selectedDist.name === dist.name 
                            ? "bg-bulwark-orange/5 border-bulwark-orange" 
                            : "bg-transparent border-transparent hover:bg-slate-50"
                        )}
                      >
                        <p className="font-bold text-bulwark-charcoal">{dist.name}</p>
                        <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                          <MapPin size={12} /> {dist.address}
                        </p>
                      </button>
                    ))}
                  </div>
                ) : (
                  regions.map((region, idx) => (
                    <div key={idx} className="p-4">
                      <p className="text-xs font-bold text-slate-400 uppercase px-2 mb-4 tracking-widest">{region.name}</p>
                      <div className="space-y-2">
                        {region.distributors.map((dist, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedDist(dist)}
                            className={cn(
                              "w-full text-left p-4 rounded-2xl transition-all border-2",
                              selectedDist.name === dist.name 
                                ? "bg-bulwark-orange/5 border-bulwark-orange" 
                                : "bg-transparent border-transparent hover:bg-slate-50"
                            )}
                          >
                            <div className="flex justify-between items-start">
                              <p className="font-bold text-bulwark-charcoal">{dist.name}</p>
                              <span className="text-[10px] font-black uppercase px-2 py-1 bg-slate-100 rounded text-slate-500">{dist.type}</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                              <MapPin size={12} /> {dist.address}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Main View: Active Distributor Details */}
            <div className="flex-1 p-8 lg:p-12 bg-white flex flex-col relative">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -z-0" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="mb-12">
                  <span className="bg-bulwark-orange/10 text-bulwark-orange text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest">
                    Authorized Partner
                  </span>
                  <h2 className="text-5xl font-black text-bulwark-charcoal mt-6 tracking-tight">
                    {selectedDist.name}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-4">Location & Logistics</p>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-bulwark-orange">
                        <Navigation size={20} />
                      </div>
                      <div>
                        <p className="text-bulwark-charcoal font-bold">{selectedDist.address}</p>
                        <p className="text-sm text-slate-500 mt-1 italic">Nairobi CBD Hub</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-4">Contact Support</p>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-bulwark-orange">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-bulwark-charcoal font-bold">{selectedDist.phone}</p>
                        <p className="text-sm text-slate-500 mt-1">Available 8am - 5pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="flex-1 bg-slate-200 rounded-3xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/36.8219,1.2921,12,0/800x400?access_token=YOUR_MAPBOX_TOKEN')] bg-cover bg-center grayscale opacity-50 group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center bg-bulwark-charcoal/40 backdrop-blur-sm group-hover:backdrop-blur-none transition-all">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-bulwark-orange rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <MapPin size={32} />
                      </div>
                      <p className="font-bold">Interactive View Enabled</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <button className="btn-primary flex-1 py-4 flex items-center justify-center gap-3">
                    <Navigation size={20} />
                    Get Driving Directions
                  </button>
                  <button className="btn-outline px-8">
                    <Globe size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits (Compact) */}
      <section className="pb-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
            <div className="w-12 h-12 bg-bulwark-orange/10 rounded-xl flex items-center justify-center text-bulwark-orange">
              <Handshake size={24} />
            </div>
            <h3 className="text-2xl font-black text-bulwark-charcoal">Global Standards</h3>
            <p className="text-slate-500 leading-relaxed">Access to German-engineered construction technology and ISO certified supply chains.</p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
              <Truck size={24} />
            </div>
            <h3 className="text-2xl font-black text-bulwark-charcoal">Just-In-Time</h3>
            <p className="text-slate-500 leading-relaxed">Our advanced logistics platform ensures your stock is always optimized and ready for demand.</p>
          </div>
          <div className="bg-bulwark-charcoal p-10 rounded-[2rem] text-white space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black">Become a Partner</h3>
              <p className="text-white/50 mt-2">Join our network and gain access to exclusive tools and territories.</p>
            </div>
            <button className="btn-primary w-full py-4 text-center">Start Application</button>
          </div>
        </div>
      </section>
    </div>
  );
}
