import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Calculator from "./components/Calculator";
import DietPlan from "./components/DietPlan";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />
        <Route path="/signup" element={<Signup />} />

        {/* Private Routes */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Hero />
            </PrivateRoute>
          }
        />
        <Route
          path="/calculator"
          element={
            <PrivateRoute>
              <Calculator />
            </PrivateRoute>
          }
        />
        <Route
          path="/diet"
          element={
            <PrivateRoute>
              <DietPlan />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />

        {/* Default Catch-All Route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
