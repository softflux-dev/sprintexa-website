import { Reveal } from "@/components/ui/Reveal";

import { HomeHero } from "@/components/home/HomeHero";
import { PartnersScroller } from "@/components/home/PartnersScroller";
import { SolutionSection } from "@/components/home/SolutionSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ProductShowcaseSection } from "@/components/home/ProductShowcaseSection";
import { PricingSection } from "@/components/home/PricingSection";
import { BookDemoSection } from "@/components/home/BookDemoSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HomeHero />

      <Reveal>
        <PartnersScroller />
      </Reveal>

      <Reveal>
        <SolutionSection />
      </Reveal>

      <Reveal>
        <FeaturesSection />
      </Reveal>

      <Reveal>
        <HowItWorksSection />
      </Reveal>

      <Reveal>
        <ProductShowcaseSection />
      </Reveal>

      <Reveal>
        <PricingSection />
      </Reveal>

      <Reveal>
        <BookDemoSection />
      </Reveal>

      <Reveal>
        <CtaSection />
      </Reveal>
    </main>
  );
}