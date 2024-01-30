import { ThemeToggle } from "."

const Navbar = () => {
  return <nav className="flex items-center justify-between py-4">
    <div className="font-bold text-3xl">
      <span className="text-logo-blue">R</span> Blog
    </div>
    <ThemeToggle />
  </nav>
}

export default Navbar