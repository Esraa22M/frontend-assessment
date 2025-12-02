import React from "react";

const SidebarItem = ({ label, Icon, isActive, onClick }) => {
  const iconClasses = isActive
    ? "bg-green-50 text-green-500 rounded-xl"
    : "text-gray-500 hover:bg-gray-50";

  const textClasses = isActive
    ? "text-[#00CA7C]"
    : "text-[#666C83] hover:text-gray-500";

  return (
    <li
      onClick={onClick}
      className="flex flex-col items-center gap-1  pb-2 rounded-2xl cursor-pointer transition-all h-[70px]"
    >
      <div className={iconClasses}>
        <Icon fillcolor={isActive ? "#00CA7C" : "#666C83"} size={40} />
      </div>

      <p
        className={`
          text-[9px] leading-[150%] tracking-normal font-normal
          text-center font-rubik
          whitespace-nowrap
          ${textClasses}
        `}
      >
        {label}
      </p>
    </li>
  );
};

export default SidebarItem;
