import { createContext, useContext, useState, useCallback } from "react";

/**
 * Authentication Context
 * Manages user authentication state and provides auth utilities
 */
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Simulate login
  const login = useCallback(async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        firstName: email.split("@")[0],
        createdAt: new Date(),
      };

      setUser(userData);
      setIsAuthenticated(true);

      // Store in localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("authToken", "mock-token-" + Date.now());

      return userData;
    } catch (err) {
      setError(err.message || "Login failed");
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Simulate sign up
  const signUp = useCallback(async (firstName, lastName, email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        firstName,
        lastName,
        createdAt: new Date(),
      };

      // Auto-login after signup
      setUser(userData);
      setIsAuthenticated(true);

      // Store in localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("authToken", "mock-token-" + Date.now());

      return userData;
    } catch (err) {
      setError(err.message || "Sign up failed");
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Logout
  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
    setError(null);

    // Clear from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
  }, []);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Check if user is authenticated on mount (from localStorage)
  const checkAuth = useCallback(() => {
    const storedUser = localStorage.getItem("user");
    const authToken = localStorage.getItem("authToken");

    if (storedUser && authToken) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (err) {
        logout();
      }
    }
  }, [logout]);

  const value = {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    signUp,
    logout,
    clearError,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Custom hook to use authentication context
 */
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};

export default AuthContext;
