import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { services } from "@/data/services";

/**
 * About "What they bring" section — no eyebrow badge. A centered heading and
 * subheading sit above a white rounded card that holds the five service items
 * and a CTA row, all centered horizontally on the muted page background.
 *
 * Each item links out to its service page and has a premium hover: the soft
 * pastel icon badge crossfades to the primary gradient while the icon turns
 * white and scales slightly; the label tints toward brand color. Icons use
 * lucide-react with `fill="currentColor"` for the filled look where the
 * shape renders cleanly filled.
 */
export function WhatTheyBring() {
  return (
    <Section id="what-they-bring" containerClassName="pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl rounded-2xl border border-border/60 bg-card p-8 shadow-sm sm:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What they bring
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The capabilities behind Sprintexa — and every platform Software
            Flux builds.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-14 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.label}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center"
              >
                <span className="relative flex size-14 items-center justify-center rounded-xl bg-gradient-primary shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-md">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl bg-white/60 transition-opacity duration-300 ease-out group-hover:opacity-0"
                  />
                  <Icon
                    className="relative size-6 text-white/75 transition-colors duration-300 ease-out group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </span>

                <span className="mt-3 max-w-[9rem] text-sm font-bold leading-snug text-foreground transition-colors duration-300 ease-out group-hover:text-[#aa2493]">
                  {service.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center pt-6 sm:mt-14">
          <div className="flex flex-wrap items-center justify-center gap-3">
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
      </div>
    </Section>
  );
}