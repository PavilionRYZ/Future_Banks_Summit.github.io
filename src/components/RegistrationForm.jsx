import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Building2, CheckCircle, Briefcase } from 'lucide-react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        department: '',
        interests: [],
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleInterestChange = (interest) => {
        setFormData((prev) => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter((i) => i !== interest)
                : [...prev.interests, interest],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    const inputClassName =
        'w-full px-4 py-3 rounded-lg backdrop-blur-md bg-white/50 border border-white/60 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300';

    const interests = [
        'Digital Transformation',
        'Cloud Migration',
        'Open Banking',
        'Cybersecurity',
        'AI & Automation',
        'Digital Payments',
    ];

    const departments = [
        'Chief Information Officer',
        'Chief Technology Officer',
        'Chief Digital Officer',
        'Head of Retail Banking',
        'Head of Corporate Banking',
        'Head of Customer Experience',
        'Head of Cards & Payments',
        'Head of Data & Analytics',
        'Head of Governance & Compliance',
        'Head of Marketing',
        'Other',
    ];

    return (
        <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Background elements */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl opacity-60" />

            <div className="max-w-2xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Register Now
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">Secure your spot at the Future Banks Summit 2023</p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Form Container */}
                    <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/70 via-white/60 to-gray-50/60 border-2 border-white/60 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl hover:border-white/80 transition-all duration-300">
                        {/* Inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <form onSubmit={handleSubmit} className="relative space-y-6">
                            {/* Name */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Full Name *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-3.5 w-5 h-5 text-blue-600" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className={`pl-12 ${inputClassName}`}
                                        required
                                    />
                                </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                            >
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-blue-600" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@bankname.com"
                                        className={`pl-12 ${inputClassName}`}
                                        required
                                    />
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-3.5 w-5 h-5 text-blue-600" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+966 50 123 4567"
                                        className={`pl-12 ${inputClassName}`}
                                    />
                                </div>
                            </motion.div>

                            {/* Company */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                            >
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Organization/Bank Name *
                                </label>
                                <div className="relative">
                                    <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-blue-600" />
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Bank/Organization"
                                        className={`pl-12 ${inputClassName}`}
                                        required
                                    />
                                </div>
                            </motion.div>

                            {/* Job Title and Department */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Department/Role *
                                </label>
                                <div className="relative">
                                    <Briefcase className="absolute left-4 top-3.5 w-5 h-5 text-blue-600 z-10" />
                                    <select
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        className={`pl-12 ${inputClassName} appearance-none`}
                                        required
                                    >
                                        <option value="" className="bg-white text-gray-900">
                                            Select Your Department
                                        </option>
                                        {departments.map((dept) => (
                                            <option key={dept} value={dept} className="bg-white text-gray-900">
                                                {dept}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute right-4 top-3.5">
                                        <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Job Title */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 }}
                            >
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Job Title
                                </label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                    placeholder="e.g., CIO, Chief Digital Officer"
                                    className={inputClassName}
                                />
                            </motion.div>

                            {/* Interests */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <label className="block text-sm font-semibold text-gray-900 mb-3">
                                    Areas of Interest
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {interests.map((interest) => (
                                        <label
                                            key={interest}
                                            className="flex items-center gap-3 p-3 rounded-lg backdrop-blur-lg bg-blue-50/60 border border-blue-200/40 hover:border-blue-300/60 hover:bg-blue-100/60 cursor-pointer transition-all duration-300"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={formData.interests.includes(interest)}
                                                onChange={() => handleInterestChange(interest)}
                                                className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                                            />
                                            <span className="text-sm text-gray-800 font-medium">{interest}</span>
                                        </label>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.45 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-blue-600/40 transition-all duration-300"
                            >
                                {submitted ? 'Registration Successful!' : 'Register for Summit'}
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
                                        <p className="font-semibold">Registration Successful!</p>
                                        <p className="text-sm">Check your email for confirmation and summit details.</p>
                                    </div>
                                </motion.div>
                            )}

                            {/* Terms Note */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="text-center text-xs text-gray-600 mt-4"
                            >
                                By registering, you agree to receive updates about the Future Banks Summit 2023
                            </motion.p>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RegistrationForm;
