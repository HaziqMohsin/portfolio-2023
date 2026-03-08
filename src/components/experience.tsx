"use client";

import React from "react";
import { motion } from "motion/react";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

type Experience = {
    company: string;
    role: string;
    industry: string;
    period: string;
    details: React.ReactNode;
};

const experiences: Experience[] = [
    {
        company: "Mobiz Inc. SDN BHD",
        role: "Frontend Developer",
        industry: "IT solution",
        period: "2023 – 2025",
        details: (
            <ul className="list-disc list-inside mr-4 flex flex-col gap-2 mt-2">
                <li>
                    <span className="font-bold">
                        AI Chat Systems & Multilingual Support:
                    </span>{" "}
                    Built AI-driven multilingual chat systems (including Arabic)
                    for <span className="font-bold">KnowledgeBot</span>,{" "}
                    <span className="font-bold">Tatweer</span>,{" "}
                    <span className="font-bold">Maaden</span>, and{" "}
                    <span className="font-bold">PDO</span>, leveraging Next.js,{" "}
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
                    Developed a resume-based candidate recommendation system for{" "}
                    <span className="font-bold">Maaden and PDO</span>,
                    integrating AI to match candidates with relevant skills.
                </li>
                <li>
                    <span className="font-bold">Enterprise IT Solutions:</span>{" "}
                    Created{" "}
                    <span className="font-bold">Sanofi Architect</span>, a
                    resource provisioning web application for{" "}
                    <span className="font-bold">Sanofi</span>, integrating with{" "}
                    <span className="font-bold">ServiceNow</span> for IT service
                    management, modeled after Microsoft Azure.
                </li>
            </ul>
        ),
    },
    {
        company: "TheLorry Online",
        role: "Frontend Developer",
        industry: "Technology & Logistics",
        period: "2016 – 2023",
        details: (
            <ul className="list-disc list-inside mr-4 flex flex-col gap-2 mt-2 overflow-auto">
                <li>
                    <span className="font-bold">
                        Frontend Development & State Management:
                    </span>{" "}
                    Built and maintained consumer and B2B web applications using{" "}
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
                    <span className="font-bold">React.js (Next.js)</span>,{" "}
                    <span className="font-bold">Tailwind CSS, and SWR</span> for
                    efficient data caching.
                </li>
                <li>
                    <span className="font-bold">
                        Project Leadership & Research:
                    </span>{" "}
                    Led the web team by assigning tasks, monitoring progress, and
                    conducting research based on project requirements.
                </li>
                <li>
                    <span className="font-bold">
                        Analytics & Optimization:
                    </span>{" "}
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
        ),
    },
    {
        company: "Celebrity Fitness",
        role: "Customer Service",
        industry: "Gym and Sport",
        period: "Jan 2014 – Jun 2014",
        details: (
            <ul className="list-disc list-inside mr-4 flex flex-col gap-2 mt-2 overflow-auto">
                <li>Ensuring a positive experience for members and visitors.</li>
            </ul>
        ),
    },
    {
        company: "Pacific Link Telecom",
        role: "Technician Server",
        industry: "Server",
        period: "Jan 2012 – Jun 2012",
        details: (
            <ul className="list-disc list-inside mr-4 flex flex-col gap-2 mt-2 overflow-auto">
                <li>
                    Do reporting on server issue Maintaining and monitoring
                    server
                </li>
            </ul>
        ),
    },
];

const Experience = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full relative bg-gray-950 dark:bg-white px-4 py-14">
            <h1 className="text-white dark:text-gray-950 text-center text-5xl mb-5 font-bold">
                Experience
            </h1>

            <div className="relative w-full max-w-2xl mt-9">
                {/* Vertical line */}
                <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-600 dark:bg-gray-400" />

                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        className="relative pl-10 pb-10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                        {/* Timeline dot */}
                        <div
                            className={`absolute left-0 top-1 rounded-full border-2 border-gray-400 bg-gray-950 dark:bg-white ${
                                i === 0 ? "w-7 h-7 -translate-x-0.5" : "w-6 h-6"
                            }`}
                        />

                        {/* Card */}
                        <div className="rounded-lg border border-gray-700 dark:border-gray-300 p-5 flex flex-col gap-2">
                            <div className="flex justify-between items-start gap-4">
                                <h2 className="text-white dark:text-gray-950 text-lg font-bold">
                                    {exp.company}
                                </h2>
                                <span className="shrink-0 text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800">
                                    {exp.period}
                                </span>
                            </div>
                            <h4 className="text-white dark:text-gray-950 text-sm">
                                {exp.role}
                            </h4>
                            <span className="text-xs text-gray-400 dark:text-gray-500">
                                {exp.industry}
                            </span>
                            <Drawer>
                                <DrawerTrigger className="cursor-pointer self-start text-sm text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-950 transition-colors">
                                    Details →
                                </DrawerTrigger>
                                <DrawerContent className="mx-auto px-10">
                                    <DrawerHeader className="text-white">
                                        <DrawerTitle className="text-lg">
                                            Summary
                                        </DrawerTitle>
                                        <DrawerDescription className="overflow-auto px-4">
                                            {exp.details}
                                        </DrawerDescription>
                                    </DrawerHeader>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
