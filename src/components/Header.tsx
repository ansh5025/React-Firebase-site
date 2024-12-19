import React from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">HealthMetrics</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#calculator">BMI Calculator</NavLink>
            <NavLink href="#diet">Diet Plan</NavLink>
            <NavLink href="#about">About Us</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <NavLink href="#home" mobile>Home</NavLink>
            <NavLink href="#calculator" mobile>BMI Calculator</NavLink>
            <NavLink href="#diet" mobile>Diet Plan</NavLink>
            <NavLink href="#about" mobile>About Us</NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  const baseStyles = "text-gray-600 hover:text-emerald-600 transition-colors duration-200";
  const mobileStyles = mobile ? "block py-2" : "";
  
  return (
    <a href={href} className={`${baseStyles} ${mobileStyles}`}>
      {children}
    </a>
  );
}