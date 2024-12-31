import { useQuery } from "@tanstack/react-query";
import { getAccolades } from "@/server/actions/getAccolades";

export function useGetAccolades() {
  return useQuery({
    queryKey: ["accolades"],
    queryFn: getAccolades,
  });
}
