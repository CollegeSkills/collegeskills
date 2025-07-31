import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import girlImage from "../assets/hero.png";
import { motion } from "framer-motion";
import {
    ArrowUpRight, CalendarRange, Mail, Play, Code,
    CheckCircle2,
    ShieldCheck,
    TrendingUp,
    Paperclip,
    Settings
} from 'lucide-react';
import student from '../assets/student.webp'
import StatsSection from '../Components/State/State';
import { Link } from 'react-router-dom';
import teamImage from '../assets/team.jpg';
import Testimonial from '../Components/Testimonial/Testimonial';
import Blog from '../Components/Blog/Blog';
import FAQs from '../Components/Faq/Faq';
import Footer from '../Components/Footer.jsx/Footer';
import Pricing from '../Components/Pricing/Pricing';
import VideoPopup from '../Components/VideoPopup/VideoPopup';
import Partners from '../Components/Partners/Partners';

function Home() {

    const boxes = [
        {
            icon: <Paperclip className="w-12 h-12 text-white bg-gradient-to-tr to-brand-primary from-amber-400 p-1 rounded-full" />,
            title: "Assesment",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quibusdam nemo possimus"
        },
        {
            icon: <Settings className="w-12 h-12 text-white bg-gradient-to-tr to-brand-primary from-amber-400 p-1 rounded-full" />,
            title: "Goal Setting",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quibusdam nemo possimus"
        },
        {
            icon: <ShieldCheck className="w-12 h-12 text-white bg-gradient-to-tr to-brand-primary from-amber-400 p-1 rounded-full" />,
            title: "Coaching Session",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quibusdam nemo possimus"
        },
        {
            icon: <TrendingUp className="w-12 h-12 text-white bg-gradient-to-tr to-brand-primary from-amber-400 p-1 rounded-full" />,
            title: "Ongoing Support",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quibusdam nemo possimus"
        }
    ];
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6 }
        })
    };
    return (
        <>
            <title>Welcom College Skill</title>
            <Navbar />
            {/* Hero section  */}
            <section className="bg-brand-background lg:px-16 px-10 py-10 grid md:grid-cols-2 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-brand-text font-oswald">
                        <span className="text-brand-primary">Studying</span> Online Is Now <br />
                        Much Easier
                    </h1>
                    <p className="text-brand-text font-barlow ">
                        Skilline is an interesting platform that will teach you in a more
                        interactive way
                    </p>
                    <div className="flex items-center gap-4">
                        <button className="bg-[#FF9E0D] text-white px-6 py-3 rounded-full font-semibold">
                            Join For Free
                        </button>
                        {/* <Play size={50} className='flex bg-white p-2 text-brand-primary rounded-full' /> */}
                        <VideoPopup/>
                    </div>
                </div>

                <div className="relative mt-12 md:mt-0">
                    <img
                        src={girlImage}
                        alt="student"
                        className="w-full max-w-sm mx-auto"
                    />

                    <div className="absolute top-6 left-2 bg-gradient-to-tr to-white/10 from-white rounded-xl shadow-lg px-4 py-3 lg:flex gap-2 hidden">
                        <CalendarRange size={30} className='bg-blue-400 text-white p-1 rounded-lg' />
                        <div>
                            <h4 className="text-[16px] font-semibold">250k</h4>
                            <p className="text-[16px] text-gray-500">Assisted Student</p>
                        </div>
                    </div>

                    <div className="absolute bottom-16 left-0 bg-gradient-to-tr to-white/10 from-white rounded-xl shadow-lg px-4 py-4 lg:flex hidden gap-2 items-center">
                        <img src={student} alt="" className="w-8 h-8 rounded-full" />
                        <div>
                            <p className="text-sm font-medium">User Experience Class</p>
                            <p className="text-xs text-gray-500">Today at 12.00 PM</p>
                        </div>
                        <button className="ml-4 bg-[#FF9E0D] text-white px-3 py-1 rounded-full text-sm">
                            Join Now
                        </button>
                    </div>

                    <div className="absolute bottom-6 right-0 bg-gradient-to-tr to-white/10 from-white rounded-xl shadow-lg px-4 py-4 lg:flex hidden gap-2 items-center">
                        <Mail size={30} className='bg-orange-400 text-white p-1 rounded-lg' />
                        <div>
                            <p className="text-sm font-medium">Congratulations</p>
                            <p className="text-xs text-gray-500">Your admission completed</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Counts State  */}
            <StatsSection />
            {/* Partners */}
            <Partners/>
            {/* Who we Are */}
            <section className="py-16 px-6 md:px-12 pb-20 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <p className="text-sm font-semibold text-brand-primary">// WHO WE ARE</p>
                        <h2 className="text-4xl md:text-6xl font-medium mt-4 leading-tight text-gray-800 font-oswald">
                            Unlock your potential <span className="text-brand-primary">with our expertise</span>
                        </h2>
                        <p className="text-gray-600 mt-6">
                            Choosing us means partnering with experienced coaches who are dedicated to unlocking your potential.
                            We offer personalized strategies, proven methods, and unwavering support to help you navigate challenges.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-8 mt-10">
                            <div className="text-center">
                                <div className="w-24 h-24 rounded-full border-2 border-brand-primary flex items-center justify-center text-2xl font-bold">
                                    98%
                                </div>
                                <p className="mt-2 text-gray-700 font-medium">Satisfied Customers</p>
                            </div>
                            <div className="text-center">
                                <div className="w-24 h-24 rounded-full border-2 border-brand-primary flex items-center justify-center text-2xl font-bold">
                                    20K
                                </div>
                                <p className="mt-2 text-gray-700 font-medium">Projects Completed</p>
                            </div>
                        </div>

                        <hr className="my-8 border-gray-300" />

                        {/* Bottom Info */}
                        <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-4">Certified And Experienced Coaching Professionals</h4>
                            <p className="text-gray-600 mb-2">
                                Our team consists of highly trained and certified coaches who stay up-to-date with the latest coaching practices.
                            </p>
                            <ul className="space-y-2 mt-4 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-brand-primary w-5 h-5 mt-1" />
                                    Continuous Support and Accountability
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-brand-primary w-5 h-5 mt-1" />
                                    Results-Driven Methods That Deliver Lasting Change
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <img
                            src={teamImage}
                            alt="Team working"
                            className="rounded-2xl shadow-md w-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>
            {/* How We Work */}
            <section className='max-w-full px-10 lg:px-16 mt-10'>
                <h4 className='text-brand-primary'>// How We Work</h4>
                <div className="w-full flex flex-col md:flex-row py-6 md:py-10 justify-between items-center gap-4">
                    <h2 className='text-4xl md:text-6xl text-brand-text font-oswald font-medium'>
                        Step by step process for <br />
                        <span className='text-brand-primary block mt-2'>achieving success</span>
                    </h2>
                    <Link to='/contact' className='flex justify-center items-center font-medium text-brand-background border bg-brand-primary border-brand-primary px-4 py-2 rounded-md mt-4 md:mt-0'>
                        Contact Us <ArrowUpRight className="ml-2" />
                    </Link>
                </div>
            </section>
            {/* How We Work cards */}
            <section className="py-7 px-4 md:px-8">
                <div className="max-w-full text-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {boxes.map((box, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                className="bg-white p-6 rounded-2xl text-left"
                            >
                                <div className="mb-4 flex">{box.icon}</div>
                                <p className='border-t border-gray-400 pb-3'></p>
                                <h3 className="text-xl font-semibold mb-2">{box.title}</h3>
                                <p className="text-gray-600 text-sm">{box.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
              <Pricing/>
            {/* Testimonial */}
            <Testimonial />
            {/* Blog */}
            <Blog/>
            <FAQs/>
              <Footer/>
        </>
    )
}

export default Home



