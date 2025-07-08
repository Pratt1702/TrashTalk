import plasticIcon from "../assets/streamline-freehand_shopping-bag-no-plastic.svg";
import metalIcon from "../assets/game-icons_metal-bar.svg";
import mixedIcon from "../assets/streamline-ultimate_bin-1-bold.svg";
import organicIcon from "../assets/Vector.svg";
import completedIcon from "../assets/nrk_media-completed.svg";
import "../styles/PickUpCards.css";

export default function PickUpCards() {
    return(
        <>
        <div className="PickUpCards">
            <div className="PickUpCards-indicator"></div>
            <div className="PickUpCards-card-main-container">
                <div className="PickUpCards-card-location">
                    <div className="PickUpCards-card-category-icon">
                        <img src={plasticIcon} alt="plastic" />
                    </div>
                    <span>Main Street & 1st Ave</span>
                </div>
                <div className="PickUpCards-card-details">
                    <div className="PickUpCards-card-details-time">9.00 AM</div>
                    <div className="PickUpCards-card-details-category">plastic</div>
                    <div className="PickUpCards-card-details-weight">10kg</div>
                </div>
                <div className="PickUpCards-card-nav-status">
                    <img src={completedIcon} alt="nav" />
                    Completed
                </div>
            </div>
        </div>
        </>
    )
}