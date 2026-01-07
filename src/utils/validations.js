/**
 * Email validation utility
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Password strength calculator
 * Returns a strength score from 0-5
 */
export const calculatePasswordStrength = (password) => {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) strength++;

  return strength;
};

/**
 * Validation functions for common fields
 */
export const validators = {
  email: (value) => {
    if (!value?.trim()) {
      return "Email is required";
    }
    if (!validateEmail(value)) {
      return "Please enter a valid email address";
    }
    return "";
  },

  password: (value, minLength = 8, requireStrength = false) => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < minLength) {
      return `Password must be at least ${minLength} characters`;
    }
    if (requireStrength && calculatePasswordStrength(value) < 3) {
      return "Password must contain uppercase, lowercase, and numbers";
    }
    return "";
  },

  confirmPassword: (password, confirmPassword) => {
    if (!confirmPassword) {
      return "Please confirm your password";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
    return "";
  },

  firstName: (value) => {
    if (!value?.trim()) {
      return "First name is required";
    }
    if (value.trim().length < 2) {
      return "First name must be at least 2 characters";
    }
    return "";
  },

  lastName: (value) => {
    if (!value?.trim()) {
      return "Last name is required";
    }
    if (value.trim().length < 2) {
      return "Last name must be at least 2 characters";
    }
    return "";
  },

  checkbox: (value, fieldName = "This field") => {
    if (!value) {
      return `${fieldName} is required`;
    }
    return "";
  },
};

export default validators;
