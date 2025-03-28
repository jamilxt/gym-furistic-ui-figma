import { Link } from "wouter";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-[#71AC16] rounded-full w-12 h-12 flex items-center justify-center mr-3">
                <i className="fas fa-paper-plane transform -rotate-45 text-white"></i>
              </div>
              <span className="font-tilt text-2xl">PowerFit</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming lives through fitness excellence and personalized training solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-white transition duration-150">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-white transition duration-150">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/classes">
                  <a className="text-gray-400 hover:text-white transition duration-150">Classes</a>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <a className="text-gray-400 hover:text-white transition duration-150">Shop</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-white transition duration-150">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6">Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-150">Strength Training</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-150">Cardio Fitness</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-150">Yoga & Flexibility</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-150">Personal Training</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-150">Nutrition Coaching</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-[#71AC16] h-5 w-5" />
                <span className="text-gray-400">123 Fitness Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-[#71AC16] h-5 w-5" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-[#71AC16] h-5 w-5" />
                <span className="text-gray-400">info@powerfit.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="mt-1 mr-3 text-[#71AC16] h-5 w-5" />
                <span className="text-gray-400">Mon-Fri: 5am-11pm<br/>Sat-Sun: 7am-9pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} PowerFit. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition duration-150">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition duration-150">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition duration-150">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
