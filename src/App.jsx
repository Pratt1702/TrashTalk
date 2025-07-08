import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AgentDashboard from "./pages/AgentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProfileSetup from "./pages/ProfileSetup";

function App() {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} />
      <Route path="/profile-setup" element={<ProfileSetup />} /> */}
      <Route path="/" element={<ProtectedRoute></ProtectedRoute>} />
      {/* <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/agent"
        element={
          <ProtectedRoute>
            <AgentDashboard />
          </ProtectedRoute>
        }
      /> */}
      {/* <Route
        path="/map"
        element={
          <ProtectedRoute>
            <MapView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/waste-log"
        element={
          <ProtectedRoute>
            <WasteLog />
          </ProtectedRoute>
        }
      />
      <Route
        path="/insights"
        element={
          <ProtectedRoute>
            <Insights />
          </ProtectedRoute>
        }
      />
      <Route
        path="/public-reports"
        element={
          <ProtectedRoute>
            <PublicReports />
          </ProtectedRoute>
        }
      />
      <Route
        path="/route-planning"
        element={
          <ProtectedRoute>
            <RoutePlanning />
          </ProtectedRoute>
        }
      />*/}
    </Routes>
  );
}

export default App;
