import React, { useRef, useState, useMemo, useEffect } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import video1 from "../assets/video/video.mp4";
import { AnimatePresence, motion } from "framer-motion";
import { X, Filter, Images } from "lucide-react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import group1 from "../assets/gallery/group1.jpg";
import group2 from "../assets/gallery/group2.jpeg";
import group3 from "../assets/gallery/group2.JPG";
import group4 from "../assets/gallery/group3.jpg";
import group5 from "../assets/gallery/group4.JPG";
import class13 from "../assets/gallery/class.jpg";
import class1 from "../assets/gallery/class2.jpeg";
import class2 from "../assets/gallery/class3.jpg";
import class3 from "../assets/gallery/class4.jpg";
import class4 from "../assets/gallery/class5.jpg";
import class5 from "../assets/gallery/class6.jpg";
import class6 from "../assets/gallery/class8.jpg";
import class7 from "../assets/gallery/class9.jpg";
import class8 from "../assets/gallery/class10.jpg";
import class9 from "../assets/gallery/class11.jpg";
import class10 from "../assets/gallery/class12.jpg";
import class11 from "../assets/gallery/class13.jpg";
import class12 from "../assets/gallery/class14.jpg";
import activity from "../assets/gallery/activity.jpeg";
import activity2 from "../assets/gallery/activity.jpg";
import activity3 from "../assets/gallery/activity2.jpeg";
import activity4 from "../assets/gallery/activity3.jpeg";
import activity5 from "../assets/gallery/activity4.jpeg";
import activity6 from "../assets/gallery/activity5.jpeg";
import activity7 from "../assets/gallery/activity6.jpeg";
import activity8 from "../assets/gallery/activity7.jpg";

const customers = [
  {
    id: 1,
    name: "Emily Manchaster",
    role: "COO, Prime Inc.",
    video: video1,
    avatar:
      "https://images.pexels.com/photos/5642024/pexels-photo-5642024.jpeg",
  },
  {
    id: 2,
    name: "Emily Manchaster",
    role: "COO, Prime Inc.",
    video: video1,
    avatar:
      "https://images.pexels.com/photos/5642024/pexels-photo-5642024.jpeg",
  },
  {
    id: 3,
    name: "Emily Manchaster",
    role: "COO, Prime Inc.",
    video: video1,
    avatar:
      "https://images.pexels.com/photos/5642024/pexels-photo-5642024.jpeg",
  },
  {
    id: 4,
    name: "Emily Manchaster",
    role: "COO, Prime Inc.",
    video: video1,
    avatar:
      "https://images.pexels.com/photos/5642024/pexels-photo-5642024.jpeg",
  },
  {
    id: 5,
    name: "Emily Manchaster",
    role: "COO, Prime Inc.",
    video: video1,
    avatar:
      "https://images.pexels.com/photos/5642024/pexels-photo-5642024.jpeg",
  },
  {
    id: 6,
    name: "Emily Manchaster",
    role: "COO, Prime Inc.",
    video: video1,
    avatar:
      "https://images.pexels.com/photos/5642024/pexels-photo-5642024.jpeg",
  },
];

