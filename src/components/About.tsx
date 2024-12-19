import React from 'react';
import { Users, Github, Twitter, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <Users className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                We're dedicated to helping people understand their body composition
                and make informed decisions about their health. Our BMI calculator
                and personalized diet recommendations are designed to guide you on
                your journey to a healthier lifestyle.
              </p>
            </div>

            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team working"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <SocialLink icon={<Github />} href="#" />
                <SocialLink icon={<Twitter />} href="#" />
                <SocialLink icon={<Linkedin />} href="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="p-2 text-gray-600 hover:text-emerald-600 transition-colors duration-200"
    >
      {icon}
    </a>
  );
}