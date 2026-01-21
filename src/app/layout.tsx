import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FullscreenButton from "@/components/FullscreenButton";

export const metadata: Metadata = {
  title: "Sali Products Kenya - Tools, Machines & Supplies",
  description: "Leading supplier of quality tools, machines, and industrial supplies in Kenya. Browse our extensive catalog and order online.",
  keywords: "tools Kenya, machines Kenya, industrial supplies, construction tools, power tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FullscreenButton />
      </body>
    </html>
  );
}
