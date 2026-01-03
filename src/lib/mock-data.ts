import type { TaskEnergy, TaskStatus } from "@/components/patterns/task-card";

export interface MockTask {
  id: string;
  title: string;
  energy: TaskEnergy;
  status: TaskStatus;
  dueDate?: string;
  projectId: string;
}

export interface MockProject {
  id: string;
  name: string;
  color: string;
  taskCount: number;
  completedCount: number;
}

export const mockProjects: MockProject[] = [
  {
    id: "1",
    name: "Website Redesign",
    color: "#a78bfa",
    taskCount: 12,
    completedCount: 8,
  },
  {
    id: "2",
    name: "Mobile App v2",
    color: "#ff8f66",
    taskCount: 24,
    completedCount: 15,
  },
  {
    id: "3",
    name: "Q1 Marketing",
    color: "#3b82f6",
    taskCount: 8,
    completedCount: 6,
  },
];

export const mockTasks: MockTask[] = [
  {
    id: "1",
    title: "Fix header navigation on mobile",
    energy: "quick",
    status: "todo",
    projectId: "1",
  },
  {
    id: "2",
    title: "Write user research summary",
    energy: "deep",
    status: "in_progress",
    dueDate: "Today",
    projectId: "1",
  },
  {
    id: "3",
    title: "Review design system components",
    energy: "medium",
    status: "todo",
    dueDate: "Tomorrow",
    projectId: "2",
  },
  {
    id: "4",
    title: "Update API documentation",
    energy: "medium",
    status: "todo",
    projectId: "2",
  },
  {
    id: "5",
    title: "Prepare launch checklist",
    energy: "quick",
    status: "todo",
    dueDate: "Friday",
    projectId: "3",
  },
];

export function getTasksForToday(): MockTask[] {
  return mockTasks.filter((t) => t.status !== "done").slice(0, 4);
}

export function getQuickWin(): MockTask | undefined {
  return mockTasks.find((t) => t.energy === "quick" && t.status === "todo");
}

export function getInProgress(): MockTask | undefined {
  return mockTasks.find((t) => t.status === "in_progress");
}

export function getWeeklyStats() {
  return {
    completed: 12,
    total: 16,
    streak: 4,
    projectsMoved: 3,
  };
}
