import React from "react";
import { CreateTicketForm } from "@/components/TicketAddationSystem/TicketForm/CreateTicketForm";
interface CreateTicketOverlayProps {
  onSubmitTicket: () => void;
  onClose: () => void;
}

export default function CreateTicketOverlay({
  onSubmitTicket,
  onClose,
}: CreateTicketOverlayProps) {
  return (
    <div className="fixed inset-0 bg-[#0DDD8F]/20 z-50 flex items-center justify-center p-4">
      <CreateTicketForm onSubmitTicket={onSubmitTicket} onClose={onClose} />
    </div>
  );
}
