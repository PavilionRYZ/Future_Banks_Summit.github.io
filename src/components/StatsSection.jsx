import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Globe, TrendingUp } from 'lucide-react';

const StatsSection = () => {
    const stats = [
        {
            icon: Users,
            value: '500+',
            label: 'Banking Leaders',
            color: 'from-blue-500 to-blue-600',
        },
        {
            icon: Briefcase,
            value: '50+',
            label: 'Expert Speakers',
            color: 'from-purple-500 to-purple-600',
        },
        {
            icon: Globe,
            value: '15+',
            label: 'Key Topics',
            color: 'from-pink-500 to-pink-600',
        },
        {
            icon: TrendingUp,
            value: 'Vision 2030',
            label: 'Aligned Goals',
            color: 'from-cyan-500 to-cyan-600',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl -z-10 opacity-60" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/25 rounded-full blur-3xl -z-10 opacity-60" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            By The Numbers
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">Building the future of banking in Saudi Arabia</p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                                className="relative group"
                            >
                                {/* Glassmorphic Card */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/60 to-white/40 border border-white/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-white/80">
                                    {/* Icon */}
                                    <div
                                        className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} text-white mb-4 shadow-md`}
                                    >
                                        <Icon size={24} />
                                    </div>

                                    {/* Value */}
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>

                                    {/* Label */}
                                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;
