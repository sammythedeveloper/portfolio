"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[40vh] flex flex-col justify-center items-center py-20 bg-second-base text-co-rich px-6"
    >
      <h1 className="text-6xl font-bold mb-6">About Me</h1>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
        <p className="text-center text-xl text-sub-rich ">
          I'm a Full-Stack Web Developer with experience building modern,
          user-focused web applications. I'm passionate about creating practical
          and scalable solutions while continuously expanding my skills in AI,
          Cloud Computing, and other emerging technologies. I enjoy combining
          technology and problem-solving to build smarter, more efficient
          applications that deliver meaningful value to users and businesses.
        </p>
      </div>
    </section>
  );
}
