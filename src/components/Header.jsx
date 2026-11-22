
import { Search, Bell, Plus } from "lucide-react";

function Header({ onCreateTask, search, setSearch }) {
  return (
    <header className="header">

      {/* Dashboard Title */}
      <div className="header-title">
        <p>Workspace / Dashboard</p>
        <h1>My Dashboard</h1>
      </div>

      {/* Header Actions */}
      <div className="header-actions">

        {/* Search Bar */}
        <div className="search-box">
          <Search size={18} />

          <input
            type="search"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search tasks"
          />
        </div>

        {/* Notifications */}
        <button
          className="icon-button"
          aria-label="Notifications"
          type="button"
        >
          <Bell size={20} />
        </button>

        {/* Create Task */}
        <button
          className="primary-button"
          onClick={onCreateTask}
          type="button"
        >
          <Plus size={18} />
          <span>New Task</span>
        </button>

      </div>
    </header>
  );
}

export default Header;
