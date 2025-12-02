import React from "react";
import { X } from "lucide-react";
const CancelButton: React.FC = () => {
  return (
    <button
      className="flex flex-row items-center  rounded-[8px] border border-gray-300 
                 pt-2 pr-3 pb-2 pl-3 justify-end gap-[8px]"
    >
      <X size={16} color="#7A8699" />

      <span className="font-rubik font-normal text-[13px] leading-[150%] tracking-normal text-gray-700 text-right">
        إلغاء
      </span>
    </button>
  );
};

export default CancelButton;
