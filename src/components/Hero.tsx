import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const scrollToCalculator = () => {
    // Navigate to the Calculator route
    navigate("/calculator");

    // Use a timeout to wait for the route to render the component before scrolling
    setTimeout(() => {
      const calculatorSection = document.getElementById("calculator");
      if (calculatorSection) {
        calculatorSection.scrollIntoView({ behavior: "smooth" });
        calculatorSection.classList.add("highlight");
        setTimeout(() => {
          calculatorSection.classList.remove("highlight");
        }, 1000);
      } else {
        console.error("Calculator section not found");
      }
    }, 100); // Adjust timeout as needed
  };

  return (
    <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Start Your Health Journey Today
          </h1>
          <p className="text-xl mb-8 text-emerald-50">
            Discover your BMI and get personalized diet recommendations to achieve your health goals.
          </p>
          <button
            onClick={scrollToCalculator}
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold 
                     flex items-center space-x-2 hover:bg-emerald-50 transition-colors duration-200"
          >
            <span>Calculate Your BMI Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
