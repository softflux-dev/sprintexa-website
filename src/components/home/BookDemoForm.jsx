"use client";

import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { useBookDemo } from "@/hooks/use-book-demo";
import {
  bookDemoSchema,
  companySizeOptions,
} from "@/lib/validations/book-demo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const inputClassName =
  "h-11 rounded-xl border-border/60 bg-section-muted focus-visible:border-primary/60 focus-visible:ring-primary/20";
const textareaClassName =
  "min-h-[120px] resize-none rounded-xl border-border/60 bg-section-muted focus-visible:border-primary/60 focus-visible:ring-primary/20";

function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-destructive">
      *
    </span>
  );
}

function getErrorMessage(error) {
  const data = error?.response?.data;

  if (typeof data === "string" && data.trim()) return data;

  const fieldErrors = data?.errors;
  if (fieldErrors && typeof fieldErrors === "object") {
    const messages = Object.values(fieldErrors)
      .flat()
      .filter(Boolean);
    if (messages.length) return messages.join(" ");
  }

  return (
    data?.message ??
    data?.error ??
    (error?.request
      ? "We couldn't reach our servers. Please try again."
      : "Something went wrong. Please try again.")
  );
}

export function BookDemoForm() {
  const { isSubmitting, submit } = useBookDemo();

  const form = useForm({
    resolver: zodResolver(bookDemoSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      companyName: "",
      companySize: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit = useCallback(
    async (values) => {
      const result = await submit(values);

      if (result.ok) {
        toast.success(result.data?.message ?? "Demo request received!", {
          description: "We'll be in touch shortly to schedule your demo.",
        });
        form.reset();
        return;
      }

      toast.error("Couldn't submit your request", {
        description: getErrorMessage(result.error),
      });
    },
    [submit, form]
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="grid gap-6 sm:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Full Name <RequiredMark />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Jane Doe"
                  autoComplete="name"
                  className={inputClassName}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Company Name <RequiredMark />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Acme Inc"
                  autoComplete="organization"
                  className={inputClassName}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="workEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Work Email <RequiredMark />
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  inputMode="email"
                  placeholder="jane@acme.com"
                  autoComplete="email"
                  className={inputClassName}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companySize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Company Size <RequiredMark />
              </FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className={`${inputClassName} w-full`}>
                    <SelectValue placeholder="Select your team size" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {companySizeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  inputMode="numeric"
                  placeholder="+1 555 123 4567"
                  autoComplete="tel"
                  className={inputClassName}
                  {...field}
                  onChange={(event) =>
                    field.onChange(event.target.value.replace(/[^0-9]/g, ""))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>What are you hoping to solve?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Looking to streamline our HR workflows."
                  className={textareaClassName}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="h-11 w-full rounded-xl sm:col-span-2 active:scale-[0.98]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Schedule Your Free Demo"
          )}
        </Button>
      </form>
    </Form>
  );
}
