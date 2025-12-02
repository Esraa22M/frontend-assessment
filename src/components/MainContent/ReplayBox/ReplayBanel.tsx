import React from "react";
import QuickRepliesHeader from "./QuickRepliesHeader";
import ReplyPanelBox from "./ReplyPanelBox";
import WriteReply from "./WriteReply";
export default function ReplayBanel() {
  return (
    <div dir="rtl" className="w-full border-t border-[#E2E8F0] p-[24px] scrollbar-hide pb-[32px]">

      <QuickRepliesHeader />

      <ReplyPanelBox />

      <WriteReply />
    </div>
  );
}
