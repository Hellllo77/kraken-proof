import { Barlow, Barlow_Condensed, Cormorant_Garamond } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-ca-cormorant",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-ca-barlow",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-ca-barlow-condensed",
  weight: ["400", "500"],
  display: "swap",
});

export default function ConceptALayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cormorantGaramond.variable} ${barlow.variable} ${barlowCondensed.variable} ca-root`}>
      {children}
    </div>
  );
}
