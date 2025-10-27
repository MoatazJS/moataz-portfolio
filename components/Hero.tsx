import React from "react";

export default function Hero() {
  return (
    <>
      <section
        id="Hero"
        className="bg-slate-950 min-h-screen flex justify-center items-center "
      >
        <div className="mx-auto container flex flex-col items-center justify-center text-slate-100  md:flex md:flex-row md:justify-around md:items-center ">
          <div className="grid grid-cols-1">
            <h1 className="font-bold text-slate-300 text-xl md:text-3xl lg:text-4xl">
              Hi, I’m Moataz.
              <br />
              <span className="text-blue-400"> I'm a Frontend Developer!</span>
            </h1>
            <p></p>
          </div>
          <div>dada</div>
        </div>
      </section>
    </>
  );
}
