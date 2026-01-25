import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CareerForm } from "@/components/careers/career-form";
import { Button } from "@/components/ui/button";

export default function NewCareerPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/admin/careers">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Careers
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">Create New Career Posting</h1>
        <p className="text-muted-foreground">
          Fill in the details below to create a new job posting
        </p>
      </div>

      <CareerForm />
    </div>
  );
}
