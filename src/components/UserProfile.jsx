import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import Button from "./shared/Button.jsx";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen px-4 py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-700 to-slate-800">
            <span className="text-3xl font-bold text-white">
              {user?.firstName?.charAt(0).toUpperCase()}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome back!</h1>
          <p className="mt-2 text-slate-600">
            {user?.firstName} {user?.lastName}
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="p-4 rounded-lg bg-slate-50">
            <p className="mb-1 text-xs text-slate-600">Email</p>
            <p className="font-medium text-slate-900">{user?.email}</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50">
            <p className="mb-1 text-xs text-slate-600">Member Since</p>
            <p className="font-medium text-slate-900">
              {new Date(user?.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => navigate("/")}
            variant="secondary"
            className="w-full"
          >
            Return Home
          </Button>
          <Button onClick={handleLogout} variant="primary" className="w-full">
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
