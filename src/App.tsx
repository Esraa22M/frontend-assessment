import React from "react";
import AppLayout from "./layouts/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider, useAtom } from "jotai";
import MainLayout from "./layouts/MainLayout";
import TicketsTabs from "./components/Tabs/tabList";
import CreateTicketOverlay from "./ui/FormOverlay";
import { createTicketOverlayAtom } from "@/atoms/OverlayAtom";
const queryClient = new QueryClient();
function AppContent() {
  const [showOverlay, setShowOverlay] = useAtom(createTicketOverlayAtom);

  return (
    <>
      <TicketsTabs />
      <MainLayout />
      {showOverlay && (
        <CreateTicketOverlay
          onSubmitTicket={() => setShowOverlay(false)}
          onClose={() => setShowOverlay(false)}
        />
      )}
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <AppLayout>
          <AppContent />
        </AppLayout>
      </JotaiProvider>
    </QueryClientProvider>
  );
}

export default App;

