import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const isMobile = useIsMobile();
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "90vh" }}>
      {/* Social Media Follow Section */}
      <motion.div 
        className="absolute left-8 top-48 z-10 hidden md:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col items-start">
          <span className="text-white font-tilt text-xl mb-4">Follow On:</span>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-primary-orange transition duration-150">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-primary-orange transition duration-150">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-primary-orange transition duration-150">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-primary-orange transition duration-150">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </motion.div>
      
      {/* Vector Background Pattern */}
      <div className="absolute left-0 top-64 w-full h-full">
        <svg width="100%" height="400" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0H1440V300C1440 300 1200 400 720 400C240 400 0 300 0 300V0Z" fill="url(#gradient)" opacity="0.15"/>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FE552B" />
              <stop offset="100%" stopColor="#FE552B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Image */}
      <motion.div 
        className="absolute right-0 top-0 w-full md:w-3/4 h-[500px] md:h-[700px] max-w-5xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        style={{ transform: isMobile ? "none" : `translateY(${scrollPosition * 0.1}px)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop" 
          alt="Fitness equipment and training" 
          className="w-full h-full object-cover object-center rounded-bl-[3rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-20 rounded-bl-[3rem]"></div>
      </motion.div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-40 pb-32 relative z-10">
        <div className="max-w-2xl mt-20">
          <motion.h1 
            className="text-4xl md:text-7xl font-tilt text-white leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Power Your <span className="text-primary-orange">Potential</span>
          </motion.h1>
          
          <motion.p 
            className="text-white text-lg md:text-xl mb-10 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform your fitness journey with our state-of-the-art equipment and expert trainers. 
            Achieve your goals with personalized training programs.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/shop">
              <span className="group relative flex items-center bg-transparent border-2 border-white rounded-2xl px-8 py-4 w-80 hover:bg-white/10 transition duration-300 cursor-pointer">
                <span className="text-white font-tilt uppercase text-2xl">Shop Now</span>
                <ArrowRight className="text-white ml-auto h-6 w-6" />
              </span>
            </Link>
            
            <Link href="/locations">
              <span className="flex items-center justify-center bg-accent-orange border-2 border-accent-orange rounded-2xl w-16 h-16 hover:bg-accent-orange/90 transition duration-300">
                <MapPin className="text-white h-6 w-6" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
