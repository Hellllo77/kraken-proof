import { Barlow, Barlow_Condensed } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-ca-barlow",
  weight: ["300", "400", "500", "700", "900"],
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
    <div className={`${barlow.variable} ${barlowCondensed.variable} ca-root`}>
      {children}
    </div>
  );
}
