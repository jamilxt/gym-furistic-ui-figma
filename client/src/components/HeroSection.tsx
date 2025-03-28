import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

// SVG Components directly in this file for simplicity
function GreenLeftSidebar() {
  return (
    <svg width="387" height="698" viewBox="0 0 387 698" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0 h-full">
      <path d="M78 698H309C352.078 698 387 663.078 387 620V204.307C387 175.758 371.403 149.49 346.337 135.824L115.337 9.88227C63.3604 -18.4557 0 19.1654 0 78.3653V620C0 663.078 34.9218 698 78 698Z" fill="#71AC16"/>
      <g className="opacity-20">
        <circle cx="130" cy="280" r="8" fill="white"/>
        <circle cx="160" cy="280" r="8" fill="white"/>
        <circle cx="190" cy="280" r="8" fill="white"/>
        <circle cx="130" cy="310" r="8" fill="white"/>
        <circle cx="160" cy="310" r="8" fill="white"/>
        <circle cx="190" cy="310" r="8" fill="white"/>
        <circle cx="130" cy="340" r="8" fill="white"/>
        <circle cx="160" cy="340" r="8" fill="white"/>
        <circle cx="190" cy="340" r="8" fill="white"/>
        <circle cx="130" cy="370" r="8" fill="white"/>
        <circle cx="160" cy="370" r="8" fill="white"/>
      </g>
    </svg>
  );
}

function OrangeRightContainer() {
  return (
    <svg width="1700" height="1088" viewBox="0 0 1700 1088" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-0 h-full">
      <defs>
        <pattern id="twoBoysPattern" patternUnits="userSpaceOnUse" width="800" height="600" x="500" y="100">
          <image href="/attached_assets/image_1743132656908.png" width="800" height="600" preserveAspectRatio="xMidYMid slice" />
        </pattern>
      </defs>
      <path fillRule="evenodd" clipRule="evenodd" d="M40.7071 324.16C15.6166 310.501 -1.5879e-05 284.219 -1.25971e-05 255.652L-8.50129e-06 220C-3.80616e-06 179.131 33.6343 146 74.5034 146C114.82 146 148 113.317 148 73C148 32.6832 180.683 0 221 0H1242.51C1275.24 0 1304.49 20.4313 1315.75 51.1609L1321.86 67.8391C1333.12 98.5686 1362.37 119 1395.1 119H1622C1665.08 119 1700 153.922 1700 197V1010C1700 1053.08 1665.08 1088 1622 1088H495C451.922 1088 417 1053.08 417 1010V575.348C417 546.781 401.383 520.499 376.293 506.841L40.7071 324.16Z" fill="#FE552B"/>
      <g className="opacity-20">
        <circle cx="900" cy="120" r="8" fill="white"/>
        <circle cx="930" cy="120" r="8" fill="white"/>
        <circle cx="960" cy="120" r="8" fill="white"/>
        <circle cx="900" cy="150" r="8" fill="white"/>
        <circle cx="930" cy="150" r="8" fill="white"/>
        <circle cx="960" cy="150" r="8" fill="white"/>
        <circle cx="900" cy="180" r="8" fill="white"/>
        <circle cx="930" cy="180" r="8" fill="white"/>
        <circle cx="960" cy="180" r="8" fill="white"/>
      </g>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "90vh" }}>
      {/* Background Shapes */}
      <div className="absolute inset-1">
        <GreenLeftSidebar />
        <OrangeRightContainer />
      </div>

      <div className="relative z-10 container mx-auto">
        {/* Header area - logo, nav and register button are part of the Header component */}
        
        {/* Main Content - Side by side layout */}
        <div className="flex flex-col lg:flex-row mt-8">
          {/* Left Side - Green Section with Specialties */}
          <div className="w-full lg:w-[330px] px-6 pt-28 lg:pt-48 relative z-20">
            <h2 className="text-white text-2xl font-tilt mb-6">OUR SPECIALTY</h2>
            
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center">
                <div className="bg-white/20 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 7.5C19 5.01 16.99 3 14.5 3C12.8 3 11.3 3.91 10.5 5.3C9.7 3.91 8.2 3 6.5 3C4.01 3 2 5.01 2 7.5C2 11.62 6.5 16.19 10.5 19.29C14.5 16.19 19 11.62 19 7.5Z" fill="white"/>
                  </svg>
                </div>
                <span className="text-white font-medium">Ground running</span>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center">
                <div className="bg-white/20 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 5.5C13.5 6.33 12.83 7 12 7C11.17 7 10.5 6.33 10.5 5.5C10.5 4.67 11.17 4 12 4C12.83 4 13.5 4.67 13.5 5.5ZM20 12V16C20 17.1 19.1 18 18 18H6C4.9 18 4 17.1 4 16V12C4 10.9 4.9 10 6 10H18C19.1 10 20 10.9 20 12ZM18 12H6V16H18V12Z" fill="white"/>
                  </svg>
                </div>
                <span className="text-white font-medium">Yoga Assistance</span>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center">
                <div className="bg-white/20 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.05 9.79L10 7.5V5.12C11.04 5.4 12 6.14 12 7H14C14 5.93 13.36 4.87 12.22 4.2C11.09 3.54 9.77 3.33 8.5 3.5V9.7L11.05 11.47L13.05 9.79ZM12.03 14.1C12.1 14.49 12.78 14.97 13.24 15.26L15.42 16.63C15.84 16.89 16 17.15 16 17.5C16 17.9 15.65 18 15.5 18H10.5C10.35 18 10 17.9 10 17.5C10 17.15 10.16 16.89 10.58 16.63L12.76 15.26C13.22 14.97 13.91 14.49 13.97 14.1C14 13.93 13.95 13.76 13.66 13.67C11.73 12.95 10 11.2 10 9.5V9H12V9.5C12 10 12.55 11.27 13.3 11.68C13.85 11.99 14.17 12.36 14.33 12.75C14.5 13.16 14.43 13.56 14.33 13.8C14.27 13.93 14.17 14.03 14.04 14.1C13.9 14.17 13.68 14.12 13.45 14.03C13.16 13.93 12.93 14 12.97 14.1H12.03Z" fill="white"/>
                  </svg>
                </div>
                <span className="text-white font-medium">Personal Trainer</span>
              </div>
            </div>
          </div>
          
          {/* Right Section - Orange Background with Content */}
          <div className="flex-1 relative px-6 py-10 lg:py-0 mt-4 lg:mt-0">
            {/* Social Media Icons */}
            <div className="absolute top-10 left-10">
              <p className="text-white mb-2 font-medium">Follow On:</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="relative z-20 pt-28 lg:pt-40 pb-12">
              {/* Two boys background image */}
              <div className="absolute inset-0 -top-20 z-10 pointer-events-none">
                <img 
                  src="/assets/two-boys.jpeg" 
                  alt="Two fitness enthusiasts" 
                  className="object-contain object-right-top"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              
              {/* Text and CTA */}
              <div className="flex flex-col relative z-20">
                <motion.h1 
                  className="text-6xl md:text-7xl lg:text-8xl font-tilt text-white leading-none mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  POWER<br />YOUR<br />POTENTIAL
                </motion.h1>
                
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link to="/shop">
                    <Button className="bg-white text-[#FE552B] hover:bg-white/90 rounded-full px-8 py-6 text-base font-tilt">
                      SHOP NOW <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  
                  <Button variant="outline" className="text-white border-white hover:bg-white/10 rounded-full w-14 h-14 p-0">
                    <MapPin className="h-6 w-6" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
