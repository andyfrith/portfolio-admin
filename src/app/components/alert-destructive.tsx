import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertDestructive({
  title,
  description,
  error,
}: {
  title: string;
  description: string;
  error?: string;
}) {
  return (
    <Alert variant="destructive" className="mt-12">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      {error && <AlertDescription>{error}</AlertDescription>}
    </Alert>
  );
}
