# Authentication Implementation Guide

## Overview

This guide explains how to integrate the authentication system (Login & Sign Up pages) into your Master-Kainan project.

## Files Created

### Components

- **`src/components/Login.jsx`** - Login page with email/password validation
- **`src/components/SignUp.jsx`** - Sign up page with strong password requirements
- **`src/components/UserProfile.jsx`** - User profile dashboard
- **`src/components/ProtectedRoute.jsx`** - Route protection component

### Context & Hooks

- **`src/context/AuthContext.jsx`** - Authentication state management (Context API)
- **`src/hooks/useForm.js`** - Reusable form handling hook
- **`src/utils/validations.js`** - Validation utilities

## Installation Steps

### 1. Install React Router (Required)

```bash
npm install react-router-dom
```

### 2. Update `main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

### 3. Update `src/App.jsx`

```jsx
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import Hero from "./components/partials/Hero";
import Nav from "./components/partials/Nav";
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
```

### 4. Update `src/components/partials/Nav.jsx`

Add authentication links to the navigation:

```jsx
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Nav() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-slate-900">
          Master-Kainan
        </Link>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span className="text-slate-700">Hi, {user?.firstName}!</span>
              <Link
                to="/profile"
                className="px-4 py-2 text-slate-700 hover:text-slate-900"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-slate-700 hover:text-slate-900"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
```

## Features

### Login Page Features

✅ Email & password validation
✅ "Remember me" checkbox
✅ "Forgot password" link
✅ Sign up link
✅ Loading state during submission
✅ Success message with redirect
✅ Real-time error clearing

### Sign Up Page Features

✅ First name & last name validation
✅ Email validation
✅ Strong password requirements (8+ chars, uppercase, lowercase, numbers)
✅ Password strength indicator with visual feedback
✅ Password confirmation matching
✅ Terms & conditions checkbox
✅ Terms and privacy policy links
✅ Loading state during submission
✅ Success message with redirect to login

### Validation Features

✅ Email format validation
✅ Password strength calculation
✅ Password confirmation matching
✅ Required field validation
✅ Minimum length validation
✅ Real-time error clearing on user input
✅ Form field touched state tracking

## Design Patterns Used

### 1. **Context API for State Management**

- `AuthContext` manages authentication state globally
- `useAuth` hook provides easy access to auth state and methods
- Avoids prop drilling

### 2. **Custom Hooks**

- `useForm` - Reusable form handling logic
- `useAuth` - Authentication context hook

### 3. **Component Composition**

- Reusable `FormInput`, `Button`, `SuccessMessage` components
- `ProtectedRoute` wrapper for route protection

### 4. **Separation of Concerns**

- Validation logic in `utils/validations.js`
- Form logic in hooks
- UI in components

### 5. **Error Handling**

- Client-side validation before submission
- Error state per field
- User-friendly error messages
- Error clearing on user input

## Best Practices Implemented

✅ **Security**

- Passwords handled securely
- No sensitive data in localStorage (mock implementation)
- HTTPS recommended for production
- CSRF protection should be added server-side

✅ **UX/UI**

- Accessible form inputs (labels, aria-labels)
- Real-time validation feedback
- Loading states during submission
- Success messages after submission
- Responsive design for all screen sizes
- Clear visual hierarchy

✅ **Code Quality**

- Modular component structure
- DRY principle (reusable components)
- Proper error boundaries
- Clean code with comments
- Consistent naming conventions

✅ **Performance**

- useCallback for memoization
- Lazy loading of routes (can be added)
- Conditional rendering for success states
- No unnecessary re-renders

## Password Strength Requirements

Passwords must meet these criteria:

- **Minimum 8 characters**
- **Contains uppercase letter (A-Z)**
- **Contains lowercase letter (a-z)**
- **Contains number (0-9)**
- **Strength indicator shows visual feedback**

## API Integration

### To connect to a real backend, replace the simulated API calls:

**In `Login.jsx` and `SignUp.jsx`:**

```jsx
// Replace this:
setTimeout(() => {
  // Login logic
}, 1500);

// With this:
try {
  const response = await fetch("https://api.example.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  // Handle success
} catch (error) {
  setErrors({ submit: error.message });
}
```

**In `AuthContext.jsx`:**

```jsx
const login = useCallback(async (email, password) => {
  // Replace with actual API call
  const response = await fetch("https://api.example.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  // Handle response and store token
}, []);
```

## Styling

All components use Tailwind CSS with the existing design system:

- Consistent color scheme (slate colors)
- Gradient backgrounds
- Shadow effects
- Responsive breakpoints
- Accessibility-first approach

## Next Steps

1. Install React Router: `npm install react-router-dom`
2. Update `main.jsx` with BrowserRouter
3. Update `App.jsx` with routes
4. Update `Nav.jsx` with auth links
5. Test login and sign up flows
6. Connect to your backend API
7. Add password reset functionality
8. Add email verification

## Troubleshooting

### "useAuth must be used within AuthProvider" error

- Make sure `App` component is wrapped with `<AuthProvider>`

### Routes not working

- Ensure `<BrowserRouter>` is in `main.jsx`
- Check that all route paths are correct

### Styles not applying

- Verify Tailwind CSS is properly configured
- Run `npm run dev` to see if build errors occur

## Support

For questions or issues, refer to the component documentation or check the individual component files for implementation details.
