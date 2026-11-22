
import { Pencil, Trash2, CalendarDays } from "lucide-react";

function TaskItem({ task, onEdit, onDelete, onStatusChange }) {
  return (
    <div className="task-item">
      <div className="task-main">
        <div className="task-details">
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <div className="task-meta">
            <span className="task-category">{task.category}</span>

            <span className={`priority-badge ${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>

            <span className="task-due-date">
              <CalendarDays size={14} />
              {task.dueDate}
            </span>
          </div>
        </div>

        <div className="task-actions">
          <select
            value={task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value)}
            aria-label={`Change status of ${task.title}`}
          >
            <option value="To do">To do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <button
            type="button"
            onClick={() => onEdit(task)}
            aria-label={`Edit ${task.title}`}
          >
            <Pencil size={17} />
          </button>

          <button
            type="button"
            onClick={() => onDelete(task.id)}
            aria-label={`Delete ${task.title}`}
          >
            <Trash2 size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
