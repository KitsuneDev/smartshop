import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">SmartShopr</h3>
            <p className="text-sm">Revolutionizing the shopping experience</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} SmartShopr HackRU Team. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
