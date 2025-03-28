import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  rating: number;
  backgroundColor: string;
  quantity?: number;
}

// Mock product data
const products = [
  {
    id: 1,
    name: "Mint flavor chocolate",
    price: 399.00,
    rating: 5,
    description: "Protein-rich mint chocolate for post-workout recovery",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    backgroundColor: "#00CC66" // Green
  },
  {
    id: 2,
    name: "Sugar free chocolate",
    price: 349.00,
    rating: 5,
    description: "Low-carb sugar-free chocolate for fitness enthusiasts",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    backgroundColor: "#FFCC99" // Peach
  },
  {
    id: 3,
    name: "Mint flavor chocolate",
    price: 399.00,
    rating: 5,
    description: "Protein-rich mint chocolate for post-workout recovery",
    image: "https://images.unsplash.com/photo-1598482618933-9ef1166ebb77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    backgroundColor: "#99FFCC" // Light green
  },
  {
    id: 4,
    name: "Mint flavor chocolate",
    price: 399.00,
    rating: 5,
    description: "Protein-rich mint chocolate for post-workout recovery",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    backgroundColor: "#FFFFFF" // White
  },
  {
    id: 5,
    name: "Mint flavor chocolate",
    price: 399.00,
    rating: 5,
    description: "Protein-rich mint chocolate for post-workout recovery",
    image: "https://images.unsplash.com/photo-1605351738462-5ca5d0e8def4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    backgroundColor: "#00CC66" // Green
  },
  {
    id: 6,
    name: "Milk & nuts flavor chocolate",
    price: 319.00,
    rating: 5,
    description: "Protein-packed chocolate with milk and nuts for muscle recovery",
    image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
    backgroundColor: "#FFCC99" // Peach
  }
];

export default function OurProductsSection() {
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description || `Premium quality ${product.name.toLowerCase()}`,
      quantity: 1
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };
  
  // Render rating stars
  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFD700">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };
  
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute top-0 right-0 w-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
          <path fill="#CCCCCC" d="M42.8,-45.3C54.9,-34.3,63.8,-17.1,64.1,0.3C64.5,17.8,56.4,35.5,44.1,51.2C31.9,66.9,15.9,80.4,-2.4,82.8C-20.7,85.2,-41.5,76.4,-55.8,60.7C-70.1,45,-77.9,22.5,-76.8,1.1C-75.6,-20.3,-65.4,-40.6,-50.4,-51.6C-35.4,-62.7,-17.7,-64.5,-0.1,-64.4C17.6,-64.3,30.7,-56.3,42.8,-45.3Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
          <path fill="#CCCCCC" d="M33.3,-56.1C41.9,-48.1,47.1,-35.8,54.5,-23.4C61.9,-11,71.5,1.5,70.8,13C70.1,24.4,59.1,34.8,47.8,44.9C36.5,55,24.8,65,10.7,68.8C-3.4,72.6,-20,70.3,-31.1,62.1C-42.2,53.8,-47.8,39.5,-51.7,26.4C-55.6,13.2,-57.9,1.1,-56.7,-10.6C-55.6,-22.3,-50.9,-33.7,-42.4,-41.9C-33.9,-50.2,-22.5,-55.3,-10.1,-57.8C2.3,-60.3,24.7,-64.1,33.3,-56.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <motion.h2 
              className="text-4xl md:text-5xl font-tilt text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Products
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Fuel Your Workouts with Protein-Packed Nutrition
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-black rounded-3xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div style={{ backgroundColor: product.backgroundColor }} className="h-56 p-4 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full object-contain"
                  />
                </div>
                
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-medium text-sm mb-1">{product.name}</h3>
                    <p className="text-white font-bold">₹{product.price.toFixed(2)}</p>
                    <div className="flex mt-1">
                      {renderRatingStars(product.rating)}
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-green-500 hover:bg-green-600 rounded-full p-2 h-10 w-10"
                    onClick={() => handleAddToCart(product)}
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}