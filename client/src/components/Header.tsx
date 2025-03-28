import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [location] = useLocation();
  const [searchActive, setSearchActive] = useState(false);
  
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between w-full p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="rounded-full bg-green-500 p-3 cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z" fill="white"/>
                <path d="M17 9C18.1046 9 19 8.10457 19 7C19 5.89543 18.1046 5 17 5C15.8954 5 15 5.89543 15 7C15 8.10457 15.8954 9 17 9Z" fill="white"/>
                <path d="M7 19C8.10457 19 9 18.1046 9 17C9 15.8954 8.10457 15 7 15C5.89543 15 5 15.8954 5 17C5 18.1046 5.89543 19 7 19Z" fill="white"/>
                <path d="M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19Z" fill="white"/>
              </svg>
            </div>
          </Link>
        </div>
        
        {/* Navigation */}
        <div className="relative flex-1 max-w-sm mx-auto">
          <nav className="bg-primary rounded-full px-6 py-2 flex items-center text-white">
            <div className="flex-1 flex justify-center space-x-6">
              <Link href="/">
                <span className={cn(
                  "text-sm font-medium hover:text-white/80 transition-colors cursor-pointer",
                  isActive("/") && "text-white font-semibold"
                )}>
                  Home
                </span>
              </Link>
              <Link href="/gym-locations">
                <span className={cn(
                  "text-sm font-medium hover:text-white/80 transition-colors cursor-pointer",
                  isActive("/gym-locations") && "text-white font-semibold"
                )}>
                  Our Gym Location
                </span>
              </Link>
            </div>
            
            <div className="flex items-center ml-2">
              <div className="relative">
                {searchActive ? (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="bg-transparent border-b border-white/30 text-white placeholder-white/50 outline-none px-2 py-0.5 w-28 text-sm"
                      autoFocus
                    />
                    <button 
                      onClick={() => setSearchActive(false)}
                      className="ml-1 text-white hover:text-white/80"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setSearchActive(true)}
                    className="text-white hover:text-white/80 flex items-center text-sm"
                  >
                    <span className="mr-1">Search</span>
                    <Search className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </nav>
        </div>
        
        {/* Register button */}
        <div className="flex items-center">
          <Link href="/register">
            <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-1.5 text-sm font-semibold">
              REGISTER
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function isActive(path: string) {
  const [location] = useLocation();
  return location === path;
}
