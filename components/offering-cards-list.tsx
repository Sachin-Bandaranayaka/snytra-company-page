'use client';

import { OfferingCard } from "@/components/offering-card"
import { QrCode, Clock, PackageOpen } from "lucide-react"

export function OfferingCardsList() {
    const offerings = [
        {
            icon: QrCode,
            title: "Table Scan & Ordering",
            description: "Seamless dine-in experience with QR code ordering."
        },
        {
            icon: Clock,
            title: "Real-time Order Tracking",
            description: "Keep your kitchen and customers informed at every step."
        },
        {
            icon: PackageOpen,
            title: "Inventory Management",
            description: "Automate stock tracking and receive low inventory alerts."
        }
    ];

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
                <OfferingCard
                    key={index}
                    icon={offering.icon}
                    title={offering.title}
                    description={offering.description}
                />
            ))}
        </div>
    );
} 