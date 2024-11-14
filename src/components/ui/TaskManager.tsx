import React from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { Task, TaskStatus } from "../../../convex/tasks";

interface TaskManagerProps {
  tasks: Task[];
  onCreateTask: (title: string) => void;
  onUpdateTaskStatus: (id: string, status: TaskStatus) => void;
  onDeleteTask: (id: string) => void;
}

export const TaskManager: React.FC<TaskManagerProps> = ({ tasks, onCreateTask, onUpdateTaskStatus, onDeleteTask }) => {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onCreateTask={onCreateTask} />
      <TaskList tasks={tasks} onUpdateStatus={onUpdateTaskStatus} onDelete={onDeleteTask} />
    </div>
  );
};
