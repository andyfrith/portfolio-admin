"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SuperstarFormData } from "./schema";
import { DeleteDialog } from "./dialog";

export function SuperstarCard({
  superstar,
  showEdit,
  showDelete,
}: {
  superstar: SuperstarFormData;
  showEdit?: boolean;
  showDelete?: boolean;
}) {
  return (
    <Card className="card w-full">
      {/* w-[450px] */}
      <CardHeader>
        <CardTitle>{superstar.fullName}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-1">
          <span className="font-semibold text-white">Email</span>
          <br /> {superstar.email}
        </CardDescription>
        <CardDescription className="mb-1">
          <span className="font-semibold text-white">Telephone</span>
          <br /> {superstar.telephone}
        </CardDescription>
        <CardDescription className="mb-1">
          <span className="font-semibold text-white">LinkedIn</span>
          <br /> {superstar.linkedInUrl}
        </CardDescription>
        <CardDescription className="mb-1">
          <span className="font-semibold text-white">Github</span>
          <br /> {superstar.githubUrl}
        </CardDescription>
        <CardDescription className="mb-1">
          <span className="font-semibold text-white">Portfolio</span>
          <br /> {superstar.portfolioUrl}
        </CardDescription>
        <CardDescription className="mb-1">
          <span className="font-semibold text-white">Summary</span>
          <br />
          {superstar.summary}
        </CardDescription>
      </CardContent>
      {(showEdit || showDelete) && (
        <CardFooter className="flex justify-between">
          {showEdit && (
            <Button>
              {" "}
              <Link href={`/superstar/${superstar.id}/edit`}>Edit</Link>
            </Button>
          )}
          {showDelete && <DeleteDialog superstar={superstar} />}
        </CardFooter>
      )}
    </Card>
  );
}
