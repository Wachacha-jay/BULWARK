import PageHeader from "@/components/ui/PageHeader";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Privacy Policy" 
        description="We value your privacy. Learn how we handle your data at Bulwark Industries."
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-slate">
          <h2 className="text-2xl font-bold mb-6">Data Collection</h2>
          <p className="mb-8">We collect information that you provide directly to us when you request a quote, sign up as a distributor, or contact us for support.</p>
          <h2 className="text-2xl font-bold mb-6">Use of Information</h2>
          <p className="mb-8">Your information is used solely to provide our services, process orders, and improve our product offerings.</p>
        </div>
      </section>
    </div>
  );
}
