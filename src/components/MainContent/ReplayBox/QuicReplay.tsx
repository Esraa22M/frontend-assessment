import React from "react";

interface QuickRepliesProps {
  replies: string[];
}

export default function QuickReplies({ replies }: QuickRepliesProps) {
  return (
    <div className="flex flex-wrap gap-[12px] p-[8px] bg-[#F7F8FA] mb-[8px] rounded-[8px] cursor-pointer">
      {replies.map((text, index) => (
        <button
          key={index}
          type="button"
          className="
            cursor-ponter
            hover:bg-[#00CA7C] hover:text-white 
            inline-flex items-center justify-center
            bg-white
            px-3 h-[22px] rounded-[8px]
            border border-[#B8BFCC] text-[#B8BFCC]
            font-Rubik font-normal text-[9px] leading-[150%] tracking-[0%] text-center
          "
        >
          {text}
        </button>
      ))}
    </div>
  );
}
