import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Box, Users, BarChart3, Utensils, QrCode, Clock, Package } from "lucide-react"
import Image from "next/image"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center relative">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Restaurant interior"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        <div className="relative z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Products</h1>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Discover our comprehensive suite of tools designed to revolutionize your restaurant management experience.
          </p>
          <Button size="lg">Get Started</Button>
        </div>
      </section>

      {/* Main Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <Utensils className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Menu Management</h3>
            <p className="text-muted-foreground">Easily update and organize your menu items in real-time.</p>
          </Card>
          <Card className="p-6">
            <QrCode className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Table Scan & Ordering</h3>
            <p className="text-muted-foreground">Seamless dine-in experience with QR code ordering.</p>
          </Card>
          <Card className="p-6">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Order Tracking</h3>
            <p className="text-muted-foreground">Keep your kitchen and customers informed at every step.</p>
          </Card>
          <Card className="p-6">
            <Package className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
            <p className="text-muted-foreground">Automate stock tracking and receive low inventory alerts.</p>
          </Card>
          <Card className="p-6">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer Management</h3>
            <p className="text-muted-foreground">Build lasting relationships with integrated CRM tools.</p>
          </Card>
          <Card className="p-6">
            <BarChart3 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
            <p className="text-muted-foreground">
              Gain insights into your restaurant's performance with detailed reports.
            </p>
          </Card>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-4 py-16 bg-accent/5">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Admin Dashboard</h2>
        <Card className="p-8">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <Image
              src="/dashboard-1.png"
              alt="Admin Dashboard Interface"
              fill
              className="rounded-lg object-contain"
              priority
              quality={100}
            />
          </div>
        </Card>
      </section>

      {/* Product Benefits */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Products</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Streamlined Operations</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Box className="w-5 h-5 text-primary mr-2" />
                <span>Centralized management system</span>
              </li>
              <li className="flex items-center">
                <Box className="w-5 h-5 text-primary mr-2" />
                <span>Automated order processing</span>
              </li>
              <li className="flex items-center">
                <Box className="w-5 h-5 text-primary mr-2" />
                <span>Efficient inventory tracking</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Enhanced Customer Experience</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Box className="w-5 h-5 text-primary mr-2" />
                <span>Quick and easy ordering process</span>
              </li>
              <li className="flex items-center">
                <Box className="w-5 h-5 text-primary mr-2" />
                <span>Personalized loyalty programs</span>
              </li>
              <li className="flex items-center">
                <Box className="w-5 h-5 text-primary mr-2" />
                <span>Improved order accuracy</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Restaurant?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of restaurants already using our platform to streamline their operations and delight
            customers.
          </p>
          <Button size="lg" variant="secondary">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  )
}

