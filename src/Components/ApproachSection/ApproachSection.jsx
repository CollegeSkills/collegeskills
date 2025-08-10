import React from "react";
import { ArrowUpRight, Eye, Gem, Target } from "lucide-react";
import image from '../../assets/12.png'
import { Link } from "react-router-dom";

const ApproachSection = () => {
  return (
    <section className="px-10">
      <div className="grid items-center max-w-full gap-12 px-6 mx-auto lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <p className="font-semibold text-brand-primary">// OUR APPROACH</p>
          <h2 className="mt-2 text-3xl font-bold leading-snug md:text-4xl">
            Empowering growth through{" "}
            <span className="text-orange-500">personalized guidance</span>
          </h2>
          <p className="mt-4 text-gray-600">
            At the heart of our coaching philosophy is a commitment to empowering
            individuals and businesses to reach their fullest potential. We
            provide personalized, one-on-one guidance tailored to your unique
            goals and challenges.
          </p>

          {/* Mission and Vision */}
          <div className="grid gap-8 mt-8 md:grid-cols-2">
            <div className="flex gap-2">
              <div className="p-3">
                <Target className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Our Mission</h3>
                <p className="text-sm text-gray-600">
                  Our mission is to inspire and equip individuals and businesses
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="p-3 rounded-full">
                <Eye className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Our Vision</h3>
                <p className="text-sm text-gray-600">
                  Our vision is to drive innovation for a brighter, sustainable
                  future.
                </p>
              </div>
            </div>
          </div>

          {/* Value */}
          <div className="flex gap-2 mt-8">
            <div className="p-3">
              <Gem className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Our Value</h3>
              <p className="text-sm text-gray-600">
                Our values are rooted in integrity, empathy, and empowerment. We
                are committed to creating a supportive.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-wrap gap-4 mt-8">
             <Link to='/join-now'>
            <button className="px-8 py-3 text-white transition rounded-full bg-brand-primary hover:opacity-90">
            Join Now  <ArrowUpRight className="inline w-6 h-6 ml-1" /> 
            </button>
            </Link> 
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={image}
            alt="Business meeting"
            className="object-cover w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
