"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Reusable scroll-reveal wrapper. Fades + slides a section/content in the
 * first time it enters the viewport, using only Tailwind transitions — no
 * animation library.
 *
 * - `as`: base element tag (default `div`).
 * - `once` (default true): animate in once; set to false to re-fade every
 *   time it scrolls in/out.
 * - `delay`: optional transition delay for staggering.
 */
export function Reveal({
  as: Tag = "div",
  once = true,
  delay = 0,
  className,
  children,
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}