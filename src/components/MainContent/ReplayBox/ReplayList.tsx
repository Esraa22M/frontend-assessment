import ReplayItem from './ReplayItem';
import type { Reply } from '@/types/replay';

interface ReplayListProps {
  replies: Reply[];
}

const ReplayList: React.FC<ReplayListProps> = ({ replies }) => {
  return (
    <div className="space-y-4 flex-1 mt-4">
      {replies.map(reply => (
        <ReplayItem key={reply.id} reply={reply} />
      ))}
    </div>
  );
};

export default ReplayList;
