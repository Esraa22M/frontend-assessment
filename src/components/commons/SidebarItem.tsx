import React from "react";

const SidebarItem = ({
  label,
  Icon,
  activeLabel, 
  onClick,
  textClass = "text-[#666C83] hover:text-gray-500",
  activeTextClass = "text-[#00CA7C]", 
  iconClass = "text-gray-500 hover:bg-gray-50",
  activeIconClass = "bg-green-50 text-green-500 rounded-xl",
}) => {
  const isActive = activeLabel === label;

  const iconClasses = isActive ? activeIconClass : iconClass;
  const textClasses = isActive ? activeTextClass : textClass;

  return (
    <li
      onClick={onClick}
      className="flex flex-col items-center gap-1 px-4 pb-2 rounded-2xl cursor-pointer transition-all h-[70px]"
    >
      <div className={iconClasses}>
        <Icon fillColor={isActive ? "#00CA7C" : "#666C83"} size={40} />
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
