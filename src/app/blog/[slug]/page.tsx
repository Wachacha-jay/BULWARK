"use client";

import PageHeader from "@/components/ui/PageHeader";
import { ArrowLeft, Calendar, User, Share2, Play, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const postContent = {
  "solving-modern-construction-challenges": {
    title: "Beyond the Surface: Solving Modern Construction Challenges with Bulwark",
    date: "May 16, 2024",
    category: "Industry Insights",
    author: "Samuel Muchemi, GM",
    videoId: "VfzEupZEzU4", // Using the Intro video as context for the brand vision
    content: (
      <div className="space-y-12">
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          Modern construction is a race against time and rising costs. At Bulwark Industries, we've identified the three biggest hurdles developers face and engineered a material that solves them all.
        </p>

        <div className="space-y-8">
          <div className="relative group">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-bulwark-orange rounded-full" />
            <div className="space-y-3">
              <h2 className="text-2xl font-black text-bulwark-charcoal uppercase tracking-tight">Challenge 01: The "Paint-Hungry" Wall</h2>
              <p className="text-slate-500 leading-relaxed">
                Most walls are highly porous, acting like sponges that soak up expensive paint. This leads to 3 or 4 coats just to get a decent look. Bulwark Wall Filler creates a high-density, low-porosity surface. By filling the microscopic voids first, you reduce paint consumption by up to 40%—saving millions on large-scale projects.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-bulwark-orange rounded-full" />
            <div className="space-y-3">
              <h2 className="text-2xl font-black text-bulwark-charcoal uppercase tracking-tight">Challenge 02: The Recurring Crack</h2>
              <p className="text-slate-500 leading-relaxed">
                Cracks aren't just ugly; they're entry points for moisture. Unlike standard putties that sit on the surface, our filler bonds molecularly with the substrate. It doesn't just "cover" a crack; it heals the surface, creating a flexible yet rigid barrier that prevents the crack from reappearing under standard temperature changes.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-bulwark-orange rounded-full" />
            <div className="space-y-3">
              <h2 className="text-2xl font-black text-bulwark-charcoal uppercase tracking-tight">Challenge 03: Paint Peeling (Delamination)</h2>
              <p className="text-slate-500 leading-relaxed">
                Moisture trapped in walls is the #1 cause of peeling paint. Bulwark's hydrophobic (water-repelling) technology ensures that even if moisture exists, it cannot push the finish off the wall. Your paint stays bonded for years longer than traditional methods.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-bulwark-charcoal p-10 rounded-[2.5rem] text-white space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-bulwark-orange/10 blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-3xl font-black tracking-tight text-bulwark-orange">The "No-Paint" Aesthetic</h2>
          <p className="text-white/70 leading-relaxed">
            One of the most frequent questions we get is: <span className="text-white italic">"Can I just leave it white?"</span> The answer is a resounding YES. Bulwark Premium Filler delivers a brilliant, shiny white finish that many architects are now using as a standalone "Industrial Minimalist" look. It saves the entire cost of paint while providing a clean, luminous atmosphere.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-bulwark-charcoal">SEO FAQ: What Experts Search For</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-bulwark-orange font-black text-[10px] uppercase">Property Value</p>
              <p className="text-sm text-slate-500 font-medium italic">"High-quality finishes can increase residential property value by up to 5% in the Kenyan market."</p>
            </div>
            <div className="space-y-1">
              <p className="text-bulwark-orange font-black text-[10px] uppercase">Time-to-Market</p>
              <p className="text-sm text-slate-500 font-medium italic">"Bulwark's fast-drying formula allows for faster project handover, critical for commercial rentals."</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex gap-4">
          <Link href="/quote" className="btn-primary">Calculate Your Savings</Link>
          <Link href="/contact" className="btn-outline">Ask an Engineer</Link>
        </div>
      </div>
    )
  },
  "perfect-surface-preparation-guide": {
    title: "Mastering the Surface: The Ultimate Guide to Wall Preparation",
    date: "March 22, 2024",
    category: "Tutorials",
    author: "Technical Engineering Dept.",
    videoId: "ucHU0Np43WE",
    content: (
      <div className="space-y-10">
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          A flawless architectural finish is 70% preparation and 30% application. At Bulwark, we want your projects to stand the test of time, and that starts with mastering the surface.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
            <h3 className="text-lg font-black text-bulwark-charcoal uppercase tracking-tight">Internal Walls</h3>
            <ul className="space-y-3">
              {[
                "Clean the surface of all loose particles and dust.",
                "Ensure the wall is completely dry before application.",
                "Remove any existing old paint or grease.",
                "Smooth out large irregularities before filling."
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-bulwark-orange mt-1.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-bulwark-charcoal p-8 rounded-3xl text-white space-y-4">
            <h3 className="text-lg font-black text-white uppercase tracking-tight">External Walls</h3>
            <ul className="space-y-3">
              {[
                "Scrape away any algae, moss, or fungal growth.",
                "Address structural cracks with appropriate base material.",
                "Wash down surfaces exposed to salt air or heavy dust.",
                "Avoid application during peak midday heat."
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-bulwark-orange mt-1.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-black text-bulwark-charcoal">Watch the Step-by-Step Guide</h2>
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white bg-slate-100">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ucHU0Np43WE"
              title="Technical Application Guide"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="space-y-6 pt-6">
          <h2 className="text-3xl font-black text-bulwark-charcoal">The Bulwark 1:3 Rule</h2>
          <p className="text-slate-500 leading-relaxed">
            For the perfect consistency, always mix 1 part clean water with 3 parts Bulwark Wall Filler. Use a mechanical stirrer or a clean trowel to mix until you achieve a smooth, lump-free paste.
          </p>
          <div className="p-6 bg-bulwark-orange/5 border border-bulwark-orange/10 rounded-2xl flex items-center gap-4">
            <CheckCircle2 className="text-bulwark-orange shrink-0" size={24} />
            <p className="text-sm font-bold text-bulwark-charcoal">Pro Tip: Only mix enough material that can be used within 60 minutes to ensure maximum workability.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100">
          <div className="flex flex-wrap gap-4">
             <Link href="/how-it-works" className="btn-primary">View Full Procedure</Link>
             <Link href="/products" className="btn-outline">Order Materials</Link>
          </div>
        </div>
      </div>
    )
  },
  "fundis-training-capacity-building": {
    title: "Kazi Safi: Empowering Our Fundis Through Nationwide Training",
    date: "January 14, 2024",
    category: "Community",
    author: "Bulwark Technical Team",
    videoId: "jvxfLbWkz_U",
    content: (
      <div className="space-y-8">
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          At Bulwark Industries, tunajua kazi ya mjengo si rahisi. It takes sweat, precision, and the right materials to turn a building into a home. That's why we don't just sell wall filler—we build capacity.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-black text-bulwark-charcoal">Jenga Skills, Jenga Future</h2>
          <p className="text-slate-500 leading-relaxed">
            Over the last few months, our technical team has been on the road, meeting with the real masters of the craft—our Kenyan fundis. From the busy sites of Nairobi to the growing neighborhoods of Nakuru and Eldoret, we've been hosting workshops to share best practices and new techniques.
          </p>
        </div>

        <div className="bg-bulwark-silver/20 p-8 rounded-[2rem] border border-bulwark-silver/50 space-y-6">
          <h3 className="text-xl font-bold text-bulwark-charcoal">Why our Fundis are making the switch:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Easier Application: Less fatigue during long site days.",
              "Superior Coverage: Use less material to cover more surface.",
              "Brilliant Finish: A smooth canvas that clients love.",
              "Hydrophobic Protection: Buildings that stay beautiful longer."
            ].map((point, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-bulwark-orange mt-1 shrink-0" />
                <span className="text-sm font-medium text-slate-600">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-black text-bulwark-charcoal">Watch the Energy!</h2>
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/jvxfLbWkz_U"
              title="Fundi Training Workshop"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <p className="text-center text-slate-400 text-sm italic">
            Snapshots from our latest capacity building workshop in Nairobi.
          </p>
        </div>

        <div className="pt-8 border-t border-slate-100">
          <p className="text-slate-500 leading-relaxed">
            Our goal is simple: to ensure every bag of Bulwark filler results in a perfect finish and a satisfied client. When the fundi wins, the project wins, and the nation grows. 
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
             <Link href="/contact" className="btn-primary">Invite us to your site</Link>
             <Link href="/products" className="btn-outline">Explore Products</Link>
          </div>
        </div>
      </div>
    )
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = postContent[slug as keyof typeof postContent];

  if (!post) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-black mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-bulwark-orange font-bold">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="pt-32 pb-24 bg-bulwark-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img 
             src={`https://img.youtube.com/vi/${post.videoId}/maxresdefault.jpg`} 
             className="w-full h-full object-cover blur-xl scale-110"
           />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center space-x-2 text-white/60 hover:text-bulwark-orange transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            <span>Back to Knowledge Center</span>
          </Link>
          
          <div className="space-y-6">
            <span className="bg-bulwark-orange px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-bulwark-orange/20">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 pt-4 text-white/60 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-bulwark-orange" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={14} className="text-bulwark-orange" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            {post.content}
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center space-x-4">
               <p className="text-xs font-black uppercase tracking-widest text-slate-400">Share this story</p>
               <div className="flex gap-2">
                 <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-bulwark-orange hover:text-white transition-all">
                    <Share2 size={16} />
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
