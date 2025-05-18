
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogIn, UserRound } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 md:px-12 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="bg-black p-1 rounded mr-2">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className="text-black text-xl font-bold">jobfinder</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-800 hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="/job-search" className="text-gray-800 hover:text-blue-600 font-medium">
            Job Search
          </a>
          <a href="/interview-prep" className="text-gray-800 hover:text-blue-600 font-medium">
            Interview Preparation
          </a>
          <a href="/about" className="text-gray-800 hover:text-blue-600 font-medium">
            About
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800">
            <LogIn className="mr-2 h-4 w-4" />
            Sign In
          </Button>
          <Button variant="outline" className="bg-white border border-black text-black rounded-full px-6 py-2 hover:bg-gray-100">
            <UserRound className="mr-2 h-4 w-4" />
            Sign Up
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white px-6 py-4 border-t">
          <div className="flex flex-col space-y-4">
            <a href="/" className="text-gray-800 hover:text-blue-600 font-medium py-2">
              Home
            </a>
            <a href="/job-search" className="text-gray-800 hover:text-blue-600 font-medium py-2">
              Job Search
            </a>
            <a href="/interview-prep" className="text-gray-800 hover:text-blue-600 font-medium py-2">
              Interview Preparation
            </a>
            <a href="/about" className="text-gray-800 hover:text-blue-600 font-medium py-2">
              About
            </a>
            <div className="flex flex-col space-y-3 pt-2">
              <Button variant="outline" className="bg-black text-white rounded-full px-6 py-2 w-full hover:bg-gray-800">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
              <Button variant="outline" className="bg-white border border-black text-black rounded-full px-6 py-2 w-full hover:bg-gray-100">
                <UserRound className="mr-2 h-4 w-4" />
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
