import React from "react";
import AppLayout from "./layouts/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import MainLayout from "./layouts/MainLayout";
const queryClient = new QueryClient();
import TicketsTabs from "./components/Tabs/tabList";
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <AppLayout >
          <TicketsTabs />
          <MainLayout/>
        </AppLayout></JotaiProvider>
    </QueryClientProvider>
  );
}

export default App;
