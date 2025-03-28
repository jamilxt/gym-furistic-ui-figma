import { Link } from "wouter";
import { 
  Facebook,
  Instagram, 
  Twitter, 
  Linkedin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-6">
        {/* Top divider */}
        <div className="border-t border-gray-300 mb-12"></div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-medium text-lg mb-4">About</h3>
            <p className="text-gray-700 text-sm mb-6">
              At PowerFit, we believe in the power of dedication and hard 
              work. Our mission is to provide you with the tools, resources, 
              and community you need to build the body of your dreams.
            </p>
            <div className="flex space-x-4 items-center">
              <span className="text-sm text-gray-700">Social Media:</span>
              <a href="#" className="text-gray-700 hover:text-primary-orange transition duration-150">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-orange transition duration-150">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-orange transition duration-150">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-orange transition duration-150">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/" className="hover:text-primary-orange transition duration-150">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-primary-orange transition duration-150">
                  <span>Our gym location</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-orange transition duration-150">
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary-orange transition duration-150">
                  <span>Privacy policy</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Our Service */}
          <div>
            <h3 className="font-medium text-lg mb-4">Our Service</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-primary-orange transition duration-150">Indoor gym</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-orange transition duration-150">Outdoor gym</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-orange transition duration-150">On ground gym</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-orange transition duration-150">Yoga class</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <span className="block">Mail: info@powerfit.com</span>
              </li>
              <li>
                <span className="block">Call: +91 9976543210</span>
              </li>
              <li>
                <span className="block">Location: New York, 235 Lane, 10001</span>
              </li>
              <li>
                <span className="block">Time: Workout Hours: 5AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-xs text-gray-500">
          <p>powerfit.com©{new Date().getFullYear()} all right reserve</p>
        </div>
      </div>
    </footer>
  );
}
