"use client"

import Button from "@/components/BasicComponents/Button";
import Logo from "@/components/BasicComponents/Logo";
import Image from "next/image";
import { useState } from "react";
import MenuIcon from "./MenuIcon";
import MenuList from "../MenuList";

const Drawer = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div onClick={() => setOpen(!open)}>
        <MenuIcon open={open} />
      </div>
      <div className={`${open ? "right-0" : "-right-full"} flex fixed w-full h-screen top-[64px] transition-all justify-end backdrop-blur-sm`}>
        <div className="w-[78%] bg-surfacePrimary">
          <div className="flex justify-between mt-[23px]">
            <MenuList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;