"use client";
import React from "react";
import { Code2Icon } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
export default function Skills() {
  return (
    <>
      <section className="min-h-screen container mx-auto flex justify-center items-center">
        <div className="min-h-fit  grid grid-cols-1 md:grid-cols-3 text-white align-middle  md:gap-6 mx-2 md:mx-0">
          {/* first card */}
          <div className="bg-linear-to-b md:bg-linear-to-r from-slate-800 rounded-lg hover:border-indigo-600  flex flex-col justify-center items-center text-center p-5">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Code2Icon className="w-12 h-12" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h1 className="text-xl md:text-2xl">Frontend Development</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.3, ease: easeInOut }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-sm md:text-lg">
                React, Next.js, TypeScript, JavaScript
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
