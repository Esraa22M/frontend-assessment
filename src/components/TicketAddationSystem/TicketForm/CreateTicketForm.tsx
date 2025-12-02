import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import {  createTicketSchema } from "../ValidationSchema";
import type { CreateTicketInput } from "../ValidationSchema";
import { generateTicketId } from "@/utils/generateTicketId";
export function CreateTicketForm({ onSubmitTicket }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTicketInput>({
    resolver: zodResolver(createTicketSchema),
  });

  const onSubmit = (data: CreateTicketInput) => {
    const newTicket = {
      id: generateTicketId(),
      requesterName: data.requesterName,
      requesterEmail: data.requesterEmail,
      subject: data.subject,
      lastUpdated: new Date().toISOString(),
      replies: [],
    };

    onSubmitTicket(newTicket);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-4 border border-gray-200 rounded-xl w-full max-w-md"
    >
      <div>
        <label className="block mb-1 font-medium">اسم العميل</label>
        <input
          {...register("requesterName")}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        {errors.requesterName && (
          <p className="text-red-500 text-sm">{errors.requesterName.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">البريد الإلكتروني</label>
        <input
          {...register("requesterEmail")}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        {errors.requesterEmail && (
          <p className="text-red-500 text-sm">{errors.requesterEmail.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">الموضوع</label>
        <input
          {...register("subject")}
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.subject.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="flex items-center gap-2 bg-blue-600 text-white p-3 rounded-lg"
      >
        <Plus size={18} strokeWidth={2} />
        إضافة تذكرة
      </button>
    </form>
  );
}
