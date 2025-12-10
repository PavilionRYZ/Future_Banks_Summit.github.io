import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', message: '' });
    };

    const contactMethods = [
        {
            icon: Phone,
            label: 'Phone',
            value: '+966 11 XXXX XXXX',
            color: 'from-blue-500 to-blue-600',
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'info@futurebanksummit.com',
            color: 'from-purple-500 to-purple-600',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Riyadh Marriott Hotel, Riyadh',
            color: 'from-pink-500 to-pink-600',
        },
    ];

    const inputClassName =
        'w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/50 border border-white/60 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300';

    return (
        <section id="contact" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
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
                            Get In Touch
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">Have questions about the summit? We're here to help</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {contactMethods.map((method, index) => {
                            const Icon = method.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="flex items-start gap-4 p-4 rounded-xl backdrop-blur-lg bg-gradient-to-r from-blue-50/60 to-purple-50/60 border border-blue-200/40 hover:border-blue-300/60 hover:shadow-md transition-all duration-300">
                                        <div
                                            className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300`}
                                        >
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.label}</h3>
                                            <p className="text-gray-700 font-medium">{method.value}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="relative group"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative backdrop-blur-xl bg-white/50 border-2 border-white/60 rounded-2xl p-8 shadow-md hover:shadow-lg hover:border-white/80 transition-all duration-300">
                                {/* Inner glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative">
                                    <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                                        Event Details
                                    </h3>
                                    <div className="space-y-4 text-gray-700">
                                        <div className="flex items-start gap-3">
                                            <span className="text-blue-600 font-bold mt-1">📅</span>
                                            <div>
                                                <p className="font-semibold text-gray-900">Date</p>
                                                <p className="text-gray-700">September 11-12, 2023</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-blue-600 font-bold mt-1">🏨</span>
                                            <div>
                                                <p className="font-semibold text-gray-900">Venue</p>
                                                <p className="text-gray-700">Riyadh Marriott Hotel, Riyadh, Saudi Arabia</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-blue-600 font-bold mt-1">🎯</span>
                                            <div>
                                                <p className="font-semibold text-gray-900">Format</p>
                                                <p className="text-gray-700">In-Person Event with Live Networking</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-blue-600 font-bold mt-1">✅</span>
                                            <div>
                                                <p className="font-semibold text-gray-900">Registration</p>
                                                <p className="text-gray-700">Free for pre-qualified banking executives</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Quick Message Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        {/* Hover glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Form Container */}
                        <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/70 via-white/60 to-gray-50/60 border-2 border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:border-white/80 transition-all duration-300">
                            {/* Inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <form onSubmit={handleSubmit} className="relative space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>

                                {/* Name */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className={inputClassName}
                                        required
                                    />
                                </motion.div>

                                {/* Email */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 }}
                                >
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@bankname.com"
                                        className={inputClassName}
                                        required
                                    />
                                </motion.div>

                                {/* Message */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your inquiry..."
                                        rows="4"
                                        className={`${inputClassName} resize-none`}
                                        required
                                    />
                                </motion.div>

                                {/* Submit Button */}
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.25 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-600/40 transition-all duration-300 mt-2"
                                >
                                    Send Message <Send size={18} />
                                </motion.button>

                                {/* Success Message */}
                                {submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2 p-4 rounded-lg backdrop-blur-lg bg-green-100/60 border border-green-300/60 text-green-800"
                                    >
                                        <CheckCircle size={20} className="flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold">Message Sent Successfully!</p>
                                            <p className="text-sm">We'll get back to you soon.</p>
                                        </div>
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
