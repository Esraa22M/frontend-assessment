import { useEffect } from "react";
import { useTickets } from "@/hooks/useTickets";
import TicketItem from "./TicketItem";
import { useAtom } from "jotai";
import { ticketsAtom, activeTicketAtom } from "@/atoms/TicketAtoms";
import { removeTicket } from "@/api/mockTicketsApi";

export default function TicketsTabs() {
  const { data, isLoading, error } = useTickets(); 
  const [tickets, setTickets] = useAtom(ticketsAtom);
  const [activeId, setActiveId] = useAtom(activeTicketAtom);

  useEffect(() => {
    if (data) setTickets(data);
  }, [data, setTickets]);

  if (isLoading) return <p>جاري تحميل الطلبات...</p>;
  if (error) return <p>حدث خطأ أثناء جلب الطلبات</p>;
  if (!tickets.length) return <p>لا توجد طلبات</p>;

  const handleRemove = async (ticketId: string) => {
    try {
      await removeTicket(ticketId);
      setTickets(prev => prev.filter(t => t.id !== ticketId));
      if (activeId === ticketId) setActiveId(null);
    } catch (err) {
      console.error("حدث خطأ أثناء حذف التذكرة:", err);
    }
  };

  return (
    <div className="flex overflow-x-auto border-b border-[#E2E8F0]">
      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          isActive={ticket.id === activeId}
          onClick={() => setActiveId(ticket.id)}
          onRemove={() => handleRemove(ticket.id)}
        />
      ))}
    </div>
  );
}


