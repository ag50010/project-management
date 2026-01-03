"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number; // 0-100
  className?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export function Progress({
  value,
  className,
  showLabel = false,
  size = "md",
  glow = false,
}: ProgressProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  const sizeStyles = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-text-secondary">Progress</span>
          <span className="text-sm font-medium text-text-primary">
            {Math.round(clampedValue)}%
          </span>
        </div>
      )}
      <div
        className={cn(
          "w-full bg-bg-tertiary rounded-full overflow-hidden",
          sizeStyles[size]
        )}
      >
        <motion.div
          className={cn(
            "h-full rounded-full",
            "bg-gradient-to-r from-accent to-accent-hover",
            glow && "shadow-[0_0_12px_var(--glow)]"
          )}
          initial={{ width: 0 }}
          animate={{ width: `${clampedValue}%` }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.5,
          }}
        />
      </div>
    </div>
  );
}

interface CircularProgressProps {
  value: number; // 0-100
  size?: number;
  strokeWidth?: number;
  className?: string;
  showValue?: boolean;
}

export function CircularProgress({
  value,
  size = 48,
  strokeWidth = 4,
  className,
  showValue = true,
}: CircularProgressProps) {
  const clampedValue = Math.min(100, Math.max(0, value));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (clampedValue / 100) * circumference;

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--bg-tertiary)"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          style={{
            filter: "drop-shadow(0 0 4px var(--glow))",
          }}
        />
      </svg>
      {showValue && (
        <span className="absolute text-xs font-medium text-text-primary">
          {Math.round(clampedValue)}%
        </span>
      )}
    </div>
  );
}
