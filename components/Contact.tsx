import { MailPlus, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Input } from "@/components/ui/input";
import React from "react";
import { Textarea } from "./ui/textarea";
export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="min-h-screen  flex flex-col items-center justify-center gap-6 md:gap-8"
      >
        <div>
          <h2 className="text-center text-3xl md:text-4xl text-transparent bg-linear-to-r p-2 from-indigo-500 to-blue-600 bg-clip-text">
            Let&rsquo;s Work Together
          </h2>
          <p className="text-center text-xl md:text-2xl text-slate-50 mx-4 md:mx-0 ">
            I&rsquo;m currently open to junior front-end opportunities. Feel
            free to reach out — I’d love to chat!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-20 text-white">
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-2 ">
              <div>
                <MailPlus className="text-indigo-500 w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-transparent bg-linear-to-r from-indigo-500 to-blue-600 bg-clip-text">
                  Email
                </h4>
                <p>moataz.webdev@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <MapPin className="text-indigo-500 w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-transparent bg-linear-to-r from-indigo-500 to-blue-600 bg-clip-text">
                  Location
                </h4>
                <p>Alexandria,Egypt.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-indigo-500 w-8 h-8"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-transparent bg-linear-to-r from-indigo-500 to-blue-600 bg-clip-text">
                  Github
                </h4>
                <a target="_blank" href="https://github.com/MoatazJS">
                  @MoatazJS
                </a>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-indigo-500 w-8 h-8"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-transparent bg-linear-to-r from-indigo-500 to-blue-600 bg-clip-text">
                  X
                </h4>
                <a target="_blank" href="https://x.com/MoatazCodes">
                  @MoatazCodes
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-4 w-[350px]">
            <Input
              className="border-indigo-400"
              type="email"
              placeholder="Your Email"
            />
            <Input
              className="border-indigo-400"
              type="text"
              placeholder="Your Name"
            />
            <Textarea
              className="h-36 border-indigo-400"
              placeholder="Your Message"
            />
          </div>
        </div>
      </section>
    </>
  );
}
