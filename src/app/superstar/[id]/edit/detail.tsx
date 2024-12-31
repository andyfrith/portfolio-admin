"use client";

import { useRouter } from "next/navigation";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useGetSuperstar } from "@/app/data/useGetSuperstar";
import SuperstarForm from "../../form";
import { updateSuperstar } from "@/server/actions/updateSuperstar";
import { SuperstarFormData } from "../../schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDestructive } from "@/app/components/alert-destructive";
import { AlertNormal } from "@/app/components/alert-normal";
import Hero from "@/app/components/hero";

export default function SuperstarDetail({ id }: { id: number }) {
  const router = useRouter();
  const { isPending, error, data } = useGetSuperstar(id);
  const queryClient = useQueryClient();
  const { mutate, error: mutationError } = useMutation({
    mutationFn: (values: SuperstarFormData) => updateSuperstar(id, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["superstar", "superstars"] });
      router.push("/superstar");
    },
    onError: (error) => {
      console.error(error);
      console.log(error);
      console.log("API Error (in mutation):" + JSON.stringify(error.message));
    },
  });

  if (error || mutationError) {
    return (
      <>
        <Hero />
        <AlertDestructive
          title="Error"
          description="An error has occurred. The API is unavilable."
          error={error ? error.message : mutationError?.stack}
        />
      </>
    );
  }

  if (data) {
    return (
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>Update Superstar</CardTitle>
        </CardHeader>
        <CardContent>
          <SuperstarForm
            superstar={data}
            onFormSubmit={mutate}
            isPending={isPending}
          />
        </CardContent>
      </Card>
    );
  }

  return <AlertNormal title="A Superstar" message="... is being updated." />;
}
