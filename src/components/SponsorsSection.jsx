import { motion } from 'framer-motion';
import { Award, Handshake } from 'lucide-react';

const SponsorsSection = () => {
    const sponsorTiers = [
        {
            tier: 'Platinum Partners',
            icon: Award,
            sponsors: [
                {
                    name: 'SAMA',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7UX2yn2zVHOeYOb1HH6hf1TpBbBuup1RVQ&s',
                    description: 'Saudi Central Bank',
                },
                {
                    name: 'Arab National Bank',
                    logo: 'https://www.ibm.com/content/adobe-cms/us/en/case-studies/anb/jcr:content/root/table_of_contents/content_section_styl/content-section-body/complex_narrative_25/logoimage.coreimg.png/1757624555208/arab-national-bank.png',
                    description: 'Digital Banking',
                },
                {
                    name: 'First Abu Dhabi Bank',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-aNFDh73kNsg7kKW3iBCmEcZ0fO1ugprPQ&s',
                    description: 'Regional Banking',
                },
            ],
            color: 'from-yellow-500 to-orange-500',
            bgColor: 'from-yellow-100/50 to-orange-100/50',
            borderColor: 'border-yellow-300/60',
        },
        {
            tier: 'Gold Partners',
            icon: Handshake,
            sponsors: [
                {
                    name: 'Infosys Finacle',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Finacle_Logo.png',
                    description: 'Banking Software',
                },
                {
                    name: 'Barq',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGswMJKY3grTL4KMu3ERmNZPwxa5_Wj3ukw&s',
                    description: 'Digital Wallet',
                },
                {
                    name: 'STC Pay',
                    logo: 'https://media.licdn.com/dms/image/v2/C560BAQG2J6XIXphXFA/company-logo_200_200/company-logo_200_200/0/1630615430856?e=2147483647&v=beta&t=rpjENkVsni3NFzjrWWgPsS4NZhuUmQwRLaoeqpCqvoQ',
                    description: 'Digital Payments',
                },
            ],
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'from-blue-100/50 to-cyan-100/50',
            borderColor: 'border-blue-300/60',
        },
        {
            tier: 'Silver Partners',
            icon: Handshake,
            sponsors: [
                {
                    name: 'Newgen',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZk8iOazLaOTHmBHxjeqZTcZaSiheX_uoJA&s',
                    description: 'Digital Solutions',
                },
                {
                    name: 'Appice',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbv_MXCW7MX6B1DQNca6Ep_3gcin3OIiVVg&s',
                    description: 'Automation',
                },
                {
                    name: 'Nintex',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3tOBFOr59LzLfbAgTeV0cqJ8QTpzRJ3ssJw&s',
                    description: 'Workflow',
                },
                {
                    name: 'Zoom',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvExKYeK_tdkI-zcD0dgDYZvEa7fkVczVaLg&s',
                    description: 'Communications',
                },
            ],
            color: 'from-slate-400 to-slate-500',
            bgColor: 'from-slate-100/50 to-slate-100/50',
            borderColor: 'border-slate-300/60',
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
        <section id="sponsors" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Background blur elements */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl opacity-60" />

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
                            Our Partners
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">Leading banking and fintech organizations</p>
                </motion.div>

                {/* Sponsor Tiers */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    {sponsorTiers.map((tierData, tierIndex) => {
                        const TierIcon = tierData.icon;
                        return (
                            <motion.div key={tierIndex}>
                                {/* Tier Header */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 mb-10"
                                >
                                    <div
                                        className={`w-14 h-14 rounded-lg bg-gradient-to-br ${tierData.color} flex items-center justify-center shadow-lg`}
                                    >
                                        <TierIcon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                            {tierData.tier}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {tierData.sponsors.length} organizations
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Sponsors Grid */}
                                <motion.div
                                    variants={containerVariants}
                                    className={`grid grid-cols-1 md:grid-cols-2 ${tierData.sponsors.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
                                        } gap-6`}
                                >
                                    {tierData.sponsors.map((sponsor, index) => (
                                        <motion.div
                                            key={index}
                                            variants={cardVariants}
                                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                            className="group relative"
                                        >
                                            {/* Hover glow */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${tierData.bgColor} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                            {/* Card */}
                                            <div className={`relative backdrop-blur-xl bg-gradient-to-br ${tierData.bgColor} ${tierData.borderColor} border-2 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col items-center justify-center min-h-[240px]`}>
                                                {/* Inner shine effect */}
                                                <div className={`absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                                {/* Content */}
                                                <div className="relative z-10 text-center space-y-4">
                                                    {/* Logo Image Container */}
                                                    <motion.div
                                                        whileHover={{ scale: 1.1 }}
                                                        className="flex justify-center"
                                                    >
                                                        <div className="w-32 h-24 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 p-4 overflow-hidden">
                                                            <img
                                                                src={sponsor.logo}
                                                                alt={sponsor.name}
                                                                className="max-w-full max-h-full object-contain"
                                                                onError={(e) => {
                                                                    e.target.style.display = 'none';
                                                                }}
                                                            />
                                                        </div>
                                                    </motion.div>

                                                    {/* Company Name */}
                                                    <h4 className="text-lg font-bold text-gray-900">
                                                        {sponsor.name}
                                                    </h4>

                                                    {/* Description */}
                                                    <p className="text-sm text-gray-700 font-medium">
                                                        {sponsor.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default SponsorsSection;
