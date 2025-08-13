import { Instagram, Linkedin, Mail, Map, MapPin, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "../Whatsapp";

const Footer = () => {
  return (
    <>
 
      <footer className="px-4 pt-12 pb-6 text-white bg-black md:px-10">
        {/* Top content */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-4">
            {/* Left Section */}
            <div className="space-y-5">
              <div className="text-lg font-bold">
                 <Link to='/'> <span className="text-brand-primary">COLLEGE</span>
                <span className="ml-2 font-semibold">SKILLS</span></Link>
              </div>
              <p className="text-sm leading-relaxed">
                Welcome to CollegeSkills
              </p>

              <div>
                <p className="text-sm">Contact Us: +91 7349432553</p>
                <p className="flex items-center gap-2 mt-2 text-sm">
                  <Mail size={20} className="text-white" />
                  support@collegeskills.com
                </p>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="mb-3 font-bold border-b border-gray-400 w-fit">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="hover:text-[#FF9E0D] py-1">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-[#FF9E0D] py-1">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/testimonial" className="hover:text-[#FF9E0D] py-1">
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#FF9E0D] py-1">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-[#FF9E0D] lg:hidden block">
                    Privacy policy
                  </Link>
                </li>
                 <li>
                  <Link to="/return-policy" className="hover:text-[#FF9E0D] lg:hidden block">
                   Return Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="hover:text-[#FF9E0D] lg:hidden block">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories Links */}
            <div>
              <h4 className="mb-3 font-bold border-b border-gray-400 w-fit">
                Categories
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/services/soft-skills"
                    className="block py-1 text-white hover:text-[#FF9E0D]"
                  >
                    Soft Skills for Students
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/corporate-training"
                    className="block py-1 text-white hover:text-[#FF9E0D]"
                  >
                    Corporate Training
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/b2b"
                    className="block py-1 text-white hover:text-[#FF9E0D]"
                  >
                    B2B Outsourcing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/for-colleges"
                    className="block py-1 text-white hover:text-[#FF9E0D]"
                  >
                    For Colleges
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses/for-corporate"
                    className="block py-1 text-white hover:text-[#FF9E0D]"
                  >
                    For Corporates/B2B
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="mb-3 font-bold">Follow Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2">
                  <Link
                    to={`https://www.linkedin.com/company/college-skills/posts/?feedView=all`}
                    className="flex items-center gap-2"
                  >
                    <Linkedin /> Linkedin
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Link
                    to={`https://www.youtube.com/@er.khalidtalks`}
                    className="flex items-center gap-2"
                  >
                    <Youtube /> Youtube
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Link
                    to={`https://www.instagram.com/collegeskills.in/?hl=en`}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    <Instagram /> Instagram{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Divider */}
          <hr className="my-8 border-white" />

          {/* Bottom Strip */}
          <div className="flex flex-col items-center justify-between w-full text-sm text-gray-300 md:flex-row">
            <p className="">
              © 2025 CollegeSkills. All rights reserved.
            </p>
            {/* <div className="flex gap-6 mt-2 md:mt-0"> */}
            <div className="hidden lg:block">
              <ul className="flex gap-6 mt-2 text-sm md:mt-0 lg:order-2">
                <li>
                  <Link to="/privacy-policy" className="hover:text-[#FF9E0D]">
                    Privacy policy
                  </Link>
                </li>
                 <li>
                  <Link to="/return-policy" className="hover:text-[#FF9E0D]">
                   Return Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="hover:text-[#FF9E0D]">
                    Terms and Conditions
                  </Link>
                </li>
                
              </ul>
            </div>

            {/* </div> */}
          </div>
        </div>
      </footer>
      <WhatsAppIcon/>
    </>
  );
};

export default Footer;
