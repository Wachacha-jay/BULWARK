import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bulwark Industries | Premium Construction Materials Kenya",
  description: "High-performance construction materials designed for durability. Get a smart quote and professional recommendations for your next project in Kenya.",
  keywords: "construction materials, Kenya, cement, waterproof coating, Bulwark Industries, builders",
  openGraph: {
    title: "Bulwark Industries | Construction Excellence",
    description: "Building the future of Kenya with premium materials.",
    url: "https://bulwarkindustries.co.ke",
    siteName: "Bulwark Industries",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
