import { useState } from "react"; 
import AngleButton from "../commons/AngleButton";
export default function OrdersColumn({ orders = [] }) {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div
      dir="rtl"
      className={`flex flex-col h-screen border-l relative transition-all duration-300 ${isToggled ? 'w-0' : 'w-[174px]'}`}
      style={{ borderColor: "#EAEAEA" }}
    >
    
      {!isToggled && (
        <>
          {/* Header */}
          <div className="flex items-center justify-start bg-white px-[13px] pb-[13px] pt-[34px]">
            <h2 className="text-base font-semibold leading-[24px] text-left">
              الطلبات
            </h2>
          </div>

          {/* SubTitle */}
          <div className="flex items-center justify-start pr-[13px] h-[40px] bg-[#F7F8FA] border-y  border-[#EAEAEA]">
            <h6 className="text-xs font-normal text-left text-[#29304C]">
              الطلبات
            </h6>
          </div>

          {/* Orders List */}
          {orders && <div>{/* Render orders هنا */}</div>}
        </>
      )}

 
      <div
        className="absolute bottom-[98px] left-0"
        style={{ transform: "translateX(-50%)" }}
      >
        <AngleButton
          isToggled={isToggled}
          onClick={() => setIsToggled(prev => !prev)}
          defaultDirection="right"
        />
      </div>
    </div>
  );
}
