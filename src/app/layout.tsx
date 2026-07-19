import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theroargym.com"),
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
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "ROAR | Strength. Conditioning. Performance.",
    description:
      "Singapore's performance-focused training space combining elite coaching, strength training, Hyrox conditioning and community.",
    type: "website",
    images: ["/logo-gold-rounded.png"],
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
      className={`${inter.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
