import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { BookDemoForm } from "@/components/home/BookDemoForm";

/**
 * Home "book a demo" section — gray background with a centered badge,
 * heading, and description, then a large white card containing the demo
 * request form.
 */
export function BookDemoSection() {
  return (
    <Section id="book-demo" containerClassName="py-16 sm:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <Badge className="shadow-sm">Get Started</Badge>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Let&apos;s Set Up Your Demo
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Tell us a bit about your team, and we&apos;ll show you how our
          platform fits your workflow.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:mt-14 sm:p-10">
        <BookDemoForm />
      </div>
    </Section>
  );
}
