function IconWithBadge({ count, Icon, color = "[#7A8699]" }) {
  return (
    <div className="relative inline-flex">
      <Icon className={` cursor-pointer ${color}`} size={20} />

      {count > 0 && (
        <div className="absolute -right-[7.5px] -top-[5.5px] w-[17px] h-[17px] bg-[#00CA7C] text-white rounded-[7px] text-[10px] font-bold flex items-center justify-center ">
          {count}
        </div>
      )}
    </div>
  );
}

export default IconWithBadge;
