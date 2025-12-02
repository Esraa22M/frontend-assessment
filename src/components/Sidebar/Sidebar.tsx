// Sidebar.jsx
import { useState, useMemo, useCallback } from "react";
import DashboardComponent from "./icons/dashboard";
import UsersComponent from "./icons/users";
import FileSignatureComponent from "./icons/fileSignature";
import BriefCaseComponent from "./icons/briefCase";
import FolderkanbanComponent from "./icons/folderkanban";
import WalletComponent from "./icons/Wallet";
import Calender from "./icons/calender";
import ClipBoardList from "./icons/clipBoardList";
import SettingsComponent from "./icons/settings";
import SidebarAvatar from "./sidebar-avatar/SidebarAvatar";
import SidebarMenuItems from "../commons/SidebarMenuItems";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
  const [active, setActive] = useState("الطلبات");
  const menuItems = useMemo(
    () => [
      { label: "اللوحة", icon: DashboardComponent },
      { label: "العملاء", icon: UsersComponent },
      { label: "العقود", icon: FileSignatureComponent },
      { label: "الموارد البشرية", icon: BriefCaseComponent },
      { label: "المشاريع", icon: FolderkanbanComponent },
      { label: "المالية", icon: WalletComponent },
      { label: "التقويم", icon: Calender },
      { label: "الطلبات", icon: ClipBoardList },
      { label: "الإعدادات", icon: SettingsComponent },
    ],
    []
  );

  const handleClick = useCallback((label) => {
    setActive(label);
  }, []);

  return (
    <div className="h-screen bg-white border-l  f border-[#EAEAEA] flex flex-col items-center  w-[75px] pt-[97px] pb-[29px]">
      {/* Sidebar Menu Items */}
      <SidebarMenuItems onClick={handleClick} items={menuItems} active={active} SidebarItem={SidebarItem} />
      {/* Sidebar Avatar */}
      <SidebarAvatar


      />

    </div>
  );
};

export default Sidebar;


