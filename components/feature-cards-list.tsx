'use client';

import { FeatureCard } from "@/components/feature-card"
import { Utensils, ClipboardList, BarChart2, Users } from "lucide-react"

export function FeatureCardsList() {
    const features = [
        {
            icon: Utensils,
            title: "Menu Management",
            description: "Easily update and organize your menu items in real-time."
        },
        {
            icon: ClipboardList,
            title: "Order Processing",
            description: "Streamline your order flow from receipt to delivery."
        },
        {
            icon: BarChart2,
            title: "Analytics Dashboard",
            description: "Gain insights into your restaurant's performance with detailed reports."
        },
        {
            icon: Users,
            title: "Customer Management",
            description: "Build lasting relationships with integrated CRM tools."
        }
    ];

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>
    );
} 