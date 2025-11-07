import { z } from "zod";
export const contactFormSchema = z.object({
  email: z.email("Invalid email address"),
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name cannot exceed 20 characters"),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(50, "Message cannot exceed 50 characters."),
});
