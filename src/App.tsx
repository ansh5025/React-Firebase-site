import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import DietPlan from './components/DietPlan';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full 
                 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      
      <Header />
      <main>
        <Hero />
        <Calculator />
        <DietPlan />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;