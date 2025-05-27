import "./ActivityFeed.css";

const Activity = () => {
  const days = ["Mon", "Tues", "Wed", "Thus", "Fri", "Sat", "Sun"];
  const appointments = [6, 5, 3];

  return (
    <div className="activity-container">
      <div className="activity-header">
        <h3>Activity</h3>
        <span className="appointments-label">3 appointments this week</span>
      </div>

      <div className="activity-graph">
        {days.map((day, index) => (
          <div key={day} className="day-column">
            <div
              className={`activity-indicator ${
                appointments.includes(index) ? "active" : ""
              }`}
            ></div>
            <span className="day-label">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
