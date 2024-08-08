import { Link, Head } from '@inertiajs/react';
import { Menu, X } from "lucide-react";
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const comp = useRef(null);
    const container = useRef(null);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Features', href: '#features' },
        { label: 'Help', href: '#help' },
    ];

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from("#intro-slider", {
                xPercent: '-100',
                duration: 1.3,
                delay: 0.5,
                ease: "power1.inOut",
            }).from(['#title-1', '#title-2', '#title-3'], {
                opacity: 0,
                y: "-=30",
                delay: 0.3,
                stagger: 0.3,
            }).to('#intro-slider', {
                xPercent: "-100",
                duration: 1.4,
            }).from("#all", {
                opacity: 0,
                duration: 0.5,
            });
        }, comp);

        return () => ctx.revert();
    }, []);
  



    return (
        <>
            <Head title="Issue Tracker" />
            <div className="relative" ref={comp}>
                <div id='intro-slider' className='h-screen p-9 mt-10 text-gray-800 absolute left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight'>
                    <h1 className='text-9xl' id='title-1'>Track</h1>
                    <h1 className='text-9xl' id='title-2'>Resolve</h1>
                    <h1 className='text-9xl' id='title-3'>Evolve</h1>
                </div>
                <div id='all' className='all'>
                    <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                        <header className="bg-black fixed w-full top-0 z-10 py-4">
                            <div className="container bg-black mx-auto flex justify-between items-center px-8">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30" fill="currentColor" className="bi bi-bug-fill text-blue-500 hover:text-red-500 transition-colors duration-300" viewBox="0 0 16 16">
                                        <path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A5 5 0 0 0 3 6h10a5 5 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A5 5 0 0 0 8 1a5 5 0 0 0-2.731.811l-.29-.956z" />
                                        <path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975" />
                                    </svg>
                                </div>
                                <div className="container flex fixed top-0 mt-5 justify-center items-center px-6">
                                    <div className="hidden lg:flex space-x-4">
                                        {navItems.map((item, index) => (
                                            <a key={index} href={item.href} className="text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-red-500">
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="fixed top-0 right-5 mt-4 lg:hidden md:flex flex-col justify-end">
                                        <button onClick={toggleNavbar}>
                                            {mobileDrawerOpen ? <X /> : <Menu />}
                                        </button>
                                    </div>
                                    <nav className="fixed top-0 right-0 w-auto z-9 mt-7 mr-10">
                                        <>
                                            <Link
                                                href={route('login')}
                                                className="text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-red-500"
                                            >
                                                Log in
                                            </Link>
                                            <Link
                                                href={route('register')}
                                                className="text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-red-500"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    </nav>
                                </div>
                            </div>
                        </header>
                        <main className="mt-16">
                            <section id="home" className="container mx-auto px-6 text-center py-16">
                                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Welcome to Issue Tracker</h1>
                                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                                    Efficiently manage and resolve issues with our powerful and user-friendly issue tracker.
                                    Keep your projects on track and your team informed with seamless collaboration and insightful reporting.
                                </p>
                               
                                    <div className=" container mt-8 flex justify-center">
                                        <Link href={route('register')} className="text-white bg-blue-500 hover:bg-red-500 font-bold py-2 px-4 rounded-full mr-4">Get Started</Link>
                                        <Link href={route('help')} className="text-white hover:bg-red-500 font-bold py-2 px-4 rounded-full border border-500">Learn More</Link>
                                    </div>
                               
                            </section>
                            <section id="features" className="container mx-auto px-6 py-16">
                                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Key Features</h2>
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Easy Issue Tracking</h3>
                                        <p className="mt-4 text-gray-600 dark:text-gray-300">Quickly log and categorize issues with detailed descriptions, priority levels, and due dates.</p>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Collaborative Workflow</h3>
                                        <p className="mt-4 text-gray-600 dark:text-gray-300">Assign issues to team members, comment on tasks, and track progress in real-time.</p>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Seamless Integration</h3>
                                        <p className="mt-4 text-gray-600 dark:text-gray-300">Integrate with popular tools and platforms to streamline your workflow.</p>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Notifications & Alerts</h3>
                                        <p className="mt-4 text-gray-600 dark:text-gray-300">Stay updated with email and in-app notifications to ensure nothing falls through the cracks.</p>
                                    </div>
                                </div>
                            </section>
                            <section id="help" className="container mx-auto px-6 py-16">
                                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Help</h2>
                                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                                    Need assistance? Visit the help section to find FAQs.
                                </p>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">What is Issue Tracker?</h3>
                                    <p className="mt-4 text-gray-600 dark:text-gray-300">Issue Tracker is a tool designed to help teams manage and resolve issues efficiently. It provides features like issue logging, prioritization, and progress tracking.
                                    </p>
                                    
                                </div>
                               
                            </section>
                        </main>
                        {mobileDrawerOpen && (
                            <div className='fixed top-20 right-0 z-20 bg-neutral-900 w-full p-7 flex flex-col items-center lg:hidden'>
                                <div className="flex flex-col items-center gap-y-4">
                                    {navItems.map((item, index) => (
                                        <a key={index} href={item.href} className="py-2 text-white hover:text-gray-300">
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
