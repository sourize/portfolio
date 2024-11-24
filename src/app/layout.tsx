import React from "react";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s - ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Sourish Chatterjee",
    "sourish ml",
    "sourish.xyz",
    "Sourish Chatterjee Portfolio",
    "Sourish Chatterjee Projects",
    "Sourish Chatterjee Blogs",
    "Sourish Chatterjee Resume",
    "Sourish Chatterjee Contact",
    "Sourish Chatterjee Instagram",
    "Sourish Chatterjee Youtube",
    "Sourish Chatterjee Email",
    "Sourish Chatterjee LinkedIn",
    "Sourish Chatterjee GitHub",
    "Sourish Chatterjee Twitter",
    "Sourish Portfolio",
    "Sourish Projects",
    "Sourish Blogs",
    "Sourish Resume",
    "Sourish Contact",
    "Sourish Instagram",
    "Sourish Email",
    "Sourish LinkedIn",
    "Sourish GitHub",
    "Sourish Twitter",
    "sourize",
    "sourize_",
    "sourish.ml",
    "nexalyze",
  ],
  authors: [
    {
      name: `${DATA.name}`,
      url: DATA.url,
    },
  ],
  creator: `${DATA.name}`,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    images: [
      {
        url: `${DATA.prevImage}`,
        width: 1200,
        height: 630,
        alt: `${DATA.name}`,
      },
    ],
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    site: DATA.url,
    creator: `${DATA.name}`,
    description: DATA.description,
    images: [
      {
        url: `${DATA.prevImage}`,
        width: 1200,
        height: 630,
        alt: `${DATA.name}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
