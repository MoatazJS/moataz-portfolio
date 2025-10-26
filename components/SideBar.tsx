"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Home, User, Folder, Mail, Wrench } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
export default function SideBar() {
  const navItems = [
    { href: "#hero", icon: Home, label: "Hero" },
    { href: "#about", icon: User, label: "About" },
    { href: "#skills", icon: Wrench, label: "Skills" },
    { href: "#projects", icon: Folder, label: "Projects" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ];
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <>
      <aside
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`border-none fixed left-0 top-0-r-0 min-h-screen flex flex-col  justify-center gap-4  bg-linear-to-r from-slate-900  to-slate-900/0 transition-all duration-300 ease-in-out ${
          isHovered ? "w-32 md:w-48" : "w-20"
        }`}
      >
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            href={href}
            className="text-slate-50 ml-4 md:ml-8 flex items-center gap-4 w-fit mr-10 font-semibold hover:text-slate-400"
          >
            <Icon />
            <AnimatePresence mode="wait">
              {isHovered && (
                <motion.p
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {label}
                </motion.p>
              )}
            </AnimatePresence>
          </Link>
        ))}
      </aside>
    </>
  );
}
