import { useAtom } from "jotai";
import { ticketsAtom, activeTicketAtom } from "@/atoms/TicketAtoms";
import TicketHeaderRow from "./TicketHeaderRow";
import ReplayList from "../ReplayBox/ReplayList";
import ReplayBanel from "../ReplayBox/ReplayBanel";
import { ticketFullscreenAtom } from "@/atoms/TicketAtoms";

export default function TicketDetailsPanel() {
  const [tickets] = useAtom(ticketsAtom);
  const [activeId] = useAtom(activeTicketAtom);
  const activeTicket = tickets.find(ticket => ticket.id === activeId);
  const [isFullscreen] = useAtom(ticketFullscreenAtom);

  if (!activeTicket&&tickets?.length)
    return (
      <p className="text-gray-400 text-sm text-center py-4">
        اختر تذكرة لعرض التفاصيل
      </p>
    );

  return (
    <>
      {tickets?.length?<div className="mt-[24px] mx-[24px] scrollbar-hide">
        <TicketHeaderRow header={activeTicket?.subject} />
        <ReplayList replies={activeTicket?.replies ?? []} />
      </div>:<></>}
      {!isFullscreen&&tickets?.length ?<ReplayBanel />:<></>}
    </>
  );
}
