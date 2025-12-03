import { useTickets } from "@/hooks/useTickets";
import TicketItem from "./TicketItem";
import { useAtom } from "jotai";
import { activeTicketAtom } from "@/atoms/TicketAtoms";
import { AddButton } from "../MainContent/buttons/AddButton";
import { removeTicket } from "@/api/mockTicketsApi";
import { createTicketOverlayAtom } from "@/atoms/OverlayAtom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Ticket } from "@/types/ticket";
export default function TicketsTabs() {
  const { data: tickets, isLoading, error } = useTickets();
  const [activeId, setActiveId] = useAtom(activeTicketAtom);
  const [, setShowOverlay] = useAtom(createTicketOverlayAtom);

  const queryClient = useQueryClient();

  // mutation لحذف التذكرة
  const { mutate: deleteTicket } = useMutation({
    mutationFn: (ticketId: string) => removeTicket(ticketId),

    onSuccess: (_, ticketId) => {
      queryClient.setQueryData(["tickets"], (old: Ticket[]) =>
        old.filter((t: Ticket) => t.id !== ticketId)
      );

      if (activeId === ticketId) {
        setActiveId(null);
      }
    },
  });

  if (isLoading)
    return (
      <p className="text-gray-500 text-sm text-center py-4  border-b border-[#E2E8F0]">
        جاري تحميل الطلبات...
      </p>
    );

  if (error)
    return (
      <p className="text-red-500 text-sm text-center py-4  border-b border-[#E2E8F0]">
        حدث خطأ أثناء جلب الطلبات
      </p>
    );

  if (!tickets?.length)
    return (
      <div className=" flex gap-2 text-gray-400 text-sm text-center py-4  border-b border-[#E2E8F0] justify-center items-center">
        <p > لا توجد طلبات
        </p>       
         <AddButton onClick={() => setShowOverlay(true)} />
      </div>
    );


  return (
    <div className="flex overflow-x-auto border-b border-[#E2E8F0] items-center gap-[8.5px]">
      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          isActive={ticket.id === activeId}
          onClick={() => setActiveId(ticket.id)}
          onRemove={() => deleteTicket(ticket.id)}
        />
      ))}

      <AddButton onClick={() => setShowOverlay(true)} />
    </div>
  );
}
