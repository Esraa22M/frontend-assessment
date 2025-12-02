import avatar from "./avatar.png";
const SidebarAvatar = ({ src = avatar, isActive =true }) => {
  return (
    <div className="relative p-1">
      {/* Avatar */}
      <img
        src={src}
        alt="Avatar"
        className="w-[45px] h-[45px] rounded-full border-3 border-[#00CA7C] object-cover"
      />

      {isActive && (
        <span
          className="absolute w-[8.9px] h-[8.9px] rounded-full border-[1.5px] border-white bg-[#00CA7C]"
          style={{ top: "33.2px", left: "4.45px" }}
        ></span>
      )}
    </div>
  );
};

export default SidebarAvatar;
