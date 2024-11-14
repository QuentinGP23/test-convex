import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskList } from "./TaskList";
import { Task, TaskStatus } from "../../../convex/tasks";

const mockTasks: Task[] = [
  { _id: "1", userId: "user1", title: "Task 1", status: "TODO", createdAt: Date.now() },
  { _id: "2", userId: "user1", title: "Task 2", status: "InProgress", createdAt: Date.now() },
];

test("TaskList displays tasks", () => {
  render(<TaskList tasks={mockTasks} onUpdateStatus={jest.fn()} onDelete={jest.fn()} />);
  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();
});

test("TaskList calls onUpdateStatus and onDelete for each task", () => {
  const handleUpdateStatus = jest.fn();
  const handleDelete = jest.fn();
  render(<TaskList tasks={mockTasks} onUpdateStatus={handleUpdateStatus} onDelete={handleDelete} />);
  fireEvent.change(screen.getAllByRole("combobox")[0], { target: { value: "Done" } });
  expect(handleUpdateStatus).toHaveBeenCalledWith("1", "Done");
  fireEvent.click(screen.getAllByText("Delete")[0]);
  expect(handleDelete).toHaveBeenCalledWith("1");
});
