import { z } from "zod";

export const companySizeOptions = [
  { label: "1-10", value: "1-10" },
  { label: "11-50", value: "11-50" },
  { label: "51-200", value: "51-200" },
  { label: "200+", value: "200+" },
];

const companySizeValues = companySizeOptions.map((option) => option.value);

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
  phoneNumber: z
    .string()
    .trim()
    .regex(/^\d{7,15}$/, { message: "Enter a valid phone number." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .max(500, { message: "Message must be under 500 characters." })
    .optional()
    .or(z.literal("")),
});
