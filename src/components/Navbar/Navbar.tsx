import React from "react";
import { Search, Bell, PlusCircle, Clock } from "lucide-react";
import IconWithBadge from "../icons/IconWithBage";
import Header from "../commons/Header";
import StickyIcon from "./icons/sticky";
export default function Navbar() {
  return (
    <nav
      dir="rtl"
      className="w-full bg-white border-b flex  items-center justify-between pl-8  border-[#E2E8F0] pb-[13px] pt-[34px]"
    >
     <div className="pr-[30px]  "><Header/></div>
      <div className="flex items-center text-[#7A8699]">
        <Search className=" cursor-pointer"  size={20} />
        <div className="cursor-pointer mr-[28.59px]" ><StickyIcon/></div>
        <Clock className=" cursor-pointer mr-[27.78px]" size={20} />
        <PlusCircle className=" cursor-pointer mr-[26.16px] ml-[26.97px]" size={20} />

        <IconWithBadge count={"6"} Icon={Bell} color={"text-[#7A8699] "} />
      </div>
      
    </nav>

  );
}
