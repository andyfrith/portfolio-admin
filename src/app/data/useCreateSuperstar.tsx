import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { createSuperstar } from "@/server/actions/createSuperstar";

export function useCreateSuperstar() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createSuperstar,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["superstars"] });
    },
  });

  return mutation;
}
