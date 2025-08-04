import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'; // Link yahan se
import { ArrowBigDown, ChevronDown, Menu, X } from 'lucide-react';  // Icons yahan se

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);

    return (
        <nav className="px-6 py-4 bg-brand-background">
            <div className="flex items-center justify-between mx-auto ">
                {/* Logo */}
                <div className="w-40">
                    <img src={logo} alt="college skills" className="object-cover w-full h-12" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden gap-6 font-medium text-gray-800 md:flex">
                    <li><Link to="/" className="hover:text-[#FF9E0D]">Home</Link></li>
                    <li><Link to="/about" className="hover:text-[#FF9E0D]">About Us</Link></li>
                    <li className="relative">
                        {/* Main Clickable Menu */}
                        <button
                            onClick={() => {
                                setIsServicesOpen(!isServicesOpen);
                                setIsCoursesOpen(false);
                            }}
                            className="hover:text-[#FF9E0D] focus:outline-none flex justify-center items-center"
                        >
                            Services <ChevronDown size={20} />
                        </button>

                        {/* Dropdown List */}
                        {isServicesOpen && (
                            <ul className="absolute left-0 z-10 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-52">
                                <li>
                                    <Link
                                        to="/services/soft-skills"
                                        className="block px-4 py-2 hover:bg-[#FFF5E1] text-gray-800"
                                    >
                                        Soft Skills for Students
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/corporate-training"
                                        className="block px-4 py-2 hover:bg-[#FFF5E1] text-gray-800"
                                    >
                                        Corporate Training
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services/b2b"
                                        className="block px-4 py-2 hover:bg-[#FFF5E1] text-gray-800"
                                    >
                                        B2B Outsourcing
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li><Link to="/blog" className="hover:text-[#FF9E0D]">Blog</Link></li>
                    <li className="relative">
                        {/* Main Clickable Menu */}
                        <button
                            onClick={() => {
                                setIsCoursesOpen(!isCoursesOpen);
                                setIsServicesOpen(false);
                            }}
                            className="hover:text-[#FF9E0D] focus:outline-none flex justify-center items-center"
                        >
                            Courses <ChevronDown size={20} />
                        </button>

                        {/* Dropdown List */}
                        {isCoursesOpen && (
                            <ul className="absolute left-0 z-10 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-52">
                                <li>
                                    <Link
                                        to="/courses/for-colleges"
                                        className="block px-4 py-2 hover:bg-[#FFF5E1] text-gray-800"
                                    >
                                        For Colleges
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/courses/for-corporate"
                                        className="block px-4 py-2 hover:bg-[#FFF5E1] text-gray-800"
                                    >
                                        For Schools
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/testimonial" className="hover:text-[#FF9E0D]">Testimonial</Link></li>
                    <li><Link to="/contact" className="hover:text-[#FF9E0D]">Contact Us</Link></li>
                </ul>

                {/* Desktop Button */}
                <button className="hidden md:inline-block bg-[#FF9E0D] text-white px-5 py-2 rounded-lg font-medium">
                    Join Now
                </button>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="px-4 py-4 mt-4 space-y-5 font-medium text-gray-800 rounded-md md:hidden">
                    <ul>
                        <li><Link to="/" className="hover:text-[#FF9E0D]">Home</Link></li>
                        <li><Link to="/about" className="hover:text-[#FF9E0D]">About Us</Link></li>
                        <li className="relative">
                            {/* Main Clickable Menu */}
                            <button
                                onClick={() => {
                                    setIsServicesOpen(!isServicesOpen);
                                    setIsCoursesOpen(false);
                                }}
                                className="hover:text-[#FF9E0D] focus:outline-none flex justify-center items-center"
                            >
                                Services <ChevronDown size={20} />
                            </button>

                            {/* Dropdown List */}
                            {isServicesOpen && (
                                <ul className="absolute left-0 z-10 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-52">
                                    <li>
                                        <Link
                                            to="/services/soft-skills"
                                            className="block px-4 py-2 hover:bg-[#FFF5E1] text-gray-800"
                                        >
                                            Soft Skills for Students
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/services/corporate-training"
                                            className="block px-4 py-2 hover:bg-[#FFF5E1] text-gray-800"
                                        >
                                            Corporate Training
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/services/b2b"
                                            className="block px-4 py-2 hover:bg-[#FFF5E1] text-gray-800"
                                        >
                                            B2B Outsourcing
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li><Link to="/blog" className="hover:text-[#FF9E0D]">Blog</Link></li>
                        <li className="relative">
                            {/* Main Clickable Menu */}
                            <button
                                onClick={() => {
                                    setIsCoursesOpen(!isCoursesOpen);
                                    setIsServicesOpen(false);
                                }}
                                className="hover:text-[#FF9E0D] focus:outline-none flex justify-center items-center"
                            >
                                Courses <ChevronDown size={20} />
                            </button>

                            {/* Dropdown List */}
                            {isCoursesOpen && (
                                <ul className="absolute left-0 z-10 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-52">
                                    <li>
                                        <Link
                                            to="/courses/for-colleges"
                                            className="block px-4 py-2 hover:bg-[#FFF5E1] text-gray-800"
                                        >
                                            For Colleges
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/courses/for-corporate"
                                            className="block px-4 py-2 hover:bg-[#FFF5E1] text-gray-800"
                                        >
                                            For Corporates/B2B
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/testimonial" className="hover:text-[#FF9E0D]">Testimonial</Link></li>
                        <li><Link to="/contact" className="hover:text-[#FF9E0D]">Contact Us</Link></li>
                    </ul>
                    <button className="w-full mt-2 bg-[#FF9E0D] text-white px-5 py-2 rounded-full font-semibold">
                        Join Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
