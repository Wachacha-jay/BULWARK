"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      router.push("/admin/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-bulwark-charcoal flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bulwark-orange/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="w-full max-w-md z-10">
        <div className="text-center mb-12 space-y-4">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-12 h-12 bg-bulwark-orange rounded-xl flex items-center justify-center text-white shadow-lg shadow-bulwark-orange/20">
              <ShieldCheck size={28} />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">BULWARK <span className="text-bulwark-orange">ADMIN</span></span>
          </Link>
          <h1 className="text-white/60 font-medium">Access your command center</h1>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="email" 
                  required
                  placeholder="admin@bulwark.co.ke"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-bulwark-orange focus:ring-1 focus:ring-bulwark-orange transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Secure Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-bulwark-orange focus:ring-1 focus:ring-bulwark-orange transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-bulwark-orange text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-white hover:text-bulwark-charcoal transition-all disabled:opacity-50 group"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-white/40 text-xs">
              Protected by Bulwark Security Systems. Authorized access only.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-white/30 hover:text-bulwark-orange transition-colors text-sm">
            ← Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