const Gallery = () => {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const categories = ["All", "Activity", "Group", "Class"];

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handlePlay = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
      video.controls = true;
      setPlayingIndex(index);
    }
  };

  const gelleryImages = useMemo(
    () => [
      {
        id: "img-1",
        src: group1,
        title: "Sunrise Run",
        category: "Group",
      },
      {
        id: "img-2",
        src: class13,
        title: "Team Huddle",
        category: "Class",
      },
      {
        id: "img-3",
        src: class2,
        title: "Guest Lecture",
        category: "Class",
      },
      {
        id: "img-4",
        src: group2,
        title: "Workshop Day",
        category: "Group",
      },
      {
        id: "img-5",
        src: class1,
        title: "Outdoor Games",
        category: "Class",
      },
      {
        id: "img-6",
        src: group3,
        title: "Project Group",
        category: "Group",
      },
      {
        id: "img-7",
        src: group4,
        title: "Coding Lecture",
        category: "Group",
      },
      {
        id: "img-8",
        src: group5,
        title: "Yoga Morning",
        category: "Group",
      },
      {
        id: "img-9",
        src: activity3,
        title: "Club Meet",
        category: "Activity",
      },
      {
        id: "img-10",
        src: class9,
        title: "Club Meet",
        category: "Class",
      },
      {
        id: "img-11",
        src: class3,
        title: "Club Meet",
        category: "Class",
      },
      {
        id: "img-12",
        src: class8,
        title: "Club Meet",
        category: "Class",
      },
      {
        id: "img-13",
        src: activity,
        title: "Club Meet",
        category: "Activity",
      },
      {
        id: "img-14",
        src: class7,
        title: "Club Meet",
        category: "Class",
      },
      {
        id: "img-15",
        src: activity2,
        title: "Club Meet",
        category: "Class",
      },
      {
        id: "img-16",
        src: class6,
        title: "Club Meet",
        category: "Class",
      },
      {
        id: "img-17",
        src: class3,
        title: "Club Meet",
        category: "Class",
      },
      {
        id: "img-18",
        src: class5,
        title: "Club Meet",
        category: "Class",
      },
      {
        id: "img-19",
        src: activity5,
        title: "Club Meet",
        category: "Activity",
      },
      {
        id: "img-20",
        src: class11,
        title: "Club Meet",
        category: "Class",
      },

      {
        id: "img-21",
        src: activity5,
        title: "Club Meet",
        category: "Activity",
      },
      {
        id: "img-22",
        src: activity6,
        title: "Club Meet",
        category: "Activity",
      },
      {
        id: "img-23",
        src: activity4,
        title: "Club Meet",
        category: "Activity",
      },
      {
        id: "img-24",
        src: class4,
        title: "Club Meet",
        category: "Class",
      },
      {
        id: "img-25",
        src: activity7,
        title: "Club Meet",
        category: "Activity",
      },
      {
        id: "img-26",
        src: activity8,
        title: "Club Meet",
        category: "Activity",
      },
      {
        id: "img-27",
        src: class10,
        title: "Club Meet",
        category: "Class",
      },
      {
        id: "img-28",
        src: class12,
        title: "Club Meet",
        category: "Class",
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    if (active === "All") return gelleryImages;
    return gelleryImages.filter((img) => img.category === active);
  }, [active, gelleryImages]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll while modal open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selected]);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen px-4 py-10 md:py-14">
        {/* Header */}
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center w-10 h-10 text-white shadow-lg rounded-2xl bg-brand-primary">
                <Images className="w-5 h-5" />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight md:text-4xl font-oswald">
                Our Gallery
                <span className="ml-2 inline-block font-sans rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-700 align-middle">
                  College Skills
                </span>
              </h1>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="items-center hidden gap-2 px-3 py-2 mr-1 text-orange-500 border border-orange-200 rounded-xl md:flex">
                <Filter className="w-4 h-4" />
                <span className="text-sm">Filters</span>
              </div>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-200 shadow-sm focus:outline-none ${
                    active === c
                      ? "border-none bg-brand-primary text-white hover:bg-brand-primary"
                      : "border border-orange-200 bg-white text-black hover:border-orange-300 hover:bg-orange-50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filtered.map((img) => (
                <motion.button
                  key={img.id}
                  layout
                  onClick={() => setSelected(img)}
                  className="relative overflow-hidden bg-white border shadow-sm group rounded-2xl border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.img
                    src={img.src}
                    alt={img.title}
                    className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                    layoutId={`image-${img.id}`}
                  />

                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-full bg-white/90 text-slate-700 backdrop-blur">
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full" />
                      {img.category}
                    </div>
                    {/* <p className="mt-2 text-sm font-semibold text-left text-white line-clamp-1 drop-shadow">
                      {img.title}
                    </p> */}
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              key="overlay"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              {/* Stop close when clicking the content */}
              <motion.div
                className="relative max-h-[90vh] w-[92vw] max-w-5xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
                initial={{ scale: 0.95, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.97, opacity: 0 }}
                transition={{ type: "spring", stiffness: 250, damping: 22 }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={selected.src}
                  alt={selected.title}
                  className="max-h-[80vh] w-full object-contain bg-black"
                  layoutId={`image-${selected.id}`}
                />

                {/* Top Bar */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3 pointer-events-none">
                  <div className="px-3 py-1 text-xs font-semibold rounded-full pointer-events-auto bg-white/90 text-slate-700 backdrop-blur">
                    {selected.category}
                  </div>
                  <button
                    aria-label="Close"
                    onClick={() => setSelected(null)}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full shadow pointer-events-auto bg-white/90 text-slate-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/60"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <p className="text-sm font-medium text-white drop-shadow">
                    {selected.title}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* // video Section */}
      <section className="relative px-4 py-10 mx-auto max-w-7xl focus:outline-none ">
        <h2 className="mb-1 text-lg font-medium text-brand-primary">
          Curious how people are using ApertureUI?
        </h2>
        <h1 className="mb-6 text-4xl font-bold ">
          Hear what our customers are saying
        </h1>

        {/* Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 hidden p-2 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 md:block"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 hidden p-2 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 md:block"
        >
          <FaChevronRight />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth focus:outline-none"
          tabIndex={-1}
        >
          {customers.map((customer, index) => (
            <div
              key={customer.id}
              className="flex-shrink-0 w-64 overflow-hidden bg-white shadow-md rounded-xl"
            >
              {/* Video container */}
              <div className="relative w-full bg-gray-200 h-80">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={customer.video}
                  className="object-cover w-full h-full"
                  preload="metadata"
                />

                {playingIndex !== index && (
                  <div
                    onClick={() => handlePlay(index)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30"
                  >
                    <FaPlay className="text-2xl text-white" />
                  </div>
                )}
              </div>

              {/* User info */}
              <div className="flex items-center gap-3 p-4">
                <img
                  src={customer.avatar}
                  alt={customer.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="text-sm font-semibold">{customer.name}</h3>
                  <p className="text-xs text-gray-500">{customer.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Gallery;
