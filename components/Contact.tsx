import React from "react";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="min-h-screen  flex flex-col items-center justify-center gap-4 md:gap-8"
      >
        <div>
          <h2 className="text-center text-3xl md:text-4xl text-transparent bg-linear-to-r p-2 from-indigo-500 to-blue-600 bg-clip-text">
            Let&rsquo;s Work Together
          </h2>
          <p className="text-center text-xl md:text-2xl text-slate-50 ">
            I&rsquo;m currently open to junior front-end opportunities. Feel
            free to reach out — I’d love to chat!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-white">
          <div>socials</div>
          <div>form</div>
        </div>
      </section>
    </>
  );
}
