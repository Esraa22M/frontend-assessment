import { useState, useCallback } from "react";
import SidebarMenuItems from "@/components/commons/SidebarMenuItems";
import { ArrowLeftRight, Contact, Ticket, FileText, Flag } from "lucide-react";
import ContentSidebarItem from "./ContentSidebarItem";
const ContentSideBar = () => {
  const [activeLabel, setActiveLabel] = useState("الإشارات");

  const sidebarItems = [
    { label: "الإشارات", icon: ArrowLeftRight },
    { label: "بيانات الاتصال", icon: Contact },
    { label: "تذاكر مرتبطة", icon: Ticket },
    { label: "تفاصيل", icon: FileText },
    { label: "السجلات الزمنية", icon: Flag },
  ];

  const handleClick = useCallback((label) => {
    setActiveLabel(label);
  }, []);

  return (
    <div className="h-full bg-white  flex flex-col items-center mt-[16px] ">
      {/* Sidebar Menu Items */}
      <SidebarMenuItems
      SidebarItem={ContentSidebarItem}
        items={sidebarItems}
        active={activeLabel}
        onClick={handleClick}
      />

      
    </div>
  );
};

export default ContentSideBar;
