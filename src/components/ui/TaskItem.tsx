import React from "react";
import { Task, TaskStatus } from "../../../convex/tasks";

interface TaskItemProps {
  task: Task;
  onUpdateStatus: (id: string, status: TaskStatus) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onUpdateStatus, onDelete }) => {
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onUpdateStatus(task._id, event.target.value as TaskStatus);
  };

  const handleDelete = () => {
    onDelete(task._id);
  };

  return (
    <li>
      <div>
        <h3>{task.title}</h3>
        <p>Status: {task.status}</p>
        <label>
          Change Status:
          <select value={task.status} onChange={handleStatusChange}>
            <option value="TODO">TODO</option>
            <option value="InProgress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};
