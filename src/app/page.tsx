import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import VideoIntro from "@/components/home/VideoIntro";
import QuotePreview from "@/components/home/QuotePreview";
import Testimonials from "@/components/home/Testimonials";
import Certifications from "@/components/home/Certifications";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <VideoIntro />
      <QuotePreview />
      <Testimonials />
      <Certifications />
      <CTASection />
    </div>
  );
}
