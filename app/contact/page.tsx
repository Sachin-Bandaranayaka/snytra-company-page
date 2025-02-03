"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageSquare, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Define the Map component that uses Google Maps
function Map() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    if (!apiKey) {
      console.error("Google Maps API key is missing")
      return
    }

    if (!window.google) {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = () => setMapLoaded(true)
      document.head.appendChild(script)
    } else {
      setMapLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (mapLoaded && mapRef.current && window.google) {
      const location = { lat: 40.7128, lng: -74.006 } // Example coordinates
      const mapOptions = {
        center: location,
        zoom: 15,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#f5f0e6" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#acdbfe" }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#c7e8c7" }],
          },
        ],
      }

      const map = new window.google.maps.Map(mapRef.current, mapOptions)
      new window.google.maps.Marker({
        position: location,
        map,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#d94e1f",
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 2,
        },
      })
    }
  }, [mapLoaded])

  return (
    <div ref={mapRef} className="w-full h-full min-h-[500px] rounded-lg overflow-hidden">
      {!mapLoaded && <div className="w-full h-full flex items-center justify-center bg-[#f5f0e6]">Loading map...</div>}
    </div>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e6]">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl">Let us know how we can help.</p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 -mt-12 mb-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#d94e1f] p-3">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-[#d94e1f] transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#d94e1f] p-3">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Chat Us</h3>
                <a
                  href="mailto:support@restaurantapp.com"
                  className="text-muted-foreground hover:text-[#d94e1f] transition-colors"
                >
                  support@restaurantapp.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[#d94e1f] p-3">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-muted-foreground">123 Main Street, City, Country</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">You can reach us anytime</p>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" className="bg-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="Enter your e-mail" className="bg-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" className="bg-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" className="min-h-[120px] bg-white" />
              </div>

              <Button type="submit" className="w-full bg-[#d94e1f] hover:bg-[#d94e1f]/90">
                Send Message
              </Button>
            </form>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Map />
          </div>
        </div>
      </div>
    </div>
  )
}

