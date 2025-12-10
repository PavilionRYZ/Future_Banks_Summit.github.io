import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Zap } from 'lucide-react';

const AboutSection = () => {
    const highlights = [
        {
            icon: CheckCircle2,
            title: 'Industry Leaders',
            description: 'Learn from globally and regionally renowned speakers and panelists',
        },
        {
            icon: Target,
            title: 'Solution-Oriented',
            description: 'Network with CIOs, CTOs, and digital transformation leaders',
        },
        {
            icon: Zap,
            title: 'Innovation Focused',
            description: 'Explore cutting-edge banking technologies and digital solutions',
        },
    ];

    return (
        <section id="about" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Subtle background gradient elements */}
            <div className="absolute top-20 -right-32 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 -left-32 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <div className="inline-block mb-4 px-4 py-2 rounded-full backdrop-blur-lg bg-gradient-to-r from-blue-100/60 to-purple-100/60 border border-blue-200/60">
                            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                About The Summit
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Banking's Digital Future
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                            The banking industry worldwide is undergoing phenomenal change. The 4th Annual Future Banks Summit showcases the latest innovations and practical case studies designed to guide the banking sector in KSA in identifying the right strategies to overcome resistance and be future-ready. Join us for power-packed presentations, panel discussions, and keynotes from globally and regionally renowned experts.
                        </p>

                        {/* Highlights */}
                        <div className="space-y-4">
                            {highlights.map((highlight, index) => {
                                const Icon = highlight.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <Icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">{highlight.title}</h3>
                                            <p className="text-gray-600 text-sm">{highlight.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Visual - Glassmorphic Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        {/* Glow background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Glassmorphic Card */}
                        <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/70 via-white/60 to-gray-50/60 border border-white/60 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-white/80">
                            {/* Card inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative space-y-6">
                                {['Expert Panels', 'Live Case Studies', 'Networking Sessions', 'AI & Automation', 'Open Banking', 'Digital Payments'].map(
                                    (item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.08 }}
                                            whileHover={{ x: 5 }}
                                            className="group/item flex items-center gap-4 px-6 py-4 rounded-xl backdrop-blur-lg bg-gradient-to-r from-blue-50/70 to-purple-50/70 border border-blue-200/40 hover:border-blue-300/60 hover:shadow-md transition-all duration-300"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover/item:scale-150 transition-transform duration-300" />
                                            <span className="text-gray-800 font-medium group-hover/item:text-blue-600 transition-colors duration-300">
                                                {item}
                                            </span>
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
