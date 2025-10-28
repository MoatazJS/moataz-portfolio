"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
export default function Hero() {
  return (
    <>
      <section
        id="Hero"
        className="bg-slate-950 min-h-screen flex justify-center items-center "
      >
        <div className="mx-auto container flex flex-col items-center justify-center text-slate-100 md:flex md:flex-row md:justify-around md:items-center ">
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
            <div>CTA buttons</div>
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
        </div>
      </section>
    </>
  );
}
