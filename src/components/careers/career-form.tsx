"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createCareer, updateCareer } from "@/lib/actions/careers";
import {
  CareerStatus,
  type CreateCareerInput,
  createCareerSchema,
  JobTypes,
} from "@/lib/types/careers";

interface CareerFormProps {
  career?: {
    id: string;
    title: string;
    description: string;
    location: string;
    jobType: string;
    salaryRange?: string | null;
    requirements: string;
    qualifications: string;
    responsibilities: string;
    benefits?: string | null;
    applicationDeadline?: Date | null;
    applicationEmail?: string | null;
    applicationInstructions?: string | null;
    status: string;
    featured: boolean;
  };
  isEditing?: boolean;
}

export function CareerForm({ career, isEditing = false }: CareerFormProps) {
  const router = useRouter();

  const form = useForm<CreateCareerInput>({
    resolver: zodResolver(createCareerSchema),
    defaultValues: {
      title: career?.title || "",
      description: career?.description || "",
      location: career?.location || "",
      jobType: (career?.jobType as (typeof JobTypes)[number]) || JobTypes[0],
      salaryRange: career?.salaryRange || "",
      requirements: career?.requirements || "",
      qualifications: career?.qualifications || "",
      responsibilities: career?.responsibilities || "",
      benefits: career?.benefits || "",
      applicationDeadline: career?.applicationDeadline
        ? new Date(career.applicationDeadline)
        : undefined,
      applicationEmail: career?.applicationEmail || "",
      applicationInstructions: career?.applicationInstructions || "",
      status:
        (career?.status as (typeof CareerStatus)[keyof typeof CareerStatus]) ||
        CareerStatus.DRAFT,
      featured: career?.featured || false,
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(data: CreateCareerInput) {
    try {
      let result: { success: boolean; error?: string };

      if (isEditing && career) {
        result = await updateCareer({
          id: career.id,
          ...data,
        });
      } else {
        result = await createCareer(data);
      }

      if (result.success) {
        toast.success(
          isEditing
            ? "Career updated successfully"
            : "Career created successfully",
        );
        router.push("/admin/careers");
        router.refresh();
      } else {
        toast.error(result.error || "Failed to save career");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error(error);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="title">Job Title</FieldLabel>
          <Controller
            name="title"
            control={form.control}
            render={({ field }) => (
              <Input
                {...field}
                id="title"
                placeholder="e.g., Senior Software Engineer"
                disabled={isSubmitting}
              />
            )}
          />
          <FieldError errors={[form.formState.errors.title]} />
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="location">Location</FieldLabel>
            <Controller
              name="location"
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="location"
                  placeholder="e.g., Abuja, Nigeria or Remote"
                  disabled={isSubmitting}
                />
              )}
            />
            <FieldError errors={[form.formState.errors.location]} />
          </Field>

          <Field>
            <FieldLabel htmlFor="jobType">Job Type</FieldLabel>
            <Controller
              name="jobType"
              control={form.control}
              render={({ field }) => (
                <Select {...field} id="jobType" disabled={isSubmitting}>
                  {JobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Select>
              )}
            />
            <FieldError errors={[form.formState.errors.jobType]} />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="salaryRange">Salary Range (Optional)</FieldLabel>
          <FieldDescription>
            e.g., ₦5M - ₦8M per annum or $80,000 - $120,000
          </FieldDescription>
          <Controller
            name="salaryRange"
            control={form.control}
            render={({ field }) => (
              <Input
                {...field}
                id="salaryRange"
                placeholder="Enter salary range"
                disabled={isSubmitting}
              />
            )}
          />
          <FieldError errors={[form.formState.errors.salaryRange]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="description">Job Description</FieldLabel>
          <FieldDescription>
            Provide a comprehensive overview of the position
          </FieldDescription>
          <Controller
            name="description"
            control={form.control}
            render={({ field }) => (
              <Textarea
                {...field}
                id="description"
                placeholder="Describe the role and what makes it exciting..."
                rows={5}
                disabled={isSubmitting}
              />
            )}
          />
          <FieldError errors={[form.formState.errors.description]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="requirements">Requirements</FieldLabel>
          <FieldDescription>
            List the key requirements for this position (one per line or use
            bullet points)
          </FieldDescription>
          <Controller
            name="requirements"
            control={form.control}
            render={({ field }) => (
              <Textarea
                {...field}
                id="requirements"
                placeholder="• 5+ years of experience&#10;• Strong knowledge of React&#10;• Excellent communication skills"
                rows={6}
                disabled={isSubmitting}
              />
            )}
          />
          <FieldError errors={[form.formState.errors.requirements]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="qualifications">Qualifications</FieldLabel>
          <FieldDescription>
            Educational and professional qualifications needed
          </FieldDescription>
          <Controller
            name="qualifications"
            control={form.control}
            render={({ field }) => (
              <Textarea
                {...field}
                id="qualifications"
                placeholder="• Bachelor's degree in Computer Science&#10;• Relevant certifications&#10;• Advanced degree preferred"
                rows={5}
                disabled={isSubmitting}
              />
            )}
          />
          <FieldError errors={[form.formState.errors.qualifications]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="responsibilities">
            Key Responsibilities
          </FieldLabel>
          <FieldDescription>
            Main duties and responsibilities of this role
          </FieldDescription>
          <Controller
            name="responsibilities"
            control={form.control}
            render={({ field }) => (
              <Textarea
                {...field}
                id="responsibilities"
                placeholder="• Lead development of new features&#10;• Mentor junior developers&#10;• Collaborate with cross-functional teams"
                rows={6}
                disabled={isSubmitting}
              />
            )}
          />
          <FieldError errors={[form.formState.errors.responsibilities]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="benefits">Benefits (Optional)</FieldLabel>
          <FieldDescription>
            Perks and benefits offered with this position
          </FieldDescription>
          <Controller
            name="benefits"
            control={form.control}
            render={({ field }) => (
              <Textarea
                {...field}
                id="benefits"
                placeholder="• Health insurance&#10;• Remote work flexibility&#10;• Professional development budget"
                rows={5}
                disabled={isSubmitting}
              />
            )}
          />
          <FieldError errors={[form.formState.errors.benefits]} />
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="applicationDeadline">
              Application Deadline (Optional)
            </FieldLabel>
            <Controller
              name="applicationDeadline"
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="applicationDeadline"
                  type="date"
                  value={
                    field.value
                      ? new Date(field.value).toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) => {
                    const date = e.target.value
                      ? new Date(e.target.value)
                      : undefined;
                    field.onChange(date);
                  }}
                  disabled={isSubmitting}
                />
              )}
            />
            <FieldError errors={[form.formState.errors.applicationDeadline]} />
          </Field>

          <Field>
            <FieldLabel htmlFor="applicationEmail">
              Application Email (Optional)
            </FieldLabel>
            <Controller
              name="applicationEmail"
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="applicationEmail"
                  type="email"
                  placeholder="careers@company.com"
                  disabled={isSubmitting}
                />
              )}
            />
            <FieldError errors={[form.formState.errors.applicationEmail]} />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="applicationInstructions">
            Application Instructions (Optional)
          </FieldLabel>
          <FieldDescription>
            Provide instructions on how candidates should apply
          </FieldDescription>
          <Controller
            name="applicationInstructions"
            control={form.control}
            render={({ field }) => (
              <Textarea
                {...field}
                id="applicationInstructions"
                placeholder="Please send your resume and cover letter to the email address above..."
                rows={4}
                disabled={isSubmitting}
              />
            )}
          />
          <FieldError
            errors={[form.formState.errors.applicationInstructions]}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="status">Status</FieldLabel>
          <Controller
            name="status"
            control={form.control}
            render={({ field }) => (
              <Select {...field} id="status" disabled={isSubmitting}>
                <option value={CareerStatus.DRAFT}>Draft</option>
                <option value={CareerStatus.PUBLISHED}>Published</option>
              </Select>
            )}
          />
          <FieldError errors={[form.formState.errors.status]} />
        </Field>

        <Field>
          <FieldLabel htmlFor="featured" className="flex items-center gap-2">
            <Controller
              name="featured"
              control={form.control}
              render={({ field: { value, onChange, ...field } }) => (
                <Checkbox
                  {...field}
                  id="featured"
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                  disabled={isSubmitting}
                />
              )}
            />
            <span>Featured Position</span>
          </FieldLabel>
          <FieldDescription>
            Featured positions appear prominently and are marked as urgent
          </FieldDescription>
          <FieldError errors={[form.formState.errors.featured]} />
        </Field>
      </FieldGroup>

      <div className="flex gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? isEditing
              ? "Updating..."
              : "Creating..."
            : isEditing
              ? "Update Career"
              : "Create Career"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/admin/careers")}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
