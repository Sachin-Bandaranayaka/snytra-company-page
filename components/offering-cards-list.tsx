'use client';

import { QrCode, ClipboardList, Package, LayoutDashboard, MonitorPlay } from 'lucide-react';
import { motion } from 'framer-motion';

export function OfferingCardsList() {
    const offerings = [
        {
            icon: QrCode,
            title: "Table Scan & Ordering",
            description: "Efficient order placement"
        },
        {
            icon: ClipboardList,
            title: "Order Tracking",
            description: "Real-time order Tracking"
        },
        {
            icon: Package,
            title: "Inventory Management",
            description: "Track & manage stock levels"
        },
        {
            icon: LayoutDashboard,
            title: "Admin Dashboard",
            description: "Comprehensive admin tools"
        },
        {
            icon: MonitorPlay,
            title: "Kitchen/Staff Dashboard",
            description: "View orders and get them ready for the user"
        }
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#d94e1f] mb-4">What We Offer</h2>
                <p className="text-gray-600">Discover our top offerings</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {offerings.slice(0, 3).map((offering, index) => (
                    <motion.div
                        key={index}
                        className="text-center group cursor-pointer"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="relative w-16 h-16 mx-auto mb-4">
                            <div className="absolute inset-0 bg-[#d94e1f] rounded-full group-hover:scale-110 transition-transform duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <offering.icon className="w-8 h-8 text-white" />
                                </motion.div>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#d94e1f] transition-colors duration-300">
                            {offering.title}
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                            {offering.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                {offerings.slice(3).map((offering, index) => (
                    <motion.div
                        key={index}
                        className="text-center group cursor-pointer"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="relative w-16 h-16 mx-auto mb-4">
                            <div className="absolute inset-0 bg-[#d94e1f] rounded-full group-hover:scale-110 transition-transform duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <offering.icon className="w-8 h-8 text-white" />
                                </motion.div>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#d94e1f] transition-colors duration-300">
                            {offering.title}
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                            {offering.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
} 