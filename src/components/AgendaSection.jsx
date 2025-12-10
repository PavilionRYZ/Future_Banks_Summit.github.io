import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, Presentation, Award, TrendingUp, Zap } from 'lucide-react';

const AgendaSection = () => {
    const [selectedDay, setSelectedDay] = useState(0);

    const agenda = [
        {
            day: 'Day 1 - September 11',
            date: 'Opening & Vision',
            sessions: [
                {
                    time: '08:00 - 09:00',
                    title: 'Registration & Welcome Coffee',
                    speaker: 'Venue Welcome Desk',
                    type: 'Registration',
                    icon: Clock,
                    highlight: false,
                },
                {
                    time: '09:00 - 09:45',
                    title: 'Opening Keynote: Vision 2030 - Emergence of the Kingdom as a Global Financial Leader',
                    speaker: 'Senior Banking Executive',
                    type: 'Keynote',
                    icon: Award,
                    highlight: true,
                },
                {
                    time: '09:45 - 11:00',
                    title: 'Panel Discussion: Digital Transformation - The Foundational Platform for Business Agility',
                    speaker: 'CIOs & CTOs from Leading Banks',
                    type: 'Panel',
                    icon: Users,
                    highlight: true,
                },
                {
                    time: '11:00 - 11:30',
                    title: 'Coffee Break & Networking',
                    speaker: 'Networking Area',
                    type: 'Break',
                    icon: Clock,
                    highlight: false,
                },
                {
                    time: '11:30 - 12:45',
                    title: 'Concurrent Sessions Track A: Payments Today & Tomorrow - The Future of Digital Payments',
                    speaker: 'Payment Systems Experts',
                    type: 'Workshop',
                    icon: Presentation,
                    highlight: true,
                },
                {
                    time: '11:30 - 12:45',
                    title: 'Concurrent Sessions Track B: Data & Analytics - 360° Overview to Banks & Customers',
                    speaker: 'Data Analytics Leaders',
                    type: 'Workshop',
                    icon: TrendingUp,
                    highlight: true,
                },
                {
                    time: '12:45 - 14:00',
                    title: 'Lunch & Networking',
                    speaker: 'Main Ballroom',
                    type: 'Networking',
                    icon: Users,
                    highlight: false,
                },
                {
                    time: '14:00 - 15:15',
                    title: 'Expert Session: The Cloud Imperative - Key Enabler for Digital Transformation',
                    speaker: 'Cloud Infrastructure Specialists',
                    type: 'Session',
                    icon: Zap,
                    highlight: true,
                },
                {
                    time: '15:15 - 16:30',
                    title: 'Case Study Presentations: Real-world Digital Banking Implementations',
                    speaker: 'Leading Bank CIOs',
                    type: 'Case Study',
                    icon: Presentation,
                    highlight: true,
                },
                {
                    time: '16:30 - 17:00',
                    title: 'Day 1 Wrap-up & Closing Remarks',
                    speaker: 'Conference Moderator',
                    type: 'Closing',
                    icon: Clock,
                    highlight: false,
                },
            ],
        },
        {
            day: 'Day 2 - September 12',
            date: 'Innovation & Future',
            sessions: [
                {
                    time: '08:00 - 09:00',
                    title: 'Morning Networking & Coffee',
                    speaker: 'Lounge Area',
                    type: 'Networking',
                    icon: Users,
                    highlight: false,
                },
                {
                    time: '09:00 - 09:45',
                    title: 'Opening Keynote: Inclusive Banking Through Open Banking',
                    speaker: 'FinTech & Banking Leaders',
                    type: 'Keynote',
                    icon: Award,
                    highlight: true,
                },
                {
                    time: '09:45 - 11:00',
                    title: 'Panel: Digital-Only Banks - The Rise of Invisible Banks for Gen-Z Customers',
                    speaker: 'Digital Bank Founders & Executives',
                    type: 'Panel',
                    icon: Users,
                    highlight: true,
                },
                {
                    time: '11:00 - 11:30',
                    title: 'Coffee Break & Exhibition',
                    speaker: 'Technology Showcase Area',
                    type: 'Break',
                    icon: Clock,
                    highlight: false,
                },
                {
                    time: '11:30 - 12:45',
                    title: 'Concurrent Sessions Track A: The Future of NBFIs - Revolutionizing Money Market',
                    speaker: 'NBFI Leaders & Regulators',
                    type: 'Workshop',
                    icon: Presentation,
                    highlight: true,
                },
                {
                    time: '11:30 - 12:45',
                    title: 'Concurrent Sessions Track B: Cyber Security - Protecting Digital Infrastructure',
                    speaker: 'Security & Compliance Experts',
                    type: 'Workshop',
                    icon: Zap,
                    highlight: true,
                },
                {
                    time: '12:45 - 14:00',
                    title: 'Lunch & Networking',
                    speaker: 'Main Ballroom',
                    type: 'Networking',
                    icon: Users,
                    highlight: false,
                },
                {
                    time: '14:00 - 15:15',
                    title: 'Expert Session: Experiential Banking in Metaverse - The Third World Banking',
                    speaker: 'Emerging Tech Innovators',
                    type: 'Session',
                    icon: Zap,
                    highlight: true,
                },
                {
                    time: '15:15 - 16:30',
                    title: 'Solutions Showcase & Live Demos - Latest Banking Technologies',
                    speaker: 'Technology Vendors & Partners',
                    type: 'Exhibition',
                    icon: Presentation,
                    highlight: true,
                },
                {
                    time: '16:30 - 17:30',
                    title: 'Closing Keynote: Future of Banking & Networking Reception',
                    speaker: 'Industry Visionary',
                    type: 'Closing',
                    icon: Award,
                    highlight: true,
                },
            ],
        },
    ];

    return (
        <section id="agenda" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Background blur elements */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl opacity-60" />

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
                            Event Agenda
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">Two days packed with insights, panels, and networking</p>
                </motion.div>

                {/* Day Selector */}
                <div className="flex gap-4 justify-center mb-12 flex-wrap">
                    {agenda.map((item, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setSelectedDay(index)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                selectedDay === index
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-600/40'
                                    : 'backdrop-blur-xl bg-white/50 border-2 border-white/70 text-gray-700 hover:text-blue-600 hover:border-blue-300/60 hover:bg-white/60'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <span>{item.day}</span>
                                <span className="text-xs">{item.date}</span>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Agenda Timeline */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedDay}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                    >
                        {agenda[selectedDay].sessions.map((session, index) => {
                            const Icon = session.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                                    className="group relative"
                                >
                                    {/* Hover glow effect */}
                                    <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                                        session.highlight 
                                            ? 'bg-gradient-to-r from-blue-300/40 to-purple-300/40' 
                                            : 'bg-gradient-to-r from-gray-200/30 to-gray-200/30'
                                    }`} />

                                    {/* Main Card */}
                                    <div className={`relative backdrop-blur-xl border-2 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-blue-300/60 transition-all duration-300 group ${
                                        session.highlight
                                            ? 'bg-gradient-to-r from-blue-50/70 to-purple-50/70 border-blue-200/60'
                                            : 'bg-white/50 border-white/70 hover:bg-white/60'
                                    }`}>
                                        {/* Inner glow layer */}
                                        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                                            session.highlight
                                                ? 'bg-gradient-to-br from-blue-100/30 to-purple-100/30'
                                                : 'bg-gradient-to-br from-white/40 to-white/20'
                                        }`} />

                                        <div className="relative flex items-start gap-4">
                                            {/* Icon */}
                                            <div className="flex-shrink-0 mt-1">
                                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-md ${
                                                    session.highlight
                                                        ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                                                        : 'bg-gradient-to-br from-gray-400 to-gray-500'
                                                }`}>
                                                    <Icon size={20} className="text-white" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-grow">
                                                <div className="flex items-start justify-between mb-2 flex-col sm:flex-row gap-2">
                                                    <div>
                                                        <h3 className={`text-lg font-bold mb-1 ${
                                                            session.highlight ? 'text-gray-900' : 'text-gray-800'
                                                        }`}>
                                                            {session.title}
                                                        </h3>
                                                        <p className={`text-sm ${
                                                            session.highlight ? 'text-gray-700' : 'text-gray-600'
                                                        }`}>
                                                            {session.speaker}
                                                        </p>
                                                    </div>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap backdrop-blur-lg border ${
                                                        session.highlight
                                                            ? 'bg-blue-200/60 border-blue-300/60 text-blue-800'
                                                            : 'bg-gray-100/60 border-gray-200/60 text-gray-700'
                                                    }`}>
                                                        {session.type}
                                                    </span>
                                                </div>
                                                <p className={`text-sm flex items-center gap-2 ${
                                                    session.highlight ? 'text-gray-800' : 'text-gray-700'
                                                }`}>
                                                    <Clock size={14} className={
                                                        session.highlight ? 'text-blue-600' : 'text-gray-600'
                                                    } />
                                                    {session.time}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Highlight indicator */}
                                        {session.highlight && (
                                            <div className="absolute top-0 right-0 w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-tr-2xl" />
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 flex gap-6 justify-center flex-wrap text-sm"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                        <span className="text-gray-700 font-medium">Key Sessions</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-gray-400" />
                        <span className="text-gray-700 font-medium">Other Activities</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AgendaSection;
