import { useQuery } from "@tanstack/react-query";
import { getSuperstar } from "@/server/actions/getSuperstar";

export function useGetSuperstar(id: number) {
  return useQuery({
    queryKey: ["superstar"],
    queryFn: () => getSuperstar(id),
  });
}
