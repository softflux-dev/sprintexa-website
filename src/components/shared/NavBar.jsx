import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { SmoothLink } from "@/components/ui/smooth-link";
import { NavbarMobileMenu } from "./navbar-mobile-menu";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Solutions", href: "/#solution" },
  { label: "How It's Work", href: "/#how-it-works" },
  { label: "About us", href: "/about" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#book-demo" },
];

/**
 * Sticky full-width navbar rendered in the root layout (server component).
 *
 * The white content bar is inset from the viewport edges via the shared
 * max-width container, so gray page background frames it on both sides —
 * consistent with the white-card-on-gray-page look. Only the mobile
 * hamburger menu needs client state; it lives in `navbar-mobile-menu.jsx`.
 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-section-muted">
      <Container>
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-border/60 bg-background px-5 py-3 shadow-sm">
          <SmoothLink
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Sprintexa home"
          >
            <Logo />
          </SmoothLink>

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <SmoothLink
                  href={link.href}
                  className="text-sm font-medium text-foreground transition-colors hover:text-foreground/60"
                >
                  {link.label}
                </SmoothLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
        
            <Button asChild variant="primary" className="hidden sm:inline-flex">
              <SmoothLink href="#book-demo">Book a Demo</SmoothLink>
            </Button>
            <NavbarMobileMenu links={navLinks} />
          </div>
        </nav>
      </Container>
    </header>
  );
}