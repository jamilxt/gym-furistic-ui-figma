import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCart } from "@/hooks/use-cart";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [location] = useLocation();
  const { cartItems } = useCart();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform search logic here
    console.log("Searching for:", searchQuery);
    setSearchOpen(false);
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="absolute top-0 w-full z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 relative">
        {/* Logo and Navigation */}
        <div className="flex items-center justify-between h-24">
          {/* Logo Circle */}
          <Link href="/">
            <motion.div 
              className="bg-[#71AC16] rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center relative cursor-pointer z-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4Z" fill="white"/>
                <path d="M12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="white"/>
                <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10Z" fill="white"/>
                <path d="M18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10Z" fill="white"/>
              </svg>
            </motion.div>
          </Link>

          {/* Navigation Menu for Desktop */}
          <div className="hidden lg:block">
            <div className="border-2 border-white border-opacity-50 rounded-[3rem] px-8 py-4 bg-[#FE552B]">
              <nav className="flex space-x-10">
                <Link href="/">
                  <span className={`text-white font-tilt hover:text-white/80 transition duration-150 ${location === "/" ? "text-white font-semibold" : ""}`}>
                    Home
                  </span>
                </Link>
                <Link href="/locations">
                  <span className={`text-white font-tilt hover:text-white/80 transition duration-150 ${location === "/locations" ? "text-white font-semibold" : ""}`}>
                    Our Gym Location
                  </span>
                </Link>
                <div className="w-px h-6 bg-white/50 mx-2"></div>
                <div 
                  className="bg-white bg-opacity-10 rounded-full px-6 py-1 flex items-center cursor-pointer"
                  onClick={() => setSearchOpen(true)}
                >
                  <span className="text-white font-tilt mr-4">Search</span>
                  <Search className="text-white h-5 w-5" />
                </div>
              </nav>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart button */}
            <Link href="/shop">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" className="rounded-full text-white p-2">
                  <ShoppingCart className="h-6 w-6" />
                </Button>
                {totalCartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-primary-orange text-white">
                    {totalCartItems}
                  </Badge>
                )}
              </motion.div>
            </Link>

            {/* Registration Button */}
            <Link href="/register">
              <motion.div 
                className="bg-[#71AC16] rounded-[3rem] px-4 py-3 md:px-8 md:py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-tilt uppercase text-base md:text-xl tracking-wide">
                  REGISTER
                </span>
              </motion.div>
            </Link>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button 
                variant="ghost" 
                className="text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-primary-orange rounded-2xl p-4 mt-2">
                <nav className="flex flex-col space-y-3">
                  <Link href="/">
                    <span className="text-white font-tilt cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
                      Home
                    </span>
                  </Link>
                  <Link href="/locations">
                    <span className="text-white font-tilt cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
                      Our Gym Location
                    </span>
                  </Link>
                  <Link href="/shop">
                    <span className="text-white font-tilt cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
                      Shop
                    </span>
                  </Link>
                  <form onSubmit={handleSearch} className="bg-white bg-opacity-10 rounded-full px-4 py-2 flex items-center">
                    <Input 
                      type="text" 
                      placeholder="Search" 
                      className="bg-transparent text-white placeholder:text-white outline-none border-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button type="submit" variant="ghost" className="p-0">
                      <Search className="text-white h-4 w-4" />
                    </Button>
                  </form>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-[425px] bg-primary-orange">
          <h2 className="text-white text-xl font-tilt mb-4">Search</h2>
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <Input 
              autoFocus
              placeholder="Search for anything..." 
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="bg-white text-primary-orange hover:bg-white/90">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  );
}
