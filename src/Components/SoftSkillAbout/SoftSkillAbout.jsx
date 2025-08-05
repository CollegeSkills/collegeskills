import { Download } from "lucide-react";
import FeatureItem from "./FeatureItem";
const SoftSkillsAbout = ({ title, description, features, image }) => {
  return (
    <section className="px-4 py-24 bg-white pb-7 md:px-12 ">
      <div className="grid w-full gap-12 md:grid-cols-2">
        {/* Left Column */}
        <div>
          <h2 className="mb-4 text-5xl font-bold text-gray-900 font-oswald">{title}</h2>
          <p className="mb-8 text-gray-600">{description}</p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
               <button className="flex justify-between gap-2 px-6 py-3 mt-12 text-lg font-semibold text-white uppercase rounded-lg bg-brand-primary font-barlow">Download Pdf <Download/> </button>
        </div>

        {/* Right Column */}
        <div className="w-full">
          <img
            src={image}
            alt="About course"
            className="object-cover w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsAbout;
