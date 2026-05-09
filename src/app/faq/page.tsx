import PageHeader from "@/components/ui/PageHeader";

export default function FAQPage() {
  const faqs = [
    {
      q: "What makes Bulwark Wall Filler different from regular putty?",
      a: "Our wall filler is formulated using German Technology, making it hydrophobic (water-repellent) and exceptionally durable. It provides a brilliant white finish that requires less paint.",
    },
    {
      q: "Can I use Bulwark products for both internal and external walls?",
      a: "Yes, our Premium Wall Skimming Filler is specifically designed to withstand both internal humidity and external weather conditions.",
    },
    {
      q: "What is the coverage rate per bag?",
      a: "Coverage depends on surface roughness, but typically a 20kg bag covers approximately 15-20 square meters for a standard 2-coat application.",
    },
    {
      q: "How long does it take for the wall filler to dry?",
      a: "The first coat takes about 4-6 hours to dry depending on weather conditions. We recommend waiting 24 hours before applying paint.",
    },
    {
      q: "Do you offer delivery across Kenya?",
      a: "Yes, we have a robust logistics network and authorized distributors in major towns across Kenya including Nairobi, Mombasa, Kisumu, and Eldoret.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Frequently Asked Questions" 
        description="Everything you need to know about Bulwark products and services. If you can't find your answer here, contact our team."
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="p-8 rounded-3xl bg-bulwark-silver/10 border border-bulwark-silver/30">
              <h3 className="text-xl font-bold text-bulwark-charcoal mb-4">{faq.q}</h3>
              <p className="text-bulwark-slate/60 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
