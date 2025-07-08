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
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>

        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
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
