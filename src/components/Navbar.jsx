import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Topics', href: '#topics' },
        { label: 'Speakers', href: '#speakers' },
        { label: 'Agenda', href: '#agenda' },
        { label: 'Sponsors', href: '#sponsors' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                    >
                        <Zap className="w-8 h-8 text-blue-400" />
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            EventHub 2025
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-gray-700 hover:text-gray-600 transition-colors duration-300 relative group"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Register Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
                    >
                        Register
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden pb-4"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block px-4 py-2  text-gray-700 hover:text-gray-600 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <button className="w-full mx-4 px-4 py-2 mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium">
                            Register
                        </button>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
