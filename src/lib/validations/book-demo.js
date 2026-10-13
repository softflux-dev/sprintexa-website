import { z } from "zod";

export const companySizeOptions = [
  { label: "1-10", value: "1-10" },
  { label: "11-50", value: "11-50" },
  { label: "51-200", value: "51-200" },
  { label: "200+", value: "200+" },
];

const companySizeValues = companySizeOptions.map((option) => option.value);
export const nicheOptions = [
  "Software Development House", "Digital Marketing Agency", "Construction",
  "E-Commerce", "Education", "Healthcare", "Financial Services", "Other",
];

export const bookDemoSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Full name must be under 100 characters." }),
  workEmail: z
    .string()
    .trim()
    .min(1, { message: "Work email is required." })
    .email({ message: "Enter a valid email address." }),
  companyName: z
    .string()
    .trim()
    .min(2, { message: "Company name must be at least 2 characters." })
    .max(100, { message: "Company name must be under 100 characters." }),
  companySize: z
    .string()
    .min(1, { message: "Select your company size." })
    .refine((value) => companySizeValues.includes(value), {
      message: "Select your company size.",
    }),
  niche: z.string().refine((value) => !value || nicheOptions.includes(value), {
    message: "Select a valid industry.",
  }),
  phoneNumber: z
    .string()
    .trim()
    .min(1, { message: "Phone number is required." })
    .regex(/^\d{7,15}$/, { message: "Enter a valid phone number." }),
  demoDate: z.string(),
  demoTime: z.string(),
  message: z
    .string()
    .trim()
    .refine((value) => !value || value.split(/\s+/).length <= 500, {
      message: "Please keep your message to 500 words or fewer.",
    })
    .optional()
    .or(z.literal("")),
}).refine((value) => Boolean(value.demoDate) === Boolean(value.demoTime), {
  path: ["demoTime"],
  message: "Choose both a date and time, or leave both blank.",
});
