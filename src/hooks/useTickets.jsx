import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { fetchTickets } from "@/api/mockTicketsApi";
import { ticketsAtom, activeTicketAtom } from "@/atoms/TicketAtoms";
import { useEffect } from "react";

export const useTickets = () => {
  const [, setTickets] = useAtom(ticketsAtom);
  const [activeId, setActiveId] = useAtom(activeTicketAtom);

  const queryResult = useQuery({
    queryKey: ["tickets"],
    queryFn: () => fetchTickets(""),
  });

  useEffect(() => {
    if (queryResult.data) {
      setTickets(queryResult.data);

      if (!activeId && queryResult.data.length > 0) {
        setActiveId(queryResult.data[0].id);
      }
    }
  }, [queryResult.data, activeId, setTickets, setActiveId]);

  return queryResult;
};



