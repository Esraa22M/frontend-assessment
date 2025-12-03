import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";
import { createTicketSchema } from "../ValidationSchema";
import type { CreateTicketInput } from "../ValidationSchema";
import { generateTicketId } from "@/utils/generateTicketId";

export function CreateTicketForm({ onSubmitTicket, onClose }) {
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
    <div className="relative w-full max-w-md">
      <button
        type="button"
        onClick={onClose}
        className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shadow-sm hover:bg-gray-200 transition-colors"
      >
        <X size={16} color="#EF4444" /> 
      </button>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-8 border border-gray-200 rounded-xl w-full bg-white"
      >
        <div>
          <input
            {...register("requesterName")}
            placeholder="اسم العميل"
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0DDD8F] focus:border-[#0DDD8F]"
          />
          {errors.requesterName && (
            <p className="text-red-500 text-xs">{errors.requesterName.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("requesterEmail")}
            placeholder="البريد الإلكتروني"
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0DDD8F] focus:border-[#0DDD8F]"
          />
          {errors.requesterEmail && (
            <p className="text-red-500 text-xs">{errors.requesterEmail.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("subject")}
            placeholder="الموضوع"
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0DDD8F] focus:border-[#0DDD8F]"
          />
          {errors.subject && (
            <p className="text-red-500 text-xs">{errors.subject.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 bg-[#0DDD8F] text-white p-3 text-sm rounded-lg hover:bg-[#0BCF7B] transition-colors duration-200"
        >
          <Plus size={18} strokeWidth={2} />
          إضافة تذكرة
        </button>
      </form>
    </div>
  );
}
