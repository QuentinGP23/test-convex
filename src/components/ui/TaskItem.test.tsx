import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskItem } from "./TaskItem";
import { TaskStatus } from "../../../convex/tasks";

const mockTask = {
  _id: "1",
  userId: "user1",
  title: "Test Task",
  status: "TODO" as TaskStatus,
  createdAt: Date.now(),
};

test("TaskItem displays task information", () => {
  render(<TaskItem task={mockTask} onUpdateStatus={jest.fn()} onDelete={jest.fn()} />);
  expect(screen.getByText("Test Task")).toBeInTheDocument();
  expect(screen.getByText("Status: TODO")).toBeInTheDocument();
});

test("TaskItem calls onUpdateStatus when changing status", () => {
  const handleUpdateStatus = jest.fn();
  render(<TaskItem task={mockTask} onUpdateStatus={handleUpdateStatus} onDelete={jest.fn()} />);
  fireEvent.change(screen.getByRole("combobox"), { target: { value: "InProgress" } });
  expect(handleUpdateStatus).toHaveBeenCalledWith("1", "InProgress");
});

test("TaskItem calls onDelete when delete button is clicked", () => {
  const handleDelete = jest.fn();
  render(<TaskItem task={mockTask} onUpdateStatus={jest.fn()} onDelete={handleDelete} />);
  fireEvent.click(screen.getByText("Delete"));
  expect(handleDelete).toHaveBeenCalledWith("1");
});
