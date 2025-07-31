import { Instagram, Linkedin, Mail, Map, MapPin, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
// import {
//   FaLinkedin,
//   FaYoutube,
//   FaTelegram,
//   FaMapMarkerAlt,
//   FaEnvelope,
// } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-12 pb-6 px-4 md:px-10">
            {/* Top content */}
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-16">
                    {/* Left Section */}
                    <div className="space-y-5">
                        <div className="text-lg font-bold">
                            <span className="text-brand-primary">College</span>
                            <span className="ml-2 font-semibold">SKILLS</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Welcome to CollegeSkills
                        </p>

                        <div>
                            <p className="text-sm">Contact Us: +91 7349432553</p>
                            <p className="flex items-center gap-2 text-sm mt-2">
                                <Mail size={20} className="text-white" />
                                support@collegeskills.com
                            </p>
                        </div>

                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold mb-3 border-b border-gray-400 w-fit">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-[#FF9E0D] py-1">About Us</Link></li>
                            <li><Link to="/blog" className="hover:text-[#FF9E0D] py-1">Blog</Link></li>
                            <li><Link to="/testimonial" className="hover:text-[#FF9E0D] py-1">Testimonial</Link></li>
                            <li><Link to="/contact" className="hover:text-[#FF9E0D] py-1">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Categories Links */}
                    <div>
                        <h4 className="font-bold mb-3 border-b border-gray-400 w-fit">Categories</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    to="/services/soft-skills"
                                    className="block py-1 text-white hover:text-[#FF9E0D] text-gray-800"
                                >
                                    Soft Skills for Students
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/corporate-training"
                                    className="block py-1 text-white hover:text-[#FF9E0D] text-gray-800"
                                >
                                    Corporate Training
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/b2b"
                                    className="block py-1 text-white hover:text-[#FF9E0D] text-gray-800"
                                >
                                    B2B Outsourcing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/courses/for-colleges"
                                    className="block py-1 text-white hover:text-[#FF9E0D] text-gray-800"
                                >
                                    For Colleges
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/courses/for-corporate"
                                    className="block py-1 text-white hover:text-[#FF9E0D] text-gray-800"
                                >
                                    For Corporates/B2B
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h4 className="font-bold mb-3">Follow Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-2">
                                <Linkedin /> Linkedin
                            </li>
                            <li className="flex items-center gap-2">
                                <Youtube /> Youtube
                            </li>
                            <li className="flex items-center gap-2">
                                <Instagram /> Telegram
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Divider */}
                <hr className="my-8 border-white" />

                {/* Bottom Strip */}
                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
                    <p>© 2025 CollegeSkills. All rights reserved.</p>
                    {/* <div className="flex gap-6 mt-2 md:mt-0"> */}
                        <ul className="text-sm flex gap-6 mt-2 md:mt-0">
                            <li><Link to="/privacy-policy" className="hover:text-[#FF9E0D]">Privacy policy</Link></li>
                            <li><Link to="/terms-conditions" className="hover:text-[#FF9E0D]">Terms and Conditions</Link></li>
                            </ul>
                    {/* </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
