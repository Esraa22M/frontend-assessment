import React from "react";
import { Star, Paperclip } from "lucide-react";
import TextWithChevronButton from "./Butttons/TextWithChevronButton";
import CancelButton from "./Butttons/CancelButton";
const WriteReply: React.FC = () => {
    return (
        <div className="mt-[12px] border border-[#E2E8F0] rounded-[8px] p-[8px] h-[123px]">
            {/* Textarea */}
            <textarea
                placeholder="إضافة رد..."
                className="w-full font-rubik font-normal text-[14px] leading-[150%] tracking-normal text-right placeholder-gray-400 
                   border-0 focus:outline-none focus:border focus:border-[#00CA7C] focus:rounded-[8px] p-2 transition-colors"
            />

            {/* Icons and Button Row */}
            <div className="flex justify-between">
                {/* Left side: A, Star, Paperclip */}
                <div className="flex gap-[16px] items-center">
                    <span className="font-rubik font-normal text-[19px] leading-[100%] tracking-normal text-center text-[#7A8699]">
                        A
                    </span>
                    <Star size={19} color="#E366FF" />
                    <Paperclip size={19} color="#7A8699" />
                </div>

                <div className="flex gap-[8px] justify-center align-center">
                    <CancelButton />
                    <TextWithChevronButton text="إضافة رد" />
                </div>
            </div>
        </div>
    );
};

export default WriteReply;

