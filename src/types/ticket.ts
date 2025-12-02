import type { Reply } from "./replay";
export type Ticket = {
  id: string;
  requesterName: string;
  requesterEmail: string;
  subject: string;
  lastUpdated: string; // ISO
  replies: Reply[];
};