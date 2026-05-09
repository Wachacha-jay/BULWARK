import Image from "next/image";
import Link from "next/link";
import { Search, Filter, ArrowRight, Download, Shield } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";

const products = [
  {
    id: 1,
    name: "Premium Wall Skimming Filler",
    category: "Wall Putty",
    description: "Cement-based wall putty for internal and external surfaces. Brilliant white and hydrophobic.",
    price: "2,450",
    rating: 5.0,
    image: "/images/product-1.jpg",
  },
  {
    id: 2,
    name: "AquaShield Waterproofing",
    category: "Waterproofing",
    description: "High-performance elastomeric waterproofing for roofs and wet areas.",
    price: "3,800",
    rating: 4.8,
    image: "/images/product-2.jpg",
  },
  {
    id: 3,
    name: "Bulwark Tile Adhesive",
    category: "Adhesives",
    description: "Strong bond adhesive for ceramic and porcelain tiles in high-traffic areas.",
    price: "1,200",
    rating: 4.9,
    image: "/images/product-3.jpg",
  },
  {
    id: 4,
    name: "Eco-Smooth Finish",
    category: "Finishing",
    description: "Eco-friendly, low-dust sanding finish for high-end interior decorations.",
    price: "2,100",
    rating: 4.7,
    image: "/images/product-4.jpg",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col h-full bg-white">
              <div className="aspect-square bg-slate-100 relative overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                   <div className="bg-white/90 backdrop-blur px-2 py-1 rounded-md flex items-center space-x-1 text-[10px] font-bold text-bulwark-orange shadow-sm">
                      <Shield size={10} />
                      <span>Certified</span>
                   </div>
                </div>
                {/* Product Image */}
                <div className="absolute inset-0 p-6 group-hover:scale-110 transition-transform duration-700">
                   <img 
                     src="/images/product.png" 
                     alt={p.name} 
                     className="w-full h-full object-contain"
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
                  <Link href={`/products/${p.id}`} className="w-10 h-10 bg-bulwark-slate text-white rounded-full flex items-center justify-center hover:bg-bulwark-orange transition-colors">
                    <ArrowRight size={18} />
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

function Package({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
