"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname=usePathname()
  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname!=='/'&&(<h1>Navbar</h1>)}
        {children}
        {pathname!=='/'&&(<h1>Footer</h1>)}
        </body>
    </html>
  );
}
