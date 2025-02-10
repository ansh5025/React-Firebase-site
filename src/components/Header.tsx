import React, { useState } from "react";
import { Menu, X, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after successful logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 text-gray-800 dark:text-gray-200">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">HealthMetrics</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/calculator">BMI Calculator</NavLink>
            <NavLink to="/diet">Diet Plan</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
            >
              Logout
            </button>
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
            <NavLink to="/home" mobile>
              Home
            </NavLink>
            <NavLink to="/calculator" mobile>
              BMI Calculator
            </NavLink>
            <NavLink to="/diet" mobile>
              Diet Plan
            </NavLink>
            <NavLink to="/about" mobile>
              About Us
            </NavLink>
            <button
              onClick={handleLogout}
              className="block w-full px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({
  to,
  children,
  mobile = false,
}: {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
}) {
  const baseStyles =
    "text-gray-600 hover:text-emerald-600 transition-colors duration-200";
  const mobileStyles = mobile ? "block py-2" : "";

  return (
    <a href={to} className={`${baseStyles} ${mobileStyles}`}>
      {children}
    </a>
  );
}