import { cn } from "@/lib/utils";
import { PricingButton } from "@/components/home/PricingButton";

/**
 * Bottom help CTA panel shown below the pricing cards — same soft gray
 * background, rounded corners, and the shared pricing button.
 */
export function PricingCTA({ className }) {
  return (
    <div
      className={cn(
        "mt-6 rounded-2xl bg-section-muted p-8 text-center sm:p-10",
        className
      )}
    >
      <h3 className="text-3xl font-bold tracking-relaxed text-foreground sm:text-4xl">
        Not sure which plan fits?
      </h3>
      <p className="mx-auto mt-3 max-w-xxl text-base leading-relaxed text-muted-foreground sm:text-lg">
        We&apos;ll help you choose the right setup based on your team,
        workflows, and goals.
      </p>
      <PricingButton className="mt-6 w-full sm:w-auto">
        Schedule Your Free Demo
      </PricingButton>
    </div>
  );
}
