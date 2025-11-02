import Image from "next/image";
import React from "react";
export default function Projects() {
  const projects = [
    {
      index: 1,
      imageSource: "/FilmFlow.png",
      imageAlt: "FilmFlow Display Photo.",
      title: "FilmFlow",
      description:
        "An App for browsing,discovering and recommending movies for users.",
      live: "#hhhh",
      github: "#hhhhh",
    },
    {
      index: 2,
      imageSource: "/ShopSphere.png",
      imageAlt: "ShopSphere Display Photo.",
      title: "ShopSphere",
      description:
        "An Ecommerce app with wish-list, cart and checkout functionality.",
      live: "#hhhh",
      github: "#hhhhh",
    },
    {
      index: 3,
      imageSource: "/Echo.png",
      imageAlt: "Echo Display Photo.",
      title: "Echo",
      description: "An App allowing users to create,update and delete notes.",
      live: "#hhhh",
      github: "#hhhhh",
    },
  ];
  return (
    <>
      <section className="min-h-screen  flex flex-col items-center justify-center ">
        <h1 className="mb-8 text-2xl md:text-4xl bg-linear-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        <div className="hidden sm:grid sm:grid-cols-2 sm:mx-2 md:grid md:grid-cols-3 gap-8 place-items-center justify-center text-slate-50 mb-8">
          {projects.map((project) => (
            <div
              key={project.index}
              className="flex flex-col bg-slate-900 rounded-2xl w-full min-w-[250px] max-w-[350px] gap-4"
            >
              <div className="flex justify-center items-center pt-8">
                <Image
                  src={project.imageSource}
                  alt={project.imageAlt}
                  width={200}
                  height={200}
                />
              </div>
              <h4 className="font-bold text-center text-3xl text-transparent bg-linear-to-r from-indigo-400 to-blue-500 bg-clip-text">
                {project.title}
              </h4>
              <p className="text-center text-slate-50">{project.description}</p>
              <div className="flex justify-center items-center gap-6 pb-6 bg-slate-800 pt-6 rounded-b-2xl">
                <a
                  href={project.live}
                  className="bg-indigo-600 capitalize hover:bg-indigo-500 font-medium transition rounded-lg w-28 px-4 py-2 text-center text-white"
                >
                  live demo
                </a>
                <a
                  href={project.github}
                  className="hover:bg-slate-900 capitalize rounded-lg px-4 py-2 text-slate-100 border w-28 border-slate-300 text-center transition"
                >
                  github
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
