export type Reply = {
  id: string;
  fromName: string;
  fromEmail: string;
  role: "agent" | "customer";
  message: string;
  date: string;
  avatar: string;
  toName: string;
  toEmail: string;
};