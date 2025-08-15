import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const [activeDropdown, setActiveDropdown] = useState(null); // desktop dropdown
  const [mobileDropdown, setMobileDropdown] = useState(null); // mobile dropdown
  const dropdownRef = useRef(null);

  // Click outside to close dropdown (desktop)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <nav className="px-3 py-4 lg:px-6 bg-brand-background" ref={dropdownRef}>
      <div className="flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className="w-40">
          <Link to="/">
            <img
              src={logo}
              alt="college skills"
              className="object-cover w-full h-12"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden gap-6 font-medium text-gray-800 md:flex">
          <li>
            <Link to="/" className="hover:text-[#FF9E0D]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#FF9E0D]">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-[#FF9E0D]">
              Gallery
            </Link>
          </li>

          {/* Services */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="hover:text-[#FF9E0D] flex items-center"
            >
              Services <ChevronDown size={20} />
            </button>
            {activeDropdown === "services" && (
              <ul className="absolute left-0 z-10 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-52">
                <li>
                  <Link
                    to="/services/skill-for-colleges"
                    className="block px-4 py-2 hover:bg-[#FFF5E1]"
                  >
                    Soft Skills For Colleges
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/skill-for-schools"
                    className="block px-4 py-2 hover:bg-[#FFF5E1]"
                  >
                    Soft Skills For Schools
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/corporate-training"
                    className="block px-4 py-2 hover:bg-[#FFF5E1]"
                  >
                    Corporate Training
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/b2b-outsourcing"
                    className="block px-4 py-2 hover:bg-[#FFF5E1]"
                  >
                    B2B Outsourcing
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Courses */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("courses")}
              className="hover:text-[#FF9E0D] flex items-center"
            >
              Courses <ChevronDown size={20} />
            </button>
            {activeDropdown === "courses" && (
              <ul className="absolute left-0 z-10 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-52">
                <li>
                  <Link
                    to="/course/soft-skills"
                    className="block px-4 py-2 hover:bg-[#FFF5E1]"
                  >
                    Soft Skills for Students
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* Personality Test */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("personality")}
              className="hover:text-[#FF9E0D] flex items-center"
            >
              Personality Test <ChevronDown size={20} />
            </button>
            {activeDropdown === "personality" && (
              <ul className="absolute left-0 z-10 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-52">
                <li>
                  <Link
                    to="/englsih-test"
                    className="block px-4 py-2 hover:bg-[#FFF5E1]"
                  >
                    English Test
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hinglsih-test"
                    className="block px-4 py-2 hover:bg-[#FFF5E1]"
                  >
                    Hinglish Test
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/blog" className="hover:text-[#FF9E0D]">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#FF9E0D]">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:inline-block bg-[#FF9E0D] text-white px-5 py-2 rounded-lg font-medium">
          <Link to="/join-now">Join Now</Link>
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
        <ul className="flex flex-col gap-4 mt-4 font-medium text-gray-800 md:hidden">
          <li>
            <Link to="/" className="hover:text-[#FF9E0D]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#FF9E0D]">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-[#FF9E0D]">
              Gallery
            </Link>
          </li>

          {/* Services */}
          <li>
            <button
              onClick={() => toggleMobileDropdown("services")}
              className="hover:text-[#FF9E0D] flex items-center w-full"
            >
              Services <ChevronDown size={20} />
            </button>
            {mobileDropdown === "services" && (
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/services/skill-for-colleges"
                    className="block hover:text-[#FF9E0D]"
                  >
                    Soft Skills For Colleges
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/skill-for-schools"
                    className="block hover:text-[#FF9E0D]"
                  >
                    Soft Skills For Schools
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/corporate-training"
                    className="block hover:text-[#FF9E0D]"
                  >
                    Corporate Training
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/b2b-outsourcing"
                    className="block hover:text-[#FF9E0D]"
                  >
                    B2B Outsourcing
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Courses */}
          <li>
            <button
              onClick={() => toggleMobileDropdown("courses")}
              className="hover:text-[#FF9E0D] flex items-center w-full"
            >
              Courses <ChevronDown size={20} />
            </button>
            {mobileDropdown === "courses" && (
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/course/soft-skills"
                    className="block hover:text-[#FF9E0D]"
                  >
                    Soft Skills for Students
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Personality Test */}
          <li>
            <button
              onClick={() => toggleMobileDropdown("personality")}
              className="hover:text-[#FF9E0D] flex items-center w-full"
            >
              Personality Test <ChevronDown size={20} />
            </button>
            {mobileDropdown === "personality" && (
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/englsih-test"
                    className="block hover:text-[#FF9E0D]"
                  >
                    English Test
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hinglsih-test"
                    className="block hover:text-[#FF9E0D]"
                  >
                    Hinglish Test
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/blog" className="hover:text-[#FF9E0D]">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#FF9E0D]">
              Contact Us
            </Link>
          </li>

          {/* Mobile Button */}
          <li>
            <Link
              to="/join-now"
              className="inline-block bg-[#FF9E0D] text-white px-5 py-2 rounded-lg font-medium"
            >
              Join Now
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
