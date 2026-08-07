import { cn } from "@/lib/utils";
import { PricingButton } from "@/components/home/PricingButton";
import { PricingFeature } from "@/components/home/PricingFeature";
import { Badge } from "@/components/ui/badge";

/**
 * Single pricing plan card — soft gray background, subtle border, and a
 * hover lift with a primary border. Optionally shows a "Most Popular"
 * gradient pill in the top-right corner.
 */
export function PricingCard({
  title,
  subtitle,
  price,
  priceLabel,
  buttonText,
  popular,
  features,
  className,
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-section-muted p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-xl sm:p-8",
        popular ? "border-primary/40" : "border-border/60",
        className,
      )}
    >
      <div className={cn("relative", popular && "pr-28 sm:pr-32")}>
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>

        {popular && (
          <Badge className="shadow-sm absolute -top-1 right-0">
            Most Popular
          </Badge>
        )}
      </div>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {price}
        </span>
        <span className="text-sm font-medium text-muted-foreground">
          {priceLabel}
        </span>
      </div>
      <PricingButton className="mt-8 w-full">{buttonText}</PricingButton>
      <h4 className="mt-8 text-sm font-medium text-foreground">Features Included</h4>
      <ul className="mt-4 flex flex-1 flex-col gap-3.5">
        {features.map((feature) => (
          <PricingFeature key={feature}>{feature}</PricingFeature>
        ))}
      </ul>
    </div>
  );
}
