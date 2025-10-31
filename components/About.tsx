"use client";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
export default function About() {
  return (
    <>
      <section
        id="about"
        className="bg-indigo-950 min-h-screen md:min-h-fit flex justify-center items-center "
      >
        <div className="text-white flex flex-col-reverse md:flex-row justify-around items-center gap-0 md:gap-10 mx-auto container">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.8, ease: easeInOut }}
            className="max-w-xl"
          >
            <p className="text-center md:text-start text-xl mx-4 leading-relaxed md:mx-0 font-semibold  md:text-3xl bg-linear-to-r from-indigo-400 to-blue-500 text-transparent bg-clip-text">
              <span className="">I&apos;m a front-end developer</span>
            </p>
            <ul className="list-disc list-inside space-y-2 text-center md:text-start  mx-2 md:mx-0">
              <li>
                Building smooth, meaningful web experiences with modern tools.
              </li>
              <li>
                Writing clean code, creating reusable components, and bringing
                designs to life with attention to detail and performance.
              </li>
              <li>
                Consistently improving through hands-on projects and exploring
                backend development to expand into full-stack in the future.
              </li>
              <li>Located in Alexandria, Egypt.</li>
              <li>
                Currently open to junior front-end opportunities and freelance
                projects.
              </li>
            </ul>
            <div className="flex justify-center md:justify-start items-center gap-4 mt-6 mb-4 md:mb-0">
              <motion.a
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, ease: easeInOut, repeat: 5 }}
                href={"/MoatazMamdouhCV.pdf"}
                target="_blank"
                className="bg-indigo-600 hover:bg-indigo-500 font-medium transition rounded-lg px-4 py-2 text-white"
              >
                View Resume
              </motion.a>
              <a
                href={"/MoatazMamdouhCV.pdf"}
                download={true}
                className=" hover:bg-slate-800 rounded-lg px-4 py-2 text-slate-100 border border-slate-300 transition"
              >
                Download CV
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.8, ease: easeInOut }}
            className="w-[200px] md:w-[400px]"
          >
            <Image
              src={"/svg.png"}
              alt="illustration of a person using pc"
              width={300}
              height={300}
              className="rounded-full mt-2 m:mt-0 mb-10"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
