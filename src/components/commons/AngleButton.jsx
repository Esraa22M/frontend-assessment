import { ChevronLeft, ChevronRight } from "lucide-react";

const AngleButton = ({ isToggled, onClick, defaultDirection = "right" }) => {
  const Icon = isToggled
    ? defaultDirection === "right"
      ? ChevronLeft
      : ChevronRight
    : defaultDirection === "right"
    ? ChevronRight
    : ChevronLeft;

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-6 h-6 bg-white border border-[#E2E8F0] rounded-full cursor-pointer"
    >
      <Icon
        size={16}
        color="#475370"
      />
    </button>
  );
};

export default AngleButton;
