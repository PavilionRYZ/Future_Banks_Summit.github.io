import React from 'react';
import { motion } from 'framer-motion';
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Heart,
    ArrowUp,
    Mail,
    Phone,
} from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Facebook, label: 'Facebook', href: '#', color: 'from-blue-600 to-blue-700' },
        { icon: Twitter, label: 'Twitter', href: '#', color: 'from-cyan-600 to-cyan-700' },
        { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'from-blue-700 to-blue-800' },
        { icon: Instagram, label: 'Instagram', href: '#', color: 'from-pink-600 to-red-600' },
    ];

    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Topics', href: '#agenda' },
        { label: 'Speakers', href: '#speakers' },
        { label: 'Agenda', href: '#agenda' },
        { label: 'Sponsors', href: '#sponsors' },
        { label: 'Contact', href: '#contact' },
    ];

    const resources = [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms & Conditions', href: '#' },
        { label: 'Sponsorship Opportunities', href: '#' },
        { label: 'Speaker Inquiries', href: '#' },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-white/60">
            <div className="max-w-6xl mx-auto px-4 py-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            Future Banks<br />Summit 2023
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            The 4th Annual summit bringing together banking leaders, innovators, and visionaries to shape the future of digital banking in Saudi Arabia.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Navigation</h4>
                        <div className="space-y-3">
                            {quickLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium block"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Resources */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Resources</h4>
                        <div className="space-y-3">
                            {resources.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-sm font-medium block"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Contact</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Mail size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-xs text-gray-600">Email</p>
                                    <a href="mailto:info@futurebanksummit.com" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                                        info@futurebanksummit.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-xs text-gray-600">Phone</p>
                                    <a href="tel:+966XXXXXXXXXX" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                                        +966 (0)11 XXXX XXXX
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-8 mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <p className="text-gray-700 text-sm flex items-center gap-2">
                            Made with <Heart size={16} className="text-red-500" /> by Future Banks Summit Team
                        </p>
                        <p className="text-gray-600 text-xs">
                            © 2023 Future Banks Summit. All rights reserved. | Aligned with Vision 2030
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex gap-3"
                    >
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.9 }}
                                    title={social.label}
                                    className="w-10 h-10 rounded-lg backdrop-blur-xl bg-white/50 border-2 border-white/60 flex items-center justify-center text-gray-700 hover:text-white hover:border-blue-300/60 transition-all duration-300 group"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                                    <Icon size={18} />
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    {/* Scroll to Top Button */}
                    <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        title="Scroll to top"
                        className="w-10 h-10 rounded-lg backdrop-blur-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-lg hover:shadow-blue-600/40 transition-all duration-300"
                    >
                        <ArrowUp size={18} />
                    </motion.button>
                </div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-t border-gray-200/50 backdrop-blur-sm"
            >
                <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                        <p>Digital Innovations Transforming the Kingdom's Banking Landscape</p>
                    </div>
                    <a
                        href="#"
                        className="hover:text-blue-600 transition-colors"
                    >
                        www.futurebanksummit.com
                    </a>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
