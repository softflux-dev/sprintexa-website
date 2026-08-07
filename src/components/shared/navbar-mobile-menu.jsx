"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SmoothLink } from "@/components/ui/smooth-link";

export function NavbarMobileMenu({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-3 w-72 max-w-[calc(100vw-2rem)] rounded-2xl border border-border/60 bg-background p-5 shadow-lg">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <SmoothLink
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-black/5"
                >
                  {link.label}
                </SmoothLink>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-3 border-t border-border/60 pt-4">
           
            <Button asChild variant="primary">
              <SmoothLink href="#book-demo" onClick={() => setOpen(false)}>
                Book a Demo
              </SmoothLink>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}