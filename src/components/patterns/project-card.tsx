"use client";

import { motion } from "framer-motion";
import { Folder } from "lucide-react";
import { cn } from "@/lib/utils";
import { CircularProgress } from "@/components/ui/progress";

interface ProjectCardProps {
  id: string;
  name: string;
  color: string;
  taskCount: number;
  completedCount: number;
  onClick?: () => void;
  className?: string;
}

export function ProjectCard({
  id,
  name,
  color,
  taskCount,
  completedCount,
  onClick,
  className,
}: ProjectCardProps) {
  const progress = taskCount > 0 ? (completedCount / taskCount) * 100 : 0;
  const remaining = taskCount - completedCount;

  return (
    <motion.div
      className={cn(
        "relative group cursor-pointer",
        "bg-bg-elevated rounded-[var(--radius-lg)] p-5",
        "border border-border",
        "transition-all duration-[var(--duration-normal)]",
        "hover:border-transparent",
        className
      )}
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={
        {
          "--project-color": color,
        } as React.CSSProperties
      }
    >
      {/* Color accent bar */}
      <motion.div
        className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
      />

      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Project icon */}
          <div
            className="w-10 h-10 rounded-[var(--radius)] flex items-center justify-center mb-3"
            style={{ backgroundColor: `${color}20` }}
          >
            <Folder className="w-5 h-5" style={{ color }} />
          </div>

          {/* Project name */}
          <h3 className="text-base font-semibold text-text-primary mb-1">
            {name}
          </h3>

          {/* Task count */}
          <p className="text-sm text-text-tertiary">
            {remaining === 0
              ? "All done!"
              : `${remaining} task${remaining === 1 ? "" : "s"} remaining`}
          </p>
        </div>

        {/* Progress indicator */}
        <CircularProgress value={progress} size={44} strokeWidth={3} />
      </div>

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-[var(--radius-lg)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          boxShadow: `0 0 30px ${color}30, 0 0 60px ${color}15`,
        }}
      />
    </motion.div>
  );
}
