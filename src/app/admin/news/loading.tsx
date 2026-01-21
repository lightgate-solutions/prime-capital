import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export default function AdminNewsLoading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="h-10 bg-muted animate-pulse rounded-lg mb-2 w-64" />
          <div className="h-5 bg-muted animate-pulse rounded-lg w-96" />
        </div>
        <div className="h-10 bg-muted animate-pulse rounded-lg w-32" />
      </div>

      <div className="mb-6">
        <div className="h-10 bg-muted animate-pulse rounded-lg" />
      </div>

      <div className="grid gap-4">
        {[...Array(5)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-6 bg-muted animate-pulse rounded w-24" />
                    <div className="h-6 bg-muted animate-pulse rounded w-20" />
                  </div>
                  <div className="h-6 bg-muted animate-pulse rounded w-3/4" />
                  <div className="h-4 bg-muted animate-pulse rounded" />
                </div>
                <div className="flex gap-2">
                  <div className="h-9 bg-muted animate-pulse rounded w-20" />
                  <div className="h-9 bg-muted animate-pulse rounded w-20" />
                </div>
              </div>
            </CardHeader>
            <CardFooter>
              <div className="flex gap-4">
                <div className="h-4 bg-muted animate-pulse rounded w-32" />
                <div className="h-4 bg-muted animate-pulse rounded w-32" />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
