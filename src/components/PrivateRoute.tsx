// src/components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Monitor authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(!!user); // True if user exists
      setLoading(false); // Stop loading after authentication check
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  if (loading) {
    // While checking authentication, render a loading spinner or screen
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg font-bold">Authenticating...</div>
      </div>
    );
  }

  if (!authenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the children components if authenticated
  return <>{children}</>;
};

export default PrivateRoute;
