import React from "react";
import { SiteHeader, SiteFooter, FloatingCta } from "./components/SiteChrome.jsx";
import { AgentHero } from "./components/AgentHero.jsx";
import { ProblemSection, HowItWorksSection } from "./components/StorySections.jsx";
import { FeatureShowcase } from "./components/FeatureShowcase.jsx";
import { PricingSection, FaqSection, FinalCta } from "./components/ConversionSections.jsx";

export default function App() {
  return (
    <div className="wra">
      <a href="#features" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#0b2a1e]">
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <AgentHero />
        <ProblemSection />
        <HowItWorksSection />
        <FeatureShowcase />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingCta />
    </div>
  );
}
