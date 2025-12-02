import Sidebar from "@/components/Sidebar/Sidebar";
import OrdersColumn from "@/components/Orders/Orders";
import Navbar from "@/components/Navbar/Navbar";
export default function AppLayout({ orders = [], children }) {
  return (
    <div className="h-screen flex bg-white w-screen">
      {/* Column 1: Sidebar */}
      <Sidebar />

      {/* Column 2: OrdersColumn */}
      <OrdersColumn orders={orders} />

      {/* Column 3: Right side (Navbar + MainContent) */}
      <div className="flex-1 flex flex-col h-full">
        {/* Navbar */}
        <Navbar />

        <main className="flex-1 overflow-x-hidden h-full">
          {children ? children : <div>المحتوى الرئيسي هنا</div>}
        </main>
      </div>
    </div>
  );
}


