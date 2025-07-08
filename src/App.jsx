import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AgentDashboard from "./pages/AgentDashboard";
const Dashboard = () => <div>Dashboard (Protected)</div>;

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          // <ProtectedRoute>
          //   <Dashboard />
          // </ProtectedRoute>
          <AgentDashboard/>
        }
      />
    </Routes>
  );
}

export default App;
