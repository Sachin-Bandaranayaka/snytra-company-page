import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Choose the Right Plan for Your Restaurant</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for seamless
          fit!
        </p>
      </section>

      {/* Pricing Plans */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Free Trial</h3>
            <p className="text-muted-foreground mb-4">Access all features within 14-days.</p>
            <p className="text-4xl font-bold mb-6">$0</p>
            <Button className="w-full mb-6">Get Started</Button>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm">Limited access to all features</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm">14-day trial period</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-2">Basic Plan</h3>
            <p className="text-muted-foreground mb-4">
              Includes core features like menu management and order tracking.
            </p>
            <p className="text-4xl font-bold mb-6">
              $49<span className="text-lg font-normal">/month</span>
            </p>
            <Button className="w-full mb-6">Get Started</Button>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm">Menu management</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm">Order tracking</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm">Basic analytics</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6 border-primary">
            <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
            <p className="text-muted-foreground mb-4">
              Access all features plus advanced reporting and loyalty programs.
            </p>
            <p className="text-4xl font-bold mb-6">
              $99<span className="text-lg font-normal">/month</span>
            </p>
            <Button className="w-full mb-6">Get Started</Button>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm">All Basic Plan features</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm">Advanced reporting</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm">Loyalty programs</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm">Priority support</span>
              </li>
            </ul>
          </Card>
          <Card className="p-6 bg-accent text-accent-foreground">
            <h3 className="text-xl font-semibold mb-2">Enterprise Plan</h3>
            <p className="text-muted-foreground mb-4">Fully customizable plan with 24/7 support.</p>
            <p className="text-4xl font-bold mb-6">Custom</p>
            <Button className="w-full mb-6" variant="secondary">
              Contact Us
            </Button>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm">All Pro Plan features</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm">Custom integrations</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm">24/7 premium support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm">Dedicated account manager</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  )
}

