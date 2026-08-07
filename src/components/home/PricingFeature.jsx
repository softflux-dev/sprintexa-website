import { ArrowRight } from "lucide-react";

/**
 * Single pricing feature row — a small circular check indicator on a soft
 * gray background followed by the feature text.
 */
export function PricingFeature({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary">
        <ArrowRight className="size-3.5 text-primary" />
      </span>
      <span className="text-sm leading-relaxed text-foreground">
        {children}
      </span>
    </li>
  );
}
