"use client";

import { useRouter } from "next/navigation";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import SuperstarForm from "../form";
import { createSuperstar } from "@/server/actions/createSuperstar";
import { SuperstarFormData } from "../schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDestructive } from "@/app/components/alert-destructive";
import Hero from "@/app/components/hero";

export default function SuperstarDetail() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, error } = useMutation({
    mutationFn: (values: SuperstarFormData) => createSuperstar(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["superstar", "superstars"] });
      router.push("/superstar/list");
    },
    onError: (error) => {
      console.error(error);
      console.log(error);
      console.log("API Error (in mutation):" + JSON.stringify(error.message));
    },
  });

  if (error) {
    return (
      <>
        <Hero />
        <AlertDestructive
          title="Error"
          description="An error has occurred. The API is unavilable."
          error={error.message}
        />
      </>
    );
  }

  return (
    <Card className="card w-[550px]">
      <CardHeader>
        <CardTitle>Create Superstar</CardTitle>
      </CardHeader>
      <CardContent>
        <SuperstarForm onFormSubmit={mutate} isPending={false} />
      </CardContent>
    </Card>
  );
}
