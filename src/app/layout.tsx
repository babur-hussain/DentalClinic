import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Delight Dental Care | Premium Dentist in Betul",
  description: "Experience premium, 5-star dental care in Betul. Dr. Sumit Gujare offers state-of-the-art treatments including root canals, implants, and teeth whitening.",
  keywords: ["Best Dentist in Betul", "Dental Clinic near me", "Delight Dental Care", "Dr. Sumit Gujare", "Betul Dentist"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen flex flex-col selection:bg-brand-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}
