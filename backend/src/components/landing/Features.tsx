import { ShoppingCart, DollarSign, Clock, Smartphone } from "lucide-react"

const features = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
    title: "Smart Cart Technology",
    description: "Our carts use non-expensive yet reliable sensors to detect items as you shop.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-blue-600" />,
    title: "Automatic Billing",
    description: "Items are automatically added to your bill as you place them in the cart.",
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "No Checkout Lines",
    description: "Simply walk out of the store, and your items are automatically billed.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-600" />,
    title: "Real-time Monitoring",
    description: "Track your shopping list and total bill in real-time on your smartphone.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SmartShopr?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

