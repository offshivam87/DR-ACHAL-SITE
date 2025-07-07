import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="w-[10vw]  "><img src={logo} className="object-cover w-full h-fit" alt="logo" /></div>

          {/* Center: Desktop Menu */}
          <div className="-ml-25 hidden md:flex flex-1 justify-center space-x-8 ">
            <a href="/" className="text-gray-700 hover:text-blue-500 font-bold">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-500 font-bold">About</a>
            <a href="/services" className="text-gray-700 hover:text-blue-500 font-bold">Services</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500 font-bold">Contact</a>
          </div>

          {/* Right: Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center px-4 pt-2 pb-4 space-y-2 bg-white shadow">
          <a href="/" className="block text-gray-700 hover:text-blue-500 ">Home</a>
          <a href="/about" className="block text-gray-700 hover:text-blue-500">About</a>
          <a href="/services" className="block text-gray-700 hover:text-blue-500">Services</a>
          <a href="/contact" className="block text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
