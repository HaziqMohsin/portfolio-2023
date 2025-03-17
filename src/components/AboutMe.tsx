"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center w-full relative bg-gray-950">
      <div className="relative p-10 h-screen flex items-center">
        <Image
          src="/subject-1.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="m-auto rounded-full bg-linear-to-t from-gray-950"
        />
      </div>
      <div className="grid grid-cols-3 justify-center gap-3 absolute w-full p-4">
        <MotionDiv>
          I thrive on solving challenges and constantly expanding my skills.
        </MotionDiv>
        <MotionDiv>Hey Nextjs, 15 was superb but are you okey?</MotionDiv>
        <MotionDiv>
          TailwindCss makes me forget how to write vanilla css
        </MotionDiv>
        <MotionDiv>
          Trying to be pro on framer motion, but im not an artist
        </MotionDiv>
        <MotionDiv>Figma and me are close friends</MotionDiv>
        <MotionDiv>
          I love Prisma for the first place, but drizzle make me cheat on my
          love
        </MotionDiv>
        <MotionDiv>Flex or grid? I still need both</MotionDiv>
        <MotionDiv>Javascript and Typescript. Bin and Recycle Bin</MotionDiv>
        <MotionDiv>Expo React Native with Supabase</MotionDiv>
        <MotionDiv>Microsoft Certified: Azure Fundamentals</MotionDiv>
        <MotionDiv>Azure AD</MotionDiv>
        <MotionDiv>Azure openai</MotionDiv>
        <MotionDiv>Azure AI search</MotionDiv>
      </div>
    </div>
  );
};

export default AboutMe;

type Props = {
  children: React.ReactNode;
  x?: string | number;
  y?: string | number;
  rotate?: string | number;
  xTap?: string | number;
  yTap?: string | number;
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
      className="p-4 text-white text-center max-w-xl m-auto border border-solid border-gray-400 rounded-lg cursor-pointer"
    >
      {children}
    </motion.div>
  );
};
