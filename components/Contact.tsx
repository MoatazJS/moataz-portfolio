"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { contactFormSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { z } from "zod";
import { toast } from "sonner";
import { easeInOut, motion } from "framer-motion";
export default function Contact() {
  type ContactFormData = z.infer<typeof contactFormSchema>;
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
  async function onSubmit(data: ContactFormData) {
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
        toast.success("Message sent succesfully!");
      } else {
        setStatus("error");
        toast.error("Error Occurred. Please try again.");
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
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeInOut }}
            className="text-center text-3xl md:text-4xl text-transparent bg-linear-to-r p-2 from-indigo-500 to-blue-600 bg-clip-text"
          >
            Let&rsquo;s Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeInOut }}
            className="text-center text-xl md:text-2xl text-slate-50 mx-4 md:mx-0 "
          >
            I&rsquo;m currently open to junior front-end opportunities. Feel
            free to reach out — I’d love to chat!
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-20 text-white">
          <div className="flex flex-col gap-2 ">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
              className="flex gap-2 "
            >
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-indigo-500 text-3xl"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-transparent bg-linear-to-r from-indigo-500 to-blue-600 bg-clip-text">
                  Email
                </h4>
                <p>moataz.webdev@gmail.com</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
              className="flex gap-2"
            >
              <div>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-indigo-500 text-3xl"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-transparent bg-linear-to-r from-indigo-500 to-blue-600 bg-clip-text">
                  Location
                </h4>
                <p>Alexandria, Egypt.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
              className="flex gap-2"
            >
              <div>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-indigo-500 text-3xl"
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
              className="flex gap-2"
            >
              <div>
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-indigo-500 text-3xl"
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
            </motion.div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easeInOut, repeat: 0 }}
              className="flex flex-col  gap-4 w-[350px]"
            >
              <div>
                <Input
                  {...register("email")}
                  className="border-indigo-400"
                  type="email"
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm ">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  {...register("name")}
                  className="border-indigo-400"
                  type="text"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Textarea
                  {...register("message")}
                  className="h-36 border-indigo-400"
                  placeholder="Your Message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                disabled={status === "sending"}
                className="bg-indigo-600 capitalize hover:bg-indigo-500 font-medium transition rounded-lg w-28 px-4 py-2 text-center text-white cursor-pointer"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
            </motion.div>
          </form>
        </div>
      </section>
    </>
  );
}
