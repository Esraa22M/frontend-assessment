// atoms.ts
import { atom } from "jotai";
import type { Ticket } from "@/types/ticket";
export const ticketsAtom = atom<Ticket[]>([]); 
export const activeTicketAtom = atom<string | null>(null);
export const ticketFullscreenAtom = atom(false);
