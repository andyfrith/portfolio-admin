import { superstarSchema } from "@/app/superstar/schema";

export async function getSuperstar(id: number) {
  const res = await fetch(`/api/superstar/${id}`);
  if (!res.ok) {
    throw new Error("Server error");
  }
  const data = await res.json();
  const star = superstarSchema.parse(data);
  return star;
}
