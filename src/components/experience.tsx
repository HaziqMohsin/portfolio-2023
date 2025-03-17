import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full relative bg-gray-950 px-4 py-14">
      <h1 className="text-white text-center text-5xl mb-5 font-bold">
        Experience
      </h1>
      <div className="flex gap-10 mt-9">
        <Drawer>
          <DrawerTrigger className="cursor-pointer overflow-hidden relative p-4 rounded-lg border border-solid border-gray-300 rounded-t-4xl rounded-b-none">
            <div className="text-white h-48 justify-center items-center flex flex-col">
              <h2 className="text-xl font-bold">Mobiz Inc. SDN BHD </h2>
              <h6 className="text-sm">IT solution</h6>
              <span className="text-xs text-gray-400 my-2">2023 - 2025</span>
              <h4>Frontend Developer</h4>
            </div>
          </DrawerTrigger>
          <DrawerContent className="mx-auto px-10">
            <DrawerHeader className="text-white">
              <DrawerTitle className="text-lg">Summary</DrawerTitle>
              <DrawerDescription className="overflow-auto px-4">
                <ul className="list-disc list-inside mr-4 flex flex-col gap-2 mt-2">
                  <li>
                    AI Chat Systems & Multilingual Support: Built AI-driven
                    multilingual chat systems (including Arabic) for
                    KnowledgeBot, Tatweer, Maaden, and PDO, leveraging Next.js,
                    Tailwind CSS, SWR, Zustand, and Microsoft Azure AI. Features
                    included document uploads, text-to-speech, speech-to-text,
                    AI-powered answer extraction, and real-time analytics
                    dashboards.
                  </li>
                  <li>
                    Web Application Development & UX Enhancement: Redesigned the
                    Haram Company financial assistance application, improving
                    the user experience for students in the Middle East.
                  </li>
                  <li>
                    AI-Powered Candidate Matching: Developed a resume-based
                    candidate recommendation system for Maaden and PDO,
                    integrating AI to match candidates with relevant skills.
                  </li>
                  <li>
                    Enterprise IT Solutions: Created Sanofi Architect, a
                    resource provisioning web application for Sanofi,
                    integrating with ServiceNow for IT service management,
                    modeled after Microsoft Azure.
                  </li>
                </ul>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        <Drawer>
          <DrawerTrigger className="cursor-pointer overflow-hidden relative p-4 rounded-lg border border-solid border-gray-300 rounded-t-full rounded-b-none">
            <div className="text-white h-48 justify-center items-center flex flex-col">
              <h2 className="text-xl font-bold">TheLorry Online</h2>
              <h6 className="text-sm">Technology & Logistics</h6>
              <span className="text-xs text-gray-400 my-2">2016 - 2023</span>
              <h4>Frontend Developer</h4>
            </div>
          </DrawerTrigger>
          <DrawerContent className="mx-auto px-10">
            <DrawerHeader className="text-white">
              <DrawerTitle className="text-lg">Summary</DrawerTitle>
              <DrawerDescription className="overflow-auto px-4">
                <ul className="list-disc list-inside mr-4 flex flex-col gap-2 mt-2 overflow-auto">
                  <li>
                    Frontend Development & State Management: Built and
                    maintained consumer and B2B web applications using React.js
                    (Next.js), Tailwind CSS, Context API, and Redux, ensuring
                    full responsiveness and Progressive Web App (PWA) support.
                    Developed adaptive UI solutions for various devices.
                  </li>
                  <li>
                    Loyalty Program & Data Caching: Developed a loyalty program
                    UI with React.js (Next.js), Tailwind CSS, and SWR for
                    efficient data caching.
                  </li>
                  <li>
                    Project Leadership & Research: Led the web team by assigning
                    tasks, monitoring progress, and conducting research based on
                    project requirements.
                  </li>
                  <li>
                    Analytics & Optimization: Implemented Google Analytics (GA4)
                    and Google Tag Manager to track user behavior and improve
                    performance.
                  </li>
                  <li>
                    Backend & SaaS Development: Contributed to invoice software
                    development using Node.js and AWS Lambda functions.
                  </li>
                  <li>
                    Cross-functional Collaboration: Worked closely with product
                    managers, tech leads, and designers to ensure project
                    alignment, feature implementation, and timeline adherence.
                  </li>
                  <li>
                    Accommodation System Development: Developed RuangKita, an
                    accommodation system, using Next.js 13 and Zustand for state
                    management.
                  </li>
                </ul>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        <Drawer>
          <DrawerTrigger className="cursor-pointer overflow-hidden relative p-4 rounded-lg border border-solid border-gray-300 rounded-t-4xl rounded-b-none">
            <div className="text-white h-48 justify-center items-center flex flex-col">
              <h2 className="text-xl font-bold">Celebrity Fitness</h2>
              <h6 className="text-sm">Gym and Sport</h6>
              <span className="text-xs text-gray-400 my-2">
                Jan 2014 - Jun 2014
              </span>
              <h4>Customer Service</h4>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-white">
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        <Drawer>
          <DrawerTrigger className="cursor-pointer overflow-hidden relative p-4 rounded-lg border border-solid border-gray-300 rounded-t-none rounded-b-none">
            <div className="text-white h-48 justify-center items-center flex flex-col">
              <h2 className="text-xl font-bold">Pacific Link Telecom</h2>
              <h6 className="text-sm">Server</h6>
              <span className="text-xs text-gray-400 my-2">
                Jan 2012 - Jun 2012
              </span>
              <h4>Technician Server</h4>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-white">
              <DrawerTitle>Summary</DrawerTitle>
              <DrawerDescription>
                Do reporting on server issue Maintaining and monitoring server
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>

      {/* <div className="flex flex-col gap-4">
        <div className="text-white">
          <h2 className="text-xl">
            Mobiz Inc. SDN BHD{" "}
            <span className="text-xs text-gray-400 my-2">2023 - 2025</span>
          </h2>
          <h6 className="text-sm">IT solution</h6>
          <h4>Frontend Developer</h4>
        </div>
        <div className="text-white">
          <h2 className="text-xl">
            TheLorry Online{" "}
            <span className="text-xs text-gray-400">2016 - 2023</span>
          </h2>
          <h6 className="text-sm">Technology & Logistics</h6>
          <h4>Frontend Developer</h4>
        </div>
        <div className="text-white">
          <h2 className="text-xl">
            Celebrity Fitness{" "}
            <span className="text-xs text-gray-400">Jan 2014 - Jun 2014</span>
          </h2>
          <h6 className="text-sm">Gym and Sport</h6>
          <h4>Customer Service</h4>
        </div>
        <div className="text-white">
          <h2 className="text-xl">
            Pacific Link Telecom{" "}
            <span className="text-xs text-gray-400">Jan 2012 - Jun 2012</span>
          </h2>
          <h6 className="text-sm">Server</h6>
          <h4>Technician Server</h4>
        </div>
      </div> */}
    </div>
  );
};

export default Experience;
