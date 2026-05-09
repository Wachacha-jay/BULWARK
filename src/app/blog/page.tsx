import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "Why German Technology Matters in Construction",
      excerpt: "Understanding the precision engineering behind Bulwark's hydrophobic wall fillers.",
      date: "May 10, 2024",
      category: "Innovation",
    },
    {
      title: "Reducing Waste: A Guide for Site Managers",
      excerpt: "How to optimize material usage and cut costs by 15% on your next residential project.",
      date: "May 05, 2024",
      category: "Best Practices",
    },
    {
      title: "Surface Preparation 101",
      excerpt: "The most important step for a flawless finish that lasts for generations.",
      date: "April 28, 2024",
      category: "Tutorials",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Knowledge Center" 
        description="Expert insights, technical guides, and industry trends from the Bulwark engineering team."
      />

      <section className="py-24 bg-bulwark-silver/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-bulwark-silver/50">
                <div className="aspect-video bg-bulwark-slate" />
                <div className="p-8 space-y-4">
                  <span className="text-xs font-bold text-bulwark-orange uppercase tracking-widest">{post.category}</span>
                  <h3 className="text-2xl font-bold text-bulwark-charcoal leading-tight">{post.title}</h3>
                  <p className="text-bulwark-slate/70 text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-xs text-bulwark-slate/40">{post.date}</span>
                    <Link href="#" className="text-sm font-bold text-bulwark-charcoal hover:text-bulwark-orange transition-colors">Read More</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
