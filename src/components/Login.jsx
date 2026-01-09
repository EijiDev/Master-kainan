import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FormInput from "./shared/FormInput.jsx";
import Button from "./shared/Button.jsx";
import SuccessMessage from "./shared/SuccessMessage.jsx";
import {
  VALIDATION_PATTERNS,
  VALIDATION_MESSAGES,
} from "../constants/validation.js";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = VALIDATION_MESSAGES.EMAIL.required;
    } else if (!VALIDATION_PATTERNS.EMAIL.test(formData.email)) {
      newErrors.email = VALIDATION_MESSAGES.EMAIL.invalid;
    }

    if (!formData.password) {
      newErrors.password = VALIDATION_MESSAGES.PASSWORD.required;
    } else if (formData.password.length < 6) {
      newErrors.password = VALIDATION_MESSAGES.PASSWORD.minLength(6);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Call the login function from auth context
      await login(formData.email, formData.password);
      setSuccessMessage("Login successful! Redirecting...");

      // Redirect to reservation page or home based on where user came from
      setTimeout(() => {
        const redirectTo = location.state?.from?.pathname || "/reservation";
        navigate(redirectTo);
      }, 1500);
    } catch (error) {
      setErrors({ submit: error.message || "Login failed" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="relative flex-col items-center justify-center hidden p-12 overflow-hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
        <div className="absolute w-40 h-40 rounded-full top-10 right-10 bg-slate-700/20 blur-3xl"></div>
        <div className="absolute rounded-full bottom-10 left-10 w-60 h-60 bg-slate-700/10 blur-3xl"></div>

        <div className="relative z-10 text-center">
          <div className="mb-6 text-6xl font-bold text-white">🍽️</div>
          <h2 className="mb-4 text-4xl font-bold text-white">Master-Kainan</h2>
          <p className="max-w-sm mb-8 text-xl text-slate-300">
            Reserve your favorite Filipino dishes with ease
          </p>
          <div className="max-w-sm space-y-4 text-left">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-white">Easy Reservations</p>
                <p className="text-sm text-slate-400">
                  Book your table in seconds
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-white">Authentic Cuisine</p>
                <p className="text-sm text-slate-400">
                  Traditional Filipino recipes
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-white">Premium Experience</p>
                <p className="text-sm text-slate-400">
                  Quality dining guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full p-6 lg:w-1/2 bg-slate-50">
        <div className="w-full max-w-md">
          <div className="p-8 bg-white shadow-xl rounded-2xl md:p-10">
            <div className="mb-8 text-center">
              <h1 className="mb-1 text-3xl font-bold text-slate-900">
                Welcome Back
              </h1>
            </div>

            {successMessage && <SuccessMessage message={successMessage} />}

            {!successMessage && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="you@example.com"
                  required
                />

                <FormInput
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  placeholder="••••••••"
                  required
                />

                <div className="flex items-center justify-between py-2">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-5 h-5 transition-all border-2 rounded cursor-pointer border-slate-300 text-slate-700 focus:ring-2 focus:ring-slate-500 focus:ring-offset-1"
                    />
                    <span className="ml-2 text-sm text-slate-700 group-hover:text-slate-900">
                      Remember me
                    </span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium transition-colors text-slate-700 hover:text-slate-900 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  color="amber"
                  disabled={isLoading}
                  className="w-full mt-6 h-11"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></span>
                      Signing in...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            )}

            {!successMessage && (
              <div className="pt-6 text-center">
                <p className="text-sm text-slate-600">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-semibold transition-colors text-slate-700 hover:text-slate-900"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
