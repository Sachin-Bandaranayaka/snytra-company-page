"use client"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

const dashboardSections = [
  { name: "Overview", image: "/placeholder.svg?height=675&width=1200&text=Overview+Dashboard" },
  { name: "Orders", image: "/placeholder.svg?height=675&width=1200&text=Orders+Dashboard" },
  { name: "Menu", image: "/placeholder.svg?height=675&width=1200&text=Menu+Dashboard" },
  { name: "Analytics", image: "/placeholder.svg?height=675&width=1200&text=Analytics+Dashboard" },
]

export function AdminDashboardPreview() {
  const [activeSection, setActiveSection] = useState(0)

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="flex mb-6 space-x-4">
        {dashboardSections.map((section, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md ${
              activeSection === index ? "bg-[#d94e1f] text-white" : "bg-[#f5f0e6] text-[#1e1800] hover:bg-[#feeba6]"
            }`}
            onClick={() => setActiveSection(index)}
          >
            {section.name}
          </button>
        ))}
      </div>
      <div className="relative">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={dashboardSections[activeSection].image || "/placeholder.svg"}
            alt={`${dashboardSections[activeSection].name} dashboard`}
            width={1200}
            height={675}
            className="rounded-lg shadow-md"
          />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-70 text-white p-4 rounded-md">
            <h3 className="text-xl font-semibold mb-2">{dashboardSections[activeSection].name}</h3>
            <p>Click and drag to explore the dashboard</p>
          </div>
        </div>
      </div>
    </div>
  )
}

