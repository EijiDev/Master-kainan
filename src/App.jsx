import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import Hero from "./components/partials/Hero";
import Nav from "./components/partials/Nav";
import Footer from "./components/partials/Footer";
import FoodMenu from "./components/FoodMenu";
import Contact from "./components/Contact";
import "./App.css";

// Home page component
function HomePage() {
  return (
    <div>
      <Nav />
      <Hero />
      <FoodMenu />
      <Contact />
      <Footer />
    </div>
  );
}

// Main App with routes
function AppRoutes() {
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth(); // Check auth on mount
  }, [checkAuth]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
