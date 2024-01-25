import React from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, DeviceTabletIcon } from '@heroicons/react/20/solid';

function About() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">About me</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Full stack web developer</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Leveraging background in enterprise sales and business management to provide unique perspectives on how end-users
                                interact with websites and software platforms.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="./../images/about-pic.png"
                        alt="design"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                Innovative problem-solver passionate about developing apps focusing on front-end
                                enterprise design and development. Strengths in creativity, teamwork and operational
                                business management.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Technical Languages:</strong> HTML, CSS, JavaScript
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Technologies:</strong> Web 3rd party and Server side APIs,
                                        NodeJS, Express, SQL, ORM, MVC, noSQL, PWA, React, MERN, State
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">This app:</strong> PWA progressive web application installable
                                        and uses very basic service worker functionality.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                Progressive Web Applications (PWAs) are a type of web application developed to provide a seamless
                                and app-like user experience across various devices and platforms. The concept of PWAs was introduced
                                by Google engineer Alex Russell and designer Frances Berriman in 2015. These applications leverage
                                modern web technologies to deliver offline capabilities, push notifications, and responsive design,
                                offering users an enhanced and engaging experience without the need for traditional app installations.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Installation</h2>
                            <p className="mt-6">
                                This application can be installed as a PWA (progressive web application) on your device.
                                No need for AppStore or Google Play.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <ComputerDesktopIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Chrome Desktop:</strong> Use install icon at the address bar.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <DevicePhoneMobileIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Safari iOs:</strong> Use Add to Home Screen when sharing the page.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <DeviceTabletIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Chrome Android:</strong> Use Add to Home Screen when clicking three dot icon.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        /*
        <div className='n2body-left-2'>
            <h1>About me</h1>
            <br></br>
            <p>Full Stack Web Developer leveraging background in enterprise sales and business management to provide unique perspectives on how end-users interact with websites and software platforms.</p> <br></br>
            <p>Innovative problem-solver passionate about developing apps focusing on front-end enterprise design and development. Strengths in creativity, teamwork and operational business management.</p><br></br>
            <p>Technical Languages: HTML, CSS, JavaScript</p><br></br>
            <p>Technologies: Web 3rd party and Server side APIs, NodeJS, Express, SQL, ORM, MVC, noSQL, PWA, React, MERN, State</p><br></br>
            <p>This app is PWA installable and uses very basic service worker functionality.</p><br></br>
            <p>For Chrome - use install icon at the address bar.</p><br></br>
            <p>For Safari/iOS - use Add to Home Screen when sharing the page</p><br></br>
            <p>For Chrome/Android - use Add to Home Screen when clicking three dot icon</p><br></br>
        </div>
        */
    );
}

export default About;
