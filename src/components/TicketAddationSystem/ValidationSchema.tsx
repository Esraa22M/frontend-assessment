import { z } from "zod";

export const createTicketSchema = z.object({
  requesterName: z.string().min(1, "الاسم مطلوب"),
  requesterEmail: z.string().email("الإيميل غير صالح"),
  subject: z.string().min(3, "الموضوع قصير جدًا"),
});

export type CreateTicketInput = z.infer<typeof createTicketSchema>;
