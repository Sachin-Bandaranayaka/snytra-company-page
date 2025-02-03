'use client';

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { createElement } from "react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="p-6 h-full bg-gradient-to-br from-[#ffffff] to-[#f5f0e6] border-none shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">{createElement(icon, { size: 48, className: "text-primary" })}</div>
          <h3 className="text-xl font-semibold mb-2 text-[#1e1800]">{title}</h3>
          <p className="text-[#333333]">{description}</p>
        </div>
      </Card>
    </motion.div>
  )
}

