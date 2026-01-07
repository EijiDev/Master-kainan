/**
 * Validation Constants
 * Centralized validation patterns and error messages
 */

export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/,
  SPECIAL_CHAR: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
};

export const VALIDATION_MESSAGES = {
  EMAIL: {
    required: "Email is required",
    invalid: "Please enter a valid email address",
  },
  PASSWORD: {
    required: "Password is required",
    minLength: (length) => `Password must be at least ${length} characters`,
    weak: "Password must contain uppercase, lowercase, and number",
  },
  CONFIRM_PASSWORD: {
    required: "Please confirm your password",
    mismatch: "Passwords do not match",
  },
  FIRST_NAME: {
    required: "First name is required",
    minLength: "First name must be at least 2 characters",
  },
  LAST_NAME: {
    required: "Last name is required",
    minLength: "Last name must be at least 2 characters",
  },
  TERMS: "You must agree to the terms and conditions",
};

export const PASSWORD_STRENGTH_LEVELS = {
  0: { text: "", color: "bg-slate-200", textColor: "" },
  1: { text: "Weak", color: "bg-red-500", textColor: "text-red-500" },
  2: { text: "Weak", color: "bg-red-500", textColor: "text-red-500" },
  3: { text: "Fair", color: "bg-yellow-500", textColor: "text-yellow-600" },
  4: { text: "Strong", color: "bg-green-500", textColor: "text-green-600" },
  5: { text: "Strong", color: "bg-green-500", textColor: "text-green-600" },
};
