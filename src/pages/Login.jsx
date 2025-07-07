import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../utils/supabaseClient"; // Adjust the path as necessary
import "../styles/Login.css";

const roles = [
  { value: "admin", label: "Admin" },
  { value: "collector", label: "Collector" },
];

const Login = () => {
  const [role, setRole] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    console.log("Selected role:", e.target.value);
  };

  const handleSubmit = async (email, password) => {
    try {
      console.log("Attempting to submit:", { email, password, isSignup });
      let response;
      if (isSignup) {
        console.log("Signing up...");
        response = await supabase.auth.signUp({
          email,
          password,
        });
      } else {
        console.log("Signing in...");
        response = await supabase.auth.signInWithPassword({
          email,
          password,
        });
      }

      const { user, error } = response;
      console.log("Response from Supabase:", response);
      if (error) throw error;

      console.log("User logged in:", user);
      navigate("/");
    } catch (err) {
      console.error("Error during authentication:", err.message);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">TrashTrack</h2>
          <h3 className="login-welcome">Welcome Back</h3>
          <p className="login-desc">
            Sign in to your waste management dashboard
          </p>
        </div>
        <select
          value={role}
          onChange={handleRoleChange}
          required
          className="login-select"
        >
          <option value="">Select your role</option>
          {roles.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
        <Auth
          supabaseClient={supabase}
          providers={[]}
          theme="dark"
          socialLayout="horizontal"
          view={isSignup ? "sign_up" : "sign_in"}
        />
        <button onClick={() => setIsSignup(!isSignup)} className="signup-link">
          {isSignup
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Login;
