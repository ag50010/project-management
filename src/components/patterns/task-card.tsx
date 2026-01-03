"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Zap, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

export type TaskEnergy = "quick" | "medium" | "deep";
export type TaskStatus = "todo" | "in_progress" | "done";

interface TaskCardProps {
  id: string;
  title: string;
  energy: TaskEnergy;
  status: TaskStatus;
  dueDate?: string;
  onComplete?: (id: string) => void;
  onSelect?: (id: string) => void;
  className?: string;
}

const energyConfig: Record<
  TaskEnergy,
  { icon: typeof Zap; label: string; duration: string }
> = {
  quick: { icon: Zap, label: "Quick win", duration: "~15 min" },
  medium: { icon: Clock, label: "Focused work", duration: "~1 hour" },
  deep: { icon: Brain, label: "Deep work", duration: "2+ hours" },
};

export function TaskCard({
  id,
  title,
  energy,
  status,
  dueDate,
  onComplete,
  onSelect,
  className,
}: TaskCardProps) {
  const [isCompleting, setIsCompleting] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const config = energyConfig[energy];
  const Icon = config.icon;
  const isDone = status === "done";

  const handleComplete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isDone || isCompleting) return;

    // Create celebration particles
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 100,
    }));
    setParticles(newParticles);

    setIsCompleting(true);
    setTimeout(() => {
      onComplete?.(id);
      setIsCompleting(false);
      setParticles([]);
    }, 600);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      className={cn(
        "group relative",
        "bg-bg-elevated rounded-[var(--radius-lg)] p-4",
        "border border-border",
        "transition-all duration-[var(--duration-normal)]",
        "hover:border-accent/30 hover:elevation-2",
        "cursor-pointer",
        isDone && "opacity-60",
        className
      )}
      onClick={() => onSelect?.(id)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <motion.button
          className={cn(
            "relative flex-shrink-0 w-6 h-6 mt-0.5",
            "rounded-full border-2",
            "transition-colors duration-[var(--duration-fast)]",
            isDone
              ? "bg-accent border-accent"
              : "border-border hover:border-accent/50"
          )}
          onClick={handleComplete}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence>
            {(isDone || isCompleting) && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
              >
                <Check className="w-3.5 h-3.5 text-text-inverse" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Celebration particles */}
          <AnimatePresence>
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1.5 h-1.5 rounded-full bg-accent"
                initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                animate={{
                  x: particle.x,
                  y: particle.y,
                  scale: 0,
                  opacity: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ left: "50%", top: "50%" }}
              />
            ))}
          </AnimatePresence>
        </motion.button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4
            className={cn(
              "text-base font-medium text-text-primary",
              "transition-all duration-[var(--duration-fast)]",
              isDone && "line-through text-text-tertiary"
            )}
          >
            {title}
          </h4>

          <div className="flex items-center gap-3 mt-2">
            {/* Energy indicator */}
            <div className="flex items-center gap-1.5 text-text-tertiary">
              <Icon className="w-3.5 h-3.5" />
              <span className="text-xs">{config.duration}</span>
            </div>

            {/* Due date */}
            {dueDate && (
              <span className="text-xs text-text-tertiary">{dueDate}</span>
            )}

            {/* Status badge */}
            {status === "in_progress" && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent-soft text-accent">
                In progress
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-[var(--radius-lg)] pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--glow) 0%, transparent 50%)",
        }}
      />
    </motion.div>
  );
}
