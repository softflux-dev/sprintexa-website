import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { PricingCard } from "@/components/home/PricingCard";
import { PricingCTA } from "@/components/home/PricingCTA";
import { pricingPlans } from "@/data/pricing";

/**
 * Home pricing section — layered hierarchy: gray section background, a large
 * elevated white container, and soft gray pricing cards inside it. Badge,
 * heading, and description sit at the top of the white container.
 */
export function PricingSection() {
  return (
    <Section id="pricing" containerClassName="py-16 sm:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <Badge className="shadow-sm">Pricing</Badge>
        <h2 className="max-w-4xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Simple plans that grow with your team
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Start with what you need today and scale as your team grows — without
          switching systems.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-7xl rounded-3xl bg-white p-6 shadow-xl sm:mt-14 sm:p-12 lg:p-16">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>

        <PricingCTA />
      </div>
    </Section>
  );
}
