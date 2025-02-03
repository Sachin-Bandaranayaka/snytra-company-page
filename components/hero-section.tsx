'use client';

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/tacos-hero.jpg"
                    alt="Delicious tacos with fresh ingredients"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6 text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Revolutionize Your
                            <br />
                            <span className="text-[#d94e1f]">Restaurant Management</span>
                        </motion.h1>
                        <p className="text-xl text-white mb-8 max-w-lg">
                            Smart tools to streamline your menu, orders, and operations. Join thousands of restaurants in the
                            digital transformation.
                        </p>
                        <div className="flex space-x-4">
                            <Button size="lg" className="bg-[#d94e1f] hover:bg-[#d94e1f]/90">
                                Get Started
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-[#1e1800]"
                            >
                                Watch Demo
                            </Button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-8">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                            <h3 className="text-2xl font-semibold text-white mb-4">Manage Your Restaurant Better</h3>
                            <ul className="space-y-3 text-white">
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    Streamline order processing
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    Real-time inventory tracking
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    Customer relationship management
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    Analytics and reporting
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 