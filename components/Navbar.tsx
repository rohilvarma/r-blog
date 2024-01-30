import { ThemeToggle } from "."
import { montserrat } from "@/utils/Fonts"
import Link from "next/link"

const Navbar = () => {
  return <nav className="flex items-center justify-between py-8">
    <Link href={'/'} className={`font-bold text-3xl md:text-4xl ${montserrat.className}`}>
      <span className="text-logo-blue">R</span> Blog
    </Link>
    <ThemeToggle />
  </nav>
}

export default Navbar