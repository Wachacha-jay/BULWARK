"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  FileText, 
  Package, 
  MapPin, 
  Users, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  ShieldCheck,
  Menu,
  X,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/admin/analytics", icon: TrendingUp },
  { name: "Blog Posts", href: "/admin/blog", icon: FileText },
  { name: "Product Catalog", href: "/admin/products", icon: Package },
  { name: "Distributors", href: "/admin/locations", icon: MapPin },
  { name: "Leads & Quotes", href: "/admin/leads", icon: Users },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (isLoginPage) return <>{children}</>;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-bulwark-charcoal text-white transition-all duration-300 transform",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
      )}>
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-10 h-10 bg-bulwark-orange rounded-lg flex items-center justify-center shrink-0">
              <ShieldCheck size={24} />
            </div>
            {isSidebarOpen && <span className="text-xl font-black tracking-tighter">BULWARK <span className="text-bulwark-orange text-xs">ADMIN</span></span>}
          </div>

          <nav className="flex-1 space-y-2">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center space-x-3 p-4 rounded-xl transition-all group",
                    isActive 
                      ? "bg-bulwark-orange text-white shadow-lg shadow-bulwark-orange/20" 
                      : "text-white/40 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Icon size={20} className={cn("shrink-0", isActive ? "text-white" : "group-hover:text-bulwark-orange")} />
                  {isSidebarOpen && <span className="font-bold text-sm">{link.name}</span>}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-white/5 space-y-2">
            <button className="flex items-center space-x-3 p-4 w-full text-white/40 hover:text-white transition-colors group">
              <Settings size={20} className="group-hover:rotate-45 transition-transform" />
              {isSidebarOpen && <span className="font-bold text-sm">Settings</span>}
            </button>
            <Link href="/admin/login" className="flex items-center space-x-3 p-4 w-full text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
              <LogOut size={20} />
              {isSidebarOpen && <span className="font-bold text-sm">Sign Out</span>}
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={cn(
        "flex-1 transition-all duration-300",
        isSidebarOpen ? "lg:ml-72" : "lg:ml-20"
      )}>
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg lg:hidden"
            >
              <Menu size={20} />
            </button>
            <div className="hidden md:flex items-center space-x-2 text-slate-400">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search command..." 
                className="bg-transparent border-none outline-none text-sm w-64"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative p-2 text-slate-400 hover:text-bulwark-charcoal transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-bulwark-orange rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center space-x-3 border-l pl-6 border-slate-200">
              <div className="text-right">
                <p className="text-sm font-bold text-bulwark-charcoal">Admin User</p>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Master Account</p>
              </div>
              <div className="w-10 h-10 bg-slate-200 rounded-full border-2 border-white shadow-sm overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="avatar" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
