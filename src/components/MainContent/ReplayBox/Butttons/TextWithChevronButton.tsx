import React from "react";
import { ChevronUp } from "lucide-react";

interface TextWithChevronButtonProps {
  text: string; 
}

const TextWithChevronButton: React.FC<TextWithChevronButtonProps> = ({ text }) => {
  return (
    <button
      className="flex justify-end items-center rounded-[8px] pt-2 pr-3 pb-2 pl-3 bg-[#00CA7C] gap-[8px]"
    >
      <span className="font-rubik font-normal text-[13px] leading-[150%] tracking-normal text-white text-right">
        {text}
      </span>
      <span className="text-white">|</span>
      <ChevronUp size={16} color="white" />
    </button>
  );
};

export default TextWithChevronButton;
