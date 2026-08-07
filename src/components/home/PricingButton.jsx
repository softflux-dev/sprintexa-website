import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * Pricing call-to-action button.
 *
 * Rests on the primary gradient with white text; on hover the gradient
 * crossfades to a white background with a primary border and primary text
 * (a named group scopes the hover to the button itself).
 */
export function PricingButton({ className, children, href = "#book-demo", ...props }) {
  return (
    <Button
      asChild
      variant="primary"
      size="lg"
      className={cn("group/btn relative overflow-hidden rounded-xl", className)}
      {...props}
    >
      <Link href={href}>
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-xl border border-primary bg-white opacity-0 transition-opacity duration-300 ease-out group-hover/btn:opacity-100"
        />
        <span className="relative transition-colors duration-300 ease-out group-hover/btn:text-primary">
          {children}
        </span>
      </Link>
    </Button>
  );
}
