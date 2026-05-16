"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFeedback(data.message);
        setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      setStatus("error");
      setFeedback(error.message || "Something went wrong. Please try again.");
    }
  };

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
                  <p className="text-lg font-bold text-bulwark-charcoal">info@bulwark.co.ke</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-bulwark-orange/10 rounded-xl flex items-center justify-center text-bulwark-orange shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-bulwark-slate/40 uppercase">Office</p>
                  <p className="text-lg font-bold text-bulwark-charcoal">Mukima Drive, Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-bulwark-silver/20 p-8 md:p-12 rounded-[2.5rem] border border-bulwark-silver/50 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/10">
                    <CheckCircle2 size={40} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-bulwark-charcoal">Message Sent!</h3>
                    <p className="text-slate-500 max-w-xs mx-auto">{feedback}</p>
                  </div>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="btn-primary px-8"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-bulwark-charcoal">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full p-4 rounded-xl border border-white focus:ring-2 focus:ring-bulwark-orange outline-none transition-all" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-bulwark-charcoal">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full p-4 rounded-xl border border-white focus:ring-2 focus:ring-bulwark-orange outline-none transition-all" 
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-bulwark-charcoal">Subject</label>
                    <select 
                      className="w-full p-4 rounded-xl border border-white focus:ring-2 focus:ring-bulwark-orange outline-none transition-all appearance-none bg-white"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option>General Inquiry</option>
                      <option>Sales & Orders</option>
                      <option>Partner Registration</option>
                      <option>Technical Support</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-bulwark-charcoal">Message</label>
                    <textarea 
                      rows={4} 
                      required
                      className="w-full p-4 rounded-xl border border-white focus:ring-2 focus:ring-bulwark-orange outline-none transition-all" 
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 text-sm font-bold">
                      <AlertCircle size={18} />
                      <span>{feedback}</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full btn-primary py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.9013491597616!2d36.869948!3d-1.228421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTMnNDIuMyJTIDM2wrA1MicxMS44IkU!5e0!3m2!1ssw!2ske!4v1778946093104!5m2!1ssw!2ske" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-6 left-6 pointer-events-none">
               <div className="bg-bulwark-charcoal text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-bulwark-orange rounded-full animate-pulse" />
                  <span>Bulwark HQ • Mukima Drive</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
