import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import boxer image
const boxerImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800&q=80";

export default function TrainLikeChampionSection() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute top-0 right-0 w-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
          <path fill="#FE552B" d="M42.8,-45.3C54.9,-34.3,63.8,-17.1,64.1,0.3C64.5,17.8,56.4,35.5,44.1,51.2C31.9,66.9,15.9,80.4,-2.4,82.8C-20.7,85.2,-41.5,76.4,-55.8,60.7C-70.1,45,-77.9,22.5,-76.8,1.1C-75.6,-20.3,-65.4,-40.6,-50.4,-51.6C-35.4,-62.7,-17.7,-64.5,-0.1,-64.4C17.6,-64.3,30.7,-56.3,42.8,-45.3Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
          <path fill="#FE552B" d="M33.3,-56.1C41.9,-48.1,47.1,-35.8,54.5,-23.4C61.9,-11,71.5,1.5,70.8,13C70.1,24.4,59.1,34.8,47.8,44.9C36.5,55,24.8,65,10.7,68.8C-3.4,72.6,-20,70.3,-31.1,62.1C-42.2,53.8,-47.8,39.5,-51.7,26.4C-55.6,13.2,-57.9,1.1,-56.7,-10.6C-55.6,-22.3,-50.9,-33.7,-42.4,-41.9C-33.9,-50.2,-22.5,-55.3,-10.1,-57.8C2.3,-60.3,24.7,-64.1,33.3,-56.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-tilt text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Train Like a Champion
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Unleash Your Power with Expert Boxing Training
            </motion.p>
          </div>

          <div className="bg-black rounded-3xl p-6 md:p-10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image Column */}
              <div className="overflow-hidden rounded-xl">
                <img 
                  src={boxerImage} 
                  alt="Boxer training" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Training Focus Areas */}
                <div>
                  <h3 className="text-2xl font-tilt text-white mb-6">Training Focus Areas:</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-tilt text-white mb-2">Strength & Conditioning</h4>
                      <p className="text-white text-opacity-80 text-sm">
                        Develop knockout power with a mix of strength training and explosive movements.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-tilt text-white mb-2">Speed & Agility</h4>
                      <p className="text-white text-opacity-80 text-sm">
                        Sharpen your reflexes and footwork with dynamic drills that improve speed and coordination.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-tilt text-white mb-2">Endurance Training</h4>
                      <p className="text-white text-opacity-80 text-sm">
                        Boost your stamina with high-intensity circuits that keep you fighting strong till the final round.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Why Train With Us */}
                <div>
                  <h3 className="text-2xl font-tilt text-white mb-6">Why Train With Us:</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-tilt text-white mb-2">Expert Coaches</h4>
                      <p className="text-white text-opacity-80 text-sm">
                        Our experienced boxing trainers have worked with amateur and professional athletes, ensuring you get the best training tailored to your goals.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-tilt text-white mb-2">Flexible Programs</h4>
                      <p className="text-white text-opacity-80 text-sm">
                        Whether you're a beginner or seasoned boxer, we offer flexible programs that fit your schedule and needs.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4">
                      <Button className="bg-green-500 hover:bg-green-600 text-white font-tilt py-6 px-8 rounded-full shadow-lg">
                        Punch Now
                      </Button>
                      
                      <div className="flex items-center gap-2 text-white cursor-pointer group">
                        <div className="bg-transparent border-2 border-white rounded-full p-2 group-hover:bg-white/20 transition-all">
                          <Play className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-tilt text-sm">Demo...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}