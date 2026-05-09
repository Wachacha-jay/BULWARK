import PageHeader from "@/components/ui/PageHeader";

export default function CookiesPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Cookie Settings" 
        description="Understand how we use cookies to improve your browsing experience."
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-slate">
          <p className="mb-8">We use cookies to analyze site traffic and optimize your experience on our premium construction platform.</p>
        </div>
      </section>
    </div>
  );
}
