import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./shared/FormInput.jsx";
import Button from "./shared/Button.jsx";
import SuccessMessage from "./shared/SuccessMessage.jsx";
import {
  VALIDATION_PATTERNS,
  VALIDATION_MESSAGES,
  PASSWORD_STRENGTH_LEVELS,
} from "../constants/validation.js";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (VALIDATION_PATTERNS.UPPERCASE.test(password)) strength++;
    if (VALIDATION_PATTERNS.LOWERCASE.test(password)) strength++;
    if (VALIDATION_PATTERNS.NUMBER.test(password)) strength++;
    if (VALIDATION_PATTERNS.SPECIAL_CHAR.test(password)) strength++;
    return strength;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = VALIDATION_MESSAGES.FIRST_NAME.required;
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = VALIDATION_MESSAGES.FIRST_NAME.minLength;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = VALIDATION_MESSAGES.LAST_NAME.required;
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = VALIDATION_MESSAGES.LAST_NAME.minLength;
    }

    if (!formData.email.trim()) {
      newErrors.email = VALIDATION_MESSAGES.EMAIL.required;
    } else if (!VALIDATION_PATTERNS.EMAIL.test(formData.email)) {
      newErrors.email = VALIDATION_MESSAGES.EMAIL.invalid;
    }

    if (!formData.password) {
      newErrors.password = VALIDATION_MESSAGES.PASSWORD.required;
    } else if (formData.password.length < 8) {
      newErrors.password = VALIDATION_MESSAGES.PASSWORD.minLength(8);
    } else if (passwordStrength < 3) {
      newErrors.password = VALIDATION_MESSAGES.PASSWORD.weak;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = VALIDATION_MESSAGES.CONFIRM_PASSWORD.required;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = VALIDATION_MESSAGES.CONFIRM_PASSWORD.mismatch;
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = VALIDATION_MESSAGES.TERMS;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));
    if (name === "password") {
      setPasswordStrength(calculatePasswordStrength(newValue));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("SignUp:", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      });
      setSuccessMessage(
        "Account created successfully! Redirecting to login..."
      );
      setTimeout(() => (window.location.href = "/login"), 2000);
      setIsLoading(false);
    }, 1500);
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
            Join our community of food lovers
          </p>
          <div className="max-w-sm space-y-4 text-left">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-white">Exclusive Benefits</p>
                <p className="text-sm text-slate-400">
                  Special offers for members
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-white">Secure Account</p>
                <p className="text-sm text-slate-400">Your data is protected</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-white">Quick Reservations</p>
                <p className="text-sm text-slate-400">Fast booking process</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full max-h-screen p-6 overflow-y-auto lg:w-1/2 bg-slate-50">
        <div className="w-full max-w-md my-auto">
          <div className="p-8 bg-white shadow-xl rounded-2xl md:p-10">
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-slate-900">
                Join Master-Kainan
              </h1>
            </div>
            {successMessage && <SuccessMessage message={successMessage} />}
            {!successMessage && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                    placeholder="John"
                    required
                  />
                  <FormInput
                    label="Last Name"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                    placeholder="Doe"
                    required
                  />
                </div>

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

                <div>
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

                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-slate-600">
                          Strength:
                        </span>
                        <span
                          className={`text-xs font-medium ${PASSWORD_STRENGTH_LEVELS[passwordStrength].textColor}`}
                        >
                          {PASSWORD_STRENGTH_LEVELS[passwordStrength].text}
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${PASSWORD_STRENGTH_LEVELS[passwordStrength].color} transition-all duration-300`}
                          style={{ width: `${(passwordStrength / 5) * 100}%` }}
                        ></div>
                      </div>
                      <p className="mt-2 text-xs text-slate-500">
                        Password should contain uppercase, lowercase, numbers,
                        and special characters
                      </p>
                    </div>
                  )}
                </div>

                <FormInput
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  placeholder="••••••••"
                  required
                />

                <div className="p-4 border rounded-lg bg-slate-50 border-slate-200">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="w-5 h-5 text-slate-700 rounded border-2 border-slate-300 focus:ring-2 focus:ring-slate-500 focus:ring-offset-1 transition-all mt-0.5 cursor-pointer shrink-0"
                    />
                    <span className="text-sm text-slate-700 group-hover:text-slate-900">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="font-semibold underline text-slate-900 hover:text-slate-700"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="font-semibold underline text-slate-900 hover:text-slate-700"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="mt-2 text-sm font-medium text-red-500">
                      {errors.agreeToTerms}
                    </p>
                  )}
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
                      Creating Account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>
            )}

            {!successMessage && (
              <div className="pt-6 text-center">
                <p className="text-sm text-slate-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold transition-colors text-slate-700 hover:text-slate-900"
                  >
                    Sign in
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

export default SignUp;
