// TaskManager.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskManager } from "./TaskManager";
import { Task, TaskStatus } from "../../../convex/tasks";

const mockTasks: Task[] = [
  { _id: "1", userId: "user1", title: "Task 1", status: "TODO", createdAt: Date.now() },
  { _id: "2", userId: "user1", title: "Task 2", status: "InProgress", createdAt: Date.now() },
];

test("TaskManager displays tasks and handles create, update, and delete", () => {
  const handleCreateTask = jest.fn();
  const handleUpdateTaskStatus = jest.fn();
  const handleDeleteTask = jest.fn();

  render(
    <TaskManager
      tasks={mockTasks}
      onCreateTask={handleCreateTask}
      onUpdateTaskStatus={handleUpdateTaskStatus}
      onDeleteTask={handleDeleteTask}
    />
  );

  // Vérifie l'affichage des tâches
  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();

  // Teste la création d'une tâche
  fireEvent.change(screen.getByPlaceholderText("Task title"), { target: { value: "New Task" } });
  fireEvent.click(screen.getByText("Add Task"));
  expect(handleCreateTask).toHaveBeenCalledWith("New Task");

  // Teste la mise à jour de statut d'une tâche
  fireEvent.change(screen.getAllByRole("combobox")[0], { target: { value: "Done" } });
  expect(handleUpdateTaskStatus).toHaveBeenCalledWith("1", "Done");

  // Teste la suppression d'une tâche
  fireEvent.click(screen.getAllByText("Delete")[0]);
  expect(handleDeleteTask).toHaveBeenCalledWith("1");
});
