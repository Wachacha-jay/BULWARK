"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  Eye, 
  Calendar, 
  User,
  Filter,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const initialPosts = [
  { id: 1, title: "The Future of Smart Construction in Kenya", category: "Technology", author: "Admin", date: "2024-05-08", status: "Published", views: 1240 },
  { id: 2, title: "Why German Technology Matters in Wall Filling", category: "Quality", author: "Tech Team", date: "2024-05-06", status: "Published", views: 890 },
  { id: 3, title: "Cost Savings for Commercial Developers", category: "B2B", author: "Sales Hub", date: "2024-05-01", status: "Draft", views: 0 },
  { id: 4, title: "Introducing Eco-Smooth Finish 2024", category: "Products", author: "Admin", date: "2024-04-28", status: "Published", views: 2100 },
];

export default function BlogManager() {
  const [posts, setPosts] = useState(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-bulwark-charcoal tracking-tight">Blog Manager</h1>
          <p className="text-slate-500">Create, edit and manage your architectural and technical articles.</p>
        </div>
        <Link href="/admin/blog/new" className="btn-primary flex items-center space-x-2 px-6 py-3 text-white">
          <Plus size={20} />
          <span>Write New Article</span>
        </Link>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search articles by title or keyword..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-bulwark-orange transition-all text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center space-x-2 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center space-x-2 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all">
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Article Title</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Author & Date</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-6">
                    <div className="space-y-1">
                      <p className="font-bold text-bulwark-charcoal group-hover:text-bulwark-orange transition-colors">{post.title}</p>
                      <p className="text-xs text-slate-400 flex items-center gap-2">
                        <Eye size={12} /> {post.views.toLocaleString()} impressions
                      </p>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                        <User size={14} />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-sm font-bold text-bulwark-charcoal">{post.author}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{post.date}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {post.category}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center space-x-2">
                      {post.status === "Published" ? (
                        <CheckCircle2 size={16} className="text-emerald-500" />
                      ) : (
                        <Clock size={16} className="text-amber-500" />
                      )}
                      <span className={cn(
                        "text-xs font-bold",
                        post.status === "Published" ? "text-emerald-600" : "text-amber-600"
                      )}>
                        {post.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex items-center justify-end space-x-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                      <button className="p-2 bg-slate-50 lg:hover:bg-white hover:shadow-md rounded-lg text-slate-400 hover:text-bulwark-orange transition-all">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 bg-slate-50 lg:hover:bg-white hover:shadow-md rounded-lg text-slate-400 hover:text-bulwark-charcoal transition-all">
                        <Eye size={18} />
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
        <div className="p-6 bg-slate-50/50 flex justify-between items-center text-xs text-slate-400">
          <p>Showing {posts.length} of {posts.length} articles</p>
          <div className="flex space-x-2">
            <button className="p-2 bg-white border border-slate-200 rounded-lg disabled:opacity-50" disabled>Previous</button>
            <button className="p-2 bg-white border border-slate-200 rounded-lg disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
