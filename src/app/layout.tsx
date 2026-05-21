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
  title: "ROAR | Strength. Conditioning. Performance. | Singapore",
  description:
    "Singapore's performance-focused training space combining elite coaching, strength training, Hyrox conditioning and community. Leave life's BS at the door.",
  keywords: [
    "gym Singapore",
    "Hyrox Singapore",
    "strength training",
    "conditioning",
    "personal training Singapore",
    "fitness Singapore",
    "ROAR gym",
  ],
  openGraph: {
    title: "ROAR | Strength. Conditioning. Performance.",
    description:
      "Singapore's performance-focused training space combining elite coaching, strength training, Hyrox conditioning and community.",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
