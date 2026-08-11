import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { partners } from "@/data/partners";

/**
 * Home credits strip — a seamless, infinitely looping marquee of customer
 * logo wordmarks placed directly beneath the hero so it reads as part of the
 * hero composition.
 *
 * The track is rendered twice and animated with `translate3d(-50%)` for an
 * endless, tick-free loop. A side-fading mask on the viewport makes logos
 * dissolve as they arrive/depart at each edge, matching the soft-seamless
 * feel of classic logo walls.
 */
const fadeMaskStyle = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
};

function PartnerLogo({ name, logo }) {
  return (
    <li className="flex shrink-0 items-center pr-14">
      {/* eslint-disable-next-line @next/next/no-img-element -- small decorative SVG, no optimization needed */}
      <img
        src={logo}
        alt={`${name} logo`}
        className="h-8 w-auto  duration-300 "
      />
    </li>
  );
}

export function PartnersScroller() {
  const items = [...partners, ...partners];

  return (
    <Section id="partners" containerClassName="py-10 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-5xl text-center">
        <Badge className="px-4 py-1.5">
          Smart Businesses Who Chose Sprintexa
        </Badge>

        <div className="relative mt-10 overflow-hidden" style={fadeMaskStyle}>
          <ul className="flex w-max animate-marquee-scroll items-center hover:[animation-play-state:paused]">
            {items.map((partner, idx) => (
              <PartnerLogo key={`${partner.name}-${idx}`} {...partner} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}