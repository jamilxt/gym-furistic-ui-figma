import { useQuery } from "@tanstack/react-query";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function FeaturedProducts() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products/featured'],
  });
  
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

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
          <h2 className="text-4xl md:text-5xl font-tilt mb-4">Featured <span className="text-[#71AC16]">Equipment</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of fitness equipment designed to elevate your workout experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Skeleton loading state
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="rounded-2xl shadow-lg overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-12 w-12 rounded-full" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            // Actual product cards
            products?.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-4 right-4 bg-[#71AC16] text-white font-bold">
                      New
                    </Badge>
                  )}
                  {product.isSale && (
                    <Badge className="absolute top-4 right-4 bg-red-500 text-white font-bold">
                      Sale
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-tilt text-[#71AC16]">${product.price.toFixed(2)}</span>
                    <Button 
                      className="bg-[#71AC16] hover:bg-[#5E8E12] text-white rounded-full w-12 h-12 flex items-center justify-center transition duration-150"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </motion.div>
            ))
          )}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/shop">
            <Button className="bg-[#71AC16] hover:bg-[#5E8E12] text-white font-tilt uppercase rounded-full px-10 py-4 text-xl">
              View All Equipment
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
