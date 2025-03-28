import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ShoppingCart, Filter, Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

// Define product type
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function Shop() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });
  
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filteredProducts = products?.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = category ? product.category === category : true;
    
    return matchesSearch && matchesCategory;
  });

  const categories = products ? [...new Set(products.map(p => p.category))] : [];

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-tilt mb-4">Our <span className="text-[#71AC16]">Equipment</span></h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of fitness equipment designed to elevate your workout experience
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
          <div className="relative w-full md:w-1/3">
            <Input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 rounded-full">
                <Filter className="h-4 w-4" />
                <span>{category || "All Categories"}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setCategory(null)}>
                All Categories
              </DropdownMenuItem>
              {categories.map((cat) => (
                <DropdownMenuItem key={cat} onClick={() => setCategory(cat)}>
                  {cat}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="rounded-2xl shadow-lg overflow-hidden">
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
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts?.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: product.id * 0.05 }}
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
