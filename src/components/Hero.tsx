import React from "react";
import { ArrowRight } from "lucide-react";
import Calculator from "./Calculator";
import DietPlan from "./DietPlan";
import About from "./About";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 0; // Remove any offset
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
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
            <div className="flex space-x-4 animate-fadeIn animation-delay-400">
              <button
                onClick={() => scrollToSection('calculator-section')}
                className="bg-white text-emerald-800 px-6 py-2 rounded-lg font-semibold 
                         flex items-center space-x-2 hover:bg-emerald-50 transition-all duration-300
                         hover:transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                <span>Calculate Your BMI Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="calculator-section" className="scroll-mt-16 py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Calculator />
        </div>
      </div>

      <div id="diet-section" className="scroll-mt-16 py-16">
        <div className="container mx-auto px-4">
          <DietPlan />
        </div>
      </div>

      <div id="about-section" className="scroll-mt-16 py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <About />
        </div>
      </div>
    </>
  );
}
