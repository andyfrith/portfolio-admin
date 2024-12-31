import { superstarsSchema } from "@/app/superstar/schema";

export async function getSuperstars() {
  const res = await fetch("/api/superstar");
  if (!res.ok) {
    throw new Error("Server error");
  }
  const data = await res.json();
  const stars = superstarsSchema.parse(data);
  return stars;
}
