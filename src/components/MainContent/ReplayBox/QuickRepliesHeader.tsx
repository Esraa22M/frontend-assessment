import React from "react";
import QuickReplies from "./QuicReplay";
import { quickReplies } from "./data/quickReplaysArray";
import ImportTemplateButton from "./ImportTemplateButton";

const QuickRepliesHeader: React.FC = () => {
  return (
    <div className="flex items-center">
      <p
        className="font-Rubik font-normal text-[13px] inline-flex items-center justify-center
        leading-[150%] tracking-[0%] text-right text-[#7A8699] ml-[16px]"
      >
        ردود سريعة
      </p>

      <QuickReplies replies={quickReplies} />

      <div className="mr-[20.4px] inline-flex">
        <ImportTemplateButton />
      </div>
    </div>
  );
};

export default QuickRepliesHeader;
