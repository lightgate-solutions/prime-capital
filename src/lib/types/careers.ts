import { z } from "zod";

export const CareerStatus = {
  DRAFT: "draft",
  PUBLISHED: "published",
} as const;

export type CareerStatusType = (typeof CareerStatus)[keyof typeof CareerStatus];

export const JobTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
] as const;

export type JobType = (typeof JobTypes)[number];

export const createCareerSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title must be less than 200 characters"),
  description: z.string().min(1, "Description is required"),
  location: z.string().min(1, "Location is required"),
  jobType: z.enum(JobTypes),
  salaryRange: z.string().optional(),
  requirements: z.string().min(1, "Requirements are required"),
  qualifications: z.string().min(1, "Qualifications are required"),
  responsibilities: z.string().min(1, "Responsibilities are required"),
  benefits: z.string().optional(),
  applicationDeadline: z.date().optional().nullable(),
  applicationEmail: z
    .string()
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),
  applicationInstructions: z.string().optional(),
  status: z.enum([CareerStatus.DRAFT, CareerStatus.PUBLISHED]),
  featured: z.boolean(),
  slug: z.string().optional(),
});

export const updateCareerSchema = createCareerSchema.partial().extend({
  id: z.string().min(1, "Career ID is required"),
});

export type CreateCareerInput = z.infer<typeof createCareerSchema>;
export type UpdateCareerInput = z.infer<typeof updateCareerSchema>;
