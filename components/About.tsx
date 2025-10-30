import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <section
        id="About"
        className="bg-indigo-950 min-h-screen flex justify-center items-center "
      >
        <div className="text-white flex flex-col-reverse md:flex-row justify-around items-center gap-10 mx-auto container">
          <div className="max-w-xl">
            <p className="text-center md:text-start text-xl mx-4 leading-relaxed md:mx-0 font-semibold  md:text-3xl bg-linear-to-r from-indigo-400 to-blue-500 text-transparent bg-clip-text">
              <span className="">I&apos;m a front-end developer</span>
            </p>
            <ul className="text-center md:text-start leading-relaxed mx-2 md:mx-0">
              <li>
                building smooth, meaningful web experiences with modern tools.
              </li>
              <li>
                My focus is writing clean code, creating reusable components,
                and bringing designs to life with attention to detail and
                performance.
              </li>
              <li>
                consistently improving through hands-on projects and exploring
                backend development to expand into full-stack in the future.
              </li>
              <li>Located in Alexandria, Egypt.</li>
              <li></li>
            </ul>
          </div>
          <div className="w-[200px] md:w-[400px]">
            <Image
              src={"/svg.png"}
              alt="illustration of a person using pc"
              width={300}
              height={300}
              className="rounded-full mt-2 m:mt-0 mb-10"
            />
          </div>
        </div>
      </section>
    </>
  );
}
