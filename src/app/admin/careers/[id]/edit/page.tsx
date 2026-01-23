import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CareerForm } from "@/components/careers/career-form";
import { Button } from "@/components/ui/button";
import { getCareerById } from "@/db/queries/careers";

interface EditCareerPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditCareerPage({ params }: EditCareerPageProps) {
  const { id } = await params;
  const career = await getCareerById(id);

  if (!career) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/admin/careers">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Careers
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">Edit Career Posting</h1>
        <p className="text-muted-foreground">
          Update the career posting details below
        </p>
      </div>

      <CareerForm career={career} isEditing={true} />
    </div>
  );
}
