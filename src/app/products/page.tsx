import Image from "next/image";
import Link from "next/link";
import { Search, Filter, ArrowRight, Download, Shield } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";

const products = [
  {
    id: 1,
    name: "Premium Wall Skimming Filler",
    category: "Wall Putty",
    description: "Our flagship cement-based wall putty designed for both internal and external surfaces. Features advanced hydrophobic properties and a brilliant white finish for ultimate durability.",
    price: "950",
    rating: 5.0,
    image: "/images/premium-filler.jpeg",
  },
  {
    id: 2,
    name: "Internal Wall Skimming Filler",
    category: "Wall Putty",
    description: "Specially formulated for high-quality internal finishing. Provides a super-smooth texture that's easy to sand and paint, perfect for creating professional interior spaces.",
    price: "650",
    rating: 4.9,
    image: "/images/internal-filler.jpeg",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader 
        title="Product Catalog" 
        description="High-performance materials engineered for durability, efficiency, and intelligence."
      />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex w-full md:w-auto gap-3">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-bulwark-orange outline-none transition-all text-sm"
              />
            </div>
            <button className="p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition-all">
              <Filter size={20} className="text-bulwark-slate" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col h-full bg-white">
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                   <div className="bg-white/90 backdrop-blur px-2 py-1 rounded-md flex items-center space-x-1 text-[10px] font-bold text-bulwark-orange shadow-sm">
                      <Shield size={10} />
                      <span>Certified</span>
                   </div>
                </div>
                {/* Product Image */}
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700">
                   <Image 
                     src={p.image} 
                     alt={p.name} 
                     fill
                     className="object-cover"
                   />
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1 space-y-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-bulwark-orange mb-1">{p.category}</p>
                  <h3 className="font-bold text-lg text-bulwark-charcoal group-hover:text-bulwark-orange transition-colors">{p.name}</h3>
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  {p.description}
                </p>

                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">From</p>
                    <p className="font-black text-bulwark-charcoal">KES {p.price}</p>
                  </div>
                  <Link href={`/quote`} className="flex items-center gap-2 px-4 py-2 bg-bulwark-slate text-white rounded-full hover:bg-bulwark-orange transition-colors text-xs font-bold">
                    <span>Get Quote</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-bulwark-charcoal rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-black">Technical Documentation</h2>
            <p className="text-white/60">Download safety datasheets (SDS) and application guides for all products.</p>
          </div>
          <button className="btn-primary flex items-center space-x-3">
            <Download size={20} />
            <span>Access Library</span>
          </button>
        </div>
      </div>
    </div>
  );
}
