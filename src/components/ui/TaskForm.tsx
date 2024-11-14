import React, { useState } from "react";

interface TaskFormProps {
  onCreateTask: (title: string) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onCreateTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title) {
      onCreateTask(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
