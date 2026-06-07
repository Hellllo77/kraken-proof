import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FeedbackWidget from "@/components/FeedbackWidget";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://kraken.com.my"),
  title: {
    default:  "Kraken Interactive — Strategic Intelligence Consultancy",
    template: "%s — Kraken Interactive",
  },
  description:
    "We build reliable maps of the strategic terrain before any recommendation is made. Strategic intelligence consultancy since 2010.",
  openGraph: {
    siteName: "Kraken Interactive",
    images: [
      {
        url: "/assets/hero-poster-v2.jpg",
        width: 1920,
        height: 1080,
        alt: "KRAKEN Interactive — Strategic Intelligence Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/hero-poster-v2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${newsreader.variable}`}>
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        <FeedbackWidget />
      </body>
    </html>
  );
}
