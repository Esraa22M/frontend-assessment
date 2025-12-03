import React from "react";

interface IconButtonProps {
    bgColor?: string;
    Icon?: React.ElementType;
    label?: string;
    labelColor?: string;
    onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ bgColor = "#FFFFFF", Icon, label, labelColor = "#FFFFFF", onClick }) => {
    return (
        <button
            className={`w-8 h-8 rounded-[8px] cursor-pointer flex items-center justify-center ${Icon ? "border border-[#7A8699]" : ""}`}
            style={{ backgroundColor: bgColor }}
            onClick={onClick}
        >
            {Icon ? (
                <Icon size={18} color="#7A8699" />
            ) : label ? (
                <h5
                    className="font-Rubik font-normal text-[13px] leading-[150%] tracking-[0%] text-center"
                    style={{ color: labelColor }}
                >
                    {label}
                </h5>
            ) : null}
        </button>
    );
};

export default IconButton;
