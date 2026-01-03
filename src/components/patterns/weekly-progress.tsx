"use client";

import { motion } from "framer-motion";
import { Flame, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface WeeklyProgressProps {
  completed: number;
  total: number;
  streak: number;
  projectsMoved: number;
}

export function WeeklyProgress({
  completed,
  total,
  streak,
  projectsMoved,
}: WeeklyProgressProps) {
  const progress = total > 0 ? (completed / total) * 100 : 0;

  return (
    <motion.div
      className="bg-bg-elevated rounded-[var(--radius-lg)] p-6 border border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-text-secondary">This week</h3>
        <div className="flex items-center gap-4">
          {/* Streak */}
          {streak > 0 && (
            <div className="flex items-center gap-1.5 text-accent">
              <Flame className="w-4 h-4" />
              <span className="text-sm font-medium">{streak} day streak</span>
            </div>
          )}
          {/* Projects moved */}
          <div className="flex items-center gap-1.5 text-text-tertiary">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">{projectsMoved} projects</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Progress value={progress} size="lg" glow className="flex-1" />
        <span className="text-sm font-medium text-text-primary whitespace-nowrap">
          {completed} / {total} tasks
        </span>
      </div>

      {/* Motivational flourish when near complete */}
      {progress >= 75 && progress < 100 && (
        <motion.p
          className="text-sm text-accent mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Almost there! You're crushing it.
        </motion.p>
      )}

      {progress === 100 && (
        <motion.p
          className="text-sm text-accent mt-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          ✨ Perfect week! Take a moment to celebrate.
        </motion.p>
      )}
    </motion.div>
  );
}
