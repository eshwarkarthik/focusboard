
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const emptyForm = {
  title: "",
  description: "",
  category: "Development",
  status: "To do",
  priority: "Medium",
  dueDate: "",
};

function TaskForm({ task, onSave, onClose }) {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || "",
        description: task.description || "",
        category: task.category || "Development",
        status: task.status || "To do",
        priority: task.priority || "Medium",
        dueDate: task.dueDate || "",
      });
    } else {
      setFormData(emptyForm);
    }
  }, [task]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title.trim()) {
      return;
    }

    onSave({
      ...formData,
      title: formData.title.trim(),
    });
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="task-form-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="task-form-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="form-header">
          <div>
            <h2 id="task-form-title">
              {task ? "Edit Task" : "Create New Task"}
            </h2>
            <p>Fill in the details below.</p>
          </div>

          <button
            type="button"
            className="close-button"
            onClick={onClose}
            aria-label="Close form"
          >
            <X size={21} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Task Title *</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter task title"
            value={formData.title}
            onChange={handleChange}
            required
            autoFocus
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Describe your task..."
            value={formData.description}
            onChange={handleChange}
            rows="3"
          />

          <div className="form-row">
            <div>
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option>Development</option>
                <option>Design</option>
                <option>Planning</option>
                <option>Testing</option>
                <option>Documentation</option>
                <option>Personal</option>
              </select>
            </div>

            <div>
              <label htmlFor="priority">Priority</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div>
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>To do</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>

            <div>
              <label htmlFor="dueDate">Due Date</label>
              <input
                id="dueDate"
                name="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-buttons">
            <button
              type="button"
              className="secondary-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="primary-button">
              {task ? "Save Changes" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
