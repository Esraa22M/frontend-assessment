import React from "react";

const ContentSidebarItem = ({ label, Icon, isActive, onClick }) => {
  const iconClasses = isActive
    ? "bg-[#00CA7C1A] rounded-xl flex items-center justify-center"
    : "text-[#98A2B2] hover:bg-gray-50 flex items-center justify-center";

  const textClasses = isActive
    ? "text-[#29304C]"
    : "text-[#98A2B2] hover:text-gray-500";

  return (
    <li
      onClick={onClick}
      className="flex flex-col items-center gap-1 px-4 pb-2 rounded-2xl cursor-pointer transition-all h-[71px] justify-center"
    >
      <div className={iconClasses} style={{ width: 40, height: 40 }}>
        <Icon color={isActive ? "#00CA7C" : "#98A2B2"} size={20} />
      </div>

      <p
        className={`${textClasses} font-rubik truncate`}
        style={{
          fontWeight: 500,
          fontSize: "8px",
          lineHeight: "150%",
          letterSpacing: "0%",
          textAlign: "center",
          whiteSpace: "nowrap",  
          overflow: "hidden",     
          textOverflow: "ellipsis",
        }}
      >
        {label}
      </p>
    </li>
  );
};

export default ContentSidebarItem;



