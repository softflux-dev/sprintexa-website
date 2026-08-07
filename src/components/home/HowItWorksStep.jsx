import { cn } from "@/lib/utils";

/**
 * A single "how it works" step: a brand-gradient icon box (SVG from
 * `public/icons/howItWorks`) with a white icon, title, and subtitle below —
 * no card wrapper.
 *
 * On hover the colors invert: the box fades to white and the icon re-tints to
 * the brand color. The source SVGs are a mix of black- and white-filled
 * files, so the icon is tinted with a CSS mask instead of rendering the raw
 * image, which lets the color crossfade smoothly.
 */
export function HowItWorksStep({ icon, title, description, className }) {
  return (
    <div
      className={cn(
        "flex w-full max-w-sm flex-col items-center text-center lg:max-w-none lg:flex-1",
        className
      )}
    >
      <div className="group relative flex size-16 items-center justify-center rounded-2xl shadow-md">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl bg-gradient-primary transition-opacity duration-300 ease-out group-hover:opacity-0"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl bg-white opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        />
        <div
          aria-hidden="true"
          className="relative size-10 bg-white transition-colors duration-300 ease-out group-hover:bg-[#aa2493] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
          style={{ maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }}
        />
      </div>

      <h3 className="mt-5 text-lg font-semibold leading-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
