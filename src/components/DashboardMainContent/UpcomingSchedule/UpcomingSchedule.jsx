import "./UpcomingSchedule.css";

const UpcomingSchedule = ({ upcomingAppointments }) => {
  return (
    <div className="upcoming-schedule-container">
      <h2 className="schedule-title">The Upcoming Schedule</h2>

      {Object.entries(upcomingAppointments).map(([day, appointments]) => (
        <div key={day} className="schedule-section">
          <h3 className="schedule-day">On {day}</h3>
          <div className="appointment-row">
            {appointments.map((appt, index) => (
              <div
                key={index}
                className={`appointment-card ${day.toLowerCase()}-${index}`}
              >
                <div className="card-header">
                  <h4>{appt.title}</h4>
                  <img src={appt.logo} alt="logo" className="card-logo" />
                </div>
                <p>{appt.time}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
