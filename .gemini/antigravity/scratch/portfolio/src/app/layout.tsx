import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Himanshu Gupta | AI Engineer",
  description: "Portfolio of Himanshu Gupta, AI/ML Engineer building intelligent systems that learn, explain, and scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white selection:bg-primary-500/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
