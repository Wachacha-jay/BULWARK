import PageHeader from "@/components/ui/PageHeader";

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Terms of Service" 
        description="Last updated: May 2024. Please read these terms carefully before using our services."
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-slate">
          <h2 className="text-2xl font-bold mb-6">1. Acceptance of Terms</h2>
          <p className="mb-8">By accessing and using the Bulwark Industries website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          
          <h2 className="text-2xl font-bold mb-6">2. Use License</h2>
          <p className="mb-8">Permission is granted to temporarily download one copy of the materials on Bulwark Industries' website for personal, non-commercial transitory viewing only.</p>

          <h2 className="text-2xl font-bold mb-6">3. Disclaimer</h2>
          <p className="mb-8">The materials on Bulwark Industries' website are provided on an 'as is' basis. Bulwark Industries makes no warranties, expressed or implied.</p>
          
          <p className="text-sm text-slate-400 mt-20 italic">For full legal inquiries, please contact info@bulwark.co.ke</p>
        </div>
      </section>
    </div>
  );
}
