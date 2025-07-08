import React, { useEffect, useState } from "react";
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
  const { user } = useAuth();
  const navigate = useNavigate();
  const currentOrigin = window.location.origin;
  const redirectURL = `${currentOrigin}/dashboard`;

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

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
          onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}
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
        />
      </div>
    </div>
  );
};

export default Login;
