import React from "react";
import { Code2Icon } from "lucide-react";
export default function Skills() {
  return (
    <>
      <section className="min-h-screen container mx-auto flex justify-center items-center">
        <div className="min-h-fit  grid grid-cols-1 md:grid-cols-3 text-white align-middle  md:gap-6 mx-2 md:mx-0">
          {/* first card */}
          <div className="bg-linear-to-b md:bg-linear-to-r from-slate-800 rounded-lg hover:border-indigo-600  flex flex-col justify-center items-center text-center p-5">
            <div>
              <Code2Icon className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl">Frontend Development</h1>
            </div>
            <div>
              <p className="text-sm md:text-lg">
                React, Next.js, TypeScript, JavaScript
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
