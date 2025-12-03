import React from "react";
import AppLayout from "./layouts/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import MainLayout from "./layouts/MainLayout";
import TicketsTabs from "./components/Tabs/tabList";
import { CreateTicketForm } from "./components/TicketAddationSystem/TicketForm/CreateTicketForm";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <AppLayout>
          <TicketsTabs />
          <MainLayout />
          {/* Overlay ثابت فوق كل التطبيق */}
          <div className="fixed inset-0 bg-[#0DDD8F] bg-opacity-50 z-50 flex items-center justify-center p-4">
            <CreateTicketForm onSubmitTicket={() => { }} />
          </div>
        </AppLayout>
      </JotaiProvider>
    </QueryClientProvider>
  );
}

export default App;
