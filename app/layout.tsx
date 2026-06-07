import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FeedbackWidget from "@/components/FeedbackWidget";

export const metadata: Metadata = {
  title: {
    default:  "Kraken Interactive — Strategic Intelligence Consultancy",
    template: "%s — Kraken Interactive",
  },
  description:
    "We build reliable maps of the strategic terrain before any recommendation is made. Serving ambitious businesses since 2008.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        <FeedbackWidget />
      </body>
    </html>
  );
}
