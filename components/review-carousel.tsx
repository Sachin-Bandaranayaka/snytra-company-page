"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  {
    name: "John Doe",
    role: "Restaurant Owner",
    company: "Tasty Bites",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    content: "This platform has revolutionized how we manage our restaurant. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Head Chef",
    company: "Gourmet Delights",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    content: "The real-time order tracking has significantly improved our kitchen efficiency.",
    rating: 4,
  },
  {
    name: "Mike Johnson",
    role: "Restaurant Manager",
    company: "Cafe Serenity",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    content: "Customer engagement has never been easier. Our loyalty program is thriving!",
    rating: 5,
  },
]

export function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="relative">
      <Card className="p-8 mx-auto max-w-2xl">
        <div className="flex items-center mb-4">
          <Image
            src={reviews[currentIndex].image || "/placeholder.svg"}
            alt={reviews[currentIndex].name}
            width={64}
            height={64}
            className="rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-[#1e1800]">{reviews[currentIndex].name}</h3>
            <p className="text-[#858585]">
              {reviews[currentIndex].role}, {reviews[currentIndex].company}
            </p>
          </div>
        </div>
        <p className="text-[#333333] mb-4">{reviews[currentIndex].content}</p>
        <div className="flex text-[#d94e1f]">
          {[...Array(reviews[currentIndex].rating)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </Card>
      <button
        onClick={prevReview}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronLeft className="h-6 w-6 text-[#1e1800]" />
      </button>
      <button
        onClick={nextReview}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronRight className="h-6 w-6 text-[#1e1800]" />
      </button>
    </div>
  )
}

