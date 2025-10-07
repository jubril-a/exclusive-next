import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Exclusive e-commerce",
};

const inter = Inter({
  subsets: ["latin"], 
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-[100vh]">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
