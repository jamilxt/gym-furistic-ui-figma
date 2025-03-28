import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import GreenLeftSidebar from "./svg/GreenLeftSidebar";
import OrangeRightContainer from "./svg/OrangeRightContainer";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function HeroSection() {
  // Specialty items
  const specialties = [
    {
      id: 1,
      name: "Ground running",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 4C13 5.10457 12.1046 6 11 6C9.89543 6 9 5.10457 9 4C9 2.89543 9.89543 2 11 2C12.1046 2 13 2.89543 13 4Z" stroke="white" strokeWidth="1.5"/>
          <path d="M9.5 9L11 7.5L14.5 10L13.5 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.4 6.5L16 8L20 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10.5L10 13L8 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.5 19.5L9 22.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.5 19L15 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      name: "Yoga Assistance",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5714 15.0036L15.4286 16.8486C15.4286 16.8486 19.2857 17.7711 19.2857 19.6161C19.2857 21.4611 19.2857 21.4611 19.2857 21.4611H4.71429C4.71429 21.4611 4.71429 20.5386 4.71429 19.6161C4.71429 17.7711 8.57143 16.8486 8.57143 16.8486L9.42857 15.0036" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17.7708C10.1591 17.7708 8.66667 16.2783 8.66667 14.4375V12.5625C8.66667 10.7217 10.1591 9.22917 12 9.22917C13.8409 9.22917 15.3333 10.7217 15.3333 12.5625V14.4375C15.3333 16.2783 13.8409 17.7708 12 17.7708Z" stroke="white" strokeWidth="1.5"/>
          <path d="M12 9.22853V6.44019" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M9.42871 3.6543H14.5716" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 3,
      name: "Personal Trainer",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 3.5C7.5 4.88071 6.38071 6 5 6C3.61929 6 2.5 4.88071 2.5 3.5C2.5 2.11929 3.61929 1 5 1C6.38071 1 7.5 2.11929 7.5 3.5Z" stroke="white" strokeWidth="1.5"/>
          <path d="M21.5 3.5C21.5 4.88071 20.3807 6 19 6C17.6193 6 16.5 4.88071 16.5 3.5C16.5 2.11929 17.6193 1 19 1C20.3807 1 21.5 2.11929 21.5 3.5Z" stroke="white" strokeWidth="1.5"/>
          <path d="M7 9.5L5 23" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M17 9.5L19 23" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M2 8.5L12 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M22 8.5L12 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M3 18L12 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M21 18L12 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Green left sidebar */}
      <div className="absolute left-0 h-full w-[300px] z-10">
        <div className="w-full h-full">
          <GreenLeftSidebar />
        </div>
      </div>
      
      {/* Orange right container */}
      <div className="absolute right-0 top-0 w-[85%] h-full z-0">
        <div className="w-full h-full">
          <OrangeRightContainer />
        </div>
      </div>
      
      {/* Main content - positioned relative to screen */}
      <div className="relative w-full h-screen flex flex-col pt-24">
        {/* Left side specialty section */}
        <div className="absolute left-10 top-1/2 -translate-y-1/3 z-20 w-56">
          <div className="text-white">
            <h3 className="font-bold text-xl mb-5">OUR SPECIALTY</h3>
            <div className="flex flex-col space-y-3">
              {specialties.map(specialty => (
                <div 
                  key={specialty.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center space-x-3"
                >
                  <div className="bg-black/20 rounded-full p-2">
                    {specialty.icon}
                  </div>
                  <span className="font-medium text-sm">{specialty.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Social media links */}
        <div className="absolute left-10 top-40 z-20">
          <div className="text-white">
            <p className="mb-3 text-sm">Follow On:</p>
            <div className="flex space-x-3">
              <Facebook className="h-4 w-4" />
              <Instagram className="h-4 w-4" />
              <Twitter className="h-4 w-4" />
              <Linkedin className="h-4 w-4" />
            </div>
          </div>
        </div>
        
        {/* Main content - center and right */}
        <div className="relative z-20 flex-1 flex">
          {/* Hero image */}
          <div className="absolute right-4 bottom-0 w-3/5 h-[90%] z-10 flex justify-center items-end">
            <img 
              src="https://mabel-cdn.platui.com/api/v1/transform/s3?projectId=bd63e4e7-7b55-45bf-90c3-9fbcd50043bf&imageHash=ce893c6366e023172f2fd86c6f1daa7a170e4b88"
              alt="Two fitness enthusiasts with energy drink" 
              className="h-full object-contain object-bottom -mb-4"
            />
          </div>
          
          {/* Hero content */}
          <div className="absolute right-[14%] top-[40%] -translate-y-1/2 w-full z-20">
            <div className="flex flex-col items-end">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-3 text-right leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                POWER YOUR<br />POTENTIAL
              </motion.h1>
              
              <motion.div 
                className="flex flex-wrap gap-3 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="/shop">
                  <button className="bg-white rounded-full text-primary flex items-center px-6 py-3 font-semibold text-sm">
                    SHOP NOW
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
                
                <button className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <MapPin className="text-white h-5 w-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
