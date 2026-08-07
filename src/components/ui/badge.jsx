import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full px-3 py-1",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary-soft",
        outline: "border border-border/60",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, children, ...props }) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      <span
        className={cn(
          "text-xs font-medium leading-none",
          variant !== "outline" && "text-gradient-primary"
        )}
      >
        {children}
      </span>
    </span>
  );
}

export { Badge, badgeVariants };
