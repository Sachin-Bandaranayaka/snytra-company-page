import { Card } from "@/components/ui/card"
import { Lightbulb, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Who We Are and What We Do</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          We are committed to helping restaurants operate smarter, faster, and better with our integrated management
          tools.
        </p>
      </section>

      {/* Vision and Mission */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Vision and Mission</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Vision</h3>
            </div>
            <p className="text-muted-foreground">
              To empower restaurants with cutting-edge technology for seamless operations.
            </p>
          </Card>
          <Card className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Mission</h3>
            </div>
            <p className="text-muted-foreground">
              Deliver reliable, easy-to-use solutions that boost efficiency and customer satisfaction.
            </p>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16 bg-accent/5">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">All-in-One Platform</h3>
            <p className="text-muted-foreground">Complete restaurant management solution in one place</p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Customizable to Your Needs</h3>
            <p className="text-muted-foreground">Flexible solutions that adapt to your business</p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">User-Friendly Dashboards</h3>
            <p className="text-muted-foreground">Intuitive interfaces for efficient management</p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Exceptional Support</h3>
            <p className="text-muted-foreground">24/7 customer support and scalability</p>
          </Card>
        </div>
      </section>
    </div>
  )
}

