import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { timelineAtom } from '@/atoms/TimelineAtom';
import { fetchTimeline } from '@/api/mockTimelineApi';
import TimelineItem from './TimelineItem';
import HeaderWithNumber from './HeaderWithNumber';
import AngleButton from '@/components/commons/AngleButton';

interface TimelinePanelProps {
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimelinePanel: React.FC<TimelinePanelProps> = ({ isToggled, setIsToggled }) => {
  const { data, isLoading } = useQuery({ queryKey: ['timeline'], queryFn: fetchTimeline });
  const [, setTimeline] = useAtom(timelineAtom);

  useEffect(() => {
    if (data) setTimeline(data);
  }, [data, setTimeline]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col text-right relative">
      <div className="absolute top-[29px] right-[-12px] z-30">
        <AngleButton 
          isToggled={isToggled} 
          onClick={() => setIsToggled(prev => !prev)} 
          defaultDirection="left" 
        />
      </div>

      {!isToggled && (
        <>
          <HeaderWithNumber number={data?.length ?? 0} title="السجلات الزمنية" />
          <div className="mt-[32px]">
            {data?.map(item => (
              <TimelineItem key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default TimelinePanel;
