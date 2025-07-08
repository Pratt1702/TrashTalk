import React from "react";
import Navbar from "../components/Navbar";
import "../styles/AgentDashBoard.css";
import locationIcon from "../assets/Group.svg";
import navIcon from "../assets/famicons_navigate-outline.svg";
import PickUpCards from "../components/PickUp-Cards";
import reportIcon from "../assets/ic_round-report.svg";
export default function AgentDashboard() {
  return (
    <>
        <div className="AgentDashboard">
            <Navbar/>
            <div className="AgentDashboard-container">
                <div className="AgentDashboard-progress-bar">
                    <div className="AgentDashboard-progress-bar-title">Today's Progress</div>
                    <div className="AgentDashboard-progress-bar-subtitle">
                        Pickup's Completed
                        <span>2 of 8</span>
                    </div>
                    <div className="AgentDashboard-progress-bar-progress">
                        <div className="AgentDashboard-progress-bar-progress-runner"></div>
                    </div>
                    <div className="AgentDashboard-progress-bar-progress-numeric">
                        <div className="AgentDashboard-progress-bar-progress-completed">
                            2
                            <span >Completed</span>
                        </div>
                        <div className="AgentDashboard-progress-bar-progress-current">
                            1
                            <span>Current</span>
                        </div>
                        <div className="AgentDashboard-progress-bar-progress-remaining">
                            5
                            <span>Remaining</span>
                        </div>
                    </div>
                </div>
                <div className="AgentDashboard-curr-pickup">
                    <div className="AgentDashboard-curr-pickup-loc">
                        <div className="AgentDashboard-curr-pickup-icon-loc">
                            <img src={locationIcon} alt="location" />
                        </div>
                        <div className="AgentDashboard-curr-pickup-title">
                            Current Pickup
                            <span>Downtown Plaza</span>
                        </div>
                    </div>
                    <div className="AgentDashboard-curr-pickup-nav">
                        <img src={navIcon} alt="nav" />
                        <span>Navigate</span>
                    </div>
                </div>
                <div className="AgentDashboard-pickup-cards-container">
                    <div className="AgentDashboard-pickup-cards-container-title">Today's PickUps</div>
                    <PickUpCards/>
                </div>
                <div className="AgentDashboard-QuickActions">
                    <div className="AgentDashboard-QuickActions-title">Quick Actions</div>
                    <div className="AgentDashboard-QuickActions-grid">
                        <div className="AgentDashboard-QuickActions-item">
                            <div className="AgentDashboard-QuickActions-icon">
                                <img src={reportIcon} alt="report" />
                            </div>
                            <span>Report Issue</span>
                        </div>
                        <div className="AgentDashboard-QuickActions-item">
                            <div className="AgentDashboard-QuickActions-icon">
                                <img src={navIcon} alt="route" />
                            </div>
                            <span>View Full Route</span>
                        </div>
                        <div className="AgentDashboard-QuickActions-item">
                            <div className="AgentDashboard-QuickActions-icon">
                                <img alt="add" />
                            </div>
                            <span>Add PickUp</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}