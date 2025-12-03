import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTicket } from "@/api/mockTicketsApi";
import type{ Ticket } from "@/types/ticket";
export function useCreateTicket() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTicket,
    onSuccess: (newTicket) => {
      queryClient.setQueryData(["tickets"], (old: Ticket[]) =>
        old ? [...old, newTicket] : [newTicket]
      );
    },
  });
}
