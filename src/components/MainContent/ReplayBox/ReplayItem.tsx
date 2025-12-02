import React, { useState } from "react";
import type { Reply } from "@/types/replay";
import { Reply as ReplyIcon, Mail, ChevronUpIcon, ChevronDownIcon, MoreVertical } from "lucide-react";

interface ReplayItemProps {
    reply: Reply;
}

const ReplayItem: React.FC<ReplayItemProps> = ({ reply }) => {
    const [isOpen, setIsOpen] = useState(true);       // للتحكم بالرسالة
    const [isSelected, setIsSelected] = useState(false); // للتحكم بالاختيار

    const toggleMessage = () => {
        setIsOpen(prev => !prev);
    };

    const toggleSelect = () => {
        setIsSelected(prev => !prev);
    };

    return (
        <div
            onClick={toggleSelect}
            className={`
                relative flex flex-col gap-2 p-4 border rounded-lg cursor-pointer
                ${isSelected ? 'border-[#00CA7C] bg-[#00CA7C0D] bg-opacity-50' : 'border-[#E2E8F0] bg-white'}
            `}
        >

            {/* Left icons (chevron + menu) */}
            <div className="absolute left-2 top-2 flex items-center gap-2">
                <div onClick={(e) => { e.stopPropagation(); toggleMessage(); }} className="cursor-pointer">
                    {isOpen ? (
                        <ChevronUpIcon size={18} className="text-gray-400" />
                    ) : (
                        <ChevronDownIcon size={18} className="text-gray-400" />
                    )}
                </div>
                <MoreVertical size={18} className="text-gray-400 cursor-pointer" />
            </div>

            {/* Top row: Avatar + Content */}
            <div className="flex items-start gap-3">

                {/* Avatar */}
                <img
                    src={reply.avatar}
                    alt={reply.fromName}
                    className="w-10 h-10 rounded-full object-cover"
                />

                {/* Content */}
                <div className="flex-1 flex flex-col gap-2">

                    {/* Name + Date */}
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-[13px] leading-[150%] tracking-[0%] text-[#29304C] text-right font-Rubik">
                            {reply.fromName}
                        </p>

                        <span className="font-normal text-[9px] leading-[150%] tracking-[0%] text-[#7A8699] text-right font-Rubik">
                            {new Date(reply.date).toLocaleString()}
                        </span>
                    </div>

                    {/* Emails with angle brackets */}
                    <div className="flex items-center gap-3">
                        <p className="flex items-center gap-1 font-normal text-[11px] leading-[150%] tracking-[0%] text-[#7A8699] text-right font-Rubik">
                            <ReplyIcon size={16} className="text-gray-500" />
                            موجهة إلى {reply.toName}
                        </p>

                        <div className="flex items-center gap-1 font-normal text-[11px] leading-[150%] tracking-[0%] text-[#7A8699] text-right font-Rubik">
                            <Mail size={16} className="text-gray-500" />
                            <span className="text-gray-400">{'<'}</span>
                            <span>{reply.toEmail}</span>
                            <span className="text-gray-400">{'>'}</span>
                        </div>

                        <div className="flex items-center font-normal text-[11px] leading-[150%] tracking-[0%] text-[#7A8699] text-right font-Rubik">
                            <span className="text-gray-400">{'<'}</span>
                            <span>{reply.fromEmail}</span>
                            <span className="text-gray-400">{'>'}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Message box */}
            {isOpen && (
                <p className="mt-[8px] rounded-md font-normal text-[11px] leading-[150%] tracking-[0%] text-[#29304C] text-right font-Rubik">
                    {reply.message}
                </p>
            )}
        </div>
    );
};

export default ReplayItem;

