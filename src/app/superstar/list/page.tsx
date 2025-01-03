"use client";

import * as React from "react";
import { useGetSuperstars } from "@/app/data/useGetSuperstars";
import { SuperstarCard } from "../card";
import { AlertDestructive } from "@/app/components/alert-destructive";
import Hero from "@/app/components/hero";
import { AlertNormal } from "@/app/components/alert-normal";

export default function SuperstarList() {
  const { error, data } = useGetSuperstars();

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
      <div className="grid grid-rows-[0px_1fr_0px] items-center justify-items-center pb-4 sm:p-4 font-[family-name:var(--font-poppins-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
          {data.map((star) => {
            return (
              <SuperstarCard
                key={star.id}
                superstar={star}
                showEdit={true}
                showDelete={star.id !== 1}
              />
            );
          })}
        </main>
      </div>
    );
  }

  return <AlertNormal title="Superstars" message="... are loading." />;
}
