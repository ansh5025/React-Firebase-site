import React, { useState, useEffect } from "react";
import { Calculator as CalcIcon, RefreshCw } from "lucide-react";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
}

export default function Calculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("metric");
  const [result, setResult] = useState<BMIResult | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedUnit = localStorage.getItem("unit") || "metric";
    setUnit(savedUnit);
    // Remove the automatic scrolling
  }, []);

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newUnit = e.target.value;
    setUnit(newUnit);
    localStorage.setItem("unit", newUnit);
  };

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || h <= 0) {
      setError("Please enter a valid positive height.");
      return;
    }
    if (!w || w <= 0) {
      setError("Please enter a valid positive weight.");
      return;
    }

    let bmi: number;
    if (unit === "metric") {
      bmi = w / ((h / 100) * (h / 100));
    } else {
      bmi = (w * 703) / (h * h);
    }

    let category: string;
    let color: string;

    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-blue-600";
    } else if (bmi < 25) {
      category = "Normal";
      color = "text-green-600";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-yellow-600";
    } else {
      category = "Obese";
      color = "text-red-600";
    }

    setResult({ bmi, category, color });
    setError("");
    localStorage.setItem("lastBMI", JSON.stringify({ bmi, category, color }));
  };

  const resetCalculator = () => {
    setHeight("");
    setWeight("");
    setResult(null);
    setError("");
  };

  return (
    <section id="calculator" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <CalcIcon className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-800">BMI Calculator</h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            {error && <div className="mb-4 text-red-500 font-medium">{error}</div>}

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unit System
              </label>
              <select
                value={unit}
                onChange={handleUnitChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="metric">Metric (cm/kg)</option>
                <option value="imperial">Imperial (in/lbs)</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height ({unit === "metric" ? "cm" : "inches"})
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder={`Enter height in ${unit === "metric" ? "cm" : "inches"}`}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight ({unit === "metric" ? "kg" : "lbs"})
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder={`Enter weight in ${unit === "metric" ? "kg" : "lbs"}`}
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={calculateBMI}
                className="flex-1 bg-emerald-600 text-white py-3 rounded-md hover:bg-emerald-700 transition"
              >
                Calculate BMI
              </button>
              <button
                onClick={resetCalculator}
                className="bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>

            {result && (
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold mb-2">Your BMI: {result.bmi.toFixed(1)}</p>
                <p className={`text-xl ${result.color}`}>Category: {result.category}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
