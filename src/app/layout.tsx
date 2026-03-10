import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam Kraft - Research Engineer",
  description: "Portfolio of Adam Kraft, Research Engineer at Google DeepMind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col relative`}>
        {/* Global Abstract Background */}
        <div className="fixed inset-0 -z-50 pointer-events-none opacity-40 mix-blend-multiply dark:opacity-20 dark:mix-blend-screen"
          style={{
            backgroundImage: "url('/assets/abstract_ml_pattern.png')",
            backgroundSize: '800px',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center'
          }}>
        </div>

        <NavBar />
        <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
