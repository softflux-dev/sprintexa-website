"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

/**
 * Reusable anchor link that smooth-scrolls to an in-page section when the
 * target hash belongs to the current page, and falls back to normal Next.js
 * navigation (which then scrolls to the hash) for cross-page links.
 *
 * Used across the navbar, footer, and mobile menu so every in-site section
 * link scrolls smoothly instead of jumping.
 */
function resolveHash(href) {
  if (typeof href !== "string") return null;
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;

  const path = href.slice(0, hashIndex) || "/";
  const hash = href.slice(hashIndex);
  return { path, hash };
}

export function SmoothLink({ href, onClick, children, scroll = true, ...props }) {
  const pathname = usePathname();
  const target = resolveHash(href);

  function handleClick(event) {
    // Always notify the caller (e.g. close a mobile menu) even for
    // cross-page links.
    onClick?.(event);

    // Cross-page link — let Next.js handle navigation + scroll.
    if (!target || target.path !== pathname) return;

    event.preventDefault();
    const el = document.getElementById(target.hash.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Keep the browser hash in sync without jumping.
      history.replaceState(null, "", target.hash);
    }
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}