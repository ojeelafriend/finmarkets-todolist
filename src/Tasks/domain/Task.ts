export enum TaskStatus {
  PENDING = "pending",
  COMPLETED = "completed",
}

export type Task = {
  id?: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
};
