import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email is too long"),
  company: z
    .string()
    .min(1, "Company name is required")
    .max(100, "Company name is too long"),
  useCase: z
    .string()
    .min(10, "Please describe your use case (at least 10 characters)")
    .max(2000, "Description is too long"),
  budget: z.enum(["under-5k", "5k-15k", "15k-50k", "50k-plus", "unsure"], {
    errorMap: () => ({ message: "Please select a budget range" }),
  }),
  timeline: z.enum(["asap", "1-month", "1-3-months", "exploring"], {
    errorMap: () => ({ message: "Please select a timeline" }),
  }),
  // Honeypot field — must be empty
  _honey: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email is too long"),
  _honey: z.string().max(0, "Bot detected").optional(),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
