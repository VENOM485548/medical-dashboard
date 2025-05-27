import "./HealthStatusCards.css";
import { ArrowRight } from "lucide-react";

const HealthStatusCards = ({ indicators }) => {
  return (
    <div className="health-status-cards">
      {indicators.map((item) => (
        <div key={item.id} className="health-card">
          <div className="top-row">
            <div className="icon-container">
              <img src={item.icon} alt={item.label} className="health-icon" />
            </div>
            <h4 className="health-label">{item.label}</h4>
          </div>

          <p className="health-date">{item.date}</p>

          <div className={`status-indicator ${item.status}`}></div>
        </div>
      ))}
      <div className="see-all">
        <span>Details</span>
        <ArrowRight size={15} className="arrow-icon" />
      </div>
    </div>
  );
};

export default HealthStatusCards;
