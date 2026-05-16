import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    slug: "solving-modern-construction-challenges",
    title: "Beyond the Surface: Solving Modern Construction Challenges with Bulwark",
    excerpt: "From reducing paint costs to fixing structural cracks, discover how we are re-engineering the finish to solve the industry's biggest headaches.",
    date: "May 16, 2024",
    category: "Industry Insights",
    image: "/images/products in manufacturing.jpg"
  },
  {
    slug: "perfect-surface-preparation-guide",
    title: "Mastering the Surface: The Ultimate Guide to Wall Preparation",
    excerpt: "A flawless finish starts long before the first coat of filler. Learn how to prepare your internal and external walls for Bulwark excellence.",
    date: "March 22, 2024",
    category: "Tutorials",
    image: "https://img.youtube.com/vi/ucHU0Np43WE/maxresdefault.jpg"
  },
  {
    slug: "fundis-training-capacity-building",
    title: "Kazi Safi: Empowering Our Fundis Through Nationwide Training",
    excerpt: "Tunajenga Kenya! See how our workshops are giving local fundis the skills to deliver perfect finishes while making their work easier and more profitable.",
    date: "January 14, 2024",
    category: "Community",
    image: "https://img.youtube.com/vi/jvxfLbWkz_U/maxresdefault.jpg"
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Knowledge Center" 
        description="Expert insights, community stories, and technical guides from the Bulwark engineering team."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {posts.map((post) => (
              <article key={post.slug} className="group cursor-pointer">
                <Link href={`/blog/${post.slug}`}>
                  <div className="space-y-6">
                    <div className="aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl shadow-bulwark-charcoal/5 border border-slate-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="bg-bulwark-orange/10 text-bulwark-orange px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                          {post.category}
                        </span>
                        <div className="flex items-center text-slate-400 text-[10px] font-bold gap-2">
                          <Calendar size={12} />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-black text-bulwark-charcoal leading-tight group-hover:text-bulwark-orange transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="pt-2 flex items-center text-bulwark-charcoal font-black text-xs uppercase tracking-widest gap-2">
                        <span>Read Full Story</span>
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform text-bulwark-orange" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
