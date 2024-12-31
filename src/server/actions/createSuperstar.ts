import { superstarSchema, SuperstarFormData } from "@/app/superstar/schema";

export async function createSuperstar(superstar: SuperstarFormData) {
  const res = await fetch("/api/superstar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(superstar),
  });
  const data = await res.json();
  if (data.error) {
    console.error("API Error: ", data.error);
    throw new Error(JSON.stringify(data.error));
  }

  const star = superstarSchema.parse(data);
  return star;
}
