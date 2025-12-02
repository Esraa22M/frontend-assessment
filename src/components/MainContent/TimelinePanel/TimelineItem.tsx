import React from 'react'
import type { TimelineItem as TimelineItemType } from '@/types/timeline'
import { MessageSquare, FileEdit, UserCheck, ClipboardList, StickyNote } from 'lucide-react'

interface Props {
  item: TimelineItemType
}

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  FileEdit,
  UserCheck,
  ClipboardList,
  StickyNote
}

const TimelineItem: React.FC<Props> = ({ item }) => {
  const Icon = iconMap[item.icon] || MessageSquare

  return (
    <div className='mr-[15px]'>
    <div className="relative flex items-start mb-[12px] h-[87px] border-r mr-[14px] " style={{ borderColor: item.iconBg }}
    >
      <div className="flex flex-col items-center mr-3">
        <div
          className="flex justify-center items-center rounded-full w-[28px] h-[28px] cursor-pointer border"
          style={{ backgroundColor: item.iconBg, borderColor: item.iconBg, position:"absolute", top:0 , right:-14 }}
        >
          <Icon size={14} color={item.iconColor} />
        </div>

       

        <div
          className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] mt-0"
          style={{
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: item.iconBg,
            position:"absolute",
            bottom:0,
            right:-4,
          }}
        />
      </div>

      <div className="mb-[16px] mr-[14.5px]">
        <div >
          <p className="font-medium text-[12px] leading-[150%] tracking-[0%] text-right text-[#29304C]">
            أحدث الطلبات
          </p>
          <p className="font-normal text-[9px] leading-[100%] tracking-[0%] text-right text-[#7A8699]">
            {item.date} - {item.time}
          </p>
        </div>
        <p className="font-rubik font-normal text-[9px] leading-[150%] tracking-[0%] text-right text-[#29304C] mt-[16px]">
          {item.text}
        </p>
      </div>
    </div></div>
  )
}

export default TimelineItem

