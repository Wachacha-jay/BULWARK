import PageHeader from "@/components/ui/PageHeader";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="Get in Touch" 
        description="Have questions about our products or need a custom solution? Our team is here to help you build right."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-bulwark-charcoal">Contact Information</h2>
              <p className="text-bulwark-slate/60 leading-relaxed">
                Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-bulwark-orange/10 rounded-xl flex items-center justify-center text-bulwark-orange shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-bulwark-slate/40 uppercase">Phone</p>
                  <p className="text-lg font-bold text-bulwark-charcoal">+254 722 850 000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-bulwark-orange/10 rounded-xl flex items-center justify-center text-bulwark-orange shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-bulwark-slate/40 uppercase">Email</p>
                  <p className="text-lg font-bold text-bulwark-charcoal">sales@bulwark.co.ke</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-bulwark-orange/10 rounded-xl flex items-center justify-center text-bulwark-orange shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-bulwark-slate/40 uppercase">Office</p>
                  <p className="text-lg font-bold text-bulwark-charcoal">Industrial Area, Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-bulwark-silver/20 p-8 md:p-12 rounded-[2.5rem] border border-bulwark-silver/50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-bulwark-charcoal">Full Name</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-white focus:ring-2 focus:ring-bulwark-orange outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-bulwark-charcoal">Email Address</label>
                  <input type="email" className="w-full p-4 rounded-xl border border-white focus:ring-2 focus:ring-bulwark-orange outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-bulwark-charcoal">Subject</label>
                <select className="w-full p-4 rounded-xl border border-white focus:ring-2 focus:ring-bulwark-orange outline-none transition-all appearance-none bg-white">
                  <option>General Inquiry</option>
                  <option>Sales & Orders</option>
                  <option>Partner Registration</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-bulwark-charcoal">Message</label>
                <textarea rows={4} className="w-full p-4 rounded-xl border border-white focus:ring-2 focus:ring-bulwark-orange outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
