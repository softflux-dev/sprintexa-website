import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const showcaseRows = [
  {
    image: "/images/product1.png",
    imageAlt: "Sprintexa projects, chat, HR, and operations dashboard",
    width: 5840,
    height: 4860,
    heading: (
      <>
        Projects, chat, HR, and operations.
        <br />
        All in one place.
      </>
    ),
    description:
      "Manage everything from a single platform — no more jumping between WhatsApp, spreadsheets, and disconnected tools. Assign tasks, communicate with your team, and track progress without losing context",
    reversed: false,
  },
  {
    image: "/images/product2.png",
    imageAlt: "Sprintexa attendance and payroll screen",
    width: 5840,
    height: 5251,
    heading: (
      <>
        Attendance, payroll, and workflows
        <br />
        handled for you.
      </>
    ),
    description:
      "Track attendance, manage leaves, and process payroll from one system. No spreadsheets, no manual entries just streamlined workflows that save time and reduce errors.",
    reversed: true,
  },
];

/**
 * Home product showcase — gray section with a centered badge, heading, and
 * subtitle, then a single white card containing both showcase rows
 * (alternating image/text, split by a divider). On mobile each row stacks
 * with the text on top.
 */
export function ProductShowcaseSection() {
  return (
    <Section id="product" containerClassName="py-16 sm:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <Badge className="shadow-sm">Product showcase</Badge>
        <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          See Sprintexa in Action
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Explore how every part of your business comes together in one
          powerful, easy-to-use platform.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm sm:mt-14">
        {showcaseRows.map((row) => (
          <div
            key={row.image}
            className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16"
          >
            <div
              className={cn(
                "flex flex-col items-start text-left",
                row.reversed && "lg:order-2"
              )}
            >
              <h3 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {row.heading}
              </h3>
              <p className="mt-4 text-base leading-tight text-muted-foreground sm:text-lg">
                {row.description}
              </p>
              <Button asChild variant="primary" size="lg" className="mt-8">
                <Link href="#book-demo">Get Started</Link>
              </Button>
            </div>

            <div
              className={cn(
                "mx-auto w-full max-w-md lg:max-w-lg",
                row.reversed && "lg:order-1"
              )}
            >
              <Image
                src={row.image}
                alt={row.imageAlt}
                width={row.width}
                height={row.height}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
