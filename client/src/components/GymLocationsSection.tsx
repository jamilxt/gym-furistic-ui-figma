import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

// Type for gym location
interface GymLocation {
  id: number;
  name: string;
  address: string;
  rating: number;
  reviewCount: number;
  hours: string;
  amenities: string[];
  lat: number;
  lng: number;
}

export default function GymLocationsSection() {
  const { data: locations, isLoading } = useQuery<GymLocation[]>({
    queryKey: ['/api/locations'],
  });

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-tilt mb-4">Our <span className="text-[#71AC16]">Locations</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect gym near you with premium facilities and expert trainers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {isLoading ? (
              <Skeleton className="w-full h-96" />
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25903e4bdb041%3A0x38486d5a9d3ed7b1!2sNew%20York%20City%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1643833686950!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Gym Locations Map"
              />
            )}
          </motion.div>

          <div className="space-y-6">
            {isLoading ? (
              // Skeleton loading state
              Array.from({ length: 2 }).map((_, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6">
                    <Skeleton className="h-7 w-3/4 mb-2" />
                    <Skeleton className="h-5 w-full mb-4" />
                    <div className="flex items-center space-x-4 mb-4">
                      <Skeleton className="h-5 w-1/4" />
                      <Skeleton className="h-5 w-1/4" />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Skeleton className="h-6 w-24" />
                      <Skeleton className="h-6 w-36" />
                      <Skeleton className="h-6 w-28" />
                    </div>
                    <Skeleton className="h-10 w-32" />
                  </CardContent>
                </Card>
              ))
            ) : (
              // Display first two locations
              locations?.slice(0, 2).map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300`}>
                    <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
                    <p className="text-gray-600 mb-4">{location.address}</p>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>{location.rating} ({location.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-[#71AC16] mr-1" />
                        <span>{location.hours}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {location.amenities.map((amenity, idx) => (
                        <Badge key={idx} variant="outline" className="bg-gray-100 text-gray-800 font-normal">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                    <Link href="/locations">
                      <Button className="bg-[#71AC16] hover:bg-[#5E8E12] text-white rounded-full px-6 py-2 font-medium transition duration-150">
                        View Details
                      </Button>
                    </Link>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
