import React from "react";
import { Search } from "lucide-react";
export default function CustomInput({
  icon: Icon = Search,
  placeholder = "ادخل الاسم",
  value = "",
  onChange = () => {},
}) {
  return (
    <div className="relative w-[216px] h-[29px]">
      {Icon && (
        <Icon
          size={14}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-[#7A8699] "
        />
      )}

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          bg-[#F7F8FA]
          rounded-[8px]
          border border-[#E2E8F0]/50
          pr-[25px]
          pl-[8px]
               
          text-right
          font-rubik font-normal
          placeholder:font-rubik
          placeholder:font-normal
          placeholder:text-[9.57px]
          placeholder:leading-[12.76px]
          placeholder:tracking-[0]
          placeholder:text-[#7A8699]
          placeholder:text-right
          outline-none
        "
      />
    </div>
  );
}
