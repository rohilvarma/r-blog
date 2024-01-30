import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "rgb(3, 7 ,18)",
        "text-heading-dark": "rgb(243, 244, 246)",
        "text-heading-light": "rgb(16, 24, 39)",
        "gray-content": "rgb(120, 126, 137)",
        "hot-pink": "rgb(202, 63, 133)",
        "logo-blue": "rgb(53, 199, 224)"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
