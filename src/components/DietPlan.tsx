import React from 'react';
import { Utensils } from 'lucide-react';

interface DietPlanProps {
  bmiCategory?: string;
}

export default function DietPlan({ bmiCategory = 'Normal' }: DietPlanProps) {
  const plans = {
    Underweight: {
      title: 'High-Calorie Diet Plan',
      description: 'Focus on nutrient-dense foods to help gain weight healthily.',
      recommendations: [
        'Eat frequently - 5-6 smaller meals per day',
        'Include healthy fats like avocados and nuts',
        'Add protein shakes and smoothies',
        'Consume protein-rich foods with every meal'
      ]
    },
    Normal: {
      title: 'Balanced Diet Plan',
      description: 'Maintain your healthy weight with a balanced diet.',
      recommendations: [
        'Eat a variety of fruits and vegetables',
        'Choose whole grains over refined grains',
        'Include lean proteins',
        'Stay hydrated with water'
      ]
    },
    Overweight: {
      title: 'Weight Management Diet Plan',
      description: 'Focus on nutrient-rich, lower-calorie foods.',
      recommendations: [
        'Control portion sizes',
        'Increase fiber intake',
        'Choose lean proteins',
        'Limit processed foods and sugars'
      ]
    },
    Obese: {
      title: 'Weight Loss Diet Plan',
      description: 'Focus on sustainable weight loss through healthy eating.',
      recommendations: [
        'Create a caloric deficit',
        'Increase vegetable intake',
        'Choose whole, unprocessed foods',
        'Regular meal timing'
      ]
    }
  };

  const plan = plans[bmiCategory as keyof typeof plans] || plans.Normal;

  return (
    <section id="diet" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <Utensils className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-800">
              Personalized Diet Plan
            </h2>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-emerald-600">
              {plan.title}
            </h3>
            <p className="text-gray-600 mb-6">{plan.description}</p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Recommendations:</h4>
                <ul className="space-y-2">
                  {plan.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}