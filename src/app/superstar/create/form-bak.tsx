// "use client";

// import { useRouter } from "next/navigation";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { SuperstarFormData, superstarSchema } from "@/app/superstar/schema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { createSuperstar } from "@/server/actions/createSuperstar";

// import { useMutation } from "@tanstack/react-query";
// import { useQueryClient } from "@tanstack/react-query";

// export default function SuperstarForm() {
//   const queryClient = useQueryClient();
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     setError,
//     formState: { errors, isSubmitting },
//   } = useForm<SuperstarFormData>({
//     resolver: zodResolver(superstarSchema),
//   });

//   const mutation = useMutation({
//     mutationFn: (values) => createSuperstar(values),
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries({ queryKey: ["todos"] });
//       router.push("/superstar/list");
//     },
//   });
//   const onSubmit: SubmitHandler<SuperstarFormData> = async (data) => {
//     try {
//       await mutation.mutate(data);
//     } catch (error) {
//       setError("root", {
//         message: String(error) as string,
//       });
//     }
//   };

//   return (
//     <div className="space-y-4 w-[450px]">
//       <h1 className="text-2xl font-semibold mt-4">Superstar</h1>
//       {mutation.isError && (
//         <span>{JSON.stringify(mutation.error.message)}</span>
//       )}

//       <form
//         className="flex flex-col px-4 py-2 gap-2"
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <Input
//           {...register("fullName")}
//           type="text"
//           required={true}
//           placeholder="Full Name"
//         />
//         {errors.fullName && (
//           <div className="text-red-500">{errors.fullName.message}</div>
//         )}

//         <Input
//           {...register("email")}
//           type="text"
//           placeholder="Email"
//           required={true}
//         />
//         {errors.email && (
//           <div className="text-red-500">{errors.email.message}</div>
//         )}

//         <Input
//           {...register("linkedInUrl")}
//           type="text"
//           placeholder="LinkedIn URL"
//         />
//         {errors.linkedInUrl && (
//           <div className="text-red-500">{errors.linkedInUrl.message}</div>
//         )}

//         <Input
//           {...register("githubUrl")}
//           type="text"
//           placeholder="Github Url URL"
//         />
//         {errors.githubUrl && (
//           <div className="text-red-500">{errors.githubUrl.message}</div>
//         )}

//         <Input
//           {...register("portfolioUrl")}
//           type="text"
//           placeholder="Portfolio URL"
//         />
//         {errors.portfolioUrl && (
//           <div className="text-red-500">{errors.portfolioUrl.message}</div>
//         )}

//         <Input {...register("education")} type="text" placeholder="Education" />
//         {errors.education && (
//           <div className="text-red-500">{errors.education.message}</div>
//         )}

//         <Input {...register("telephone")} type="text" placeholder="Telephone" />
//         {errors.telephone && (
//           <div className="text-red-500">{errors.telephone.message}</div>
//         )}

//         <Input {...register("summary")} type="text" placeholder="Summary" />
//         {errors.summary && (
//           <div className="text-red-500">{errors.summary.message}</div>
//         )}

//         <Button disabled={isSubmitting} type="submit">
//           {isSubmitting ? "Submitting..." : "Create"}
//         </Button>
//         {errors.root && (
//           <div className="text-red-500">{errors.root.message}</div>
//         )}
//       </form>
//     </div>
//   );
// }
