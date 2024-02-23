const MenuIcon = ({ open }: { open: boolean }) => {

  return (
    <div className="flex flex-col justify-between h-[18px] w-6 relative" >
      <span className={`${open ? "-translate-y-1/2 -rotate-45" : "translate-y-[-10px]"} w-full h-[2px] bg-white rounded-full block absolute top-1/2 left-1/2 -translate-x-1/2 transition-all`}></span>
      <span className={`${open ? "w-0" : "w-full"} h-[2px] bg-white rounded-full block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all`}></span>
      <span className={`${open ? "-translate-y-1/2 rotate-45" : "translate-y-2"} w-full h-[2px] bg-white rounded-full block absolute top-1/2 left-1/2 -translate-x-1/2 transition-all`}></span>
    </div>
  );
};

export default MenuIcon;