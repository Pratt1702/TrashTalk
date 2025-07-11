import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { supabase } from "../utils/supabaseClient"; // Adjust the path as necessary
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [user, setUser] = useState(null); // State to hold user information
  const [loading, setLoading] = useState(true); // Loading state

  // Simulated data
  const stats = {
    totalWaste: 2847,
    zonesCovered: 24,
    totalLogs: 156,
    topCollector: "John Smith",
    topCollectorWeight: 847,
    logsChange: "+8%",
  };

  // Mock data for recent collection logs
  const recentLogs = [
    {
      name: "John Smith",
      zone: "Zone A",
      type: "Organic",
      weight: 45,
      time: "2 hours ago",
    },
    {
      name: "Sarah Johnson",
      zone: "Zone B",
      type: "Plastic",
      weight: 32,
      time: "3 hours ago",
    },
    {
      name: "Mike Davis",
      zone: "Zone C",
      type: "Metal",
      weight: 28,
      time: "4 hours ago",
    },
  ];

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        setLoading(false);
        return;
      }
      setUser(user);
      console.log("User logged in:", user);

      // Check if user already exists before inserting
      const { data: existingUser, error: fetchError } = await supabase
        .from("users")
        .select("id")
        .eq("id", user.id)
        .single();

      if (!existingUser) {
        const { error: insertError } = await supabase
          .from("users")
          .insert([
            { id: user.id, name: "admin", email: user.email, role: "admin" },
          ]); // Default role
        if (insertError) {
          setLoading(false);
          return; // Exit if there's an error
        }
        console.log("User added to database:", {
          id: user.id,
          email: user.email,
        });
      }

      setLoading(false); // Set loading to false after processing
    };

    checkUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <h1 className="dashboard-title">Dashboard Overview</h1>
        <div className="dashboard-stats">
          <div className="stat-item">
            <p>Total Waste Collected</p>
            <div className="stat-value">
              <span className="stat-value-text">{stats.totalWaste} kg</span>
              <span className="stat-change">+12%</span>
            </div>
          </div>
          <div className="stat-item">
            <p>Zones Covered</p>
            <div className="stat-value">
              <span className="stat-value-text">{stats.zonesCovered}/30</span>
              <span className="stat-change">+5%</span>
            </div>
          </div>
          <div className="stat-item">
            <p>Logs Today</p>
            <div className="stat-value">
              <span className="stat-value-text">{stats.totalLogs}</span>
              <span className="stat-change">{stats.logsChange}</span>
            </div>
          </div>
          <div className="stat-item">
            <p>Top Collector</p>
            <div className="stat-value">
              <span>{stats.topCollector}</span>
              <span className="stat-value-text">
                {stats.topCollectorWeight} kg
              </span>
            </div>
          </div>
        </div>

        <div className="dashboard-extra-section">
          <div className="extras-container">
            <h2 className="extras-title">Recent Collection Logs</h2>
            <div className="recent-logs">
              {recentLogs.map((log, index) => (
                <div className="log-card" key={index}>
                  <h3 className="log-name">{log.name}</h3>
                  <p>
                    {log.zone} • {log.type} • {log.weight} kg
                  </p>
                  <span className="log-time">{log.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="extras-container">
            <h2 className="extras-title">Quick Actions</h2>
            <div className="quick-actions">
              <button className="quick-action-button">View public logs</button>
              <button className="quick-action-button">
                View Collection Map
              </button>
              <button className="quick-action-button">View Analytics</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
