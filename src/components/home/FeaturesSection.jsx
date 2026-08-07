import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { FeatureCard } from "@/components/home/FeatureCard";
import { features } from "@/data/features";

/**
 * Home features section — centered badge, heading, and description above a
 * responsive card grid (1 col mobile, 2 tablet, 4 desktop). Data and card
 * markup are shared via `@/data/features` and `FeatureCard`.
 */
export function FeaturesSection() {
  return (
    <Section id="features" containerClassName="py-16 sm:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <Badge className="shadow-sm">Features</Badge>
        <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Everything your team needs built in.
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          From the moment work starts to the moment payroll is processed —
          every workflow lives in one place, fully connected and easy to
          manage.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  );
}
