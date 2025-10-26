"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { Home, User, Folder, Mail, Wrench } from "lucide-react";
import { motion } from "framer-motion";
export default function SideBar() {
  const navItems = [
    { href: "#home", icon: Home, label: "Home" },
    { href: "#about", icon: User, label: "About" },
    { href: "#skills", icon: Wrench, label: "Skills" },
    { href: "#projects", icon: Folder, label: "Projects" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ];
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <>
      <Sheet open={true}>
        <SheetTitle className="hidden">Navigation Menu</SheetTitle>
        <SheetContent
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          side="left"
          className="min-h-screen flex flex-col items-center justify-center gap-4 w-fit bg-linear-to-r from-slate-900 to-transparent"
        >
          <Link
            href={"#"}
            className="text-slate-50 ml-10 flex items-center gap-4 w-fit mr-10 font-semibold"
          >
            <Home />
            {isHovered && <motion.p>Home</motion.p>}
          </Link>
        </SheetContent>
      </Sheet>
    </>
  );
}
