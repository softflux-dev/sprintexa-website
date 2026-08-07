import React from "react";
import AboutHero from "@/components/about/AboutHero";
import { CreditsSection } from "@/components/about/CreditsSection";
import { WhatTheyBring } from "@/components/about/WhatTheyBring";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";
function AboutPage() {
  return (
    <div>
      <AboutHero />
      <CreditsSection />
      <WhatTheyBring />
      <AboutCtaSection />
    </div>
  );
}

export default AboutPage;
