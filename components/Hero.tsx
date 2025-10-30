"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Hero() {
  return (
    <>
      <section
        id="Hero"
        className="bg-slate-950 min-h-screen flex justify-center items-center "
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto container flex flex-col items-center justify-center text-slate-100 md:flex md:flex-row md:justify-around md:items-center "
        >
          <div className="grid grid-cols-1 text-center md:text-start">
            <h1 className="font-bold text-slate-300 text-xl md:text-3xl lg:text-4xl">
              Hi, I’m Moataz.
              <br />
              <span className="text-blue-400">
                {" "}
                I&apos;m a Frontend Developer!
              </span>
            </h1>
            <p className="text-slate-300 text-lg mt-2 mx-4 md:mx-0">
              I develop web applications with a blend of clean design and
              efficient code.
            </p>
            <div className="flex gap-2 my-2 justify-center md:justify-start">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
              >
                <Image
                  src={"/NextJs.svg"}
                  alt="Nextjs logo"
                  width={30}
                  height={30}
                  className="invert brightness-200"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
              >
                <Image
                  src={"/ReactLogo.svg"}
                  alt="React logo"
                  width={30}
                  height={30}
                />
              </motion.div>
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                className="mt-1"
              >
                <Image
                  src={"/TailwindCss.svg"}
                  alt="Tailwind logo"
                  width={30}
                  height={30}
                />
              </motion.div>
            </div>
            <div className="flex gap-4 justify-center md:gap-4 md:justify-start mt-4 md:mt-6">
              <Link
                href={"#projects"}
                className="bg-indigo-600 hover:bg-indigo-500 font-medium transition rounded-lg px-4 py-2 text-white"
              >
                <motion.p
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    repeat: 1,
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: 4.5,
                  }}
                >
                  Contact Me
                </motion.p>
              </Link>
              <Link
                href={"#projects"}
                className=" hover:bg-slate-800 rounded-lg px-4 py-2 text-slate-100 border border-slate-300 transition"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={"/photo1.jpg"}
              width={400}
              height={300}
              alt="Moataz's Photo"
              className="object-contain rounded-3xl w-2xs h-2xs mt-4 mr-0 md:mt-0 md:mr-36"
              priority
            ></Image>
          </div>
        </motion.div>
      </section>
    </>
  );
}
