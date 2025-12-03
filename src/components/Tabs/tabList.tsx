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
      // تحديث كاش React Query
      queryClient.setQueryData(["tickets"], (old: Ticket[]) =>
        old.filter((t: Ticket) => t.id !== ticketId)
      );

      // لو التذكرة المتحذوفة هي اللي كانت مفتوحة
      if (activeId === ticketId) {
        setActiveId(null);
      }
    },
  });

  if (isLoading) return <p>جاري تحميل الطلبات...</p>;
  if (error) return <p>حدث خطأ أثناء جلب الطلبات</p>;
  if (!tickets?.length) return <p>لا توجد طلبات</p>;

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
