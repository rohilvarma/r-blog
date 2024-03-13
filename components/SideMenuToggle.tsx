"use client";
import { iconSize } from "@/utils/constants";
import { useMenuToggle } from "@/utils/store";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const SideMenuToggle = () => {
  const {isOpen, toggle} = useMenuToggle()
  return (
    <div className="md:hidden" onClick={() => toggle()}>
      {isOpen ? (
        <IoCloseSharp size={iconSize} />
      ) : (
        <GiHamburgerMenu size={iconSize} />
      )}
    </div>
  );
};

export default SideMenuToggle;
