import React from 'react';
import { Chrono } from "react-chrono";

const Home = () => {
    const items = [
        {
            title: "Software Development Engineer 2",
            cardTitle: "Microsoft",
            cardSubtitle: "2022 - present",
            cardDetailedText: "Developing scalable solutions and collaborating with global teams."
        },
        {
            title: "Software Development Engineer 2",
            cardTitle: "Juniper Networks",
            cardSubtitle: "2019-2022",
            cardDetailedText: "Worked on Azure Cloud Solutions and built web applications."
        },
        {
            title: "Associate Software Engineer",
            cardTitle: "Manhattan Associates",
            cardSubtitle: "2016-2019",
            cardDetailedText: "Started career as a junior developer working on backend services."
        }
    ];


    return (
        <div className='min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white'>

            <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
                <div className="space-y-5">
                    <h1 className="text-2xl font-light md:text-4xl">Hi, I'm <span className="font-semibold">Amith</span>!</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">

                        I’m an astute, detail-oriented, and battle-hardened software engineer with over 8 years of experience across diverse technologies and industries. Skilled in backend development with languages like Java, Python, and C#, I believe in creating modular, scalable, and tech-debt-free software solutions. I focus on getting things done right rather than just done, ensuring long-term success and smoother processes.
                        <br />
                        Currently working as a cloud engineer at Microsoft, I’m certified as an Azure Solutions Architect Expert and DevOps Engineer Expert. My passion for building efficient and secure cloud infrastructures has allowed me to contribute to major projects like Azure Stack Edge and Azure Hyperconverged Infrastructure. I’m always looking for new challenges that can further define my career and push my technical boundaries.
                    </p>
                </div>

                <div className="space-y-10">
                    <h1 className="text-base font-bold md:text-4xl">Experience</h1>
                    <div className="flex flex-col lg:flex-row lg:gap-20">
                        <ul className="space-y-3">
                            {[
                                {
                                    title: "Software Development Engineer 2",
                                    company: "Microsoft",
                                    year: "2022-present",
                                    description: "Developing scalable solutions and collaborating with global teams.",
                                    details: [
                                        "Developed scalable solutions",
                                        "Collaborated with global teams",
                                        "Implemented best practices",
                                    ],
                                },
                                {
                                    title: "Software Development Engineer 2",
                                    company: "Juniper Networks",
                                    year: "2019-2022",
                                    description: "Worked on Azure Cloud Solutions and built web applications.",
                                    details: [
                                        "Worked on Azure Cloud Solutions",
                                        "Built web applications",
                                        "Optimized existing code",
                                    ],
                                },
                                {
                                    title: "Associate Software Developer",
                                    company: "Manhattan Associates",
                                    year: "2016-2020",
                                    description: "Started career as a junior developer working on backend services.",
                                    details: [
                                        "Started career as a junior developer",
                                        "Worked on backend services",
                                        "Participated in code reviews",
                                    ],
                                },
                            ].map((jobs, index) => (
                                <li key={index} className="relative flex flex-col gap-1 p-6 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                                    <span className="text-lg font-semibold">{jobs.title}</span>
                                    <span className="font-light">{jobs.company}</span>
                                    <time className="text-sm text-gray-400">{jobs.year}</time>
                                    {/* Show description only on md and larger screens */}
                                    <p className="text-sm text-gray-600 dark:text-gray-400 hidden md:block">{jobs.description}</p>
                                    {/* Bullet points for details, hidden on small screens */}
                                    <ul className="list-disc ml-6 text-sm text-gray-600 dark:text-gray-400 hidden md:block">
                                        {jobs.details.map((detail, detailIndex) => (
                                            <li key={detailIndex}>{detail}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* //To do : Create 2 column/ 3 column projects with card structures */}

                <div className="max-w-3xl space-y-8">
                    <h1 className="text-2xl font-bold md:text-4xl">Projects</h1>

                    <div className="space-y-10">
                        <div className="text-baseline space-y-3">
                            <h3 className="text-sm font-semibold md:text-lg">Project Title</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">Lorem ipsum dolor</p>
                        </div>
                        <div className="text-baseline space-y-3">
                            <h3 className="text-sm font-semibold md:text-lg">Project Title</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">Lorem ipsum dolor</p>
                        </div>
                        <div className="text-baseline space-y-3">
                            <h3 className="text-sm font-semibold md:text-lg">Project Title</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">Lorem ipsum dolor</p>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div className="text-baseline space-y-3">
                            <h3 className="text-sm font-semibold md:text-lg">Project Title</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">Lorem ipsum dolor</p>
                        </div>
                        <div className="text-baseline space-y-3">
                            <h3 className="text-sm font-semibold md:text-lg">Project Title</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">Lorem ipsum dolor</p>
                        </div>
                        <div className="text-baseline space-y-3">
                            <h3 className="text-sm font-semibold md:text-lg">Project Title</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">Lorem ipsum dolor</p>
                        </div>
                    </div>
                </div>

                {/* TO DO : Add details about the papers */}
                <div className="max-w-3xl space-y-8">
                    <h1 className="text-2xl font-bold md:text-4xl">Papers</h1>

                    <div className="space-y-10">
                        <div className="text-baseline space-y-3">
                            <h3>Project Title</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">Lorem ipsum dolor</p>
                        </div>
                    </div>
                </div>


                {/* TO DO : Add details about the awards */}
                <div className="max-w-3xl space-y-8">
                    <h1 className="text-2xl font-bold md:text-4xl">Awards</h1>

                    <div className="space-y-10">
                        <div className="text-baseline space-y-3">
                            <h3>Award Title</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">Lorem ipsum dolor</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home