import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Revolutionize Your Shopping Experience
        </h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          SmartShopr brings autonomous shopping to your local stores, making
          checkout lines a thing of the past.
        </p>
        <Link href="/auth/sign-up">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition duration-300">
            Sign In
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </Link>
      </div>
    </section>
  );
}
