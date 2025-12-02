import { atom } from 'jotai'
import type { TimelineItem } from '@/types/timeline'
export const timelineAtom = atom<TimelineItem[]>([])
