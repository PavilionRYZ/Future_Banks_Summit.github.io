import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Lock, DollarSign, Users, Globe } from 'lucide-react';

const TopicsSection = () => {
    const topics = [
        {
            icon: Lightbulb,
            title: 'Vision 2030',
            description: 'Emergence of the Kingdom as a global financial leader',
            color: 'from-yellow-400 to-orange-400',
        },
        {
            icon: TrendingUp,
            title: 'Digital Transformation',
            description: 'The foundational platform for achieving business agility',
            color: 'from-blue-400 to-cyan-400',
        },
        {
            icon: DollarSign,
            title: 'Digital Payments',
            description: 'Payments today & tomorrow - The future of digital payments',
            color: 'from-green-400 to-emerald-400',
        },
        {
            icon: Users,
            title: 'Customer Experience',
            description: 'Providing a next-gen seamless banking customer experience',
            color: 'from-purple-400 to-pink-400',
        },
        {
            icon: Lock,
            title: 'Cyber Security',
            description: 'Advanced security measures protecting digital infrastructure',
            color: 'from-red-400 to-rose-400',
        },
        {
            icon: Globe,
            title: 'Open Banking',
            description: 'Bringing legacy banks and fintechs together for innovation',
            color: 'from-indigo-400 to-blue-400',
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
            {/* Background elements */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl opacity-60" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Key Topics
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">Exploring the most pressing issues in banking transformation</p>
                </motion.div>

                {/* Topics Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {topics.map((topic, index) => {
                        const Icon = topic.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                className="group relative"
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Card */}
                                <div className="relative backdrop-blur-xl bg-white/50 border-2 border-white/70 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:border-blue-300/60 hover:bg-white/60">
                                    {/* Icon */}
                                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${topic.color} text-white mb-4 shadow-md`}>
                                        <Icon size={24} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{topic.title}</h3>
                                    <p className="text-gray-700 text-sm">{topic.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default TopicsSection;
