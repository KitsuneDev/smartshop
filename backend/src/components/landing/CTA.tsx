import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="bg-blue-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Revolutionize Your Store?
        </h2>
        <p className="text-xl text-white mb-8">
          Contact us today to learn how SmartShopr can transform your business.
        </p>
        <Link href="/auth/sign-in">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
}
