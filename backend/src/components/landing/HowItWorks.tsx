import { CheckCircle } from "lucide-react"

const steps = [
  "Grab a SmartShopr cart at the store entrance",
  "Shop as usual, placing items in your cart",
  "Monitor your bill in real-time on your smartphone",
  "Walk past the checkout line when you're done",
  "Your items are automatically billed to your account",
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How SmartShopr Works</h2>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-6">
              <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

