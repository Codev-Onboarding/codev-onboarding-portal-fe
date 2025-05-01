import { z } from "zod";

export const addUserFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(1, "Role is required"),
});

// Type for form data
export type AddUserFormData = z.infer<typeof addUserFormSchema>;
