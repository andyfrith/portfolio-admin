import { z } from "zod";

export const superstarSchema = z.object({
  id: z.number().optional(),
  fullName: z
    .string()
    .min(10, { message: "Name is required (10-150 characters)." })
    .max(150),
  email: z
    .string()
    .email()
    .min(10, { message: "Email is required (10-255 characters)." })
    .max(150),
  linkedInUrl: z
    .string()
    .min(10, { message: "LinkedIn URL is required (10-150 characters)." })
    .max(150),
  githubUrl: z
    .string()
    .min(10, { message: "Github URL is required (10-150 characters)." })
    .max(150),
  portfolioUrl: z
    .string()
    .min(10, { message: "Portfolio URL is required (10-150 characters)." })
    .max(150),
  education: z
    .string()
    .min(10, { message: "Education is required (10-150 characters)." })
    .max(150),
  telephone: z
    .string()
    .min(10, { message: "Telephone is required (10-150 characters)." })
    .max(150),
  summary: z
    .string()
    .min(10, { message: "Summary is required (10-500 characters)." })
    .max(500),
});

export const superstarsSchema = z.array(superstarSchema);
export type SuperstarFormData = z.infer<typeof superstarSchema>;
