import Image from "next/image";

import { Section } from "@/components/ui/section";

/**
 * Home "context" section — a single media block, nothing else. No badges,
 * CTAs, icons, captions, or overlays, and no heading/subtitle.
 *
 * The image bleeds nearly full-width (viewport-wide minus a small margin),
 * breaking out of the page container and sitting directly on the muted
 * section background — no white card. On small screens the wide screenshot
 * keeps its width and scrolls horizontally (with snap) instead of shrinking,
 * mirroring ClickUp's mobile treatment.
 */
export function SolutionSection() {
  return (
    <Section id="solution" containerClassName="py-20 sm:py-24 lg:py-28">
      <div className="relative left-1/2 w-[82vw] -translate-x-1/2">
        <div className="scroll-no-bar">
          <Image
            src="/images/tangleImg.png"
            alt="Work sprawl tangles context and productivity"
            width={17228}
            height={7032}
            sizes="(min-width: 768px) 82vw, 100vw"
            className="h-auto w-full min-w-196 snap-center"
          />
        </div>
      </div>
    </Section>
  );
}