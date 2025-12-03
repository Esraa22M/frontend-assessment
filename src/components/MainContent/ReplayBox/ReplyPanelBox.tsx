import React, { useState } from "react";
import { Fullscreen as FullscreenIcon, Minimize } from "lucide-react";
import IconButton from "./IconButton";
import CustomInput from "./CustomInput";
import EmailList from "./EmailsList";
import { useAtom } from "jotai";
import { replayPanelFullScreen } from "@/atoms/ReplayAtom";

export default function ReplyPanelBox() {
  const [, setIsFullscreen] = useAtom(replayPanelFullScreen);
  const [isFullscreenIcon, setIsFullscreenIcon] = useState(false); // state للأيقونة فقط

  const handleFullscreenToggle = () => {
    setIsFullscreen(prev => !prev);       // تحديث الـ atom
    setIsFullscreenIcon(prev => !prev);   // عكس الأيقونة فقط
  };

  return (
    <div className="flex-column items-start p-[12px] border border-[#E2E8F0] rounded-[8px] mt-[8px]">

      {/* Header */}
      <div className="flex justify-between flex-grow">
        <div className="flex gap-[8px]">
          <h5 className="font-Rubik font-normal text-[13px] leading-[150%] tracking-[0%] text-[#7A8699] text-right">
            رد إلى :
          </h5>

          <button className="flex items-center gap-[12px] w-max h-[22px] rounded-[20px] border border-[#B8BFCC] px-[12px] py-[4px] bg-white text-sm font-Rubik font-normal text-[#7A8699]">
            ahmed@example.com
          </button>
        </div>

        <div className="flex gap-[10px]">
          <IconButton bgColor="#00CA7C" label="cc" />
          <IconButton 
            Icon={isFullscreenIcon ? FullscreenIcon:Minimize} 
            onClick={handleFullscreenToggle} 
          />
        </div>
      </div>

      {/* CC Section */}
      <div className="flex items-center gap-[8px] mt-[12px]">
        <div className="flex gap-[8px] items-center">
          <h5
            className="
              font-rubik
              font-normal
              text-[13px]
              leading-[150%]
              tracking-[0]
              text-right
              text-[#7A8699]
              flex items-center justify-center
              whitespace-nowrap
              ml-[24px]
            "
          >
            CC :
          </h5>
          <CustomInput />
        </div>
        <EmailList />
      </div>

    </div>
  );
}
