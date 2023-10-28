type TaskStatus = "open" | "done";

type TaskType = {
  id: string;
  title: string;
  status: TaskStatus;
};

export type { TaskType };
