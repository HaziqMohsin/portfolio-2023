import AboutMe from "@/components/AboutMe";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Image from "next/image";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";
import TreeFiberPage from "@/components/tree";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-4">
      <div className="p-4 md:p-24 w-full min-h-svh h-full flex justify-center items-center">
        <div className=" flex flex-col gap-3 items-center rounded-lg p-10 w-full relative overflow-hidden">
          <h1 className="text-gray-950 dark:text-white font-bold text-5xl text-center">
            Frontend Web Developer
          </h1>
          <h2 className="text-gray-950 dark:text-white font-bold text-5xl">
            Based on Malaysia
          </h2>
          <p className="text-gray-400 text-md text-center max-w-3xl mx-auto my-4">
            I&apos;m all about crafting stunning UI designs and bringing them to
            life with my expertise in Reactjs, Nextjs, Tailwindcss, and Nodejs.
            I thrive on solving challenges and constantly expanding my skills.
            Let&apos;s collaborate and create some seriously cool web
            experiences togethers
          </p>
          <BorderBeam
            duration={6}
            size={400}
            className="from-transparent via-gray-950 dark:via-white to-transparent"
          />
          <BorderBeam
            duration={6}
            delay={3}
            size={400}
            className="from-transparent via-gray-950 dark:via-white to-transparent"
          />
        </div>
      </div>
      <Experience />
      <Education />
      <AboutMe />
      <div className="grid grid-cols-1 gap-4 py-14 h-dvh">
        <h1 className="text-gray-950 dark:text-white font-bold text-5xl text-center mb-5">
          Projects
        </h1>
        <div className="w-3xl h-[100%]">
          <TreeFiberPage />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full py-24 px-4 pb-0 bg-gray-950 dark:bg-white">
        <div className="w-full p-10 flex flex-col gap-10">
          <h2 className="text-4xl md:text-7xl font-bold text-white dark:text-gray-950">
            {`<> Hi! I Am Haziq Mohsin </>`}
          </h2>
          <p className="max-w-sm text-white dark:text-gray-950">
            I am managing a web team, and work closely with engineering teams.
            Also anticipating working with the back-end team which boosted my
            motivation to learn more about the back-end environment. I would
            welcome the chance to provide further insight into my technical
            abilities and personal attributes.
          </p>
          <div className="flex flex-row gap-3">
            <Link target="_blank" href="https://github.com/HaziqMohsin">
              <button className="bg-gray-950 text-white px-4 py-2 rounded-lg my-4 cursor-pointer">
                Projects
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full overflow-hidden p-4 pb-0">
          <div className="relative translate-y-20">
            <Image
              src="/subject-4.png"
              height={500}
              width={500}
              alt="Picture of the author"
              className="m-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
