import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../utils/supabaseClient"; // Adjust the path as necessary
import { ThemeSupa } from "@supabase/auth-ui-shared";
import "../styles/Login.css";

const roles = [
  { value: "admin", label: "Admin" },
  { value: "collector", label: "Collector" },
];

const Login = () => {
  const [role, setRole] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const { login } = useAuth(); // Get the login function from context
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
      navigate("/"); // Redirect to the dashboard after login
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-desc">
            Sign in to your waste management dashboard
          </p>
        </div>
        <select
          className="login-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select your role</option>
          {roles.map((role) => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </select>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="default"
          providers={[]} // Add any providers you want
          redirectTo={role == "admin" ? "/dashboard" : "/collector"}
          onLogin={handleLogin} // Custom login handler
        />
      </div>
    </div>
  );
};

export default Login;
