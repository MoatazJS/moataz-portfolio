"use client";
import React from "react";
import {
  Code2Icon,
  PaletteIcon,
  ZapIcon,
  BrainCircuit,
  DatabaseIcon,
} from "lucide-react";
import { easeInOut, motion } from "framer-motion";
export default function Skills() {
  return (
    <>
      <section
        id="skills"
        className="min-h-screen container mx-auto flex justify-center items-center"
      >
        <div className="min-h-fit  grid grid-cols-1 md:grid-cols-3 text-white align-middle gap-4 md:gap-8 my-4 md:my-0 mx-2 md:mx-0">
          {/* first card */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className="bg-linear-to-b md:bg-linear-to-r from-slate-800 rounded-lg hover:border-indigo-600  flex flex-col justify-center items-center text-center p-5"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Code2Icon className="w-9 h-9 md:w-12 md:h-12" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="text-xl md:text-2xl bg-linear-to-l from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                Frontend Development
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-sm md:text-[16px]">
                React, Next.js, TypeScript, JavaScript
              </p>
            </motion.div>
          </motion.div>
          {/* second card */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className="bg-linear-to-b md:bg-linear-to-b from-slate-800 rounded-lg hover:border-indigo-600  flex flex-col justify-center items-center text-center p-5"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <PaletteIcon className="w-9 h-9 md:w-12 md:h-12" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="text-xl md:text-2xl bg-linear-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                Styling & Design
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-sm md:text-[16px]">
                Tailwind CSS, Shadcn/UI, Framer Motion
              </p>
            </motion.div>
          </motion.div>
          {/* third card */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className="bg-linear-to-b md:bg-linear-to-l from-slate-800 rounded-lg hover:border-indigo-600  flex flex-col justify-center items-center text-center p-5"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ZapIcon className="w-9 h-9 md:w-12 md:h-12" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="text-xl md:text-2xl bg-linear-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                Performance
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-sm md:text-[16px]">
                SEO, Optimization, Web Vitals
              </p>
            </motion.div>
          </motion.div>
          {/* 4th card */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className="bg-linear-to-b md:bg-linear-to-r from-slate-800 rounded-lg hover:border-indigo-600  flex flex-col justify-center items-center text-center p-5"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <DatabaseIcon className="w-9 h-9 md:w-12 md:h-12" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="text-xl md:text-2xl bg-linear-to-l from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                State Management
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-sm md:text-[16px]">
                Redux, Jotai, React Query
              </p>
            </motion.div>
          </motion.div>
          {/* 5th card */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className="bg-linear-to-b md:bg-linear-to-t from-slate-800 rounded-lg hover:border-indigo-600  flex flex-col justify-center items-center text-center p-5"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <BrainCircuit className="w-9 h-9 md:w-12 md:h-12" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="text-xl md:text-2xl bg-linear-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                Modern Tools
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-sm md:text-[16px]">
                Git, Vite, Vercel, Postman
              </p>
            </motion.div>
          </motion.div>
          {/* 6th card */}
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className="bg-linear-to-b md:bg-linear-to-l from-slate-800 rounded-lg hover:border-indigo-600  flex flex-col justify-center items-center text-center p-5"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ZapIcon className="w-9 h-9 md:w-12 md:h-12" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="text-xl md:text-2xl bg-linear-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                Mobile First
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-sm md:text-[16px]">
                Responsive, Adaptive UI, Media Queries
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
