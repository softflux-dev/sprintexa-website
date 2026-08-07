import { cn } from "@/lib/utils";

/**
 * Single source of truth for the Sprintexa brand mark.
 *
 * - `showWordmark` (default `true`): renders the full lockup
 *   (gradient "S" mark + wordmark) used in the navbar.
 * - `showWordmark={false}`: renders just the gradient "S" mark, used for
 *   small marks such as the footer card.
 *
 * Both assets are small decorative SVGs that don't need Next.js image
 * optimization, so a plain <img> is used instead of next/image (which would
 * also require dangerouslyAllowSVG for SVGs).
 */
export function Logo({ className, showWordmark = true, ...props }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- small decorative SVG, no optimization needed
    <img
      src={showWordmark ? "/icons/brandLogo.svg" : "/icons/logo-mark.svg"}
      alt={showWordmark ? "Sprintexa" : ""}
      className={cn(showWordmark ? "h-8 w-auto" : "h-6 w-auto", className)}
      {...props}
    />
  );
}
