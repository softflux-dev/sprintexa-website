import { cn } from "@/lib/utils";

import { Container } from "@/components/ui/container";

/**
 * Shared layout primitive for page sections.
 *
 * - `variant="muted"`: full-width `#F7F7F5` section with a centered
 *   max-width container. Use for default/gray sections.
 * - `variant="white"`: same gray section, but children are wrapped in an
 *   inset white rounded card sitting on the gray — the "card on a gray
 *   page" look (see footer reference).
 *
 * The inner container is shared with the navbar and footer (via the
 * `Container` component), so every section's content aligns to the same
 * left/right edges.
 *
 * `containerClassName` lets callers override the default container padding
 * (e.g. for sections that need more breathing room).
 */
export function Section({ variant = "muted", className, containerClassName, id, children, ...props }) {
  const isCard = variant === "white";

  return (
    <section
      id={id}
      className={cn("w-full bg-section-muted", className)}
      {...props}
    >
      <Container className={cn("py-10 sm:py-14", containerClassName)}>
        {isCard ? (
          <div className="rounded-2xl border border-border/60 bg-background px-6 py-10 shadow-sm sm:px-10 sm:py-14">
            {children}
          </div>
        ) : (
          children
        )}
      </Container>
    </section>
  );
}
