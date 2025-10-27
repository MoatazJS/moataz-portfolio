"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Home, User, Folder, Mail, Wrench, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
export default function SideBar() {
  const navItems = [
    { href: "#hero", icon: Home, label: "Home" },
    { href: "#about", icon: User, label: "About" },
    { href: "#skills", icon: Wrench, label: "Skills" },
    { href: "#projects", icon: Folder, label: "Projects" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ];
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function ToggleSidebar() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }
  return (
    <>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 left-0 bg-black pointer-events-none z-10"
          />
        )}
      </AnimatePresence>
      <aside
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`border-none fixed left-0 top-0-r-0 min-h-screen hidden md:flex flex-col z-20  justify-center gap-4  bg-linear-to-r from-slate-900  to-slate-900/0 transition-all duration-300 ease-in-out ${
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
      {/* mobile version with glowing arrow  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 left-0 bg-black z-10"
            onClick={() => ToggleSidebar()}
          />
        )}
      </AnimatePresence>

      {!isOpen && (
        <ChevronRight
          className={`{
        md:hidden
        fixed
        top-1/2
        -translate-y-1/2
       text-slate-100
        w-8 h-8
       cursor-pointer
       drop-shadow-[0_0_6px_#38bdf8]
       transition-transform
       duration-300
        hover:scale-110
       hover:drop-shadow-[0_0_12px_#38bdf8]
       animate-pulse
       z-30 
       left-2}
       }`}
          onClick={() => ToggleSidebar()}
        />
      )}
      {isOpen && (
        <>
          <aside
            className={`border-none fixed left-0 top-0-r-0 min-h-screen md:hidden flex flex-col z-20  justify-center gap-4  bg-linear-to-r from-slate-900  to-slate-900/0 transition-all duration-300 ease-in-out
            w-32 
          }`}
          >
            {navItems.map(({ href, icon: Icon, label }) => (
              <Link
                onClick={() => ToggleSidebar()}
                key={label}
                href={href}
                className="text-slate-50 ml-4 md:ml-8 flex items-center gap-4 w-fit mr-10 font-semibold hover:text-slate-400"
              >
                <Icon />
                <AnimatePresence mode="wait">
                  {isOpen && (
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
      )}
    </>
  );
}
