import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Observer | Dark Psychology Compendium",
  description:
    "Cold analysis of manipulation, power dynamics, and psychological influence. Awareness weaponized against covert control.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-slate-100">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black antialiased text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
