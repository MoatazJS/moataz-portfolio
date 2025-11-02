import Image from "next/image";
import React from "react";
export default function Projects() {
  return (
    <>
      <section className="min-h-screen container mx-auto flex flex-col items-center justify-center ">
        <h1 className="mb-8 text-2xl md:text-4xl bg-linear-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        <div className="hidden sm:grid sm:grid-cols-2 sm:mx-2 md:grid md:grid-cols-3 align-middle gap-6 text-slate-50 mb-8">
          <div className="flex flex-col bg-slate-900 rounded-2xl w-auto min-w-2xs gap-4 max-w-[350px]">
            <div className="flex justify-center items-center pt-8">
              <Image
                src={"/FilmFlow.png"}
                alt="FilmFlow display photo"
                width={200}
                height={200}
              />
            </div>
            <h4 className="font-bold text-center text-3xl text-transparent bg-linear-to-r from-indigo-400 to-blue-500 bg-clip-text">
              FilmFlow
            </h4>
            <p className="text-center text-slate-50">
              An app for browsing,discovering and recommending movies for users.
            </p>
            <div className="flex justify-center items-center gap-6 pb-6 bg-slate-800 pt-6 rounded-b-2xl">
              <a
                href="#"
                className="bg-indigo-600 capitalize hover:bg-indigo-500 font-medium transition rounded-lg w-28 px-4 py-2 text-center text-white"
              >
                github
              </a>
              <a
                href="#"
                className="hover:bg-slate-900 capitalize rounded-lg px-4 py-2 text-slate-100 border w-28 border-slate-300 text-center transition"
              >
                live demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
