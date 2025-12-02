import { Plus } from "lucide-react";

export function AddButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center  p-[12px] rounded-lg border cursor-pointer"
      style={{ borderColor: "#E2E8F0" }}
    >
      <Plus size={20} color="#373E5D" strokeWidth={2} />
    </button>
  );
}
