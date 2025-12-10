import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Future from "../assets/Future-Banks-Summit-KSA-2023.png"

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const logoVariants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            filter: 'blur(6px)',
        },
        visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                duration: 1.2,
                ease: 'easeOut',
            },
        },
    };

    const logoHover = {
        scale: 1.05,
        transition: { duration: 0.3, ease: 'easeOut' },
    };



    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
        >
            {/* Animated Background Gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl opacity-60" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-4xl mx-auto text-center"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-lg bg-blue-100/60 border border-blue-200/60">
                        <Sparkles size={16} className="text-blue-600" />
                        <span className="text-sm font-medium text-blue-700">
                            Digital Innovations Transforming Banking
                        </span>
                    </div>
                </motion.div>

                {/* Main Heading */}
                {/* <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Future Banks Summit 2023
                    </span>
                </motion.h1> */}
                {/* future logo */}
                <motion.div
                    variants={logoVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={logoHover}
                    className="flex justify-center mb-8 cursor-pointer"
                >
                    <img
                        src={Future}
                        alt="Future Banks Summit 2023 Logo"
                        className="max-h-24 md:max-h-32 w-auto object-contain"
                    />
                </motion.div>


                {/* Subheading */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                    The 4th Annual Summit showcasing the latest innovations and practical case studies guiding the banking sector in KSA towards digital transformation and financial innovation.
                </motion.p>

                {/* Event Details */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
                >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-lg bg-blue-100/60 border border-blue-200/60">
                        <span className="text-gray-800 text-sm font-medium">📅 September 11-12, 2023</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-lg bg-blue-100/60 border border-blue-200/60">
                        <span className="text-gray-800 text-sm font-medium">📍 Riyadh Marriott Hotel</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-lg bg-blue-100/60 border border-blue-200/60">
                        <span className="text-gray-800 text-sm font-medium">🎟️ In-Person Event</span>
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-blue-600/40 transition-shadow duration-300"
                    >
                        Register Now <ArrowRight size={20} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-lg backdrop-blur-xl bg-white/50 border-2 border-white/70 text-gray-700 font-semibold hover:bg-white/60 hover:border-blue-300/60 transition-all duration-300"
                    >
                        Learn More
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
