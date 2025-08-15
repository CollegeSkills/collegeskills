// components/StatsSection.jsx
import { motion } from "framer-motion";

const stats = [
    { value: "10+", label: "Courses on the Platform" },
    { value: "20+", label: "Mentors from the Industry" },
    { value: "5000+", label: "Youth Transformed" },
    { value: "55%", label: "Average Salary Hike" },
];

const StatsSection = () => {
    return (
        <div className="px-6 py-10 mt-10 lg:mt-0 bg-brand-background lg:py-0 lg:mb-10 md:px-16 lg:relative -top-10">
            <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-4 max-w-7xl">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="p-6 text-center border rounded-lg bg-orange-300/10 backdrop-blur-md text-brand-text border-orange-400/20"
                    >
                        <div className="mb-2 text-4xl font-bold text-brand-primary">{stat.value}</div>
                        <div className="text-sm text-brand-text">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
