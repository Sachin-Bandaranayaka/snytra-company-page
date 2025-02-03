'use client';

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { createElement } from "react"

interface OfferingCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function OfferingCard({ icon, title, description }: OfferingCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="p-6 h-full border-none shadow-md">
        <div className="flex items-start">
          <div className="mr-4">{createElement(icon, { size: 40, className: "text-primary" })}</div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#1e1800]">{title}</h3>
            <p className="text-[#333333]">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

