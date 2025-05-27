import "./AnatomySection.css";
import { ChevronDown, ZoomIn } from "lucide-react";

const AnatomySection = () => {
  return (
    <div className="AnatomySection">
      <div className="anatomy-header">
        <h2>Dashboard</h2>
        <div className="week-selector absolute-positioned">
          <span>This Week</span>
          <ChevronDown size={15} className="ChevronDown" />
        </div>
      </div>

      <div className="anatomy-card">
        <div className="image-wrapper">
          <img
            src="/assets/images/human-body transparent.png"
            alt="Muscular Body"
            className="muscular-image"
          />
        </div>
        <div className="search-icon-overlay">
          <ZoomIn size={25} />
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
