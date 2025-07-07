import React from 'react';
import {useState} from 'react';
import {BiLink, BiLogoGithub, BiTrophy} from 'react-icons/bi'
import ml4timage from '/ml4t.jpg'
import {FaChevronDown, FaChevronUp} from "react-icons/fa";

const Home = () => {
    const jobs = [
        {
            title: "Software Development Engineer 2",
            company: "Microsoft",
            year: "2022-2024",
            description: "Working as a part of the Azure Stack Edge (ASE) and Hyper Converged Infrastructure (HCI) service teams. Worked closely with principal engineers to design and implement key infrastructure components for HCI, an IaaS offering, and ASE, a HaaS solution. Developing scalable solutions and collaborating with global teams",
            details: [
                "Spearheaded Azure Service Bus upgrade for a high-volume architecture, implementing a round-robin strategy that tripled system capacity without increasing costs, reducing message latency by 40\% and enhancing throughput.",
                "Contributed to the development of the Arc Autonomous/Project Winfield product line, the latest innovation from Azure Edge, allowing customers to create fully disconnected cloud infrastructures on-premises, expanding the capabilities of Azure services.",
                "Enhanced project security by implementing Azure services such as Azure Front Door, Security Center, and Key Vault, securing data and access points, and reducing potential security incidents by 50\% through automated monitoring and response.",
                "Created comprehensive documentation of verbal processes, significantly easing the onboarding of new team members and accelerating their integration into the team. Mentored five junior engineers by developing tailored training plans that enhanced their skills and performance as cloud engineers, contributing to their professional growth.",
                "Designed and optimized CI/CD pipelines, leveraging advanced DevOps strategies to boost code quality by 35\% and cut project delivery timelines by 25\%. Implemented Azure DevOps best practices, streamlining deployments across teams.",
                "Obtained Microsoft Certified: Azure Solutions Architect Expert certification and utilized this expertise to design and implement more scalable, secure, and efficient cloud solutions, significantly improving project outcomes."
            ],
        },
        {
            title: "Software Development Engineer 2",
            company: "Juniper Networks",
            year: "2019-2022",
            description: "Worked as a part of Juniper's Pre Commit Tool (PCT) team which is a large scale, data driven, end to end distributed cloud application that is used by over 10000 developers worldwide to test and commit code for hardware build processes.",
            details: [
                "Designed and implemented a machine learning-driven log analysis system for build failures, leveraging Random Forest for automated error classification and anomaly detection. Reduced user debugging time by 90\% and enhanced system reliability, delivering actionable insights to 10,000+ developers worldwide.",
                "Gathered fuzzy requirements from users and implemented intuitive features from scratch by designing modular class and service level architectures which are scalable, highly performant and reliable.",
                "Built rest api services using SpringBoot from scratch to enable quick development, faster integration and testing. ",
                "Developed and delivered high performing, optimized code based on interactions with the users and design documents"
            ],
        },
        {
            title: "Associate Software Developer",
            company: "Manhattan Associates",
            year: "2016-2020",
            description: "Worked as part of the Product Services Orgranization (PSO) team, developing interactive reporting solutions based on Jaspersoft Reports that aggregated data from multiple sources for business users. Designed and implemented reports used by clients such as Michael Kors, Michaels, Under Armour, Reitmans, Belk, J.Crew, and Brooks Brothers to drive data-driven decision-making.",
            details: [
                "Lead developer in charge of communicating with the client to ascertain feasibility, needs and features.",
                "Designed and developed a microservice architecture using Springboot and Netflix OSS on the backend side which cut down implementation times for new reports by more than half.",
                "Designed and built REST API services using Spring Boot from scratch, enabling rapid development, seamless integration, and efficient testing while delivering high-performing, optimized code based on client requirements and design documents."
            ],
        },
    ];

    const projects = [
        {
            title: "ML4T Capstone",
            description: "Capstone Project for ML4T that includes a trading sim and strategy",
            githubLink: "https://github.com/GAT007/ML4TCapstone",
            imageUrl: "/ml4t.jpg",
            techStack: ["Python", "Pandas"]
        },
        {
            title: "Amcorp Ecommerce",
            description: "An ecommerce site built for selling antiques and collectables",
            githubLink: "https://github.com/GAT007/djangoEcom",
            imageUrl: "/ecommerce.jpg",
            techStack: ["Python", "Django"]
        },
        {
            title: "Yelp Camp",
            description: "A Camping Site Review Site",
            githubLink: "https://github.com/GAT007/YelpCamp",
            imageUrl: "/camping.jpeg",
            techStack: ["Javascript", "MERN"]
        },
        {
            title: "Amcorp Retail Manager",
            description: "A Retail Management End to End Solution built on C#",
            githubLink: "https://github.com/GAT007/amcorpRetailManager",
            imageUrl: "/retailManagement.jpeg",
            techStack: ["C#", "Swagger"]
        },
        {
            title: "Premier League Analysis",
            description: "Identified strategies to pick perfect fantasy league players",
            githubLink: "https://github.com/GAT007/ltcws",
            imageUrl: "pl.jpeg",
            techStack: ["Python", "Pandas"]
        },
        {
            title: "Python Automation",
            description: "Created modules for automating everyday tasks",
            githubLink: "https://github.com/GAT007/pythonAutomation",
            imageUrl: "/automation.jpeg",
            techStack: ["Python"]
        }
    ];

    const papers = [
        {
            title: "A New Approach for Fast Transmission to Remote Cooperative Groups with a New Key Paradigm using Voice Authentication",
            description: "A new approach to encryption using voice authentication",
            publisher: "Springer Verlag Publications",
            publicationDate: "2016",
            link: "https://link.springer.com/chapter/10.1007/978-981-10-1678-3_71",
        }
    ];

    const awards = [
        {
            title: "Department Spotlight Award",
            organization: "Juniper Networks",
            year: "2020",
            description: "Awarded for outstanding performance and leadership on the PCT tool.",
        },
        {
            title: "Spirit Award - Go The Distance",
            organization: "Manhattan Associates",
            year: "2018",
            description: "Awarded for impactful work done on co-ordinating with multiple brands to deliver finished products.",
        },
        {
            title: "Best Project Award",
            organization: "Dayananda Sagar Tech Fest",
            year: "2016",
            description: "Received for creating an outstanding ML project at the college level",
        },
    ];

    const [expanded, setExpanded] = useState(null);

    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className='min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white'>

            <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
                <div className="space-y-5">
                    <h1 className="text-2xl font-light md:text-4xl">Hi, I'm <span className="font-semibold">Amith</span>!
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">

                        I’m an astute, detail-oriented, and battle-hardened software engineer with over 8 years of
                        experience across diverse technologies and industries. Skilled in backend development with
                        languages like Java, Python, and C#, I believe in creating modular, scalable, and tech-debt-free
                        software solutions. I focus on getting things done right rather than just done, ensuring
                        long-term success and smoother processes.
                        <br/>
                        Currently working as a cloud engineer at Microsoft, I’m certified as an Azure Solutions
                        Architect Expert and DevOps Engineer Expert. My passion for building efficient and secure cloud
                        infrastructures has allowed me to contribute to major projects like Azure Stack Edge and Azure
                        Hyperconverged Infrastructure. I’m always looking for new challenges that can further define my
                        career and push my technical boundaries.
                    </p>
                </div>

                <div className="space-y-10">
                    <h1 className="text-base font-bold md:text-4xl">Experience</h1>
                    <div className="flex flex-col lg:flex-row lg:gap-20">
                        <ul className="space-y-3">
                            {jobs.map((job, index) => (
                                <li
                                    key={index}
                                    className="relative flex flex-col gap-4 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white"
                                >
                                    <div onClick={() => handleToggle(index)}
                                         className="flex justify-between items-end cursor-pointer">
                                        <div>
                                            <span className="block text-lg font-semibold">{job.title}</span>
                                            <span className="block font-light">{job.company}</span>
                                            <time className="block text-sm text-gray-400">{job.year}</time>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{job.description}</p>
                                        </div>
                                        <div className="text-xl">
                                            {expanded === index ? <FaChevronUp/> : <FaChevronDown/>}
                                        </div>
                                    </div>

                                    {/* Collapsible details */}
                                    {expanded === index && (
                                        <ul className="list-disc ml-6 text-sm text-gray-600 dark:text-gray-400">
                                            {job.details.map((detail, detailIndex) => (
                                                <li key={detailIndex}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl space-y-8 mx-auto">
                    <h1 className="text-2xl font-bold md:text-4xl">Projects</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
                            >
                                <a
                                    key={index}
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col justify-between cursor-pointer transition-transform duration-300 hover:scale-105"
                                >
                                    {/* Top Part: Image and Title */}
                                    <div className="relative">
                                        <img
                                            src={project.imageUrl}
                                            alt={`${project.title} image`}
                                            className="w-full h-40 object-cover"
                                        />
                                        <h3 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-50">
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Bottom Part: Description and GitHub Link */}
                                    <div className="p-6 flex flex-col justify-between flex-grow">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {project.description}
                                        </p>
                                        <div className="mt-4 flex justify-between items-center">

                                            {/* Tech Stack Pill Boxes */}
                                            <div className="flex flex-wrap gap-1">
                                                {project.techStack.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-xs font-medium py-1 px-2 rounded-full"
                                                    >
                                                    {tech}
                                                </span>
                                                ))}
                                            </div>
                                            <BiLogoGithub size={24}/>

                                        </div>
                                    </div>
                                </a>
                            </div>

                        ))}
                    </div>
                </div>


                <div className="max-w-7xl space-y-8 mx-auto">
                    <h1 className="text-2xl font-bold md:text-4xl">Papers</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {papers.map((paper, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between"
                            >
                                {/* Paper Title and Link */}
                                <div className="flex items-center space-x-2">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        <a href={paper.link} target="_blank" rel="noopener noreferrer"
                                           className="hover:text-blue-500">
                                            {paper.title}
                                        </a>
                                    </h3>
                                    <BiLink className="text-gray-500 dark:text-gray-400"/>
                                </div>

                                {/* publisher and Date */}
                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    <p>By {paper.publisher}</p>
                                    <p>{paper.publicationDate}</p>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                                    {paper.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl space-y-8 mx-auto">
                    <h1 className="text-2xl font-bold md:text-4xl">Awards</h1>

                    {/* Responsive grid layout for awards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {awards.map((award, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between space-y-4"
                            >
                                {/* Award Title with Icon */}
                                <div className="flex items-center space-x-2">
                                    <BiTrophy className="text-yellow-500 dark:text-yellow-400"/> {/* Trophy Icon */}
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                        {award.title}
                                    </h3>
                                </div>

                                {/* Award Organization and Year */}
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    <p>{award.organization}</p>
                                    <p>{award.year}</p>
                                </div>

                                {/* Description (Optional) */}
                                {award.description && (
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                        {award.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home