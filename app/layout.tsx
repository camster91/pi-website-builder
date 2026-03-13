import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pi Website Builder - AI-Powered Website Creation",
  description: "Generate beautiful, functional websites in minutes with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <footer className="border-t bg-white py-8">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>© {new Date().getFullYear()} Pi Website Builder. All rights reserved.</p>
              <p className="mt-2 text-sm">Powered by Gemini AI &amp; Next.js</p>
              <div className="mt-3 flex justify-center gap-6 text-sm text-gray-400">
                <a href="/legal/terms" className="hover:text-gray-600 transition">Terms of Service</a>
                <a href="/legal/privacy" className="hover:text-gray-600 transition">Privacy Policy</a>
                <a href="mailto:cameron@ashbi.ca" className="hover:text-gray-600 transition">Contact</a>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
