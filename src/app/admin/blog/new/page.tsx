"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Save, 
  Image as ImageIcon, 
  Type, 
  Tag, 
  Eye, 
  CheckCircle2,
  X
} from "lucide-react";
import Link from "next/link";

export default function NewBlogPost() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/admin/blog");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <Link href="/admin/blog" className="flex items-center space-x-2 text-slate-400 hover:text-bulwark-charcoal transition-colors font-bold text-sm">
          <ArrowLeft size={18} />
          <span>Back to Articles</span>
        </Link>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
            <Eye size={18} />
            <span>Preview</span>
          </button>
          <button 
            onClick={handleSubmit}
            disabled={isLoading}
            className="btn-primary px-8 py-3 flex items-center gap-2"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Save size={18} />
                <span>Publish Article</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
        <div className="p-10 space-y-10">
          <div className="space-y-4">
            <h1 className="text-3xl font-black text-bulwark-charcoal tracking-tight">Create New Article</h1>
            <p className="text-slate-500">Draft high-quality technical content for your contractors and clients.</p>
          </div>

          <form className="space-y-8">
            {/* Title Section */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                <Type size={14} className="text-bulwark-orange" />
                Article Title
              </label>
              <input 
                type="text" 
                placeholder="e.g. 5 Reasons to Choose Hydrophobic Wall Filler"
                className="w-full text-2xl font-bold bg-slate-50 border border-slate-100 rounded-2xl p-6 outline-none focus:ring-2 focus:ring-bulwark-orange transition-all placeholder:text-slate-300"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Category */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Tag size={14} className="text-bulwark-orange" />
                  Technical Category
                </label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-bulwark-orange transition-all font-bold text-slate-600">
                  <option>Construction Technology</option>
                  <option>Product Deep Dive</option>
                  <option>Industry News</option>
                  <option>Case Study</option>
                </select>
              </div>

              {/* Author */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Author Assignment</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-bulwark-orange transition-all font-bold text-slate-600">
                  <option>Bulwark Admin</option>
                  <option>Technical Team</option>
                  <option>Marketing Hub</option>
                </select>
              </div>
            </div>

            {/* Featured Image Placeholder */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                <ImageIcon size={14} className="text-bulwark-orange" />
                Featured Header Image
              </label>
              <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-12 text-center space-y-4 hover:border-bulwark-orange/30 hover:bg-slate-50 transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-300 group-hover:text-bulwark-orange group-hover:scale-110 transition-all">
                  <ImageIcon size={32} />
                </div>
                <div>
                  <p className="font-bold text-slate-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-400 mt-1">Recommended: 1200x630px (PNG, JPG)</p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Article Content</label>
              <div className="border border-slate-100 rounded-3xl overflow-hidden">
                {/* Simple Toolbar Mock */}
                <div className="bg-slate-50 p-3 border-b border-slate-100 flex gap-2">
                  <div className="w-8 h-8 bg-white border border-slate-200 rounded flex items-center justify-center font-serif font-bold">B</div>
                  <div className="w-8 h-8 bg-white border border-slate-200 rounded flex items-center justify-center italic font-serif">I</div>
                  <div className="w-8 h-8 bg-white border border-slate-200 rounded flex items-center justify-center underline font-serif">U</div>
                  <div className="w-px h-8 bg-slate-200 mx-1" />
                  <div className="w-8 h-8 bg-white border border-slate-200 rounded flex items-center justify-center text-xs font-bold">H1</div>
                  <div className="w-8 h-8 bg-white border border-slate-200 rounded flex items-center justify-center text-xs font-bold">H2</div>
                </div>
                <textarea 
                  rows={15}
                  placeholder="Start writing your masterpiece here..."
                  className="w-full p-8 outline-none focus:bg-slate-50/30 transition-all resize-none text-slate-600 leading-relaxed"
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-400 italic">Draft saved automatically at 12:45 PM</p>
          <div className="flex gap-4">
             <button className="text-sm font-bold text-slate-400 hover:text-red-500 transition-colors">Discard Draft</button>
             <button className="btn-primary px-10">Save & Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
}
