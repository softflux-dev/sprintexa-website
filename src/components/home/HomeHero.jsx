import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

/**
 * Home page hero — mirrors AboutHero's two-column split (~45/55) on the same
 * muted section background. No eyebrow badge.
 *
 * Left: heading, subheading, a primary/ghost CTA row, then a wrapping row of
 * small pill badges where "Projects" is the highlighted state (brand gradient
 * with a corner check) and the rest are dull neutral pills. Right: the
 * `homeHero.png` illustration floating naturally in the column — no box.
 *
 * Heading/subheading are placeholder copy to be filled in later.
 */
const featurePills = [
  { label: "Projects", active: true },
  { label: "Chat", active: false },
  { label: "Docs", active: false },
  { label: "Calendar", active: false },
  { label: "Automations", active: false },
  { label: "Time Tracking", active: false },
  { label: "Dashboards", active: false },
  { label: "Scheduling", active: false },
];

export function HomeHero() {
  return (
    <Section id="home-hero" containerClassName="py-20 sm:py-24 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_2fr] lg:gap-8">
        <div className="flex flex-col items-start text-left">
          <h1 className="max-w-5xl  text-balance text-4xl font-medium leading-tighter tracking-tight text-foreground lg:text-6xl">
            One Platform to Run <br />
            <span className="text-gradient-primary">Your Whole Team</span>
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sprintexa brings projects, HR, attendance, payroll, tasks, and team
            collaboration into one unified platform so your growing business
            can move faster, stay organized, and operate without the chaos of
            spreadsheets and scattered workflows.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="primary">
              <Link href="#book-demo">Book A Free Demo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="group bg-white px-4 shadow-sm text-base font-semibold hover:bg-white hover:underline underline-offset-4"
            >
              <Link href="#how-it-works">
                <span className="text-gradient-primary">See How It Works</span>
                <ArrowRight className="size-4 text-[#aa2493] transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {featurePills.map((pill) =>
              pill.active ? (
                <span
                  key={pill.label}
                  className="relative flex items-center rounded-full bg-gradient-primary py-1.5 pl-4 pr-4 text-[13px] font-medium text-white"
                >
                  {pill.label}
                  <span className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-white shadow-sm">
                    <Check className="size-3 text-[#aa2493]" strokeWidth={3} />
                  </span>
                </span>
              ) : (
                <span
                  key={pill.label}
                  className="flex items-center rounded-full border border-dashed border-muted-foreground/40 bg-transparent px-4 py-1.5 text-[13px] font-medium text-muted-foreground"
                >
                  {pill.label}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-3xl">
          <Image
            src="/images/homeHero.webp"
            alt="Sprintexa all-in-one platform illustration"
            width={10820}
            height={6380}
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </Section>
  );
}
