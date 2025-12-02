import type { TimelineItem }  from "@/types/timeline";
import { timelineMock } from "@/data/timelineData";
export const fetchTimeline = async (): Promise<TimelineItem[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500))

    return timelineMock;
}
