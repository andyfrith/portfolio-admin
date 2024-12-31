import { z } from "zod";

export const accoladeSchema = z.object({
  id: z.number(),
  summary: z.string().min(10, { message: "Summary is required" }).max(150),
});

export const accoladesSchema = z.array(accoladeSchema);
export type AccoladeFormData = z.infer<typeof accoladeSchema>;
