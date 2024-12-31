"use client";

import { useGetSuperstar } from "@/app/data/useGetSuperstar";
import { SuperstarCard } from "./card";
import { AlertDestructive } from "../components/alert-destructive";
import { AlertNormal } from "../components/alert-normal";
import Hero from "../components/hero";

export default function SuperstarDetail({ id }: { id: number }) {
  const { error, data } = useGetSuperstar(id);

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

  if (data) {
    return (
      <SuperstarCard superstar={data} showEdit={true} showDelete={id !== 1} />
    );
  }

  return <AlertNormal title="The Superstar" message="... is loading." />;
}
