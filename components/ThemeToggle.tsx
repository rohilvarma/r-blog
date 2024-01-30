'use client'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { iconSize } from "@/utils/constants";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) {
    return null;
  }

  return <div className="" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
    {
      theme === 'dark' ? <MdSunny size={iconSize} /> : <FaMoon size={iconSize} />
    }
  </div>
}

export default ThemeToggle