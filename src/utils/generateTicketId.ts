export function generateTicketId() {
  return `t-${Date.now().toString(36)}`;
}