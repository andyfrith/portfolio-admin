import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { updateSuperstar } from "@/server/actions/updateSuperstar";

export function useUpdateSuperstar() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateSuperstar,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["superstars"] });
    },
  });

  return mutation;
}
