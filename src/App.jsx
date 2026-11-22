
import { useEffect, useMemo, useState } from "react";
import { Plus, ListTodo, Clock3, CheckCircle2, Target } from "lucide-react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FocusNotes from "./components/FocusNotes";

import { initialTasks } from "./data/initialTasks";

const STORAGE_KEY = "focusboard-tasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem(STORAGE_KEY);
      return savedTasks ? JSON.parse(savedTasks) : initialTasks;
    } catch {
      return initialTasks;
    }
  });

  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const totalTasks = tasks.length;
  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const completionRate = totalTasks
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        activeStatus === "All" || task.status === activeStatus;

      const matchesPriority =
        priorityFilter === "All" ||
        task.priority === priorityFilter;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tasks, search, activeStatus, priorityFilter]);

  function handleSaveTask(formData) {
    if (editingTask) {
      setTasks((previous) =>
        previous.map((task) =>
          task.id === editingTask.id
            ? { ...task, ...formData }
            : task
        )
      );
    } else {
      const newTask = {
        id: Date.now(),
        ...formData,
      };

      setTasks((previous) => [newTask, ...previous]);
    }

    closeForm();
  }

  function closeForm() {
    setShowForm(false);
    setEditingTask(null);
  }

  function handleEditTask(task) {
    setEditingTask(task);
    setShowForm(true);
  }

  function handleDeleteTask(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmed) {
      setTasks((previous) =>
        previous.filter((task) => task.id !== id)
      );
    }
  }

  function handleStatusChange(id, newStatus) {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? { ...task, status: newStatus }
          : task
      )
    );
  }

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content" id="dashboard">
        <Header
          onCreateTask={() => {
            setEditingTask(null);
            setShowForm(true);
          }}
          search={search}
          setSearch={setSearch}
        />

        <section className="dashboard-content">
          <div className="welcome-section">
            <div>
              <h2>Welcome back, Eshwar! 👋</h2>
              <p>Here's what's happening with your tasks today.</p>
            </div>

            <button
              className="primary-button"
              type="button"
              onClick={() => {
                setEditingTask(null);
                setShowForm(true);
              }}
            >
              <Plus size={18} />
              Create Task
            </button>
          </div>

          <section className="stats-grid">
            <StatCard
              title="Total Tasks"
              value={totalTasks}
              subtitle="Tasks in your workspace"
              icon={ListTodo}
              color="purple"
            />

            <StatCard
              title="In Progress"
              value={inProgressTasks}
              subtitle="Currently working on"
              icon={Clock3}
              color="blue"
            />

            <StatCard
              title="Completed"
              value={completedTasks}
              subtitle="Successfully finished"
              icon={CheckCircle2}
              color="green"
            />

            <StatCard
              title="Completion Rate"
              value={`${completionRate}%`}
              subtitle="Overall task progress"
              icon={Target}
              color="orange"
            />
          </section>

          <section className="tasks-section" id="tasks">
            <div className="section-heading">
              <div>
                <h2>My Tasks</h2>
                <p>Manage and track your daily activities.</p>
              </div>

              <button
                className="primary-button"
                type="button"
                onClick={() => {
                  setEditingTask(null);
                  setShowForm(true);
                }}
              >
                <Plus size={17} />
                New Task
              </button>
            </div>

            <div className="task-filters">
              <div className="status-tabs">
                {["All", "To do", "In Progress", "Completed"].map(
                  (status) => (
                    <button
                      key={status}
                      type="button"
                      className={
                        activeStatus === status ? "active" : ""
                      }
                      onClick={() => setActiveStatus(status)}
                    >
                      {status}
                    </button>
                  )
                )}
              </div>

              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                aria-label="Filter tasks by priority"
              >
                <option value="All">All Priorities</option>
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>
            </div>

            <TaskList
              tasks={filteredTasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onStatusChange={handleStatusChange}
            />
          </section>

          <FocusNotes />
        </section>
      </main>

      {showForm && (
        <TaskForm
          task={editingTask}
          onSave={handleSaveTask}
          onClose={closeForm}
        />
      )}
    </div>
  );
}

export default App;
