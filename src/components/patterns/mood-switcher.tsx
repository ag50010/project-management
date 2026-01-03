"use client";

import { motion } from "framer-motion";
import { Sun, Moon, Sunset, Sparkles } from "lucide-react";
import { useMood } from "@/components/providers/mood-provider";
import type { Mood } from "@/lib/mood";
import { cn } from "@/lib/utils";

const moodIcons: Record<Mood, typeof Sun> = {
  dawn: Sun,
  flow: Sparkles,
  golden: Sunset,
  midnight: Moon,
};

const moodLabels: Record<Mood, string> = {
  dawn: "Dawn",
  flow: "Flow",
  golden: "Golden",
  midnight: "Midnight",
};

export function MoodSwitcher() {
  const { mood, setMood, isAuto } = useMood();
  const moods: Mood[] = ["dawn", "flow", "golden", "midnight"];

  return (
    <div className="flex items-center gap-1 p-1 bg-bg-tertiary rounded-full">
      {/* Auto mode toggle */}
      <button
        onClick={() => setMood("auto")}
        className={cn(
          "px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
          isAuto
            ? "bg-accent text-text-inverse"
            : "text-text-tertiary hover:text-text-secondary"
        )}
      >
        Auto
      </button>

      <div className="w-px h-4 bg-border mx-1" />

      {/* Manual mood selection */}
      {moods.map((m) => {
        const Icon = moodIcons[m];
        const isActive = !isAuto && mood === m;

        return (
          <motion.button
            key={m}
            onClick={() => setMood(m)}
            className={cn(
              "relative p-2 rounded-full transition-colors",
              isActive
                ? "text-accent"
                : "text-text-tertiary hover:text-text-secondary"
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={moodLabels[m]}
          >
            <Icon className="w-4 h-4" />
            {isActive && (
              <motion.div
                className="absolute inset-0 bg-accent/10 rounded-full"
                layoutId="mood-indicator"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
