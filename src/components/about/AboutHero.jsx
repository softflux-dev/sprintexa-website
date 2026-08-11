import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

/**
 * About page hero — a two-column split (~45/55) on a muted section
 * background.
 *
 * Left: eyebrow badge, display heading, focused subtext, and a side-by-side
 * primary/outline CTA row, all left-aligned and vertically centered.
 * Right: the `aboutHero.png` illustration as the visual centerpiece, with a
 * few small floating icon "badges" at different depths around it (subtle bob
 * animation via `animate-hero-bob`) so the illustration feels light and
 * off-grid against the structured text column.
 */
const badges = [
  {
    icon: "/icons/featureIcons/calendar.svg",
    label: "Planning",
    className: "left-0 top-8 lg:-left-6",
    delay: "0s",
  },
  {
    icon: "/icons/featureIcons/Black-4.svg",
    label: "People & roles",
    className: "right-0 top-2 lg:-right-5",
    delay: "1.5s",
  },
  {
    icon: "/icons/featureIcons/Black-5.svg",
    label: "Payroll & reports",
    className: "bottom-8 left-4 lg:-left-8",
    delay: "0.8s",
  },
];

export function AboutHero() {
  return (
    <Section id="about-hero" containerClassName="py-20 sm:py-24 lg:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="flex flex-col items-start text-left">
          <Badge className="shadow-sm">About Sprintexa</Badge>

          <h1 className="mt-6 max-w-5xl text-balance text-5xl font-medium leading-tighter tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Built for teams <br />
            <span className="text-gradient-primary">That move fast</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sprintexa is an all-in-one business platform designed to help
            growing teams manage projects, people, and operations from a single
            place. By combining task management, HR, attendance, payroll, and
            collaboration into one system, it removes complexity and brings
            clarity to everyday work.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="primary">
              <Link
                href="https://softwarefluxsolution.com/our-work/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Portfolio
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white shadow-md hover:bg-white"
            >
              <Link
                href="https://softwarefluxsolution.com/our-service/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gradient-primary font-semibold">
                  View Services
                </span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl">
          <Image
            src="/images/aboutHero.webp"
            alt="Sprintexa all-in-one platform illustration"
            width={9580}
            height={6520}
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="h-auto w-full"
          />

          {badges.map((badge) => (
            <div
              key={badge.label}
              aria-hidden="true"
              className={`absolute flex animate-hero-bob items-center gap-2 rounded-full border border-border/60 bg-white px-3 py-1.5 shadow-md sm:px-3.5 sm:py-2 ${badge.className}`}
              style={{ animationDelay: badge.delay }}
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-gradient-primary">
                <Image
                  src={badge.icon}
                  alt=""
                  width={14}
                  height={14}
                  unoptimized
                  className="brightness-0 invert"
                />
              </span>
              <span className="text-xs font-medium text-foreground">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default AboutHero;
