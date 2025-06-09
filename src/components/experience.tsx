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
    <div className="flex flex-col justify-center items-center w-full relative bg-gray-950 dark:bg-white px-4 py-14">
      <h1 className="text-white dark:text-gray-950 text-center text-5xl mb-5 font-bold">
        Experience
      </h1>
      <div className="flex gap-10 mt-9">
        <Drawer>
          <DrawerTrigger className="cursor-pointer overflow-hidden relative p-4 rounded-lg border border-solid border-gray-300 rounded-t-4xl rounded-b-none">
            <div className="text-white dark:text-gray-950 h-48 justify-center items-center flex flex-col">
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
                    <span className="font-bold">
                      AI Chat Systems & Multilingual Support:
                    </span>{" "}
                    Built AI-driven multilingual chat systems (including Arabic)
                    for <span className="font-bold">KnowledgeBot</span>,{" "}
                    <span className="font-bold">Tatweer</span>,{" "}
                    <span className="font-bold">Maaden</span>, and{" "}
                    <span className="font-bold">PDO</span>, leveraging Next.js,
                    <span className="font-bold">Tailwind CSS</span>,{" "}
                    <span className="font-bold">SWR</span>,{" "}
                    <span className="font-bold">Zustand</span>, and{" "}
                    <span className="font-bold">Microsoft Azure AI</span>.
                    Features included document uploads, text-to-speech,
                    speech-to-text, AI-powered answer extraction, and real-time
                    analytics dashboards.
                  </li>
                  <li>
                    <span className="font-bold">
                      Web Application Development & UX Enhancement:
                    </span>{" "}
                    Redesigned the Haram Company financial assistance
                    application, improving the user experience for students in
                    the Middle East.
                  </li>
                  <li>
                    <span className="font-bold">
                      AI-Powered Candidate Matching:
                    </span>{" "}
                    Developed a resume-based candidate recommendation system for
                    <span className="font-bold">Maaden and PDO</span>,
                    integrating AI to match candidates with relevant skills.
                  </li>
                  <li>
                    <span className="font-bold">Enterprise IT Solutions:</span>{" "}
                    Created <span className="font-bold">Sanofi Architect</span>,
                    a resource provisioning web application for{" "}
                    <span className="font-bold">Sanofi</span>, integrating with{" "}
                    <span className="font-bold">ServiceNow</span> for IT service
                    management, modeled after Microsoft Azure.
                  </li>
                </ul>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        <Drawer>
          <DrawerTrigger className="cursor-pointer overflow-hidden relative p-4 rounded-lg border border-solid border-gray-300 rounded-t-full rounded-b-none">
            <div className="text-white dark:text-gray-950 h-48 justify-center items-center flex flex-col">
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
                    <span className="font-bold">
                      Frontend Development & State Management:
                    </span>{" "}
                    Built and maintained consumer and B2B web applications using
                    <span className="font-bold">React.js (Next.js)</span>,{" "}
                    <span className="font-bold">Tailwind CSS</span>,{" "}
                    <span className="font-bold">Context API</span>, and{" "}
                    <span className="font-bold">Redux</span>, ensuring full
                    responsiveness and Progressive Web App (PWA) support.
                    Developed adaptive UI solutions for various devices.
                  </li>
                  <li>
                    <span className="font-bold">
                      Loyalty Program & Data Caching:
                    </span>{" "}
                    Developed a loyalty program UI with{" "}
                    <span className="font-bold">React.js (Next.js)</span>,
                    <span className="font-bold">Tailwind CSS, and SWR</span> for
                    efficient data caching.
                  </li>
                  <li>
                    <span className="font-bold">
                      Project Leadership & Research:
                    </span>{" "}
                    Led the web team by assigning tasks, monitoring progress,
                    and conducting research based on project requirements.
                  </li>
                  <li>
                    <span className="font-bold">Analytics & Optimization:</span>{" "}
                    Implemented{" "}
                    <span className="font-bold">
                      Google Analytics (GA4) and Google Tag Manager
                    </span>{" "}
                    to track user behavior and improve performance.
                  </li>
                  <li>
                    <span className="font-bold">
                      Backend & SaaS Development:
                    </span>{" "}
                    Contributed to invoice software development using{" "}
                    <span className="font-bold">
                      Node.js and AWS Lambda functions
                    </span>
                    .
                  </li>
                  <li>
                    <span className="font-bold">
                      Cross-functional Collaboration:
                    </span>{" "}
                    Worked closely with product managers, tech leads, and
                    designers to ensure project alignment, feature
                    implementation, and timeline adherence.
                  </li>
                  <li>
                    <span className="font-bold">
                      Accommodation System Development:
                    </span>{" "}
                    Developed <span className="font-bold">RuangKita</span>, an
                    accommodation system, using{" "}
                    <span className="font-bold">Next.js 13 and Zustand</span>{" "}
                    for state management.
                  </li>
                </ul>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        <Drawer>
          <DrawerTrigger className="cursor-pointer overflow-hidden relative p-4 rounded-lg border border-solid border-gray-300 rounded-t-4xl rounded-b-none">
            <div className="text-white dark:text-gray-950 h-48 justify-center items-center flex flex-col">
              <h2 className="text-xl font-bold">Celebrity Fitness</h2>
              <h6 className="text-sm">Gym and Sport</h6>
              <span className="text-xs text-gray-400 my-2">
                Jan 2014 - Jun 2014
              </span>
              <h4>Customer Service</h4>
            </div>
          </DrawerTrigger>
          <DrawerContent className="mx-auto px-10">
            <DrawerHeader className="text-white">
              <DrawerTitle className="text-lg">Summary</DrawerTitle>
              <DrawerDescription className="overflow-auto px-4">
                <ul className="list-disc list-inside mr-4 flex flex-col gap-2 mt-2 overflow-auto">
                  <li>
                    Ensuring a positive experience for members and visitors.
                  </li>
                </ul>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        <Drawer>
          <DrawerTrigger className="cursor-pointer overflow-hidden relative p-4 rounded-lg border border-solid border-gray-300 rounded-t-none rounded-b-none">
            <div className="text-white dark:text-gray-950 h-48 justify-center items-center flex flex-col">
              <h2 className="text-xl font-bold">Pacific Link Telecom</h2>
              <h6 className="text-sm">Server</h6>
              <span className="text-xs text-gray-400 my-2">
                Jan 2012 - Jun 2012
              </span>
              <h4>Technician Server</h4>
            </div>
          </DrawerTrigger>
          <DrawerContent className="mx-auto px-10">
            <DrawerHeader className="text-white">
              <DrawerTitle className="text-lg">Summary</DrawerTitle>
              <DrawerDescription className="overflow-auto px-4">
                <ul className="list-disc list-inside mr-4 flex flex-col gap-2 mt-2 overflow-auto">
                  <li>
                    Do reporting on server issue Maintaining and monitoring
                    server
                  </li>
                </ul>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Experience;
