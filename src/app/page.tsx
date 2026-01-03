"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui";
import { Greeting } from "@/components/patterns/greeting";
import { WeeklyProgress } from "@/components/patterns/weekly-progress";
import { ProjectCard } from "@/components/patterns/project-card";
import { TaskCard } from "@/components/patterns/task-card";
import { MoodSwitcher } from "@/components/patterns/mood-switcher";
import {
  mockProjects,
  getTasksForToday,
  getWeeklyStats,
  type MockTask,
} from "@/lib/mock-data";

export default function StreamPage() {
  const [tasks, setTasks] = useState<MockTask[]>(getTasksForToday());
  const [isAdding, setIsAdding] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const stats = getWeeklyStats();

  const handleCompleteTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: "done" as const } : t))
    );
  };

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return;

    const newTask: MockTask = {
      id: Date.now().toString(),
      title: newTaskTitle.trim(),
      energy: "medium",
      status: "todo",
      projectId: "1",
    };

    setTasks((prev) => [newTask, ...prev]);
    setNewTaskTitle("");
    setIsAdding(false);
  };

  const activeTasks = tasks.filter((t) => t.status !== "done");
  const completedTasks = tasks.filter((t) => t.status === "done");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-bg-primary/80 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <Sparkles className="w-4 h-4 text-text-inverse" />
            </motion.div>
            <span className="font-semibold text-text-primary">Flow</span>
          </div>

          <MoodSwitcher />
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Greeting */}
        <Greeting tasksRemaining={activeTasks.length} />

        {/* Weekly progress */}
        <div className="mb-10">
          <WeeklyProgress
            completed={stats.completed}
            total={stats.total}
            streak={stats.streak}
            projectsMoved={stats.projectsMoved}
          />
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Tasks column */}
          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-text-primary">
                Today's Focus
              </h2>
              <Button variant="ghost" size="sm" onClick={() => setIsAdding(true)}>
                <Plus className="w-4 h-4" />
                Add task
              </Button>
            </div>

            <div className="space-y-3">
              {/* Add task input */}
              <AnimatePresence>
                {isAdding && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-bg-elevated rounded-[var(--radius-lg)] p-4 border border-accent/50">
                      <input
                        type="text"
                        placeholder="What needs to be done?"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleAddTask();
                          if (e.key === "Escape") setIsAdding(false);
                        }}
                        autoFocus
                        className="w-full bg-transparent text-text-primary placeholder:text-text-tertiary outline-none text-base"
                      />
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                        <span className="text-xs text-text-tertiary">
                          Press Enter to add, Esc to cancel
                        </span>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsAdding(false)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                          <Button size="sm" onClick={handleAddTask}>
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence mode="popLayout">
                {activeTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    energy={task.energy}
                    status={task.status}
                    dueDate={task.dueDate}
                    onComplete={handleCompleteTask}
                  />
                ))}
              </AnimatePresence>

              {activeTasks.length === 0 && !isAdding && (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-text-secondary mb-2">
                    All tasks completed!
                  </p>
                  <p className="text-sm text-text-tertiary">
                    Take a break or add something new
                  </p>
                </motion.div>
              )}

              {/* Completed tasks */}
              {completedTasks.length > 0 && (
                <div className="pt-4 border-t border-border mt-6">
                  <p className="text-sm text-text-tertiary mb-3">
                    Completed today ({completedTasks.length})
                  </p>
                  <AnimatePresence>
                    {completedTasks.map((task) => (
                      <TaskCard
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        energy={task.energy}
                        status={task.status}
                        dueDate={task.dueDate}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* Projects column */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-text-primary">
                Projects
              </h2>
              <Button variant="ghost" size="sm">
                <Plus className="w-4 h-4" />
                New
              </Button>
            </div>

            <div className="space-y-3">
              {mockProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard
                    id={project.id}
                    name={project.name}
                    color={project.color}
                    taskCount={project.taskCount}
                    completedCount={project.completedCount}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Ambient footer */}
      <footer className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-bg-primary to-transparent" />
    </div>
  );
}
