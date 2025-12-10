import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const SpeakersSection = () => {
    const speakers = [
        {
            name: 'Ahmed Alenazi',
            role: 'CEO',
            company: 'Barq',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIeI7Xr4bmQEFVp3frmh_F3RKpMKC7ciLSRA&s',
            expertise: 'FinTech Innovation',
        },
        {
            name: 'Naif Alharbi',
            role: 'Chief Information Officer',
            company: 'Arab National Bank',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwg8ScROgMNzcx1YU4SVm2n0rSVM8MHbIJw&s',
            expertise: 'Digital Banking',
        },
        {
            name: 'Faris AlHoshan',
            role: 'Digital Banking & CX Leader',
            company: 'Regional Bank',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMqY_JNj2Ly4FQZV7rBxD-JJ3w4QDsDlXfQ&s',
            expertise: 'Customer Experience',
        },
        {
            name: 'Ridwan Asad',
            role: 'Director, Digital & AI',
            company: 'Tawuniya',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMlF_C4Enckt5KFMsJkNMd68JmrYBF4BbNZA&s',
            expertise: 'Digital Transformation',
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="speakers" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Background blur elements */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/40 rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300/40 rounded-full blur-3xl opacity-60" />

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
                            Meet The Speakers
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">Industry pioneers shaping banking's digital future</p>
                </motion.div>

                {/* Speakers Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group"
                        >
                            {/* Glassmorphic Card */}
                            <div className="relative h-full backdrop-blur-xl bg-white/40 border-2 border-white/80 rounded-2xl p-6 shadow-2xl hover:shadow-2xl transition-all duration-300 hover:border-blue-300/60 hover:bg-white/50">
                                {/* Inner glow layer */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Frosted glass effect border */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-200/20 to-purple-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20" />

                                {/* Avatar Image Container */}
                                <div className="mb-4 h-48 rounded-xl overflow-hidden relative border border-white/60 shadow-lg">
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{speaker.name}</h3>
                                    <p className="text-sm text-blue-600 font-semibold mb-2">{speaker.role}</p>
                                    <p className="text-xs text-gray-700 mb-4 font-medium">{speaker.company}</p>

                                    {/* Expertise Tag - Glassmorphic */}
                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-lg bg-gradient-to-r from-blue-200/50 to-purple-200/50 border border-blue-300/60 shadow-md group-hover:from-blue-300/60 group-hover:to-purple-300/60 group-hover:border-blue-400/80 transition-all duration-300">
                                        <Star size={14} className="text-amber-600 flex-shrink-0 font-bold" />
                                        <span className="text-xs text-gray-800 font-semibold">{speaker.expertise}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SpeakersSection;
