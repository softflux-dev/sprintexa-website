import { Button } from "@/components/ui/button";
import { SmoothLink } from "@/components/ui/smooth-link";

/**
 * Home CTA section — full-viewport-width banner with the `sectionBG` image
 * behind it. Heading and description render in white, with a white button
 * whose label uses the brand gradient text.
 *
 * This intentionally does NOT use the `Section`/`Container` primitives so the
 * background image bleeds edge-to-edge across the viewport. The background is
 * applied via CSS `background-image` rather than `next/image` so it renders
 * regardless of the image optimizer.
 */
export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/images/sectionBG.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative flex flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 sm:py-32">
        <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          One Platform to Run Your Whole Team
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Sprintexa brings projects, HR, attendance, payroll, tasks, and team
          collaboration into one unified platform so your growing business can
          move faster, stay organized, and operate without the chaos of
          spreadsheets and scattered workflows.
        </p>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="mt-2 rounded-xl bg-white px-7 shadow-md hover:bg-white"
        >
          <SmoothLink href="/#book-demo">
            <span className="text-gradient-primary font-semibold">
              Schedule Free Demo
            </span>
          </SmoothLink>
        </Button>
      </div>
    </section>
  );
}
