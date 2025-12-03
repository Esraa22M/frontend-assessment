import React from "react";
import { CreateTicketForm } from "@/components/TicketAddationSystem/TicketForm/CreateTicketForm";
import { useAtom } from "jotai";
import { ticketsAtom } from "@/atoms/TicketAtoms";
import { useCreateTicket } from "@/hooks/useAddTicket";
import type { Ticket } from "@/types/ticket";
interface CreateTicketOverlayProps {
  onClose: () => void;
}

export default function CreateTicketOverlay({ onClose }: CreateTicketOverlayProps) {
  const createMutation = useCreateTicket();
  const [, setTickets] = useAtom(ticketsAtom);

  const handleSubmitTicket = async (formData:Ticket) => {
    const newTicket = await createMutation.mutateAsync(formData);

    setTickets(prev => [...prev, newTicket]);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#0DDD8F]/20 z-50 flex items-center justify-center p-4">
      <CreateTicketForm
        onSubmitTicket={handleSubmitTicket} 
        onClose={onClose}
      />
    </div>
  );
}
