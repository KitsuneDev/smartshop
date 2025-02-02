import { auth } from "@/lib/auth";
import { ArrowRight } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Hero() {
  const session = await auth.api.getSession({ headers: await headers() });
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
        {session ? (
          <Link href="/dashboard">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition duration-300">
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        ) : (
          <Link href="/auth/sign-in">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold inline-flex items-center hover:bg-gray-100 transition duration-300">
              Sign In
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}
