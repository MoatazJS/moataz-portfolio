"use client";
import { MailPlus, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { contactFormSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });
  async function onSubmit(data: any) {
    try {
      setStatus("sending");

      const response = await fetch("https://formspree.io/f/mnnokkew", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col  gap-4 w-[350px]">
              <Input
                {...register("email")}
                className="border-indigo-400"
                type="email"
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
              <Input
                {...register("name")}
                className="border-indigo-400"
                type="text"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
              <Textarea
                {...register("message")}
                className="h-36 border-indigo-400"
                placeholder="Your Message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
              <Button
                type="submit"
                disabled={status === "sending"}
                className="bg-indigo-600 capitalize hover:bg-indigo-500 font-medium transition rounded-lg w-28 px-4 py-2 text-center text-white cursor-pointer"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="text-green-500 text-sm mt-2 text-center">
                  Message sent successfully ✅
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm mt-2 text-center">
                  Something went wrong. Try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
