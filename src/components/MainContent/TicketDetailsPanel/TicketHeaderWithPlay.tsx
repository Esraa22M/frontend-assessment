// TicketHeaderWithPlay.tsx
import React from "react";
import { Play } from "lucide-react";

export default function TicketHeaderWithPlay() {
    return (
        <div className="flex items-center justify-end gap-3">
            <span className="font-rubik font-normal text-[11px] leading-[150%] tracking-[0] text-[#7A8699]">
                00:00:00
            </span>
            <div
                role="button"
                aria-label="Play"
                className="w-6 h-6 rounded-full flex mr-[8px] items-center justify-center bg-gray-100 hover:bg-gray-200"
            >
                <Play className="w-3.5 h-3.5" color={"#7A8699"} />
            </div>
        </div>


    );
}
