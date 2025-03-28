import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface TrainingProgram {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function TrainingPrograms() {
  const { data: programs, isLoading } = useQuery<TrainingProgram[]>({
    queryKey: ['/api/programs'],
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-tilt mb-4">Training <span className="text-[#71AC16]">Programs</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our specialized training programs designed to help you achieve your fitness goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Skeleton loading state
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                <Skeleton className="w-full h-64" />
              </div>
            ))
          ) : (
            // Actual programs
            programs?.map((program, index) => (
              <motion.div
                key={program.id}
                className="rounded-2xl overflow-hidden shadow-lg group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                    <p className="text-white text-opacity-80 mb-4">{program.description}</p>
                    <a href="#" className="inline-block text-white font-medium border-b-2 border-[#71AC16] pb-1 group-hover:text-[#71AC16] transition duration-150">
                      Learn More <ArrowRight className="inline ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
