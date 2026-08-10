"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SmoothLink } from "@/components/ui/smooth-link";
import { cn } from "@/lib/utils";

export function NavbarMobileMenu({ links }) {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  // Lock body scroll and close on Escape while the menu is open.
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") close();
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="lg:hidden"
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={close}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        inert={!open}
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300 ease-in-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
          <span className="text-lg font-semibold tracking-tight text-gradient-primary">
            Sprintexa
          </span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Close menu"
            onClick={close}
          >
            <X />
          </Button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {links.map((link, index) => (
              <li key={link.href}>
                <SmoothLink
                  href={link.href}
                  onClick={close}
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "none" : "translateY(8px)",
                    transitionDelay: open ? `${index * 45}ms` : "0ms",
                  }}
                  className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-foreground transition-all duration-300 ease-out hover:bg-accent hover:text-accent-foreground"
                >
                  {link.label}
                  <ArrowRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                </SmoothLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer CTA */}
        <div className="border-t border-border/60 p-5">
          <Button asChild variant="primary" className="w-full">
            <SmoothLink href="/#book-demo" onClick={close}>
              Book a Demo
            </SmoothLink>
          </Button>
        </div>
      </div>
    </>
  );
}
