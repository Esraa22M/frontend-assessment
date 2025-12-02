import React from "react";
import { Check, Fullscreen, MoreVertical } from "lucide-react";
import TicketHeader from "./TicketHeader";
import TicketHeaderWithPlay from "./TicketHeaderWithPlay";
import { useAtom } from "jotai";
import { ticketFullscreenAtom } from "@/atoms/TicketAtoms";
import { useCallback } from "react";

interface TicketHeaderRowProps {
  header?: string;
}
const TicketHeaderRow: React.FC<TicketHeaderRowProps> = ({ header }) => {
  const [, setIsFullscreen] = useAtom(ticketFullscreenAtom);
  const handleToggle = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, [setIsFullscreen]);

  return (
    <div className="flex items-center justify-between">
      <TicketHeader header={header} />

      <div className="flex items-center gap-3">
        <TicketHeaderWithPlay />

        <div className="flex items-center rounded-[8px] border border-[#7A8699] px-[12px] py-[8px] gap-2">
          <div className="w-5 h-5 rounded-sm border border-[#7A8699] flex items-center justify-center">
            <Check className="w-3 h-3 text-[#7A8699]" />
          </div>
          <span className="font-rubik font-normal text-[11px] leading-[150%] tracking-[0] text-[#7A8699]">
            تحويل لمهمة
          </span>
        </div>
        {/* Fullscreen Button */}
        <button onClick={handleToggle}>
          <div className="w-[32px] h-[32px] rounded-[8px] border border-[#7A8699] flex items-center justify-center">
            <Fullscreen className="w-5 h-5 text-[#7A8699]" />
          </div>
        </button>
        {/* More Icon */}
        <div className="w-[24px] h-[32px] rounded-[8px] border border-[#7A8699] flex items-center justify-center">
          <MoreVertical className="w-4 h-4 text-[#7A8699]" />
        </div>
      </div>
    </div>
  );
};

export default TicketHeaderRow;
