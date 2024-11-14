import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskForm } from "./TaskForm";

test("TaskForm calls onCreateTask with correct title", () => {
  const handleCreateTask = jest.fn();
  render(<TaskForm onCreateTask={handleCreateTask} />);
  fireEvent.change(screen.getByPlaceholderText("Task title"), {
    target: { value: "New Task" },
  });
  fireEvent.click(screen.getByText("Add Task"));
  expect(handleCreateTask).toHaveBeenCalledWith("New Task");
});
