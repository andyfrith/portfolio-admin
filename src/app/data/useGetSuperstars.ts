import { useQuery } from "@tanstack/react-query";
import { getSuperstars } from "@/server/actions/getSuperstars";

export function useGetSuperstars() {
  return useQuery({
    queryKey: ["superstars"],
    queryFn: getSuperstars,
  });
}
