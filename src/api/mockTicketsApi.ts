// mockTicketsApi.ts
import { ticketsMock} from "@/data/mockData";
import type { Ticket } from "@/types/ticket";
import type { Reply } from './../types/replay';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetch tickets with optional search by subject or requester name.
 */
export const fetchTickets = async (query = ""): Promise<Ticket[]> => {

    console.log("FETCH CALLED")
  await delay(1000);

  const filtered = ticketsMock.filter(
    (ticket) =>
      ticket.subject.toLowerCase().includes(query.toLowerCase()) ||
      ticket.requesterName.toLowerCase().includes(query.toLowerCase())
  );

  console.log("fetched tickets");
  return [...filtered];
};

/**
 * Add a new ticket.
 */
export const addTicket = async (ticketData: Pick<Ticket, "requesterName" | "requesterEmail" | "subject">): Promise<Ticket> => {
  await delay(1000);

  const newTicket: Ticket = {
    id: `t-${Date.now()}`,
    requesterName: ticketData.requesterName,
    requesterEmail: ticketData.requesterEmail,
    subject: ticketData.subject,
    lastUpdated: new Date().toISOString(),
    replies: [],
  };

  ticketsMock.push(newTicket);
  return newTicket;
};

/**
 * Remove a ticket by id.
 */
export const removeTicket = async (ticketId: string): Promise<void> => {
  await delay(500);

  const index = ticketsMock.findIndex((t) => t.id === ticketId);
  if (index !== -1) {
    ticketsMock.splice(index, 1);
  }
};
/**
 * Add a reply to a ticket.
 */
export const addReply = async (
  ticketId: string, 
  replyData: Omit<Reply, "id" | "date" | "avatar">
): Promise<Reply> => {
  await delay(1000);

  const ticket = ticketsMock.find((t) => t.id === ticketId);
  if (!ticket) throw new Error("Ticket not found");

  const newReply: Reply = {
    id: `r-${Date.now()}`,
    date: new Date().toISOString(),
    avatar: "/replier-images/replier.png", // اضف الصورة بشكل افتراضي
    ...replyData,
  };

  ticket?.replies?.push(newReply);
  ticket.lastUpdated = newReply.date;

  return newReply;
};

