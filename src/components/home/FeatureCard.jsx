import Image from "next/image";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

/**
 * Reusable feature card used by the home features grid.
 *
 * Renders a soft-gradient icon box (SVG from `public/icons/featureIcons`),
 * a title, and a description. On card hover the card lifts, its border and
 * shadow deepen, the icon box crossfades from the soft to the strong brand
 * gradient, and the icon turns white and scales up slightly.
 */
export function FeatureCard({ icon, title, description, className }) {
  return (
    <Card
      className={cn(
        "group relative cursor-pointer gap-0 overflow-hidden p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/40 hover:shadow-xl",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 -top-8 size-40 bg-feature-glow opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
      />

      <div className="relative size-12 rounded-xl shadow-sm">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-xl bg-gradient-primary-soft transition-opacity duration-300 ease-out group-hover:opacity-0"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        />
        <Image
          src={icon}
          alt={title}
          fill
          unoptimized
          sizes="48px"
          className="object-contain p-3 transition-all duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
        />
      </div>

      <h3 className="relative mt-5 text-lg font-semibold leading-tight text-card-foreground">
        {title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </Card>
  );
}
