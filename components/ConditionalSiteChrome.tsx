"use client";
import { usePathname } from "next/navigation";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import FeedbackWidget from "./FeedbackWidget";

export default function ConditionalSiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/concept-a")) {
    return <>{children}</>;
  }
  return (
    <>
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
      <FeedbackWidget />
    </>
  );
}
