"use client";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";

export default function Projects() {
  const projects = [
    {
      index: 1,
      imageSource: "/FilmFlow2.png",
      imageAlt: "FilmFlow Display Photo.",
      title: "FilmFlow",
      description:
        "An App for browsing,discovering and recommending movies for users.",
      live: "https://film-flow-lyart.vercel.app/",
      github: "https://github.com/MoatazJS/FilmFlow",
      tech: ["NextJs", "TypeScript", "Tailwind CSS", "Shadcn"],
    },
    {
      index: 2,
      imageSource: "/ShopSphere2.png",
      imageAlt: "ShopSphere Display Photo.",
      title: "ShopSphere",
      description:
        "An Ecommerce app with wish-list, cart and checkout functionality.",
      live: "https://shop-spheres.vercel.app/",
      github: "https://github.com/MoatazJS/Shop-Sphere",
      tech: ["NextJs", "TypeScript", "Redux", "Tailwind CSS"],
    },
    {
      index: 3,
      imageSource: "/Echo.png",
      imageAlt: "Echo Display Photo.",
      title: "Echo",
      description: "An App allowing users to create,update and delete notes.",
      live: "https://echo-note-app.vercel.app/",
      github: "https://github.com/MoatazJS/Note-App",
      tech: ["NextJs", "TypeScript", "Shadcn", "Tailwind CSS"],
    },
  ];
  return (
    <>
      <section
        id="projects"
        className="min-h-screen  flex flex-col items-center justify-center "
      >
        <h1 className="mb-24 mt-16 text-3xl font-bold md:pb-10 md:text-4xl bg-linear-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 gap-2 sm:grid sm:grid-cols-2 sm:mx-2 md:grid md:grid-cols-3  sm:gap-10 md:gap-8 place-items-center justify-center text-slate-50 mb-8">
          {projects.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeInOut }}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 200, damping: 15 },
              }}
              key={project.title}
              className="flex flex-col bg-slate-900 rounded-2xl w-full min-w-[250px] max-w-[350px] gap-4 min-h-[350px] hover:shadow-indigo-500 hover:shadow-lg"
            >
              <div className="flex justify-center items-center pt-8">
                <Image
                  src={project.imageSource}
                  alt={project.imageAlt}
                  width={350}
                  height={350}
                  className="px-2"
                />
              </div>
              <motion.h4
                initial={{ y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeInOut }}
                className="font-bold text-center text-3xl text-transparent bg-linear-to-r from-indigo-400 to-blue-500 bg-clip-text"
              >
                {project.title}
              </motion.h4>
              <motion.p
                initial={{ y: 15 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, ease: easeInOut }}
                className="text-center text-slate-50"
              >
                {project.description}
              </motion.p>
              <div className="flex justify-center flex-wrap items-center gap-2 px-2">
                {project.tech.map((t, i) => (
                  <Badge
                    key={`${project.title}-${i}`}
                    variant="secondary"
                    className="bg-slate-700 text-slate-50 "
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-center items-center gap-6 pb-6 bg-slate-800 pt-6 rounded-b-2xl">
                <motion.a
                  initial={{ x: -10 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5, ease: easeInOut }}
                  href={project.live}
                  target="_blank"
                  className="bg-indigo-600 capitalize hover:bg-indigo-500 font-medium transition rounded-lg w-28 px-4 py-2 text-center text-white"
                >
                  live demo
                </motion.a>
                <motion.a
                  initial={{ x: 10 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5, ease: easeInOut }}
                  href={project.github}
                  target="_blank"
                  className="hover:bg-slate-900 capitalize rounded-lg px-4 py-2 text-slate-100 border w-28 border-slate-300 text-center transition"
                >
                  github
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
