import React from 'react'
import image from '/profilepicture.jpg'
import { BiCurrentLocation, BiDownload, BiEnvelope, BiLogoGithub, BiLogoLinkedin, BiMoon, BiSun } from 'react-icons/bi'

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center justify-center gap-5">
                    <img src={image} alt="" className='w-32 rounded-full' />

                    <div className='text-center space-y-1'>
                        <h1 className="text-4x1 font-light">Amith <span className="font-semibold">Tallanki</span>
                        </h1>
                        <h3 className='text-x1 font-light'> Backend Developer
                        </h3>
                    </div>

                    <button className="absolute right-10 top-8" onClick={toggleDarkMode}>
                        {
                            darkMode ? (
                                <BiSun className='text-2x1' />
                            ) : <BiMoon className='text-2x1' />
                        }
                    </button>

                    {/* Download Icon */}
                    <a
                        href="/AmithTallanki.pdf" // Link to the file in the public folder
                        download // This attribute will trigger the download
                        className="mt-2 hover:text-blue-500 absolute right-9 top-12" // Add hover effect if desired
                    >
                        <BiDownload className='text-2xl' />
                    </a>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <BiCurrentLocation className='text-x1' />
                            <span>Bangalore, India</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiEnvelope className='text-x1' />
                            <span>amith.tallanki@gmail.com</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2x1">Socials</h1>
                    <ul className="flex gap-3">
                        <li>
                            <a href="https://github.com/GAT007" target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all">
                                <BiLogoGithub className="text-2xl text-gray-800 dark:text-gray-300" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/amithtallanki/" target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full dark:bg-blue-800 hover:bg-blue-300 dark:hover:bg-blue-700 transition-all">
                                <BiLogoLinkedin className="text-2xl text-blue-800 dark:text-blue-300" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2xl">Education</h1>
                    <ul className="space-y-3">
                        {[
                            { degree: "Masters in Computer Science", institution: "Georgia Institute of Technology", year: "2023-2025" },
                            { degree: "Bachelors in Computer Science", institution: "Dayananda Sagar College Of Engineering", year: "2012-2016" },
                        ].map((education, index) => (
                            <li key={index} className="relative flex flex-col gap-1 p-6 border dark:border-gray-600 rounded-lg before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                                <span className="font-semibold">{education.degree}</span>
                                <span className="font-light">{education.institution}</span>
                                <time className="text-sm text-gray-400">{education.year}</time>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2xl">Skills</h1>
                    <div className="flex flex-wrap gap-3">
                        {[
                            "Java", "Python", "C#",
                            "DevOps", "Docker", "Kubernetes", "CI/CD",
                            "Azure", "ARM", "ACR", "Azure App Service"
                        ].map((skill, index) => (
                            <span
                                key={index}
                                className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="hidden md:flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2xl">Hobbies</h1>
                    <div className="flex flex-wrap gap-16 p-3">
                        <ul className="flex list-disc flex-col gap-3">
                            <li>Reading</li>
                            <li>Running Marathons</li>
                            <li>Cooking</li>
                            <li>Gaming</li>
                            <li>Photography</li>
                        </ul>
                    </div>
                </div>

                <div className="hidden md:flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2xl">Languages</h1>
                    <div className="flex flex-wrap gap-16 p-3">
                        <ul className="flex list-disc flex-col gap-3">
                            <li>English</li>
                            <li>Hindi</li>
                            <li>Telugu</li>
                            <li>Kannada</li>
                            <li>Spanish</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderLeft