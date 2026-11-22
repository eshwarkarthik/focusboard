
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  Settings,
  CircleHelp,
  Focus,
  PanelLeftClose,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Brand */}
      <div className="brand">
        <div className="brand-icon">
          <Focus size={23} />
        </div>
        <h2>FocusBoard</h2>
      </div>

      {/* Workspace Navigation */}
      <p className="sidebar-label">WORKSPACE</p>

      <nav className="sidebar-nav">
        <a href="#dashboard" className="nav-link active">
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </a>

        <a href="#tasks" className="nav-link">
          <CheckSquare size={19} />
          <span>My Tasks</span>
        </a>

        <a href="#calendar" className="nav-link">
          <CalendarDays size={19} />
          <span>Calendar</span>
        </a>
      </nav>

      {/* Bottom Navigation */}
      <div className="sidebar-bottom">
        <p className="sidebar-label">SUPPORT</p>

        <a href="#help" className="nav-link">
          <CircleHelp size={19} />
          <span>Help Center</span>
        </a>

        <a href="#settings" className="nav-link">
          <Settings size={19} />
          <span>Settings</span>
        </a>

        {/* User Profile */}
        <div className="profile-card">
          <div className="avatar">EK</div>

          <div>
            <strong>Eshwar Karthik</strong>
            <small>Workspace member</small>
          </div>

          <PanelLeftClose size={17} />
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;
