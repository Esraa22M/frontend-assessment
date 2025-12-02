import { X } from "lucide-react";
import type { Ticket } from "@/types/ticket";
type TicketItemProps = {
  ticket: Ticket;
  isActive: boolean;
  onClick: (ticket: Ticket) => void;
  onRemove: (ticketId: string) => void;
};

function TicketItem({ ticket, isActive, onClick, onRemove }: TicketItemProps) {
  return (
    <div
      className={`flex-shrink-0 cursor-pointer relative border-l border-[#E2E8F0] pt-[12px] pr-[16px] w-[216px] ${isActive ? "font-semibold" : ""
        }`}
    >
      <div onClick={() => onClick(ticket)}>
        <p
          className={`font-medium text-[11px] leading-[150%] tracking-[0px] text-right ${isActive ? "text-[#373E5D]" : "text-[#98A2B2]"
            }`}
        >
          {ticket.subject}
        </p>
        <p className="font-normal text-[7px] leading-[150%] tracking-[0px] text-right text-[#98A2B2] pb-[16px]">
          رقم الطلب: {ticket.id}
        </p>
      </div>

      <button
        onClick={() => onRemove(ticket.id)}
        className="absolute left-2 top-[22px] rounded-full hover:bg-gray-200"
      >
        <X size={16} color={isActive ? "#373E5D" : "#98A2B2"} />
      </button>

    </div>
  );
}

export default TicketItem;
