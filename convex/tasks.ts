export type TaskStatus = "TODO" | "InProgress" | "Done";

export interface Task {
  _id: string;
  userId: string;
  title: string;
  status: TaskStatus;
  createdAt: number;
}
