import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react'; // Added usePage import
import { ChevronDownIcon } from '@heroicons/react/24/solid'; // Updated import for v2

const MinimalNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { url } = usePage(); // Get the current URL from usePage

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Function to determine if a link is active
    const isActive = (href) => {
        if (href === '/packages') {
            return url.startsWith('/packages') ? 'text-black font-bold' : 'text-gray-600';
        }
        return url === href ? 'text-black font-bold' : 'text-gray-600';
    };

    return (
        <nav className="bg-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Text */}
                <div className="flex items-center text-gray-800 text-2xl font-semibold">
                    <Link href="/">
                        <img src="/images/Logo.jpg" alt="Logo" className="h-12 w-auto" /> {/* Adjust height as needed */}
                    </Link>
                    <span className="ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Real A Events Styling & Catering Services</span> {/* Add your text here */}
                </div>

                {/* Hamburger menu button with transition */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="relative focus:outline-none"
                    >
                        <div className={`bg-gray-800 h-1 w-8 mb-1 transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <div className={`bg-gray-800 h-1 w-8 mb-1 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
                        <div className={`bg-gray-800 h-1 w-8 transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>

                {/* Menu Links */}
                <div className={`absolute top-16 left-0 w-full lg:relative lg:top-0 lg:w-auto lg:flex lg:items-center transition-all duration-300 ease-in-out bg-white ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <div className="flex flex-col lg:flex-row lg:space-x-6 text-gray-800 p-4 lg:p-0">
                        <Link href="/" className={`block lg:inline-block mt-4 lg:mt-0 transition-colors duration-200 ${isActive('/')}`}>
                            Home
                        </Link>
                        <Link href="/about" className={`block lg:inline-block mt-4 lg:mt-0 transition-colors duration-200 ${isActive('/about')}`}>
                            About
                        </Link>

                        {/* Packages with Dropdown and Arrow */}
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className={`flex items-center mt-4 lg:mt-0 transition-colors duration-200 ${isActive('/packages')}`}
                            >
                                Packages
                                <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute mt-2 py-2 w-48 bg-white shadow-lg rounded-lg">
                                    <Link href="/packages/wedding" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/packages/wedding')}`}>
                                        Wedding Package
                                    </Link>
                                    <Link href="/packages/birthday" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/packages/birthday')}`}>
                                        Birthday Package
                                    </Link>
                                    <Link href="/packages/debut" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/packages/debut')}`}>
                                        Debut Package
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link href="/gallery" className={`block lg:inline-block mt-4 lg:mt-0 transition-colors duration-200 ${isActive('/gallery')}`}>
                            Gallery
                        </Link>
                        <Link href="/contact" className={`block lg:inline-block mt-4 lg:mt-0 transition-colors duration-200 ${isActive('/contact')}`}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MinimalNavBar;
