import { useAtom } from "jotai";
import { ticketsAtom, activeTicketAtom } from "@/atoms/TicketAtoms";
import TicketHeaderRow from "./TicketHeaderRow";
import ReplayList from "../ReplayBox/ReplayList";
import ReplayBanel from "../ReplayBox/ReplayBanel";
export default function TicketDetailsPanel() {
  const [tickets] = useAtom(ticketsAtom);
  const [activeId] = useAtom(activeTicketAtom);

  const activeTicket = tickets.find(ticket => ticket.id === activeId);

  if (!activeTicket) return <p>اختر تذكرة لعرض التفاصيل</p>;

  return (
    <><div className="mt-[24px] mx-[24px] scrollbar-hide">
      <TicketHeaderRow header={activeTicket?.subject} />
      <ReplayList replies={activeTicket?.replies} />

    </div><ReplayBanel />
    </>
  );
}
