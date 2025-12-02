import React from "react";
import { FilePlus } from "lucide-react";

interface ImportTemplateButtonProps {
  onClick?: () => void;
}

const ImportTemplateButton: React.FC<ImportTemplateButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center cursor-pointer  h-[36px] px-4 rounded-[8px] bg-white gap-2 border border-[#B8BFCC]" 
    >
      <FilePlus size={16} className="text-[#7A8699]" />
      <span className="font-Rubik font-normal text-[13px] leading-[150%] tracking-[0%] text-[#7A8699] text-right">
        استدعاء من قالب
      </span>
    </button>
  );
};

export default ImportTemplateButton;
