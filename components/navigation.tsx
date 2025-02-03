"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-accent text-accent-foreground">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex flex-col items-center">
            <div className="relative w-24">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1738580901388-ce8ad03e-39fa-42d7-b29f-dafe0d2056ce_1-nBJKLn0rqaMEELuZPoxl0cyLqHGckk.png"
                alt="SYNTRA Logo"
                className="w-full h-auto"
              />
            </div>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/about"
              className="flex items-center text-lg font-medium transition-colors hover:text-primary-foreground"
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="flex items-center text-lg font-medium transition-colors hover:text-primary-foreground"
            >
              Products
            </Link>
            <Link
              href="/pricing"
              className="flex items-center text-lg font-medium transition-colors hover:text-primary-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="flex items-center text-lg font-medium transition-colors hover:text-primary-foreground"
            >
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary" className="hidden md:inline-flex">
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link href="/about" className="text-lg font-medium">
                  About Us
                </Link>
                <Link href="/products" className="text-lg font-medium">
                  Products
                </Link>
                <Link href="/pricing" className="text-lg font-medium">
                  Pricing
                </Link>
                <Link href="/contact" className="text-lg font-medium">
                  Contact Us
                </Link>
                <Button asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

