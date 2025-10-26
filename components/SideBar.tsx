"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { Home, User, Folder, Mail, Wrench } from "lucide-react";
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
          className="min-h-screen flex flex-col items-center justify-center gap-4 w-fit bg-yellow-500"
        >
          <Link
            href={"#"}
            className="text-white ml-10 flex items-center gap-4  w-fit mr-10"
          >
            <Home />
            {isHovered && <p>Home</p>}
          </Link>
        </SheetContent>
      </Sheet>
    </>
  );
}
