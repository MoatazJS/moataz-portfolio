import Image from "next/image";
import React from "react";

export default function Projects() {
  return (
    <>
      <section className="min-h-screen container mx-auto flex flex-col items-center justify-center gap-10">
        <h1 className="mb-8 text-2xl md:text-4xl bg-linear-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        <div className="hidden md:grid md:grid-cols-3 align-middle gap-6 text-slate-50">
          <div>hi1</div>
          <div>hi1</div>
          <div>hi1</div>
          <div>hi1</div>
          <div>hi1</div>
          <div>hi1</div>
        </div>
      </section>
    </>
  );
}
