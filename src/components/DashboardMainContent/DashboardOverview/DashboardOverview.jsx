import "./DashboardOverview.css";
import AnatomySection from "./AnatomySection/AnatomySection";
import HealthStatusCards from "./HealthStatusCards/HealthStatusCards";
import { healthIndicators } from "../../../data/healthData";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import CalendarView from "../CalendarView/CalendarView";
import {
  appointmentDetails,
  weeklyAppointments,
} from "../../../data/appointments";
import { upcomingAppointments } from "../../../data/upcomingAppointments";
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule";

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <div className="overview-section">
        <div className="left-panel">
          <div className="top-section">
            <AnatomySection />
            <HealthStatusCards indicators={healthIndicators} />
          </div>
          <ActivityFeed />
        </div>

        <div className="right-panel">
          <CalendarView
            appointmentDetails={appointmentDetails}
            weeklyAppointments={weeklyAppointments}
          />
          <UpcomingSchedule upcomingAppointments={upcomingAppointments} />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
