// SidebarMenuItems.jsx
import React from "react";
const SidebarMenuItems = ({ items, active, onClick , SidebarItem}) => {
  return (
    <>
      {items.map(({ label, icon: Icon }) => (
        <SidebarItem
          key={label}
          label={label}
          Icon={Icon}
          isActive={active === label}
          onClick={() => onClick(label)}
        />
      ))}
    </>
  );
};

export default SidebarMenuItems;
