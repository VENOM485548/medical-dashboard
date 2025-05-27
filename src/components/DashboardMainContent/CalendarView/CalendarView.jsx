import "./CalendarView.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const WEEK_DAYS = [
  { name: "Mon", date: 25 },
  { name: "Tue", date: 26 },
  { name: "Wed", date: 27 },
  { name: "Thu", date: 28 },
  { name: "Fri", date: 29 },
  { name: "Sat", date: 30 },
  { name: "Sun", date: 31 },
];

const CalendarView = ({ weeklyAppointments, appointmentDetails }) => {
  return (
    <div>
      <div className="calender-header">
        <h2 className="month">October 2021</h2>
        <div className="title-selector">
          <ArrowLeft size={16} className="left" />
          <ArrowRight size={16} className="right" />
        </div>
      </div>
      <div className="calendar-week-container">
        <div className="calendar-week-row">
          {WEEK_DAYS.map(({ name, date }) => (
            <div key={date} className="calendar-day-column">
              <div className="day-label">
                <span className="day-name">{name}</span>
                <span className="day-date">{date}</span>
              </div>
              <div className="day-times">
                {(weeklyAppointments[date] || []).map((time, index) => {
                  const isHighlighted = date === 26 && time === "09:00";
                  const isHighlighteds =
                    (date === 28 && time === "11:00") ||
                    (date === 30 && time === "12:00") ||
                    (date === 31 && time === "09:00");
                  return (
                    <div
                      key={index}
                      className={`appointment-time ${
                        isHighlighted ? "highlighted-time" : ""
                      } ${isHighlighteds ? "highlighteds-time" : ""}`}
                    >
                      {time}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="appointment-details-section">
          <div className="appointment-cards forty-percent card-one">
            <div className="card-header">
              <h4>{appointmentDetails[0].title}</h4>
              <img
                src={appointmentDetails[0].icon}
                alt="Icon"
                className="card-icon"
              />
            </div>
            <p>{appointmentDetails[0].time}</p>
            <span>{appointmentDetails[0].doctor}</span>
          </div>

          <div className="appointment-cards sixty-percent card-two">
            <div className="card-header">
              <h4>{appointmentDetails[1].title}</h4>
              <img
                src={appointmentDetails[1].icon}
                alt="Icon"
                className="card-icon"
              />
            </div>
            <p>{appointmentDetails[1].time}</p>
            <span>{appointmentDetails[1].doctor}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
