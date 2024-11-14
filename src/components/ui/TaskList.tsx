import React from "react";
import { TaskItem } from "./TaskItem";
import { Task, TaskStatus } from "../../../convex/tasks";

interface TaskListProps {
  tasks: Task[];
  onUpdateStatus: (id: string, status: TaskStatus) => void;
  onDelete: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdateStatus, onDelete }) => {
  if (!tasks || tasks.length === 0) return <div>No tasks available</div>;

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task._id} task={task} onUpdateStatus={onUpdateStatus} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};
