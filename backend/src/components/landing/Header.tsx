import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <ShoppingCart className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">SmartShopr</span>
        </Link>
        <div className="space-x-4">
          <Link href="#features" className="text-gray-600 hover:text-blue-600">
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-600 hover:text-blue-600"
          >
            How It Works
          </Link>
          <Link
            href="/auth/sign-in"
            className="text-gray-600 hover:text-blue-600"
          >
            Sign In
          </Link>
          <Link
            href="/auth/sign-up"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
