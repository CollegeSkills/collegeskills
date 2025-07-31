// components/StatsSection.jsx
import { motion } from "framer-motion";

const stats = [
    { value: "600+", label: "Courses on the Platform" },
    { value: "20+", label: "Mentors from the Industry" },
    { value: "100+", label: "Students placed successfully" },
    { value: "55%", label: "Average Salary Hike" },
];

const StatsSection = () => {
    return (
        <div className="bg-brand-background py-10 lg:py-20 px-6 md:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-orange-300/10 backdrop-blur-md rounded-lg p-6 text-center text-brand-text border border-orange-400/20"
                    >
                        <div className="text-4xl font-bold mb-2 text-brand-primary">{stat.value}</div>
                        <div className="text-sm text-brand-text">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
