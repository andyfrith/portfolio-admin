"use server";

import { superstarSchema, SuperstarFormData } from "@/app/superstar/schema";

export async function createSuperstar(data: SuperstarFormData) {
  const result = superstarSchema.safeParse(data);
  console.log("result", result);
  if (!result.success) {
    return {
      error: "Invalid form data",
      success: false,
    };
  }

  return {
    success: true,
  };
}
