import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * About CTA section — identical copy of the home `CtaSection`, kept as its
 * own component so it can be placed at the end of the About page flow.
 * Full-viewport-width banner with the `sectionBG` image behind it. Heading
 * and description render in white, with a white button whose label uses the
 * brand gradient text.
 *
 * Intentionally does NOT use the `Section`/`Container` primitives so the
 * background image bleeds edge-to-edge across the viewport.
 */
export function AboutCtaSection() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/images/sectionBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative flex flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 sm:py-32">
        <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Their approach
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          To build products that solve real problems, reduce operational
          friction, and help businesses scale without unnecessary complexity.
        </p>
        <div className="flex flex-wrap items-center gap-3">
        <Button
          asChild
          size="lg"
          variant="outline"
          className="mt-2 rounded-xl bg-white px-7 shadow-md hover:bg-white"
        >
          <Link href="#book-demo">
            <span className="text-gradient-primary font-semibold">
              View Portfolio
            </span>
          </Link>
        </Button>{" "}
        <Button
          asChild
          size="lg"
          variant="outline"
          className="mt-2 rounded-xl bg-white px-7 shadow-md hover:bg-white"
        >
          <Link href="#book-demo">
            <span className="text-gradient-primary font-semibold">
              View Services
            </span>
          </Link>
        </Button>
        </div>
      </div>
    </section>
  );
}
