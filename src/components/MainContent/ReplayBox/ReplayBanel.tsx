import React from "react";
import QuickRepliesHeader from "./QuickRepliesHeader";
import ReplyPanelBox from "./ReplyPanelBox";
import WriteReply from "./WriteReply";
import { useAtom } from "jotai";
import { replayPanelFullScreen } from "@/atoms/ReplayAtom";
export default function ReplayBanel() {
    const [isFullscreen] = useAtom(replayPanelFullScreen);

  return (
    <div dir="rtl" className="w-full border-t border-[#E2E8F0] p-[24px] ">

      {isFullscreen&&<QuickRepliesHeader />}

      <ReplyPanelBox />

      <WriteReply />
    </div>
  );
}
