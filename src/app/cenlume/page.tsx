import type { Metadata } from "next";
import CaseStudy from "@/components/case-study/CaseStudy";
import { cenlume } from "@/lib/case-studies/cenlume";

export const metadata: Metadata = {
  title: "Cenlume | Case study",
  description: cenlume.summary,
  openGraph: {
    title: cenlume.title,
    description: cenlume.tagline,
    images: cenlume.heroImages?.[0] ? [cenlume.heroImages[0].src] : [],
  },
};

export default function CenlumePage() {
  return <CaseStudy data={cenlume} />;
}
