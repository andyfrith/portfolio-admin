import { accoladesSchema } from "@/app/accolades/schema";

export async function getAccolades() {
  const res = await fetch("/api/accolades");
  if (!res.ok) {
    throw new Error("Server error");
  }
  const data = await res.json();
  const accolades = accoladesSchema.parse(data);
  return accolades;
}
