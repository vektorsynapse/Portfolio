import { z } from "zod"

export const projectTypes = [
  "Full-stack web application",
  "Cross-platform mobile app",
  "Desktop application",
  "Business website & technical SEO",
  "Workflow automation",
  "Applied AI & automation",
  "Technical consulting or retainer",
  "Something else",
] as const

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(80, "Name must be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .max(160, "Email must be 160 characters or fewer.")
    .pipe(z.email("Please enter a valid email address.")),
  projectType: z.enum(projectTypes, { error: "Please choose a project type." }),
  message: z
    .string()
    .trim()
    .min(20, "Please share a little more detail (at least 20 characters).")
    .max(2000, "Message must be 2000 characters or fewer."),
})

export type ContactInput = z.infer<typeof contactSchema>
export type ContactField = keyof ContactInput
