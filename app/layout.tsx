import type { Metadata } from "next";
import { ThemeProvider } from "@/utils/ThemeProvider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { hind } from "@/utils/Fonts";

export const metadata: Metadata = {
  title: "R-Blog",
  description:
    "A personal blog where I scribble about my learnings on my journey to become a good software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased scroll-smooth container ${hind.className} bg-white text-text-heading-light dark:bg-dark dark:text-text-heading-dark`}>
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
