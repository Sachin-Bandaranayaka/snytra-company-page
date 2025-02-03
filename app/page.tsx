import { Button } from "@/components/ui/button"

// Custom components
import { HeroSection } from "@/components/hero-section"
import { FeatureCardsList } from "@/components/feature-cards-list"
import { OfferingCardsList } from "@/components/offering-cards-list"
import { ReviewCarousel } from "@/components/review-carousel"
import { AdminDashboardPreview } from "@/components/admin-dashboard-preview"

// Import icons
import { Utensils, ClipboardList, BarChart2, Users, QrCode, Clock, PackageOpen } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f0e6]">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1e1800]">Powerful Features for Your Restaurant</h2>
          <FeatureCardsList />
        </div>
      </section>

      {/* Admin Dashboard Preview */}
      <section className="py-20 bg-[#f5f0e6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1e1800]">Powerful Admin Dashboard</h2>
          <AdminDashboardPreview />
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <OfferingCardsList />
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-[#f5f0e6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1e1800]">What Our Customers Say</h2>
          <ReviewCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e1800] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Restaurant?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of restaurants already using our platform to streamline their operations and delight
            customers.
          </p>
          <Button size="lg" className="bg-[#d94e1f] hover:bg-[#d94e1f]/90">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  )
}

