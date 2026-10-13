"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { toast } from "sonner";

import { useBookDemo } from "@/hooks/use-book-demo";
import { PhoneNumberField } from "@/components/home/PhoneNumberField";
import {
  bookDemoSchema,
  companySizeOptions,
  nicheOptions,
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
  const [phoneCountry, setPhoneCountry] = useState("PK");
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  const form = useForm({
    resolver: zodResolver(bookDemoSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      companyName: "",
      companySize: "",
      niche: "",
      phoneNumber: "",
      demoDate: "",
      demoTime: "",
      message: "",
    },
  });

  const onSubmit = useCallback(
    async (values) => {
      const scheduledAt = values.demoDate && values.demoTime
        ? new Date(`${values.demoDate}T${values.demoTime}`) : null;
      if (scheduledAt && (Number.isNaN(scheduledAt.getTime()) || scheduledAt <= new Date())) {
        form.setError("demoTime", { message: "Choose a future date and time." });
        return;
      }
      const phone = values.phoneNumber
        ? parsePhoneNumberFromString(values.phoneNumber, phoneCountry)
        : null;
      if (values.phoneNumber && !phone?.isValid()) {
        form.setError("phoneNumber", { message: "Enter a valid phone number for the selected country." });
        return;
      }
      const { demoDate, demoTime, ...contact } = values;
      const result = await submit({
        ...contact,
        phoneNumber: phone?.number || "",
        scheduledAt: scheduledAt?.toISOString() || "",
        scheduledTimeZone: scheduledAt ? Intl.DateTimeFormat().resolvedOptions().timeZone : "",
      });

      if (result.ok) {
        toast.success(result.data?.message ?? "Demo request received!", {
          description: "We'll be in touch shortly to schedule your demo.",
        });
        form.reset();
        setPhoneCountry("PK");
        return;
      }

      toast.error("Couldn't submit your request", {
        description: getErrorMessage(result.error),
      });
    },
    [submit, form, phoneCountry]
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
          name="niche"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Niche / Industry</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className={`${inputClassName} w-full`}>
                    <SelectValue placeholder="Select your industry (optional)" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {nicheOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
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
            <FormItem>
              <FormLabel>Phone Number <RequiredMark /></FormLabel>
              <FormControl>
                <PhoneNumberField
                  country={phoneCountry}
                  onCountryChange={setPhoneCountry}
                  value={field.value}
                  onChange={field.onChange}
                  className={inputClassName}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="demoDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Demo Date (optional)</FormLabel>
              <FormControl><Input type="date" min={today} className={inputClassName} {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="demoTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Demo Time (optional)</FormLabel>
              <FormControl><Input type="time" className={inputClassName} {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="-mt-4 text-xs text-muted-foreground sm:col-span-2">
          Date and time are in your local time zone ({Intl.DateTimeFormat().resolvedOptions().timeZone}).
        </p>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>What are you hoping to resolve?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your pain points and goals (up to 500 words)."
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
            "Schedule a Free Demo"
          )}
        </Button>
      </form>
    </Form>
  );
}
