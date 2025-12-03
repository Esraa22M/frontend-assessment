import React from "react";
import AppLayout from "./layouts/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import MainLayout from "./layouts/MainLayout";
import TicketsTabs from "./components/Tabs/tabList";
import CreateTicketOverlay from "./ui/FormOverlay";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <AppLayout>
          <TicketsTabs />
          <MainLayout /> 
          <CreateTicketOverlay onSubmitTicket={()=>{}} onClose={()=>{}}/>
        </AppLayout>
      </JotaiProvider>
    </QueryClientProvider>
  );
}

export default App;
