"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center w-full relative bg-gray-950">
      {/* <div
    className={`absolute inset-x-0 md:top-10 xl:top-40 min-h-0 pl-20 py-24 flex overflow-hidden z-0`}
  >
    <span className="block bg-[#54246D] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-100 lg:w-96 lg:h-96"></span>
    <span className="block bg-[#FFC90A] w-72 h-72 -ml-20 mt-40 rounded-full mix-blend-multiply filter blur-3xl opacity-100 lg:w-96 lg:h-96 nc-animation-delay-2000"></span>
  </div> */}
      <div className="relative p-10 h-screen flex items-center">
        <Image
          src="/subject-1.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="m-auto rounded-full bg-gradient-to-t from-gray-950"
        />
        {/* <div className="text-white absolute text-8xl text-center font-bold bottom-14 left-1/2 -translate-x-1/2">
      Haziq Mohsin
    </div> */}
      </div>
      <div className="grid grid-cols-3 justify-center gap-3 absolute w-full p-4">
        <MotionDiv x={0} y={0} rotate={10} xTap={440} yTap={200}>
          I thrive on solving challenges and constantly expanding my skills.
          {/* Let&apos;s collaborate and create some seriously cool web experiences
          together! */}
        </MotionDiv>
        <MotionDiv x={10} y={20} rotate={-10} xTap={240} yTap={200}>
          Hey Nextjs, 13 was superb but are you okey?
        </MotionDiv>
        <MotionDiv x={0} y={0} rotate={-14} xTap={0} yTap={200}>
          TailwindCss makes me forget how to write vanilla css
        </MotionDiv>
        <MotionDiv x={300} y={0} rotate={-14} xTap={330} yTap={200}>
          Trying to be pro on framer motion, but im not an artist
        </MotionDiv>
        <MotionDiv x={0} y={0} rotate={20} xTap={0} yTap={200}>
          Figma and me are close friends
        </MotionDiv>
        <MotionDiv x={0} y={0} rotate={20} xTap={0} yTap={200}>
          I love Prisma for the first place, but drizzle make me cheat on my
          love
        </MotionDiv>
        <MotionDiv x={0} y={0} rotate={20} xTap={0} yTap={200}>
          Flex or grid? I still need both
        </MotionDiv>
        <MotionDiv x={0} y={0} rotate={20} xTap={0} yTap={200}>
          Javascript and Typescript. Bin and Recycle Bin
        </MotionDiv>
      </div>
    </div>
  );
};

export default AboutMe;

type Props = {
  children: React.ReactNode;
  x: string | number;
  y: string | number;
  rotate: string | number;
  xTap: string | number;
  yTap: string | number;
};

const MotionDiv = ({ children, x, y, rotate, xTap, yTap }: Props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        backgroundColor: "#fff",
        color: "#000",
        y: -10,
      }}
      //   animate={{
      //     x: x,
      //     y: y,
      //     rotate: rotate,
      //     scale: 0.4,
      //     position: "absolute",
      //   }}
      //   whileTap={{ scale: 1, x: xTap, y: yTap, rotate: 0 }}
      //   initial={false}
      className="p-4 text-white text-center max-w-xl m-auto border border-solid border-gray-400 rounded-lg cursor-pointer"
    >
      {children}
    </motion.div>
  );
};
