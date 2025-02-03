"use client"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

const dashboardSections = [
  {
    name: "Overview",
    image: "/dashboard-1.png",
    description: "Complete overview of orders, metrics, and daily operations"
  },
  {
    name: "Orders",
    image: "/dashboard-2.png",
    description: "Real-time order tracking and management system"
  },
  {
    name: "Order Management",
    image: "/dashboard-3.png",
    description: "Comprehensive order metrics and analytics"
  },
  {
    name: "Menu Management",
    image: "/dashboard-4.png",
    description: "Top seller menu and order management interface"
  },
]

export function AdminDashboardPreview() {
  const [activeSection, setActiveSection] = useState(0)

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="flex flex-wrap justify-center mb-6 gap-2">
        {dashboardSections.map((section, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md ${activeSection === index ? "bg-[#d94e1f] text-white" : "bg-[#f5f0e6] text-[#1e1800] hover:bg-[#feeba6]"
              }`}
            onClick={() => setActiveSection(index)}
          >
            {section.name}
          </button>
        ))}
      </div>
      <div className="relative bg-gray-50 rounded-lg overflow-hidden">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full"
          style={{ paddingTop: '56.25%' }} // 16:9 aspect ratio
        >
          <Image
            src={dashboardSections[activeSection].image}
            alt={`${dashboardSections[activeSection].name} dashboard`}
            fill
            className="rounded-lg object-contain p-2"
            priority
            quality={100}
          />
        </motion.div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/70 text-white p-4 rounded-md max-w-xl">
            <h3 className="text-xl font-semibold mb-2">{dashboardSections[activeSection].name}</h3>
            <p className="text-sm opacity-90">{dashboardSections[activeSection].description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

