import { Section } from "@/components/ui/section";

/**
 * About "Designed & Developed By" credits — a contained white card sitting on
 * the same muted background as the hero, horizontally centered with a
 * narrower max-width so it reads as a single elevated card.
 *
 * Content stacks vertically and is left-aligned: soft pastel badge holding
 * the studio's flux logo, a small label heading, and muted body copy. Brand
 * color only appears in the badge so the section stays quiet and
 * non-competing.
 */
export function CreditsSection() {
  return (
    <Section id="credits" containerClassName="pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto max-w-7xl rounded-2xl border border-border/60 bg-card p-8 shadow-sm sm:p-10">
        <div className="flex flex-col items-start text-left">
          <div className="flex size-14 items-center justify-center rounded-xl bg-gradient-primary-soft">
            {/* eslint-disable-next-line @next/next/no-img-element -- small decorative SVG, no optimization needed */}
            <img src="/icons/fluxLogo.svg" alt="Flux" className="h-8 w-auto" />
          </div>

          <h2 className="mt-6 text-base font-semibold text-foreground">
            Designed &amp; Developed By
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Solution Software Flux Solution A SaaS-focused product development
            company building scalable, high-performance digital platforms for
            startups and enterprises. With expertise in product engineering,
            SaaS architecture, and user experience design, the team transforms
            ideas into market-ready platforms — combining strategy, design, and
            development into one streamlined process.
          </p>
        </div>
      </div>
    </Section>
  );
}