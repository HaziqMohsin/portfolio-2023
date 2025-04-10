"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useAnimation } from "framer-motion";

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
          I love Prisma for the first place, then i try drizzle. But in 2025,
          supabase is pretty good
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

  rotate?: string | number;
  xTap?: string | number;
  yTap?: string | number;
};

const MotionDiv = ({ children, rotate, xTap, yTap }: Props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    let angle = 0;
    const radius = 10 + Math.random() * 10; // Random radius between 10–20px
    const speed = 0.05 + Math.random() * 0.05; // Random speed

    const interval = setInterval(() => {
      angle += speed;
      x.set(Math.cos(angle) * radius);
      y.set(Math.sin(angle) * radius);
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [x, y]);

  return (
    <motion.div
      style={{ x, y }}
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
