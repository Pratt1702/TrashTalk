import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">TrashTalk</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/map">Map View</Link>
        </li>
        <li>
          <Link to="/waste-log">Waste Log</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
