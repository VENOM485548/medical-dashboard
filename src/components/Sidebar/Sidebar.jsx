import "./Sidebar.css";
import {
  LayoutGrid,
  ArrowUpDown,
  CalendarDays,
  SquarePlus,
  ChartNetwork,
  MessageCircleMore,
  Phone,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="container">
      <aside className="aside">
        <div className="top">
          <div className="logo">
            <h2 className="LogoA">
              Health
              <span className="LogoB">care.</span>
            </h2>
          </div>
          <div className="sidebar">
            <div className="sidebar-section-title-muted">General</div>

            <div className="sidebar-item active">
              <LayoutGrid size={20} className="sidebar-icon" />
              <span className="sidebar-label">Dashboard</span>
            </div>

            <div className="sidebar-item">
              <ArrowUpDown size={20} className="sidebar-icon-muted" />
              <span className="sidebar-label-muted">History</span>
            </div>

            <div className="sidebar-item">
              <CalendarDays size={20} className="sidebar-icon-muted" />
              <span className="sidebar-label-muted">Calender</span>
            </div>

            <div className="sidebar-item">
              <SquarePlus size={20} className="sidebar-icon-muted" />
              <span className="sidebar-label-muted">Appointments</span>
            </div>

            <div className="sidebar-item">
              <ChartNetwork size={20} className="sidebar-icon-muted" />
              <span className="sidebar-label-muted">Statistics</span>
            </div>

            <div className="sidebar-section-title-muted">Tools</div>

            <div className="sidebar-item">
              <MessageCircleMore size={20} className="sidebar-icon-muted" />
              <span className="sidebar-label-muted">Chat</span>
            </div>

            <div className="sidebar-item">
              <Phone size={20} className="sidebar-icon-muted" />
              <span className="sidebar-label-muted">Support</span>
            </div>

            <div className="sidebar-item">
              <Settings size={20} className="sidebar-icon-muted" />
              <span className="sidebar-label-muted">Settings</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
