import { SideMenu, SideMenuToggle, ThemeToggle } from ".";
import { montserrat } from "@/utils/Fonts";
import Link from "next/link";
import { navLinks } from "@/utils/constants";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-8">
      <Link
        href={"/"}
        className={`font-bold text-3xl md:text-4xl ${montserrat.className}`}
      >
        <span className="text-logo-blue">R</span> Blog
      </Link>
      <div className={`hidden md:flex items-center gap-x-4 font-medium ml-auto mr-4 ${montserrat.className}`}>
        {navLinks.filter(link => link.key !== 0).map((navLink) => (
          <Link key={navLink.key} className="" href={navLink.linkRoute}>
            {navLink.name}
          </Link>
        ))}
      </div>
      <SideMenu />
      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <SideMenuToggle />
      </div>
    </nav>
  );
};

export default Navbar;
