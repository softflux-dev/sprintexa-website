import { Fragment } from "react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { HowItWorksStep } from "@/components/home/HowItWorksStep";
import { howItWorks } from "@/data/how-it-works";

const arrowConnectors = ["arrow1", "arrow2", "arrow1"];

function ArrowIcon({ type }) {
  return (
    <div
      aria-hidden="true"
      className="hidden h-20 w-44 shrink-0 items-center justify-center 2xl:flex"
    >
      <Image
        src={`/icons/${type}.svg`}
        alt=""
        width={263}
        height={47}
        unoptimized
        className="h-auto w-full"
      />
    </div>
  );
}

/**
 * Home "how it works" section — badge, heading, and subtitle above a row of
 * four `HowItWorksStep`s connected by gradient arrows (arrow1, arrow2,
 * arrow1). The arrows only render on very wide (`2xl`) screens so the steps
 * keep readable widths; below that the steps stack vertically.
 */
export function HowItWorksSection() {
  return (
    <Section id="how-it-works" containerClassName="py-16 sm:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <Badge className="shadow-sm">How it works</Badge>
        <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          From setup to payout in four simple steps.
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Get your team running in minutes — no complex setup, no training
          required.
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center gap-12 sm:mt-14 lg:flex-row lg:items-start lg:gap-1">
        {howItWorks.map((step, index) => (
          <Fragment key={step.title}>
            {index > 0 && <ArrowIcon type={arrowConnectors[index - 1]} />}
            <HowItWorksStep {...step} />
          </Fragment>
        ))}
      </div>
    </Section>
  );
}
