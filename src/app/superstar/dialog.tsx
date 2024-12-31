import { useRouter } from "next/navigation";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteSuperstar } from "@/server/actions/deleteSuperstar";
import { SuperstarFormData } from "./schema";
import { SuperstarCard } from "./card";

export function DeleteDialog({ superstar }: { superstar: SuperstarFormData }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id: number) => deleteSuperstar(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["superstar", "superstars"] });
      router.push("/superstar/list");
    },
    onError: (error) => {
      console.error(error);
      console.log(error);
      console.log("API Error (in mutation):" + JSON.stringify(error.message));
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete Superstar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Superstar</DialogTitle>
          <DialogDescription>
            Make sure you want to destroy this superstar. Click Yes! if you are
            sure.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <SuperstarCard superstar={superstar} />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={() => mutate(superstar.id!)}>Yes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
