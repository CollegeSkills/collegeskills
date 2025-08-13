import React from "react";
import { ArrowUpRight, Eye, Gem, Target } from "lucide-react";
import image from "../../assets/12.png";
import { Link } from "react-router-dom";

const ApproachSection = () => {
  return (
    <section className="mx-auto mt-10 lg:mt-20 max-w-7xl">
      {/* Heading */}
      <p className="font-semibold text-brand-primary">
       OUR APPROACH
      </p>

      <h2 className="mt-2 text-2xl font-bold leading-tight text-gray-900 md:text-5xl">
        Empowering growth through
        <br />
        <span className="text-transparent bg-clip-text bg-brand-primary">
          practical skill training
        </span>
      </h2>

      {/* Paragraph */}
      <p className="mt-4 text-gray-600 ">
        At the heart of our learning philosophy is a commitment to equipping
        students and professionals with real-world skills that make them hired,
        promoted, and respected. We deliver training that is directly aligned
        with industry needs and future opportunities.
      </p>

      {/* Cards */}
      <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3 ">
        {/* Mission Card */}
        <div className="p-6 bg-white border border-orange-100 shadow-sm rounded-xl bg-gradient-to-tr from-orange-100 to-orange-50">
          <div className="flex items-center justify-center w-12 h-12 mb-4 bg-orange-200 rounded-lg">
            <Target className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-gray-900">Our Mission</h3>
          <p className="text-sm text-gray-600">
            At College Skills, we help you learn skills that get you hired and
            promoted.
          </p>
          <p className="text-sm text-gray-600">
            We bridge the gap between education and real-world success.
          </p>
          <p className="text-sm text-gray-600">
            Our goal is to prepare you to confidently stand out and grow in your
            career.
          </p>
        </div>

        {/* Vision Card */}
        <div className="p-6 bg-white border border-orange-100 shadow-sm rounded-xl bg-gradient-to-tr from-orange-100 to-orange-50">
          <div className="flex items-center justify-center w-12 h-12 mb-4 bg-orange-200 rounded-lg">
            <Eye className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-gray-900">Our Vision</h3>
          <p className="text-sm text-gray-600">
            We aim to empower every student and professional in India to reach
            their full potential.
          </p>
          <p className="text-sm text-gray-600">
            We want learning to go beyond books and focus on real, practical
            skills.
          </p>
          <p className="text-sm text-gray-600">
            Our vision is a future with confident leaders who drive positive
            change.
          </p>
        </div>

        {/* Value Card */}
        <div className="p-6 border border-orange-100 shadow-sm rounded-xl bg-gradient-to-tr from-orange-100 to-orange-50">
          <div className="flex items-center justify-center w-12 h-12 mb-4 bg-orange-200 rounded-lg">
            <Gem className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="mb-2 text-lg font-bold text-gray-900">
            Our Core Value
          </h3>
          <ul className="space-y-1 text-sm text-gray-600 list-inside">
            <li>Practical learning that leads to real job success.</li>
            <li>Student-focused courses tailored to career goals.</li>
            <li>Continuous growth and lifelong learning mindset.</li>
            <li>Innovation with AI and modern technology.</li>
            <li>Integrity and delivering honest, quality training.</li>
            <li>Empowering you to invest in yourself confidently.</li>
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10">
        <Link to="/join-now">
          <button className="flex items-center px-8 py-3 text-white transition rounded-full bg-brand-primary hover:opacity-90">
            Join Now <ArrowUpRight className="inline w-6 h-6 ml-2" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ApproachSection;
