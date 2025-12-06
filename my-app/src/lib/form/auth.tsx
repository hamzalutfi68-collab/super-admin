import * as z from "zod";

export const loginformSchema = z.object({
  email: z.string().email("must be a valid email"),
  password: z
    .string()
    .min(6, "must be at least 6 characters")
    .max(20, "must be at most 20 characters"),
});
