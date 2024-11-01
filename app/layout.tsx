import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Andra Beje - PM Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <div className="relative flex min-h-screen flex-col items-center">
          <div className="w-full max-w-[640px] px-4">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
