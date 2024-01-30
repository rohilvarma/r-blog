'use client'
import Link from "next/link";
import { SideMenuToggle } from ".";
import { navLinks } from "@/utils/constants";
import { montserrat } from "@/utils/Fonts";
import { useMenuToggle } from "@/utils/store";
const SideMenu = () => {
  const {isOpen, toggle} = useMenuToggle()
  return (
    <nav
      className={`bg-white text-text-heading-light dark:bg-dark dark:text-text-heading-dark md:hidden font-medium opacity-85 fixed h-screen w-screen z-10 top-0 left-0 ${montserrat.className} duration-300 overscroll-contain ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="py-8 flex flex-row-reverse container">
        <SideMenuToggle />
      </div>
      <div className="w-[70%] mx-auto flex flex-col gap-8 text-2xl">
        {navLinks.map((link) => (
          <Link key={link.key} href={link.linkRoute} className="w-fit">
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SideMenu;
