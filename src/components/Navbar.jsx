import truckIcon from "../assets/heroicons_truck-solid.svg";
import adminIcon from "../assets/clarity_administrator-solid.svg";
import personIcon from "../assets/ic_baseline-person.svg";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar-container">
      <div className="Navbar-truck-icon">
        <img src={truckIcon} alt="truck"/>
      </div>
      <div className="Navbar-header-container">
        <div className="Navbar-header-title">
            Collector Dashboard
        </div>
        <div className="Navbar-header-userName">John Doe</div>
      </div>
      <div className="Navbar-user-profile">
        <div className="Navbar-user-profile-icon">
            <img src={personIcon} alt="person"/>
        </div>
        <div className="Navbar-user-profile-role">Collector</div>
      </div>
    </div>
  );
}