import React from "react";
import { useState } from "react";
import TicketDetailsPanel from "@/components/MainContent/TicketDetailsPanel/TicketDetailsPanel";
import TimelinePanel from "@/components/MainContent/TimelinePanel/TimelinePanel";
import ContentSideBar from "@/components/MainContent/ContentSidebar/ContentSidebar";
const MainLayout = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="flex h-full ">
      <div className="flex-1 overflow-auto h-full">
        <TicketDetailsPanel />
      </div>

      <div className={`${isToggled ? "w-[0px]" : "w-[232px]"} border-x border-[#E2E8F0] transition-all duration-300 `}>
        <TimelinePanel isToggled={isToggled} setIsToggled={setIsToggled} />
      </div>


      <div className="w-[71px] ">
        <ContentSideBar />
      </div>
    </div>

  );
};

export default MainLayout;