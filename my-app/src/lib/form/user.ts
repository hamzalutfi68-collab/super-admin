import * as z from "zod";

export const userFormSchema = z
    .object({
        name: z.string().min(1, "Name is required").trim(),
        email: z.string().email("Please provide a valid email").toLowerCase().trim(),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string().min(6, "Please confirm your password"),
        role: z.enum(["user", "admin", "superAdmin"]),
        status: z.enum(["active", "blocked"]),
        managerId: z.string().optional(),
        maxManagedUsers: z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });
