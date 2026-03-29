import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundMusic from "@/features/audio/BackgroundMusic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phrince Vhienzyl @ 7 | Roblox Party",
  description: "Join us for Phrince Vhienzyl's Level 7 Unlocked Birthday Bash!",
  openGraph: {
    title: "Phrince Vhienzyl @ 7 | Roblox Party",
    description: "Level 7 Unlocked! Join the ultimate Roblox gaming party on May 8, 2026.",
    url: "https://phrince-7th-birthday.vercel.app",
    siteName: "Phrince Vhienzyl's 7th Birthday",
    images: [
      {
        url: "/og-image.jpg", // The user will need to drop an image named og-image.jpg into the public folder
        width: 1200,
        height: 630,
        alt: "Phrince Vhienzyl Level 7 Unlocked",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phrince Vhienzyl @ 7 | Level 7 Unlocked!",
    description: "Join the ultimate Roblox gaming party on May 8, 2026.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        {children}
        <BackgroundMusic />
      </body>
    </html>
  );
}
