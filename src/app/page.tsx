import AboutMe from "@/components/AboutMe";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-4">
      <div className="p-4 md:p-24 w-full">
        <div className="bg-gray-950 flex flex-col gap-3 items-center rounded-lg p-10 w-full">
          <h1 className="text-white font-bold text-5xl text-center">
            Frontend Web Developer
          </h1>
          <h2 className="text-white font-bold text-5xl">Based on Malaysia</h2>
          <p className="text-gray-400 text-md text-center max-w-3xl mx-auto my-4">
            I&apos;m all about crafting stunning UI designs and bringing them to
            life with my expertise in Reactjs, Nextjs, Tailwindcss, and Nodejs.
            I thrive on solving challenges and constantly expanding my skills.
            Let&apos;s collaborate and create some seriously cool web
            experiences together!
          </p>
          <Link href="/contactme">
            <button className="bg-white text-black px-4 py-2 rounded-lg my-4">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
      <AboutMe />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full py-24 px-4 pb-0">
        <div className="w-full p-10 flex flex-col gap-10">
          <h2 className="text-4xl md:text-7xl font-bold">
            {`<> Hi! I Am Haziq Mohsin</>`}
          </h2>
          <p className="max-w-sm">
            Developing web product for over <b>7 years</b> as frontend developer
          </p>
          <div className="flex flex-row gap-3">
            <Link href="/contactme">
              <button className="bg-gray-950 text-white px-4 py-2 rounded-lg my-4">
                Contact Me
              </button>
            </Link>
            <Link href="/projects">
              <button className="bg-gray-950 text-white px-4 py-2 rounded-lg my-4">
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
