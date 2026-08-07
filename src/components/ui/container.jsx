import { cn } from "@/lib/utils";

/**
 * Shared horizontal container used by the navbar, page sections, and the
 * footer so every piece of content aligns to the same left/right edges.
 *
 * `max-w-[1760px]` keeps ~80px of framing on each side at a 1920px
 * viewport, with responsive horizontal padding for smaller screens.
 */
export function Container({ className, ...props }) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1760px] px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}
